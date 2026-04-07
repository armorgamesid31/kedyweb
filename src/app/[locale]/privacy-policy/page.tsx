import type { Metadata } from "next";

import { LegalTemplate } from "@/components/marketing/legal-template";
import { privacyCopy } from "@/content/legal-copy";
import { type AsyncParams, type Locale, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { applyRuntimeOverrides, fetchRuntimeContent } from "@/lib/runtime-content";

async function getLocalizedPrivacyContent(locale: Locale) {
  const runtime = await fetchRuntimeContent({
    surface: "legal",
    page: "privacy-policy",
    locale,
  });

  return applyRuntimeOverrides(privacyCopy[locale], runtime, {
    prefixes: ["privacy-policy", "privacyPolicy", "content", ""],
  });
}

async function getPrivacyRuntimeContent(locale: Locale) {
  const [localized, english, turkish] = await Promise.all([
    getLocalizedPrivacyContent(locale),
    getLocalizedPrivacyContent("en"),
    getLocalizedPrivacyContent("tr"),
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
  const content = await getPrivacyRuntimeContent(locale);

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/privacy-policy",
  });
}

export default async function PrivacyPolicyPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = await getPrivacyRuntimeContent(locale);

  return (
    <LegalTemplate
      eyebrow={content.hero.eyebrow}
      title={content.hero.title}
      description={content.hero.description}
      documents={content.documents}
    />
  );
}
