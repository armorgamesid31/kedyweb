import type { Metadata } from "next";

import { defaultLocale, locales, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/content/site-config";

type MetadataInput = { title: string; description: string; path?: string };

export function buildPageMetadata(locale: Locale, input: MetadataInput): Metadata {
  const path = input.path ?? "";
  const canonicalPath = path ? `/${locale}${path.startsWith("/") ? path : `/${path}`}` : `/${locale}`;

  return {
    title: input.title,
    description: input.description,
    metadataBase: new URL(siteConfig.siteUrl),
    alternates: {
      canonical: canonicalPath,
      languages: Object.fromEntries(
        locales.map((item) => [item, path ? `/${item}${path.startsWith("/") ? path : `/${path}`}` : `/${item}`]),
      ),
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonicalPath,
      siteName: siteConfig.name,
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}

export function buildRootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
    description: siteConfig.description[defaultLocale],
  };
}
