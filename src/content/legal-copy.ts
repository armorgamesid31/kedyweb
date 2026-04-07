import type { LegalSection, Localized, SectionHeading } from "@/content/types";

export type LegalPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: SectionHeading;
  sections: LegalSection[];
};

const companyAddress = [
  "HERMES SUPPLY LIMITED",
  "71-75 Shelton Street, Covent Garden",
  "London, United Kingdom, WC2H 9JQ",
  "Email: privacy@kedyapp.com",
];

export const privacyCopy: Localized<LegalPageCopy> = {
  en: {
    metadata: {
      title: "Privacy Policy | Kedy",
      description: "Read Kedy's privacy policy in English and Turkish on a single page.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      description: "English appears first on this page. The Turkish version follows below.",
    },
    sections: [
      {
        title: "1. Who we are",
        body: [
          "Kedy is a salon operations platform operated by HERMES SUPPLY LIMITED for salon owners, managers, and staff.",
          "Kedy supports appointments, customer management, messaging workflows, imports, notifications, and related operational tools.",
        ],
      },
      {
        title: "2. Kedy's role and the salon's role",
        body: [
          "For customer, appointment, CRM, messaging, and import records processed for a salon, Kedy generally acts as a processor or service provider on behalf of that salon.",
          "For Kedy account administration, security, support, session management, and compliance records, Kedy may act as an independent controller.",
        ],
      },
      {
        title: "3. Data we collect or process",
        body: [
          "Depending on enabled features, Kedy may process account information, salon profile data, customer names, phone numbers, Instagram handles, appointment records, pricing and payment labels, notes, package and waitlist data, uploaded files, OCR results, conversation content, push token data, and device metadata.",
          "The current mobile build reviewed for store-readiness does not appear to request location, contacts, microphone, or camera permissions.",
        ],
      },
      {
        title: "4. Why we use data",
        body: [
          "We use data to authenticate users, operate the service, manage salon workflows, deliver notifications, process uploads and OCR requests, support messaging features, maintain security, and comply with legal obligations.",
          "The current reviewed build is not described as using personal data for third-party advertising or cross-app tracking.",
        ],
      },
      {
        title: "5. Sharing and service providers",
        body: [
          "Kedy may use hosting, database, cloud storage, messaging, push notification, social platform, and OCR-related service providers where needed to deliver the service.",
          "Where third parties process data on our behalf, we expect protections appropriate to the sensitivity and purpose of the data being processed.",
        ],
      },
      {
        title: "6. Retention and security",
        body: [
          "We retain data for as long as reasonably necessary to provide the service, maintain security, resolve disputes, and comply with legal obligations.",
          "As an operational baseline, import source files are generally intended to be retained for about 30 days unless a longer period is required for troubleshooting, legal compliance, or a specific customer request.",
        ],
      },
      {
        title: "7. Rights and deletion requests",
        body: [
          "Salon staff users may submit access, correction, or deletion requests through privacy@kedyapp.com or through their salon administrator.",
          "If data was entered by a salon for booking or CRM purposes, the relevant salon is usually the primary party that controls those records. Kedy may support the salon in responding.",
        ],
      },
      {
        title: "8. Contact",
        body: companyAddress,
      },
    ],
  },
  tr: {
    metadata: {
      title: "Gizlilik Politikası | Kedy",
      description: "Kedy gizlilik politikasını İngilizce ve Türkçe olarak aynı sayfada inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Gizlilik Politikası",
      description: "Bu sayfada önce İngilizce metin, altında ise Türkçe metin yer alır.",
    },
    sections: [
      {
        title: "1. Biz kimiz",
        body: [
          "Kedy, salon sahipleri, yöneticileri ve ekipleri için sunulan bir salon operasyon platformudur ve HERMES SUPPLY LIMITED tarafından işletilir.",
          "Kedy; randevu, müşteri yönetimi, mesajlaşma akışları, veri içe aktarma, bildirim ve ilgili operasyon araçlarını destekler.",
        ],
      },
      {
        title: "2. Kedy ile salonun rolü",
        body: [
          "Bir salon adına işlenen müşteri, randevu, CRM, mesajlaşma ve içe aktarma kayıtlarında Kedy genel olarak o salon adına veri işleyen veya hizmet sağlayıcı olarak hareket eder.",
          "Kedy hesap yönetimi, güvenlik, destek, oturum yönetimi ve uyum kayıtlarında ise Kedy bağımsız veri sorumlusu olarak hareket edebilir.",
        ],
      },
      {
        title: "3. Topladığımız veya işlediğimiz veriler",
        body: [
          "Etkin özelliklere göre Kedy; hesap bilgileri, salon profil verileri, müşteri adları, telefon numaraları, Instagram kullanıcı adları, randevu kayıtları, fiyat ve ödeme etiketleri, notlar, paket ve bekleme listesi verileri, yüklenen dosyalar, OCR çıktıları, konuşma içerikleri, push token verileri ve cihaz metaverilerini işleyebilir.",
          "Store hazırlığı için incelenen mevcut mobil sürümde konum, rehber, mikrofon veya kamera izni kullanımına rastlanmamıştır.",
        ],
      },
      {
        title: "4. Verileri neden kullanıyoruz",
        body: [
          "Verileri kullanıcı doğrulaması, hizmetin sunulması, salon akışları yönetimi, bildirimlerin iletilmesi, yükleme ve OCR taleplerinin işlenmesi, mesajlaşma özelliklerinin çalışması, güvenliğin sağlanması ve hukuki yükümlülüklerin yerine getirilmesi için kullanırız.",
          "İncelenen mevcut yapıda kişisel verilerin üçüncü taraf reklamcılık veya uygulamalar arası takip amacıyla kullanıldığı beyan edilmemektedir.",
        ],
      },
      {
        title: "5. Paylaşım ve hizmet sağlayıcılar",
        body: [
          "Kedy, hizmeti sunabilmek için gerektiğinde barındırma, veritabanı, bulut depolama, mesajlaşma, push bildirim, sosyal platform ve OCR ile ilgili hizmet sağlayıcılardan yararlanabilir.",
          "Adımıza veri işleyen üçüncü taraflardan, işledikleri verinin hassasiyetine ve amacına uygun koruma bekleriz.",
        ],
      },
      {
        title: "6. Saklama ve güvenlik",
        body: [
          "Verileri, hizmeti sunmak, güvenliği korumak, uyuşmazlıkları çözmek ve hukuki yükümlülüklere uymak için makul ölçüde gerekli olduğu süre boyunca saklarız.",
          "Operasyonel başlangıç yaklaşımı olarak içe aktarma kaynak dosyaları genel olarak yaklaşık 30 gün tutulacak şekilde tasarlanmıştır; ancak hata ayıklama, hukuki uyum veya özel müşteri talebi gibi nedenlerle daha uzun tutulabilir.",
        ],
      },
      {
        title: "7. Haklar ve silme talepleri",
        body: [
          "Salon personeli kullanıcıları erişim, düzeltme veya silme taleplerini privacy@kedyapp.com adresine ya da salon yöneticilerine iletebilir.",
          "Veri bir salon tarafından rezervasyon veya CRM amacıyla girildiyse, bu kayıtları genel olarak önce ilgili salon kontrol eder. Kedy gerekli olduğunda salona destek verebilir.",
        ],
      },
      {
        title: "8. İletişim",
        body: companyAddress,
      },
    ],
  },
};

export const termsCopy: Localized<LegalPageCopy> = {
  en: {
    metadata: {
      title: "Terms of Service | Kedy",
      description: "Read Kedy's terms of service in English and Turkish on a single page.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Terms of Service",
      description: "English appears first on this page. The Turkish version follows below.",
    },
    sections: [
      {
        title: "1. Acceptance and business use",
        body: [
          "By using Kedy, you agree to these terms. If you use Kedy on behalf of a salon or company, you confirm that you are authorized to do so.",
          "Kedy is a business software service intended for salon owners, managers, finance users, reception teams, and staff.",
        ],
      },
      {
        title: "2. Accounts and access",
        body: [
          "Access accounts may be created, provisioned, restricted, or removed by Kedy, the relevant salon, or an authorized administrator.",
          "Users are responsible for keeping credentials confidential and must not share access with unauthorized persons.",
        ],
      },
      {
        title: "3. Acceptable use",
        body: [
          "You must not use the service for unlawful, fraudulent, abusive, misleading, or unauthorized purposes.",
          "You must not interfere with platform security, upload malicious code, or submit data that you are not authorized to process.",
        ],
      },
      {
        title: "4. Customer data and integrations",
        body: [
          "If you use Kedy on behalf of a salon, you are responsible for ensuring that the salon has the rights, notices, and permissions required for customer and business data submitted to the service.",
          "Kedy may interoperate with third-party providers such as messaging, push, storage, OCR, and social platform services. Their use may also be subject to separate third-party terms.",
        ],
      },
      {
        title: "5. Availability and changes",
        body: [
          "Features may change over time and we may update, modify, suspend, or discontinue parts of the service.",
          "We do not guarantee uninterrupted, error-free, or always-available operation.",
        ],
      },
      {
        title: "6. Liability and governing law",
        body: [
          "To the extent permitted by law, the service is provided on an as-is and as-available basis.",
          "Unless mandatory local law requires otherwise, these terms are governed by the laws of England and Wales.",
        ],
      },
      {
        title: "7. Contact",
        body: companyAddress,
      },
    ],
  },
  tr: {
    metadata: {
      title: "Kullanım Koşulları | Kedy",
      description: "Kedy kullanım koşullarını İngilizce ve Türkçe olarak aynı sayfada inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Kullanım Koşulları",
      description: "Bu sayfada önce İngilizce metin, altında ise Türkçe metin yer alır.",
    },
    sections: [
      {
        title: "1. Kabul ve iş amaçlı kullanım",
        body: [
          "Kedy'yi kullanarak bu koşulları kabul etmiş olursunuz. Kedy'yi bir salon veya şirket adına kullanıyorsanız buna yetkili olduğunuzu beyan edersiniz.",
          "Kedy, salon sahipleri, yöneticiler, finans kullanıcıları, resepsiyon ekipleri ve personel için tasarlanmış bir iş yazılımı hizmetidir.",
        ],
      },
      {
        title: "2. Hesaplar ve erişim",
        body: [
          "Erişim hesapları Kedy, ilgili salon veya yetkili yönetici tarafından oluşturulabilir, tanımlanabilir, kısıtlanabilir veya kaldırılabilir.",
          "Kullanıcılar giriş bilgilerinin gizliliğini korumaktan sorumludur ve hesaplarını yetkisiz kişilerle paylaşamaz.",
        ],
      },
      {
        title: "3. Kabul edilebilir kullanım",
        body: [
          "Hizmet hukuka aykırı, dolandırıcılık amaçlı, zarar verici, yanıltıcı veya yetkisiz şekilde kullanılamaz.",
          "Platform güvenliğini bozacak girişimlerde bulunamaz, zararlı kod yükleyemez veya işlemeye yetkili olmadığınız verileri sisteme giremezsiniz.",
        ],
      },
      {
        title: "4. Müşteri verileri ve entegrasyonlar",
        body: [
          "Kedy'yi bir salon adına kullanıyorsanız, hizmete girilen müşteri ve işletme verileri için gerekli haklara, aydınlatmalara ve izinlere sahip olduğunuzdan sorumlusunuz.",
          "Kedy; mesajlaşma, push, depolama, OCR ve sosyal platform hizmetleri gibi üçüncü taraf sağlayıcılarla birlikte çalışabilir. Bu entegrasyonların kullanımı ilgili üçüncü taraf koşullarına da tabi olabilir.",
        ],
      },
      {
        title: "5. Hizmet sürekliliği ve değişiklikler",
        body: [
          "Özellikler zaman içinde değişebilir ve hizmetin belirli kısımlarını güncelleyebilir, değiştirebilir, askıya alabilir veya kaldırabiliriz.",
          "Hizmetin kesintisiz, hatasız veya her an erişilebilir olacağı garanti edilmez.",
        ],
      },
      {
        title: "6. Sorumluluk ve uygulanacak hukuk",
        body: [
          "Kanunen izin verilen ölçüde hizmet olduğu gibi ve mevcut olduğu ölçüde sunulur.",
          "Zorunlu yerel hukuk kuralları aksini gerektirmedikçe bu koşullar İngiltere ve Galler hukukuna tabidir.",
        ],
      },
      {
        title: "7. İletişim",
        body: companyAddress,
      },
    ],
  },
};

export const dataDeletionCopy: Localized<LegalPageCopy> = {
  en: {
    metadata: {
      title: "Account and Data Deletion | Kedy",
      description: "Read Kedy's account and data deletion guidance in English and Turkish on a single page.",
    },
    hero: {
      eyebrow: "Legal",
      title: "Account and Data Deletion",
      description: "English appears first on this page. The Turkish version follows below.",
    },
    sections: [
      {
        title: "1. Who can request deletion",
        body: [
          "Deletion requests may be submitted by salon staff users, authorized salon owners or managers, or salon customers requesting deletion of data held for a specific salon.",
          "We may need to verify identity and authority before processing any request.",
        ],
      },
      {
        title: "2. How to request deletion",
        body: [
          "Requests can be submitted by emailing privacy@kedyapp.com or by contacting the relevant salon administrator.",
          "To help us process the request, please include your full name, salon name, and the email address or phone number related to the request.",
        ],
      },
      {
        title: "3. What happens after a request",
        body: [
          "After receiving a valid request, we may disable access, delete or anonymize Kedy-controlled records, and support the relevant salon where the salon controls the operational records.",
          "Completion timing may vary depending on verification, technical constraints, and legal obligations.",
        ],
      },
      {
        title: "4. Data that may still be retained",
        body: [
          "Certain records may be retained where necessary for security, fraud prevention, legal compliance, audit obligations, dispute resolution, or short-term backups and logs.",
          "Import source files are generally designed to age out after about 30 days unless a longer period is required.",
        ],
      },
      {
        title: "5. Salon-entered customer data",
        body: [
          "If your data was entered into Kedy by a salon for booking or CRM purposes, the relevant salon is usually the primary party that controls those records.",
          "In those cases, Kedy may assist the salon in responding, but the salon may need to approve or initiate deletion.",
        ],
      },
      {
        title: "6. Contact",
        body: companyAddress,
      },
    ],
  },
  tr: {
    metadata: {
      title: "Hesap ve Veri Silme | Kedy",
      description: "Kedy hesap ve veri silme sürecini İngilizce ve Türkçe olarak aynı sayfada inceleyin.",
    },
    hero: {
      eyebrow: "Yasal",
      title: "Hesap ve Veri Silme",
      description: "Bu sayfada önce İngilizce metin, altında ise Türkçe metin yer alır.",
    },
    sections: [
      {
        title: "1. Kimler silme talebinde bulunabilir",
        body: [
          "Silme talepleri salon personeli kullanıcıları, yetkili salon sahibi veya yöneticileri ya da belirli bir salon adına tutulan verisinin silinmesini isteyen salon müşterileri tarafından iletilebilir.",
          "Her talep işlenmeden önce kimlik ve yetki doğrulaması gerekebilir.",
        ],
      },
      {
        title: "2. Silme talebi nasıl yapılır",
        body: [
          "Talepler privacy@kedyapp.com adresine e-posta gönderilerek veya ilgili salon yöneticisiyle iletişime geçilerek iletilebilir.",
          "Talebin daha hızlı işlenebilmesi için ad soyad, salon adı ve taleple ilişkili e-posta adresi veya telefon numarasının paylaşılması tavsiye edilir.",
        ],
      },
      {
        title: "3. Talep geldikten sonra ne olur",
        body: [
          "Geçerli bir talep alındığında hesap erişimi kapatılabilir, Kedy kontrolündeki kayıtlar silinebilir veya anonimleştirilebilir ve operasyon kayıtlarını kontrol eden salona destek verilebilir.",
          "Tamamlanma süresi doğrulama, teknik sınırlar ve hukuki yükümlülüklere göre değişebilir.",
        ],
      },
      {
        title: "4. Tutulmaya devam edebilecek veriler",
        body: [
          "Güvenlik, dolandırıcılık önleme, hukuki uyum, denetim yükümlülükleri, uyuşmazlık çözümü veya kısa süreli yedek ve loglar için belirli kayıtlar tutulmaya devam edebilir.",
          "İçe aktarma kaynak dosyaları genel olarak yaklaşık 30 gün sonra sistemden düşmeye yönelik tasarlanmıştır; ancak daha uzun saklama gerekebilir.",
        ],
      },
      {
        title: "5. Salon tarafından girilen müşteri verileri",
        body: [
          "Veriniz bir salon tarafından rezervasyon veya CRM amacıyla Kedy'ye girildiyse, bu kayıtları genel olarak önce ilgili salon kontrol eder.",
          "Bu durumlarda Kedy salona destek verebilir; ancak silme işlemini salonun onaylaması veya başlatması gerekebilir.",
        ],
      },
      {
        title: "6. İletişim",
        body: companyAddress,
      },
    ],
  },
};
