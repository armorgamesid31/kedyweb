import type { Metadata } from "next";

import { LegalTemplate } from "@/components/marketing/legal-template";
import { termsCopy } from "@/content/legal-copy";
import { type AsyncParams, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = termsCopy[locale];

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/terms-of-service",
  });
}

export default async function TermsPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = termsCopy[locale];

  return <LegalTemplate eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} sections={content.sections} />;
}
