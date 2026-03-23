import type { LegalSection, Localized, SectionHeading } from "@/content/types";

type LegalPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: SectionHeading;
  sections: LegalSection[];
};

export const privacyCopy: Localized<LegalPageCopy> = {
  tr: {
    metadata: {
      title: "Gizlilik Politikasi | Kedy",
      description: "Kedy'nin gizlilik politikasini ve veri isleme yaklasimini inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Gizlilik Politikasi",
      description: "Bu sayfa profesyonel bir iskelet sunar ve nihai hukuki metinlerle kolayca guncellenebilir.",
    },
    sections: [
      {
        title: "1. Toplanan bilgiler",
        body: [
          "Kedy; iletisim formlari, hesap kurulumu ve hizmet kullanimi sirasinda paylasilan kimlik, iletisim ve isletme bilgilerini toplayabilir.",
          "Mesajlasma akislarina iliskin operasyonel veriler, hizmetin sunulmasi ve iyilestirilmesi amaciyla islenebilir.",
        ],
      },
      {
        title: "2. Verilerin kullanim amaci",
        body: [
          "Veriler; hizmeti sunmak, talepleri yanitlamak, onboarding surecini planlamak ve platform deneyimini gelistirmek amaciyla kullanilir.",
          "Ayrica guvenlik, destek ve yasal yukumluluklerin yerine getirilmesi icin de veri islenebilir.",
        ],
      },
      {
        title: "3. Ucuncu taraf hizmetler",
        body: [
          "Kedy, altyapi, analiz, mesajlasma veya destek saglayicilarindan yararlanabilir. Bu taraflarla yalnizca gerekli kapsamda veri paylasilir.",
          "Uygulanacak nihai entegrasyonlara gore bu liste ileride guncellenebilir.",
        ],
      },
      {
        title: "4. Saklama ve guvenlik",
        body: [
          "Veriler, is amacina uygun sure boyunca ve makul teknik-idari onlemlerle korunur.",
          "Yetkisiz erisimi, veri kaybini ve kotuye kullanimi azaltmaya yonelik guvenlik adimlari uygulanir.",
        ],
      },
      {
        title: "5. Haklariniz",
        body: [
          "Yururlukteki mevzuat kapsaminda verilerinize erisme, duzeltme, silme veya isleme itiraz etme haklariniz olabilir.",
          "Bu talepler icin iletisim kanalindan bize ulasabilirsiniz.",
        ],
      },
    ],
  },
  en: {
    metadata: {
      title: "Privacy Policy | Kedy",
      description: "Review Kedy's privacy policy structure and data handling approach.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      description: "This page is structured to be professional today and easy to replace with final legal text later.",
    },
    sections: [
      {
        title: "1. Information we collect",
        body: [
          "Kedy may collect identity, contact, business, and account-related information shared through lead forms, onboarding, and platform usage.",
          "Operational data related to messaging workflows may also be processed to provide and improve the service.",
        ],
      },
      {
        title: "2. Why we use the data",
        body: [
          "Data may be used to deliver the service, respond to requests, plan onboarding, and improve the customer experience.",
          "It may also be processed for security, support, analytics, and legal compliance purposes.",
        ],
      },
      {
        title: "3. Third-party services",
        body: [
          "Kedy may rely on infrastructure, analytics, messaging, or support providers. Data is only shared to the extent required for service delivery.",
          "This list can be refined further as the final product stack evolves.",
        ],
      },
      {
        title: "4. Storage and security",
        body: [
          "Data is retained for a period consistent with operational need and protected through reasonable technical and organizational safeguards.",
          "Measures are taken to reduce the risk of unauthorized access, loss, or misuse.",
        ],
      },
      {
        title: "5. Your rights",
        body: [
          "Depending on the applicable law, you may have rights to access, correct, delete, or object to the processing of your personal data.",
          "Requests can be submitted through the contact channels listed on this site.",
        ],
      },
    ],
  },
};

export const termsCopy: Localized<LegalPageCopy> = {
  tr: {
    metadata: {
      title: "Kullanim Kosullari | Kedy",
      description: "Kedy hizmetine iliskin temel kullanim kosullarini inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Kullanim Kosullari",
      description: "Bu yapi, hizmet sartlarini profesyonel bir formatta sunmak ve sonraki revizyonlari kolaylastirmak icin hazirlandi.",
    },
    sections: [
      {
        title: "1. Hizmet kapsami",
        body: [
          "Kedy, guzellik salonlari icin mesajlasma, otomasyon ve operasyon akislari sunan bir SaaS platformudur.",
          "Sunulan ozellikler zaman icinde degisebilir, genisleyebilir veya guncellenebilir.",
        ],
      },
      {
        title: "2. Hesap ve sorumluluk",
        body: [
          "Musteri, kendi hesap erisimlerinin gizliliginden ve hesap uzerinden gerceklestirilen islemlerden sorumludur.",
          "Saglanan bilgilerin dogru ve guncel olmasi beklenir.",
        ],
      },
      {
        title: "3. Kabul edilebilir kullanim",
        body: [
          "Platform; hukuka aykiri, zarar verici, yaniltici veya yetkisiz amaclarla kullanilamaz.",
          "Kedy, hizmet butunlugunu tehdit eden kullanimlarda hesap kisitlamasi uygulayabilir.",
        ],
      },
      {
        title: "4. Ucretlendirme ve degisiklikler",
        body: [
          "Fiyatlar, paket kapsami ve faturalandirma kosullari zaman icinde guncellenebilir.",
          "Gecerli kosullar, musterinin kullandigi paket veya sozlesme kapsaminda ayrica belirtilir.",
        ],
      },
      {
        title: "5. Sorumluluk siniri",
        body: [
          "Hizmet, uygulanabilir mevzuatin izin verdigi olcude sunulur ve kesintisiz calisma taahhudu icermez.",
          "Dolayli veya sonucsal zararlar konusunda nihai sorumluluk sinirlari resmi sozlesme metinlerinde netlestirilir.",
        ],
      },
    ],
  },
  en: {
    metadata: {
      title: "Terms of Service | Kedy",
      description: "Review the core service terms for Kedy.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Terms of Service",
      description: "This page provides a professional placeholder structure that can be refined into final commercial and legal language later.",
    },
    sections: [
      {
        title: "1. Service scope",
        body: [
          "Kedy is a SaaS platform designed to support beauty salons through messaging automation and operational workflows.",
          "Features may evolve, expand, or be updated over time as the product matures.",
        ],
      },
      {
        title: "2. Accounts and responsibility",
        body: [
          "Customers are responsible for maintaining the confidentiality of their account access and for activities performed under their account.",
          "Information provided to Kedy should remain accurate and up to date.",
        ],
      },
      {
        title: "3. Acceptable use",
        body: [
          "The service may not be used for unlawful, harmful, misleading, or unauthorized purposes.",
          "Kedy may limit or suspend access if usage threatens the integrity or security of the platform.",
        ],
      },
      {
        title: "4. Pricing and changes",
        body: [
          "Pricing, package scope, and billing terms may change over time.",
          "Applicable commercial terms should be confirmed through the active plan, proposal, or customer agreement.",
        ],
      },
      {
        title: "5. Liability limits",
        body: [
          "The service is provided subject to applicable law and does not imply uninterrupted availability in all circumstances.",
          "Specific liability limitations should be defined in the final legal and commercial agreement.",
        ],
      },
    ],
  },
};

export const dataDeletionCopy: Localized<LegalPageCopy> = {
  tr: {
    metadata: {
      title: "Veri Silme ve Baglanti Kaldirma | Kedy",
      description: "Kedy uzerinden veri silme ve hesap baglantilarinin kaldirilmasi surecini ogrenin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Veri Silme ve Hesap Baglantisi Kaldirma",
      description: "Instagram veya WhatsApp baglantilarinin kaldirilmasi ve veri silme taleplerinin profesyonel bicimde yonetilebilmesi icin hazir bir iskelet.",
    },
    sections: [
      {
        title: "1. Baglanti kaldirma talebi",
        body: [
          "Instagram veya WhatsApp baglantilarinizin devre disi birakilmasi icin destek kanalimiz uzerinden talep olusturabilirsiniz.",
          "Talep sonrasinda entegrasyon erisimleri gozden gecirilir ve uygun oldugunda baglanti kaldirilir.",
        ],
      },
      {
        title: "2. Veri silme talebi",
        body: [
          "Kullanicilar, yururlukteki mevzuat kapsaminda belirli verilerin silinmesini talep edebilir.",
          "Talep degerlendirmesi sirasinda hesabin sahipligi ve yasal yukumlulukler kontrol edilir.",
        ],
      },
      {
        title: "3. Saklanabilecek veriler",
        body: [
          "Yasal yukumluluk, guvenlik kaydi veya muhasebe gereklilikleri gibi sebeplerle bazi veriler belirli surelerle tutulabilir.",
          "Silinmeyecek veri kategorileri ve saklama sureleri nihai hukuk metinlerinde netlestirilebilir.",
        ],
      },
      {
        title: "4. Surec ve iletisim",
        body: [
          "Silme ve baglanti kaldirma talepleri, makul sure icinde sonuclandirilmaya calisilir.",
          "Surece iliskin guncellemeler, talep sirasinda paylasilan iletisim bilgileri uzerinden iletilir.",
        ],
      },
    ],
  },
  en: {
    metadata: {
      title: "Data Deletion and Disconnection | Kedy",
      description: "Learn how data deletion and account disconnection requests can be handled through Kedy.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Data Deletion and Account Disconnection",
      description: "A structured page for explaining how Instagram, WhatsApp, and account-related data requests can be handled in a professional way.",
    },
    sections: [
      {
        title: "1. Disconnecting integrations",
        body: [
          "You can request the removal of Instagram or WhatsApp connections through our support channels.",
          "Once verified, the relevant access paths can be reviewed and disabled where applicable.",
        ],
      },
      {
        title: "2. Requesting deletion",
        body: [
          "Users may request the deletion of certain data, subject to applicable law and account verification steps.",
          "Ownership checks and legal obligations may apply before the request is completed.",
        ],
      },
      {
        title: "3. Data that may still be retained",
        body: [
          "Certain records may need to be preserved for legal, accounting, fraud prevention, or security reasons.",
          "The final retention list can be clarified in the definitive legal documentation.",
        ],
      },
      {
        title: "4. Process and communication",
        body: [
          "Deletion and disconnection requests are reviewed within a reasonable timeframe.",
          "Updates can be shared using the contact information provided during the request.",
        ],
      },
    ],
  },
};
