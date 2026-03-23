import type { FAQItem, Localized } from "@/content/types";

type FAQCollection = {
  home: FAQItem[];
  pricing: FAQItem[];
};

export const faqs: Localized<FAQCollection> = {
  tr: {
    home: [
      {
        question: "Kedy hangi platformlarla çalışır?",
        answer:
          "Kedy ilk aşamada Instagram ve WhatsApp mesaj akışları için tasarlandı. Ürün geliştikçe ek kanal ve operasyon senaryoları da aynı sistem mantığıyla genişletilebilir.",
      },
      {
        question: "Mesajlara tamamen otomatik cevap verebilir mi?",
        answer:
          "Evet. Tanımlanan senaryolarda Kedy soruları karşılar, bilgi verir ve uygun olduğunda randevu akışını ilerletir. Hassas veya istisna durumlarda ise konuşma ekibinize devredilebilir.",
      },
      {
        question: "İstersem konuşmayı ekibim devralabilir mi?",
        answer:
          "Evet. Kedy, tam otomasyon ile insan kontrolü arasında esnek çalışır. Ekibiniz uygun gördüğü anda sohbete dahil olup süreci kaldığı yerden sürdürebilir.",
      },
      {
        question: "Randevu linki nasıl çalışır?",
        answer:
          "Kedy, konuşmanın doğru anında paylaşılan randevu linkiyle müşteriyi gereksiz adımlar olmadan rezervasyona yönlendirir. Böylece mesajlaşma ile randevu arasındaki mesafe kısalır.",
      },
      {
        question: "Fiyatlandırma nasıl belirlenir?",
        answer:
          "Paketler; ekip yapınıza, mesaj hacminize ve ihtiyaç duyduğunuz otomasyon seviyesine göre şekillenir. Sayfadaki planlar hızlı bir başlangıç noktası sunar; gerekirse size uygun kurgu birlikte netleştirilir.",
      },
      {
        question: "Kurulum ne kadar sürer?",
        answer:
          "Kurulum süresi, ihtiyaç duyulan kanal ve akışlara göre değişir. Hedefimiz, salon operasyonunu yavaşlatmadan sistemi hızlı biçimde canlıya almaktır.",
      },
      {
        question: "Küçük ekipler için uygun mu?",
        answer:
          "Kesinlikle. Kedy yalnızca büyük ekipler için değil; az kişiyle yoğun mesaj trafiği yöneten salonlar için de ciddi zaman kazancı sağlar.",
      },
      {
        question: "WhatsApp ve Instagram aynı anda yönetilebilir mi?",
        answer:
          "Evet. Kedy, kanal bazlı dağınıklığı azaltmak için iki taraftaki iletişimi daha düzenli ve takip edilebilir bir akışta toplar.",
      },
    ],
    pricing: [
      {
        question: "Paketler arasında geçiş yapabilir miyim?",
        answer:
          "Evet. İhtiyacınız büyüdükçe daha kapsamlı bir pakete geçebilir veya size daha uygun bir kurgu planlayabiliriz.",
      },
      {
        question: "Kurulum ücreti var mı?",
        answer:
          "Kurulum kapsamı pakete göre değişebilir. Net onboarding detayları, görüşme sırasında salonunuzun ihtiyaçlarına göre belirlenir.",
      },
      {
        question: "Özel entegrasyon veya özel akış talep edebilir miyim?",
        answer:
          "Evet. Özellikle Signature seviyesinde, ihtiyaca göre özel akış ve operasyon kurguları değerlendirilebilir.",
      },
    ],
  },
  en: {
    home: [
      {
        question: "Which platforms does Kedy support?",
        answer:
          "Kedy is built first for Instagram and WhatsApp customer conversations. As the product expands, the same operational logic can support broader workflows and additional channels.",
      },
      {
        question: "Can it reply automatically to customer messages?",
        answer:
          "Yes. Kedy can handle recurring questions, respond instantly, and move the customer toward the next step. When a conversation needs human attention, your team can step in.",
      },
      {
        question: "Can my team take over the conversation when needed?",
        answer:
          "Absolutely. Kedy is designed for automation with human control, so your team can join the chat whenever context, nuance, or approval is required.",
      },
      {
        question: "How does the booking link work?",
        answer:
          "The system can share a booking link at the right moment inside the conversation, reducing friction between inquiry and reservation.",
      },
      {
        question: "How is pricing determined?",
        answer:
          "Plans depend on message volume, team structure, and how deep you want the automation to go. The current cards are designed as a simple starting point you can easily adjust later.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Setup depends on the channels and workflows involved, but the goal is always to get your salon live quickly without slowing down daily operations.",
      },
      {
        question: "Is Kedy suitable for small teams?",
        answer:
          "Yes. Smaller salons often benefit the most because the platform reduces repetitive messaging work without requiring a large front-desk team.",
      },
      {
        question: "Can WhatsApp and Instagram be managed together?",
        answer:
          "Yes. Kedy helps reduce channel fragmentation by organizing both conversation streams into one clearer operating flow.",
      },
    ],
    pricing: [
      {
        question: "Can I switch plans later?",
        answer:
          "Yes. As your volume or needs change, you can move to a more suitable package or work with us on a more tailored setup.",
      },
      {
        question: "Is onboarding included?",
        answer:
          "The onboarding scope can vary by plan. Final setup details are shaped around your salon workflow during the sales process.",
      },
      {
        question: "Can I request custom flows or integrations?",
        answer:
          "Yes. More tailored operational flows can be discussed for Signature and, when relevant, for other plans as well.",
      },
    ],
  },
};
