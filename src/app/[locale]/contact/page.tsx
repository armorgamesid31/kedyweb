import type { Metadata } from "next";
import { Suspense } from "react";

import { ContactForm } from "@/components/marketing/contact-form";
import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import { contactPageCopy } from "@/content/pages-copy";
import { type AsyncParams, getLocaleFromParams } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: AsyncParams }): Promise<Metadata> {
  const locale = await getLocaleFromParams(params);
  const content = contactPageCopy[locale];

  return buildPageMetadata(locale, {
    title: content.metadata.title,
    description: content.metadata.description,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: { params: AsyncParams }) {
  const locale = await getLocaleFromParams(params);
  const content = contactPageCopy[locale];

  return (
    <>
      <PageHero eyebrow={content.hero.eyebrow} title={content.hero.title} description={content.hero.description} />

      <section className="section-space">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="space-y-4">
            {content.infoCards.map((card) => (
              <Card key={card.label} className="bg-white/95">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-orange">{card.label}</div>
                  <div className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground">{card.value}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{card.hint}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Suspense fallback={<div className="rounded-[32px] border border-black/8 bg-white p-8 text-sm text-muted">Loading form...</div>}>
            <ContactForm locale={locale} title={content.form.title} labels={content.form} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
