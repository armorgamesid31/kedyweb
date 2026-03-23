import type { Locale } from "@/lib/i18n";

export type Localized<T> = Record<Locale, T>;
export type NavigationItem = { label: string; href: string };
export type PricingPlan = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  featured: boolean;
  badge?: string;
  ctaLabel: string;
  features: string[];
};
export type FAQItem = { question: string; answer: string };
export type SectionHeading = { eyebrow: string; title: string; description: string };
export type IconName = "message" | "sparkles" | "handover" | "booking" | "workflow" | "campaign" | "team" | "shield" | "clock" | "growth";
export type IconCard = { icon: IconName; title: string; description: string };
export type FeatureCategory = IconCard & { items: { title: string; description: string }[] };
export type LegalSection = { title: string; body: string[] };
