import type { Metadata } from "next";

import { FeatureCategories } from "@/components/marketing/feature-categories";
import { FinalCta } from "@/components/marketing/final-cta";
import { IconGrid } from "@/components/marketing/icon-grid";
import { PageHero } from "@/components/marketing/page-hero";
import { featuresCopy } from "@/content/features-copy";
import { sharedCopy } from "@/content/pages-copy";
import { type AsyncParams, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = featuresCopy[locale];

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/features",
  });
}

export default async function FeaturesPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = featuresCopy[locale];
  const shared = sharedCopy[locale];

  return (
    <>
      <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IconGrid items={content.highlights} columns={3} />
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureCategories categories={content.categories} />
        </div>
      </section>

      <FinalCta
        locale={locale}
        title={content.closing.title}
        description={content.closing.description}
        primaryLabel={content.closing.primaryCta}
        secondaryLabel={shared.backToPricing}
        primaryHref="/contact?intent=demo"
        secondaryHref="/pricing"
      />
    </>
  );
}
