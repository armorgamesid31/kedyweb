import { defaultLocale, type Locale } from "@/lib/i18n";

export type RuntimeSurface =
  | "marketing_site"
  | "salon_website"
  | "booking_page"
  | "mobile_app"
  | "campaigns"
  | "legal"
  | "message_templates";

export interface RuntimeContentBundle {
  values: Record<string, string>;
  requestedLocale: string;
  fallbackLocale: string;
}

function getApiBaseUrl(): string | null {
  const fromEnv =
    process.env.CONTENT_API_BASE_URL ||
    process.env.API_BASE_URL ||
    process.env.BACKEND_API_BASE_URL ||
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL;

  if (!fromEnv || !fromEnv.trim()) {
    return null;
  }

  const trimmed = fromEnv.replace(/\/+$/, "");
  try {
    const parsed = new URL(trimmed);
    return parsed.toString().replace(/\/+$/, "");
  } catch {
    return null;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function flattenStringLeaves(source: unknown, output: Record<string, string>, path = "") {
  if (typeof source === "string") {
    if (path) {
      output[path] = source;
    }
    return;
  }

  if (Array.isArray(source)) {
    source.forEach((item, index) => {
      const nextPath = path ? `${path}.${index}` : `${index}`;
      flattenStringLeaves(item, output, nextPath);
    });
    return;
  }

  if (!isRecord(source)) {
    return;
  }

  Object.entries(source).forEach(([key, value]) => {
    const nextPath = path ? `${path}.${key}` : key;
    flattenStringLeaves(value, output, nextPath);
  });
}

function toStringValueMap(input: unknown): Record<string, string> {
  const output: Record<string, string> = {};
  flattenStringLeaves(input, output);
  return output;
}

function cloneValue<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((item) => cloneValue(item)) as T;
  }

  if (isRecord(value)) {
    const cloned: Record<string, unknown> = {};
    Object.entries(value).forEach(([key, child]) => {
      cloned[key] = cloneValue(child);
    });
    return cloned as T;
  }

  return value;
}

function parsePathSegments(path: string): string[] {
  return path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .map((item) => item.trim())
    .filter(Boolean);
}

function setStringOverrideAtPath(target: unknown, path: string, value: string) {
  const segments = parsePathSegments(path);
  if (segments.length === 0) {
    return;
  }

  let cursor: unknown = target;

  for (let index = 0; index < segments.length - 1; index += 1) {
    const segment = segments[index];

    if (Array.isArray(cursor)) {
      const arrayIndex = Number(segment);
      if (!Number.isInteger(arrayIndex) || arrayIndex < 0 || arrayIndex >= cursor.length) {
        return;
      }
      cursor = cursor[arrayIndex];
      continue;
    }

    if (!isRecord(cursor) || !(segment in cursor)) {
      return;
    }

    cursor = cursor[segment];
  }

  const finalSegment = segments[segments.length - 1];

  if (Array.isArray(cursor)) {
    const arrayIndex = Number(finalSegment);
    if (!Number.isInteger(arrayIndex) || arrayIndex < 0 || arrayIndex >= cursor.length) {
      return;
    }

    if (typeof cursor[arrayIndex] !== "string") {
      return;
    }

    cursor[arrayIndex] = value;
    return;
  }

  if (!isRecord(cursor) || !(finalSegment in cursor)) {
    return;
  }

  if (typeof cursor[finalSegment] !== "string") {
    return;
  }

  cursor[finalSegment] = value;
}

function resolveOverridePath(rawKey: string, prefixes: string[]): string | null {
  for (const rawPrefix of prefixes) {
    const prefix = rawPrefix.trim();

    if (!prefix) {
      return rawKey;
    }

    if (rawKey === prefix) {
      return "";
    }

    if (rawKey.startsWith(`${prefix}.`)) {
      return rawKey.slice(prefix.length + 1);
    }

    if (rawKey.startsWith(`${prefix}[`)) {
      return rawKey.slice(prefix.length);
    }
  }

  return null;
}

function getEmptyBundle(locale: Locale, fallbackLocale?: Locale): RuntimeContentBundle {
  return {
    values: {},
    requestedLocale: locale,
    fallbackLocale: fallbackLocale || defaultLocale,
  };
}

export async function fetchRuntimeContent(params: {
  surface: RuntimeSurface;
  page: string;
  locale: Locale;
  fallbackLocale?: Locale;
  tenantSlug?: string;
}): Promise<RuntimeContentBundle> {
  const apiBaseUrl = getApiBaseUrl();
  if (!apiBaseUrl) {
    return getEmptyBundle(params.locale, params.fallbackLocale);
  }

  const query = new URLSearchParams({
    surface: params.surface,
    page: params.page,
    locale: params.locale,
    fallbackLocale: params.fallbackLocale || defaultLocale,
  });

  if (params.tenantSlug) {
    query.set("tenantSlug", params.tenantSlug);
  }

  const url = `${apiBaseUrl}/api/content/runtime?${query.toString()}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3500);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
      next: { revalidate: 60 },
      signal: controller.signal,
    });

    if (!response.ok) {
      return getEmptyBundle(params.locale, params.fallbackLocale);
    }

    const data = await response.json();
    const rawValues =
      data?.values ??
      data?.data?.values ??
      data?.content ??
      {};

    return {
      values: toStringValueMap(rawValues),
      requestedLocale: (data?.requestedLocale as string) || params.locale,
      fallbackLocale: (data?.fallbackLocale as string) || params.fallbackLocale || defaultLocale,
    };
  } catch {
    return getEmptyBundle(params.locale, params.fallbackLocale);
  } finally {
    clearTimeout(timeoutId);
  }
}

export function getRuntimeValue(
  bundle: RuntimeContentBundle,
  key: string,
  fallback: string,
): string {
  const runtimeValue = bundle.values[key];
  if (typeof runtimeValue !== "string") {
    return fallback;
  }

  return runtimeValue;
}

export function applyRuntimeOverrides<T>(
  fallback: T,
  bundle: RuntimeContentBundle,
  options?: {
    prefixes?: string[];
  },
): T {
  const values = bundle.values;
  if (!values || Object.keys(values).length === 0) {
    return fallback;
  }

  const prefixes = options?.prefixes?.length ? options.prefixes : [""];
  const nextValue = cloneValue(fallback);

  Object.entries(values).forEach(([rawKey, runtimeValue]) => {
    if (typeof runtimeValue !== "string") {
      return;
    }

    const path = resolveOverridePath(rawKey, prefixes);
    if (path === null || path === "") {
      return;
    }

    setStringOverrideAtPath(nextValue, path, runtimeValue);
  });

  return nextValue;
}
