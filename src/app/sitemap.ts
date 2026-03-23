import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site-config";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...siteConfig.staticPaths, ...siteConfig.legalPaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${siteConfig.siteUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
  );
}
