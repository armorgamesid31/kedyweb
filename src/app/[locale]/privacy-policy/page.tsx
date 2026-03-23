import type { Metadata } from "next";

import { LegalTemplate } from "@/components/marketing/legal-template";
import { privacyCopy } from "@/content/legal-copy";
import { type AsyncParams, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = privacyCopy[locale];

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/privacy-policy",
  });
}

export default async function PrivacyPolicyPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = privacyCopy[locale];

  return <LegalTemplate eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} sections={content.sections} />;
}
