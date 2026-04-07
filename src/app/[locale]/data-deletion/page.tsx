import type { Metadata } from "next";

import { LegalTemplate } from "@/components/marketing/legal-template";
import { dataDeletionCopy } from "@/content/legal-copy";
import { type AsyncParams, type Locale, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { applyRuntimeOverrides, fetchRuntimeContent } from "@/lib/runtime-content";

async function getLocalizedDataDeletionContent(locale: Locale) {
  const runtime = await fetchRuntimeContent({
    surface: "legal",
    page: "data-deletion",
    locale,
  });

  return applyRuntimeOverrides(dataDeletionCopy[locale], runtime, {
    prefixes: ["data-deletion", "dataDeletion", "content", ""],
  });
}

async function getDataDeletionRuntimeContent(locale: Locale) {
  const [localized, english, turkish] = await Promise.all([
    getLocalizedDataDeletionContent(locale),
    getLocalizedDataDeletionContent("en"),
    getLocalizedDataDeletionContent("tr"),
  ]);

  return {
    metadata: localized.metadata,
    hero: localized.hero,
    documents: [
      {
        languageLabel: "English",
        title: english.hero.title,
        description: english.hero.description,
        sections: english.sections,
      },
      {
        languageLabel: "Türkçe",
        title: turkish.hero.title,
        description: turkish.hero.description,
        sections: turkish.sections,
      },
    ],
  };
}

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = await getDataDeletionRuntimeContent(locale);

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/data-deletion",
  });
}

export default async function DataDeletionPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = await getDataDeletionRuntimeContent(locale);

  return (
    <LegalTemplate
      eyebrow={content.hero.eyebrow}
      title={content.hero.title}
      description={content.hero.description}
      documents={content.documents}
    />
  );
}
