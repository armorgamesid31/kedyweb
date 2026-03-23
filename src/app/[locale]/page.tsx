import type { Metadata } from "next";
import Link from "next/link";

import { ComparisonTable } from "@/components/marketing/comparison-table";
import { FAQSection } from "@/components/marketing/faq-section";
import { FinalCta } from "@/components/marketing/final-cta";
import { HeroVisual } from "@/components/marketing/hero-visual";
import { IconGrid } from "@/components/marketing/icon-grid";
import { PricingGrid } from "@/components/marketing/pricing-grid";
import { ScenarioSteps } from "@/components/marketing/scenario-steps";
import { MotionReveal } from "@/components/marketing/motion-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/content/faqs";
import { homeCopy } from "@/content/home-copy";
import { sharedCopy } from "@/content/pages-copy";
import { pricingPlans } from "@/content/pricing";
import { type AsyncParams, type Locale, getLocaleFromParams, localizeHref } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";
import { applyRuntimeOverrides, fetchRuntimeContent } from "@/lib/runtime-content";

async function getHomeRuntimeData(locale: Locale) {
  const runtime = await fetchRuntimeContent({
    surface: "marketing_site",
    page: "home",
    locale,
  });

  return {
    content: applyRuntimeOverrides(homeCopy[locale], runtime, {
      prefixes: ["home", "content", ""],
    }),
    shared: applyRuntimeOverrides(sharedCopy[locale], runtime, {
      prefixes: ["shared", "sharedCopy", ""],
    }),
    plans: applyRuntimeOverrides(pricingPlans[locale], runtime, {
      prefixes: ["plans", "pricingPlans", ""],
    }),
    faqItems: applyRuntimeOverrides(faqs[locale].home, runtime, {
      prefixes: ["faqs.home", "faq.home", "homeFaq", ""],
    }),
  };
}

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const { content } = await getHomeRuntimeData(locale);

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
  });
}

export default async function HomePage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const { content, shared, plans, faqItems } = await getHomeRuntimeData(locale);

  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(244,122,32,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(0,184,255,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7f6f6_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <MotionReveal>
              <div className="inline-flex w-fit rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange shadow-sm">
                {content.hero.eyebrow}
              </div>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {content.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">{content.hero.description}</p>
            </MotionReveal>

            <MotionReveal delay={0.08} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={localizeHref(locale, shared.subscribeHref)}>{content.hero.primaryCta}</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href={localizeHref(locale, "/pricing")}>{content.hero.secondaryCta}</Link>
              </Button>
            </MotionReveal>

            <MotionReveal delay={0.12} className="mt-7 flex flex-wrap gap-3">
              {content.hero.chips.map((chip) => (
                <div key={chip} className="rounded-full border border-black/8 bg-white/80 px-4 py-2 text-sm font-medium text-foreground">
                  {chip}
                </div>
              ))}
            </MotionReveal>

            <MotionReveal delay={0.15} className="mt-10 grid gap-4 sm:grid-cols-3">
              {content.hero.statCards.map((item) => (
                <Card key={item.label} className="bg-white/90">
                  <CardContent className="p-5">
                    <div className="font-display text-2xl font-extrabold tracking-tight text-foreground">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-muted">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </MotionReveal>
          </div>

          <div className="flex items-center justify-center">
            <HeroVisual {...content.hero.visual} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={content.trust.eyebrow} title={content.trust.title} description={content.trust.description} />
          <div className="mt-10">
            <IconGrid items={content.trust.items} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={content.capabilities.eyebrow} title={content.capabilities.title} description={content.capabilities.description} />
          <div className="mt-10">
            <IconGrid items={content.capabilities.items} columns={3} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={content.scenario.eyebrow} title={content.scenario.title} description={content.scenario.description} />
          <div className="mt-10">
            <ScenarioSteps steps={content.scenario.steps} />
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={content.comparison.eyebrow} title={content.comparison.title} description={content.comparison.description} />
          <div className="mt-10">
            <ComparisonTable manualLabel={content.comparison.manualLabel} kedyLabel={content.comparison.kedyLabel} rows={content.comparison.rows} />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={content.pricingPreview.eyebrow} title={content.pricingPreview.title} description={content.pricingPreview.description} />
          <p className="mt-5 max-w-3xl text-sm leading-7 text-muted">{content.pricingPreview.note}</p>
          <div className="mt-10">
            <PricingGrid locale={locale} plans={plans} subscribeHref={shared.subscribeHref} />
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow={content.faq.eyebrow}
        title={content.faq.title}
        description={content.faq.description}
        items={faqItems}
      />

      <FinalCta
        locale={locale}
        title={content.finalCta.title}
        description={content.finalCta.description}
        primaryLabel={content.finalCta.primaryCta}
        secondaryLabel={content.finalCta.secondaryCta}
        primaryHref={shared.subscribeHref}
        secondaryHref="/contact?intent=demo"
      />
    </>
  );
}
