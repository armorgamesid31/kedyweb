import Link from "next/link";

import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function FinalCta({
  locale,
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref,
  secondaryHref,
}: {
  locale: Locale;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref: string;
  secondaryHref: string;
}) {
  return (
    <section className="pb-20 pt-6 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[36px] bg-foreground px-6 py-10 text-white shadow-[0_26px_90px_-36px_rgba(36,36,38,0.8)] sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Button asChild size="lg">
              <Link href={localizeHref(locale, primaryHref)}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={localizeHref(locale, secondaryHref)}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
