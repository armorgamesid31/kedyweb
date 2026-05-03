import type { Localized, PricingPlan } from "@/content/types";

export const pricingPlans: Localized<PricingPlan[]> = {
  tr: [
    {
      id: "temel",
      name: "Temel",
      subtitle: "Küçük ekipler ve düzenli randevu akışı için.",
      price: "₺499",
      period: "/ ay",
      featured: false,
      ctaLabel: "Paketi Seç",
      features: [
        "Instagram ve WhatsApp mesaj akışı",
        "Temel yapay zekâ yanıtları",
        "Randevu linki yönlendirmesi",
        "Koşulsuz iade garantisi",
      ],
    },
    {
      id: "profesyonel_plus",
      name: "Profesyonel+",
      subtitle: "Yoğun operasyon ve daha güçlü dönüşüm için.",
      price: "₺2.999",
      period: "/ ay",
      featured: true,
      badge: "İlk 3 Ay ₺999",
      ctaLabel: "Hizmete Abone Ol",
      features: [
        "Temel paketteki tüm özellikler",
        "İleri niyet anlama ve akışlar",
        "Öncelikli destek",
        "İlk 3 ay ₺999, sonrası ₺2.999/ay",
        "Koşulsuz iade garantisi",
      ],
    },
  ],
  en: [
    {
      id: "temel",
      name: "Basic",
      subtitle: "For small teams and regular booking traffic.",
      price: "₺499",
      period: "/ month",
      featured: false,
      ctaLabel: "Choose plan",
      features: [
        "Instagram and WhatsApp message flow",
        "Core AI reply scenarios",
        "Booking link routing",
        "Unconditional money-back guarantee",
      ],
    },
    {
      id: "profesyonel_plus",
      name: "Professional+",
      subtitle: "For high-volume operations and stronger conversion.",
      price: "₺2,999",
      period: "/ month",
      featured: true,
      badge: "First 3 Months ₺999",
      ctaLabel: "Subscribe",
      features: [
        "Everything in Basic",
        "Advanced intent understanding",
        "Priority support",
        "₺999 for first 3 months, then ₺2,999/month",
        "Unconditional money-back guarantee",
      ],
    },
  ],
};
