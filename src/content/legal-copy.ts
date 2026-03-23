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
      title: "Gizlilik Politikası | Kedy",
      description: "Kedy’nin gizlilik politikasını ve veri işleme yaklaşımını inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Gizlilik Politikası",
      description: "Bu sayfa profesyonel bir iskelet sunar ve nihai hukuki metinlerle kolayca güncellenebilir.",
    },
    sections: [
      {
        title: "1. Toplanan bilgiler",
        body: [
          "Kedy; iletişim formları, hesap kurulumu ve hizmet kullanımı sırasında paylaşılan kimlik, iletişim ve işletme bilgilerini toplayabilir.",
          "Mesajlaşma akışlarına ilişkin operasyonel veriler, hizmetin sunulması ve iyileştirilmesi amacıyla işlenebilir.",
        ],
      },
      {
        title: "2. Verilerin kullanım amacı",
        body: [
          "Veriler; hizmeti sunmak, talepleri yanıtlamak, onboarding sürecini planlamak ve platform deneyimini geliştirmek amacıyla kullanılır.",
          "Ayrıca güvenlik, destek ve yasal yükümlülüklerin yerine getirilmesi için de veri işlenebilir.",
        ],
      },
      {
        title: "3. Üçüncü taraf hizmetler",
        body: [
          "Kedy, altyapı, analiz, mesajlaşma veya destek sağlayıcılarından yararlanabilir. Bu taraflarla yalnızca gerekli kapsamda veri paylaşılır.",
          "Uygulanacak nihai entegrasyonlara göre bu liste ileride güncellenebilir.",
        ],
      },
      {
        title: "4. Saklama ve güvenlik",
        body: [
          "Veriler, iş amacına uygun süre boyunca ve makul teknik-idari önlemlerle korunur.",
          "Yetkisiz erişimi, veri kaybını ve kötüye kullanımı azaltmaya yönelik güvenlik adımları uygulanır.",
        ],
      },
      {
        title: "5. Haklarınız",
        body: [
          "Yürürlükteki mevzuat kapsamında verilerinize erişme, düzeltme, silme veya işlenmesine itiraz etme haklarınız olabilir.",
          "Bu talepler için iletişim kanallarımız üzerinden bize ulaşabilirsiniz.",
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
      title: "Kullanım Koşulları | Kedy",
      description: "Kedy hizmetine ilişkin temel kullanım koşullarını inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Kullanım Koşulları",
      description: "Bu yapı, hizmet şartlarını profesyonel bir formatta sunmak ve sonraki revizyonları kolaylaştırmak için hazırlandı.",
    },
    sections: [
      {
        title: "1. Hizmet kapsamı",
        body: [
          "Kedy, güzellik salonları için mesajlaşma, otomasyon ve operasyon akışları sunan bir SaaS platformudur.",
          "Sunulan özellikler zaman içinde değişebilir, genişleyebilir veya güncellenebilir.",
        ],
      },
      {
        title: "2. Hesap ve sorumluluk",
        body: [
          "Müşteri, kendi hesap erişim bilgilerinin gizliliğinden ve hesap üzerinden gerçekleştirilen işlemlerden sorumludur.",
          "Sağlanan bilgilerin doğru ve güncel olması beklenir.",
        ],
      },
      {
        title: "3. Kabul edilebilir kullanım",
        body: [
          "Platform; hukuka aykırı, zarar verici, yanıltıcı veya yetkisiz amaçlarla kullanılamaz.",
          "Kedy, hizmet bütünlüğünü tehdit eden kullanımlarda hesap kısıtlaması uygulayabilir.",
        ],
      },
      {
        title: "4. Ücretlendirme ve değişiklikler",
        body: [
          "Fiyatlar, paket kapsamı ve faturalandırma koşulları zaman içinde güncellenebilir.",
          "Geçerli koşullar, müşterinin kullandığı paket veya sözleşme kapsamında ayrıca belirtilir.",
        ],
      },
      {
        title: "5. Sorumluluk sınırı",
        body: [
          "Hizmet, uygulanabilir mevzuatın izin verdiği ölçüde sunulur ve kesintisiz çalışma taahhüdü içermez.",
          "Dolaylı veya sonuçsal zararlar konusundaki nihai sorumluluk sınırları, resmi sözleşme metinlerinde netleştirilir.",
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
      title: "Veri Silme ve Bağlantı Kaldırma | Kedy",
      description: "Kedy üzerinden veri silme ve hesap bağlantılarının kaldırılması sürecini öğrenin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Veri Silme ve Hesap Bağlantısı Kaldırma",
      description: "Instagram veya WhatsApp bağlantılarının kaldırılması ve veri silme taleplerinin profesyonel biçimde yönetilebilmesi için hazır bir iskelet.",
    },
    sections: [
      {
        title: "1. Bağlantı kaldırma talebi",
        body: [
          "Instagram veya WhatsApp bağlantılarınızın devre dışı bırakılması için destek kanalımız üzerinden talep oluşturabilirsiniz.",
          "Talep sonrasında entegrasyon erişimleri gözden geçirilir ve uygun olduğunda bağlantı kaldırılır.",
        ],
      },
      {
        title: "2. Veri silme talebi",
        body: [
          "Kullanıcılar, yürürlükteki mevzuat kapsamında belirli verilerin silinmesini talep edebilir.",
          "Talep değerlendirmesi sırasında hesabın sahipliği ve yasal yükümlülükler kontrol edilir.",
        ],
      },
      {
        title: "3. Saklanabilecek veriler",
        body: [
          "Yasal yükümlülük, güvenlik kaydı veya muhasebe gereklilikleri gibi nedenlerle bazı veriler belirli sürelerle tutulabilir.",
          "Silinmeyecek veri kategorileri ve saklama süreleri nihai hukuk metinlerinde netleştirilebilir.",
        ],
      },
      {
        title: "4. Süreç ve iletişim",
        body: [
          "Silme ve bağlantı kaldırma talepleri makul süre içinde sonuçlandırılmaya çalışılır.",
          "Sürece ilişkin güncellemeler, talep sırasında paylaşılan iletişim bilgileri üzerinden iletilir.",
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
