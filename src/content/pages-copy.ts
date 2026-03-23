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
    monthlyLabel: "Aylık faturalandırma",
    backToPricing: "Tüm paketleri gör",
    contactLabel: "İletişime geç",
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
      title: "Fiyatlandırma | Kedy",
      description: "Kedy’nin güzellik salonları için hazırlanan aylık paketlerini ve kapsamını inceleyin.",
    },
    hero: {
      eyebrow: "Fiyatlandırma",
      title: "Anlaşılır paketler, ihtiyaç büyüdükçe genişleyebilen bir yapı.",
      description:
        "Paketleri bugün için sade ve anlaşılır tuttuk. İhtiyaçlarınız büyüdüğünde plan kapsamı da aynı yapı üzerinden kolayca güncellenebilir.",
    },
    note: "Tüm plan adları, fiyatlar ve madde listeleri tek bir içerik dosyasından yönetilir. Böylece lansman sonrasında güncelleme yapmak kolaylaşır.",
    includedTitle: "Tüm planların odaklandığı temel değer",
    includedItems: [
      "Daha hızlı mesaj karşılama düzeni",
      "Tekrarlayan soruların daha otomatik yönetimi",
      "Mesaj içinde randevuya yaklaştıran akış",
      "Salon ekibi için daha az manuel tekrar",
    ],
    faqHeading: {
      eyebrow: "Paket soruları",
      title: "Karar öncesinde en çok sorulan konular.",
      description: "Fiyatlandırma tarafında netlik ve güven yaratmak için kısa, açık yanıtlar kullandık.",
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
      title: "İletişim | Kedy",
      description: "Abonelik, demo veya salonunuza uygun kurgu için Kedy ile iletişime geçin.",
    },
    hero: {
      eyebrow: "İletişim",
      title: "Salonunuz için doğru akışı birlikte kuralım.",
      description:
        "Abonelik, demo talebi veya işletmenize uygun kurgu için formu doldurun. Form şu anda simüle çalışıyor; ancak deneyim gerçek bir lead akışı gibi tasarlandı.",
    },
    infoCards: [
      { label: "E-posta", value: "hello@kedyapp.com", hint: "Genel sorular ve teklif talepleri" },
      { label: "Telefon", value: "+90 (5XX) XXX XX XX", hint: "Hızlı geri dönüş için örnek iletişim hattı" },
      { label: "Instagram", value: "@kedyapp", hint: "Marka ve ürün güncellemeleri" },
    ],
    form: {
      title: "Sizi tanıyalım",
      name: "Ad Soyad",
      business: "İşletme Adı",
      phone: "Telefon",
      email: "E-posta",
      instagram: "Instagram hesabı",
      message: "Mesaj",
      submit: "Talep Gönder",
      success: "Teşekkürler. Şimdilik örnek bir onay mesajı gösteriyoruz; bir sonraki adımda bu form gerçek bir backend’e kolayca bağlanabilir.",
      helper: "Örnek: Günde yaklaşık 80-100 DM alıyoruz; hem hızlı yanıt hem de daha güçlü bir randevu akışı istiyoruz.",
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
    description: "Güzellik salonları için yapay zekâ destekli iletişim ve operasyon platformu.",
    columns: [
      {
        title: "Ürün",
        links: [
          { label: "Özellikler", href: "/features" },
          { label: "Fiyatlandırma", href: "/pricing" },
          { label: "İletişim", href: "/contact" },
        ],
      },
      {
        title: "Yasal",
        links: [
          { label: "Gizlilik Politikası", href: "/privacy-policy" },
          { label: "Kullanım Koşulları", href: "/terms-of-service" },
          { label: "Veri Silme", href: "/data-deletion" },
        ],
      },
    ],
    bottom: "Tüm hakları saklıdır.",
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
