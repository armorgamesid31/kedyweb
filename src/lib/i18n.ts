import { notFound } from "next/navigation";

export const locales = ["tr", "en"] as const;
export const defaultLocale = "tr" as const;

export type Locale = (typeof locales)[number];
export type AsyncParams = Promise<{ locale: string }>;

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getLocaleFromParams(params: AsyncParams): Promise<Locale> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return locale;
}

export function localizeHref(locale: Locale, href: string) {
  if (!href || href === "/") return `/${locale}`;
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  return `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
}

export function switchLocaleInPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return `/${locale}`;
  if (isValidLocale(segments[0])) segments[0] = locale;
  else segments.unshift(locale);
  return `/${segments.join("/")}`;
}
