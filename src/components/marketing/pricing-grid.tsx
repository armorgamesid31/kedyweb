import Link from "next/link";
import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { PricingPlan } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

export function PricingGrid({ locale, plans, subscribeHref }: { locale: Locale; plans: PricingPlan[]; subscribeHref: string }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className={plan.featured ? "relative border-orange/30 bg-white shadow-[0_28px_90px_-36px_rgba(244,122,32,0.45)]" : "bg-white/95"}
        >
          <CardHeader className="pb-5">
            <div className="flex items-center justify-between gap-3">
              <CardTitle>{plan.name}</CardTitle>
              {plan.badge ? <Badge>{plan.badge}</Badge> : null}
            </div>
            <CardDescription>{plan.subtitle}</CardDescription>
            <div className="pt-3">
              <div className="font-display text-5xl font-extrabold tracking-tight text-foreground">{plan.price}</div>
              <div className="mt-2 text-sm text-muted">{plan.period}</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-orange/10 text-orange">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant={plan.featured ? "default" : "secondary"} className="w-full">
              <Link href={localizeHref(locale, `${subscribeHref}&plan=${plan.id}`)}>{plan.ctaLabel}</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
