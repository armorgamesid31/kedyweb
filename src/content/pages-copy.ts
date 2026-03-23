import type { Localized, SectionHeading } from "@/content/types";

type PricingPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: SectionHeading;
  note: string;
  includedTitle: string;
  includedItems: string[];
  faqHeading: SectionHeading;
};

type ContactPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: SectionHeading;
  infoCards: {
    label: string;
    value: string;
    hint: string;
  }[];
  form: {
    title: string;
    name: string;
    business: string;
    phone: string;
    email: string;
    instagram: string;
    message: string;
    submit: string;
    success: string;
    helper: string;
  };
};

type FooterCopy = {
  description: string;
  columns: {
    title: string;
    links: {
      label: string;
      href: string;
    }[];
  }[];
  bottom: string;
};

type SharedCopy = {
  monthlyLabel: string;
  backToPricing: string;
  contactLabel: string;
  subscribeHref: string;
  loginHref: string;
};

export const sharedCopy: Localized<SharedCopy> = {
  tr: {
    monthlyLabel: "Aylik faturalandirma",
    backToPricing: "Tum paketleri gor",
    contactLabel: "Iletisime gec",
    subscribeHref: "/contact?intent=subscribe",
    loginHref: "/contact?intent=login",
  },
  en: {
    monthlyLabel: "Monthly billing",
    backToPricing: "See all plans",
    contactLabel: "Contact us",
    subscribeHref: "/contact?intent=subscribe",
    loginHref: "/contact?intent=login",
  },
};

export const pricingPageCopy: Localized<PricingPageCopy> = {
  tr: {
    metadata: {
      title: "Fiyatlandirma | Kedy",
      description: "Kedy'nin guzellik salonlari icin hazirlanan aylik fiyat paketlerini ve kapsami gorun.",
    },
    hero: {
      eyebrow: "Fiyatlandirma",
      title: "Anlasilir paketler, daha sonra buyuyebilen bir yapi.",
      description:
        "Paketler su anlik aylik gosterimle sade tutuldu. Ihtiyac buyudukce ozellik derinligi ve operasyon kapsami ayni config uzerinden kolayca guncellenebilir.",
    },
    note: "Tum fiyat ve plan metinleri tek bir icerik dosyasindan yonetilir. Bu sayede lansman sonrasinda degisiklik yapmak kolaydir.",
    includedTitle: "Tum planlarin odaklandigi temel deger",
    includedItems: [
      "Daha hizli mesaj karsilama duzeni",
      "Tekrarlayan sorularin daha otomatik yonetimi",
      "Mesaj icinde randevuya yaklastiran akis",
      "Salon ekibi icin daha az manuel tekrar",
    ],
    faqHeading: {
      eyebrow: "Paket sorulari",
      title: "Fiyat tarafinda en cok sorulan konular.",
      description: "Karar verme asamasinda acikligi ve guveni korumak icin ozet yanitlar sunuldu.",
    },
  },
  en: {
    metadata: {
      title: "Pricing | Kedy",
      description: "Review Kedy's monthly pricing plans for beauty salons in a clear and trustworthy format.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "Simple plans now, flexible structure for future pricing updates.",
      description:
        "The pricing system is intentionally easy to edit from a single config. That keeps launch clean today and future plan adjustments easy tomorrow.",
    },
    note: "All plan names, prices, and feature lists are centrally managed so the sales site can evolve without touching the layout structure.",
    includedTitle: "What every plan is designed to improve",
    includedItems: [
      "Faster message handling",
      "Less repetitive team workload",
      "Cleaner flow from conversation to booking",
      "More consistent customer communication",
    ],
    faqHeading: {
      eyebrow: "Plan FAQ",
      title: "Key questions buyers usually ask before deciding.",
      description: "Short answers keep the page practical and conversion-friendly.",
    },
  },
};

export const contactPageCopy: Localized<ContactPageCopy> = {
  tr: {
    metadata: {
      title: "Iletisim | Kedy",
      description: "Kedy ile abonelik, demo veya ihtiyaciniza uygun kurgu icin iletisime gecin.",
    },
    hero: {
      eyebrow: "Iletisim",
      title: "Salonunuz icin dogru akisi birlikte kuralim.",
      description:
        "Abonelik, demo talebi veya surecinize uygun bir kurgu icin formu doldurun. Su an form simule edilir; ama deneyim gercek bir lead akisi gibi tasarlandi.",
    },
    infoCards: [
      { label: "E-posta", value: "hello@kedyapp.com", hint: "Genel sorular ve teklif talepleri" },
      { label: "Telefon", value: "+90 (5XX) XXX XX XX", hint: "Hizli geri donus icin placeholder" },
      { label: "Instagram", value: "@kedyapp", hint: "Marka ve urun guncellemeleri" },
    ],
    form: {
      title: "Sizi taniyalim",
      name: "Ad Soyad",
      business: "Isletme Adi",
      phone: "Telefon",
      email: "E-posta",
      instagram: "Instagram hesabi",
      message: "Mesaj",
      submit: "Talep Gonder",
      success: "Tesekkurler. Talebiniz kaydedildi gibi gorunen bir demo onayi gosteriyoruz; bir sonraki adimda bu form gercek backend'e baglanabilir.",
      helper: "Ornek: Gunde yaklasik 80-100 DM aliyoruz, hem hizli cevap hem de randevu akisi istiyoruz.",
    },
  },
  en: {
    metadata: {
      title: "Contact | Kedy",
      description: "Contact Kedy for subscriptions, demos, or a salon-specific setup conversation.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's shape the right flow for your salon.",
      description:
        "Use the form for subscriptions, demos, or a quick consultation about your salon workflow. The submission is simulated for now, but the page is structured as a real lead form.",
    },
    infoCards: [
      { label: "Email", value: "hello@kedyapp.com", hint: "General questions and sales conversations" },
      { label: "Phone", value: "+90 (5XX) XXX XX XX", hint: "Placeholder line for direct contact" },
      { label: "Instagram", value: "@kedyapp", hint: "Brand updates and product visibility" },
    ],
    form: {
      title: "Tell us about your salon",
      name: "Full name",
      business: "Business name",
      phone: "Phone",
      email: "Email",
      instagram: "Instagram handle",
      message: "Message",
      submit: "Send request",
      success: "Thanks. We are showing a demo confirmation for now, and this form can later be connected to a real backend without changing the UX structure.",
      helper: "Example: We receive around 80-100 DMs per day and want quicker replies plus a better booking flow.",
    },
  },
};

export const footerCopy: Localized<FooterCopy> = {
  tr: {
    description: "Guzellik salonlari icin AI destekli iletisim ve operasyon platformu.",
    columns: [
      {
        title: "Urun",
        links: [
          { label: "Ozellikler", href: "/features" },
          { label: "Fiyatlandirma", href: "/pricing" },
          { label: "Iletisim", href: "/contact" },
        ],
      },
      {
        title: "Yasal",
        links: [
          { label: "Gizlilik Politikasi", href: "/privacy-policy" },
          { label: "Kullanim Kosullari", href: "/terms-of-service" },
          { label: "Veri Silme", href: "/data-deletion" },
        ],
      },
    ],
    bottom: "Tum haklari saklidir.",
  },
  en: {
    description: "AI-powered communication and operations platform for appointment-based beauty salons.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "/features" },
          { label: "Pricing", href: "/pricing" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "/privacy-policy" },
          { label: "Terms of Service", href: "/terms-of-service" },
          { label: "Data Deletion", href: "/data-deletion" },
        ],
      },
    ],
    bottom: "All rights reserved.",
  },
};
