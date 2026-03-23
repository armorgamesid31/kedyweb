import type { Metadata } from "next";

import { FAQSection } from "@/components/marketing/faq-section";
import { PageHero } from "@/components/marketing/page-hero";
import { PricingGrid } from "@/components/marketing/pricing-grid";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/content/faqs";
import { pricingPageCopy, sharedCopy } from "@/content/pages-copy";
import { pricingPlans } from "@/content/pricing";
import { type AsyncParams, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = pricingPageCopy[locale];

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/pricing",
  });
}

export default async function PricingPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = pricingPageCopy[locale];
  const shared = sharedCopy[locale];

  return (
    <>
      <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 max-w-3xl text-sm leading-7 text-muted">{content.note}</div>
          <PricingGrid locale={locale} plans={pricingPlans[locale]} subscribeHref={shared.subscribeHref} />
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-foreground text-white">
            <CardContent className="grid gap-6 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
                  {shared.monthlyLabel}
                </div>
                <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight">{content.includedTitle}</h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {content.includedItems.map((item) => (
                  <li key={item} className="rounded-3xl border border-white/10 bg-white/6 px-5 py-4 text-sm text-white/80">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <FAQSection
        eyebrow={content.faqHeading.eyebrow}
        title={content.faqHeading.title}
        description={content.faqHeading.description}
        items={faqs[locale].pricing}
      />
    </>
  );
}
