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
    monthlyLabel: "AylÄ±k faturalandÄ±rma",
    backToPricing: "TÃ¼m paketleri gÃ¶r",
    contactLabel: "Ä°letiÅŸime geÃ§",
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
      title: "FiyatlandÄ±rma | Kedy",
      description: "Kedyâ€™nin gÃ¼zellik salonlarÄ± iÃ§in hazÄ±rlanan aylÄ±k paketlerini ve kapsamÄ±nÄ± inceleyin.",
    },
    hero: {
      eyebrow: "FiyatlandÄ±rma",
      title: "AnlaÅŸÄ±lÄ±r paketler, ihtiyaÃ§ bÃ¼yÃ¼dÃ¼kÃ§e geniÅŸleyebilen bir yapÄ±.",
      description:
        "Paketleri bugÃ¼n iÃ§in sade ve anlaÅŸÄ±lÄ±r tuttuk. Ä°htiyaÃ§larÄ±nÄ±z bÃ¼yÃ¼dÃ¼ÄŸÃ¼nde plan kapsamÄ± da aynÄ± yapÄ± Ã¼zerinden kolayca gÃ¼ncellenebilir.",
    },
    note: "TÃ¼m plan adlarÄ±, fiyatlar ve madde listeleri tek bir iÃ§erik dosyasÄ±ndan yÃ¶netilir. BÃ¶ylece lansman sonrasÄ±nda gÃ¼ncelleme yapmak kolaylaÅŸÄ±r.",
    includedTitle: "TÃ¼m planlarÄ±n odaklandÄ±ÄŸÄ± temel deÄŸer",
    includedItems: [
      "Daha hÄ±zlÄ± mesaj karÅŸÄ±lama dÃ¼zeni",
      "Tekrarlayan sorularÄ±n daha otomatik yÃ¶netimi",
      "Mesaj iÃ§inde randevuya yaklaÅŸtÄ±ran akÄ±ÅŸ",
      "Salon ekibi iÃ§in daha az manuel tekrar",
    ],
    faqHeading: {
      eyebrow: "Paket sorularÄ±",
      title: "Karar Ã¶ncesinde en Ã§ok sorulan konular.",
      description: "FiyatlandÄ±rma tarafÄ±nda netlik ve gÃ¼ven yaratmak iÃ§in kÄ±sa, aÃ§Ä±k yanÄ±tlar kullandÄ±k.",
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
      title: "Ä°letiÅŸim | Kedy",
      description: "Abonelik, demo veya salonunuza uygun kurgu iÃ§in Kedy ile iletiÅŸime geÃ§in.",
    },
    hero: {
      eyebrow: "Ä°letiÅŸim",
      title: "Salonunuz iÃ§in doÄŸru akÄ±ÅŸÄ± birlikte kuralÄ±m.",
      description:
        "Abonelik, demo talebi veya iÅŸletmenize uygun kurgu iÃ§in formu doldurun. Form ÅŸu anda simÃ¼le Ã§alÄ±ÅŸÄ±yor; ancak deneyim gerÃ§ek bir lead akÄ±ÅŸÄ± gibi tasarlandÄ±.",
    },
    infoCards: [
      { label: "E-posta", value: "hello@kedyapp.com", hint: "Genel sorular ve teklif talepleri" },
      { label: "Telefon", value: "+905364568084", hint: "HÄ±zlÄ± geri dÃ¶nÃ¼ÅŸ iÃ§in Ã¶rnek iletiÅŸim hattÄ±" },
      { label: "Instagram", value: "@kedyapp", hint: "Marka ve Ã¼rÃ¼n gÃ¼ncellemeleri" },
    ],
    form: {
      title: "Sizi tanÄ±yalÄ±m",
      name: "Ad Soyad",
      business: "Ä°ÅŸletme AdÄ±",
      phone: "Telefon",
      email: "E-posta",
      instagram: "Instagram hesabÄ±",
      message: "Mesaj",
      submit: "Talep GÃ¶nder",
      success: "TeÅŸekkÃ¼rler. Åimdilik Ã¶rnek bir onay mesajÄ± gÃ¶steriyoruz; bir sonraki adÄ±mda bu form gerÃ§ek bir backendâ€™e kolayca baÄŸlanabilir.",
      helper: "Ã–rnek: GÃ¼nde yaklaÅŸÄ±k 80-100 DM alÄ±yoruz; hem hÄ±zlÄ± yanÄ±t hem de daha gÃ¼Ã§lÃ¼ bir randevu akÄ±ÅŸÄ± istiyoruz.",
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
      { label: "Phone", value: "+905364568084", hint: "Direct contact line" },
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
    description: "GÃ¼zellik salonlarÄ± iÃ§in yapay zekÃ¢ destekli iletiÅŸim ve operasyon platformu.",
    columns: [
      {
        title: "ÃœrÃ¼n",
        links: [
          { label: "Ã–zellikler", href: "/features" },
          { label: "FiyatlandÄ±rma", href: "/pricing" },
          { label: "Ä°letiÅŸim", href: "/contact" },
        ],
      },
      {
        title: "Yasal",
        links: [
          { label: "Gizlilik PolitikasÄ±", href: "/privacy-policy" },
          { label: "KullanÄ±m KoÅŸullarÄ±", href: "/terms-of-service" },
          { label: "Veri Silme", href: "/data-deletion" },
        ],
      },
    ],
    bottom: "TÃ¼m haklarÄ± saklÄ±dÄ±r.",
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


