import type { FAQItem, Localized } from "@/content/types";

type FAQCollection = {
  home: FAQItem[];
  pricing: FAQItem[];
};

export const faqs: Localized<FAQCollection> = {
  tr: {
    home: [
      {
        question: "Kedy hangi platformlarla calisir?",
        answer:
          "Kedy ilk asamada Instagram ve WhatsApp mesaj akislari icin tasarlanmistir. Yapiniz buyudukce ek kanal ve operasyon senaryolari da ayni sistem mantigi ile genisletilebilir.",
      },
      {
        question: "Mesajlara tamamen otomatik cevap verebilir mi?",
        answer:
          "Evet. Belirledigimiz senaryolarda Kedy sorulari karsilar, bilgi verir ve uygun oldugunda randevu akisini ilerletir. Hassas veya istisna durumlarda insan devri de devreye girer.",
      },
      {
        question: "Istersem konusmayi ekibim devralabilir mi?",
        answer:
          "Evet. Kedy tam otomasyon ile insan kontrolu arasinda esnek calisir. Ekip uygun gordugu anda sohbete dahil olabilir ve sureci kaldigi yerden devam ettirebilir.",
      },
      {
        question: "Randevu linki nasil calisir?",
        answer:
          "Kedy, mesaj akisinda uygun anda paylasilan bir booking linki ile kullaniciyi gereksiz adimlar olmadan randevuya yonlendirir. Boylece mesajlasma ile rezervasyon arasindaki mesafe kisalir.",
      },
      {
        question: "Fiyatlandirma nasil belirlenir?",
        answer:
          "Paketler ekip yapiniza, mesaj hacminize ve ihtiyac duydugunuz otomasyon derinligine gore sekillenir. Sayfadaki planlar hizli bir baslangic noktasi saglar; gerekirse daha uygun bir kurgu birlikte tasarlanir.",
      },
      {
        question: "Kurulum ne kadar surer?",
        answer:
          "Kurulum, ihtiyac duyulan kanal ve akislara gore degisir; ancak hedefimiz salonun operasyonunu bekletmeden hizli sekilde canliya almaktir.",
      },
      {
        question: "Kucuk ekipler icin uygun mu?",
        answer:
          "Kesinlikle. Kedy yalnizca buyuk ekipler icin degil; az kisiyle yogun mesaj trafigi yoneten salonlar icin de ciddi zaman kazanci saglar.",
      },
      {
        question: "WhatsApp ve Instagram ayni anda yonetilebilir mi?",
        answer:
          "Evet. Kedy kanal bazli daginikligi azaltmak icin iki taraftaki iletisimi daha duzenli ve takip edilebilir bir akisa toplar.",
      },
    ],
    pricing: [
      {
        question: "Paketler arasinda gecis yapabilir miyim?",
        answer:
          "Evet. Ihtiyaciniz buyudukce daha kapsamli bir pakete gecebilir veya size daha uygun bir kurgu planlayabiliriz.",
      },
      {
        question: "Kurulum ucreti var mi?",
        answer:
          "Onboarding kapsamimiz pakete gore degisebilir. Net setup detaylari gorusme sirasinda sizin surecinize gore belirlenir.",
      },
      {
        question: "Ozel entegrasyon veya ozel akis talep edebilir miyim?",
        answer:
          "Evet. Signature seviyesinde ve ihtiyaca gore diger planlarda da ozel akis ve operasyon kurgulari degerlendirilebilir.",
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
