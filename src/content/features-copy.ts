import type { FeatureCategory, IconCard, Localized, SectionHeading } from "@/content/types";

type FeaturesPageCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: SectionHeading;
  highlights: IconCard[];
  categories: FeatureCategory[];
  closing: {
    title: string;
    description: string;
    primaryCta: string;
  };
};

export const featuresCopy: Localized<FeaturesPageCopy> = {
  tr: {
    metadata: {
      title: "Ozellikler | Kedy",
      description: "Kedy'nin salon odakli mesaj yonetimi, AI otomasyonu, randevu akislari ve ekip kontrol kabiliyetlerini kesfedin.",
    },
    hero: {
      eyebrow: "Ozellikler",
      title: "Salonun iletisim tarafini duzene sokan, operasyon tarafini da guclendiren ozellikler.",
      description:
        "Kedy'nin bugunku degeri mesaj yonetiminde baslar; ama altyapisi sadece cevap yazmakla sinirli kalmayacak sekilde tasarlandi.",
    },
    highlights: [
      {
        icon: "message",
        title: "Tek akista gorunen iletisim",
        description: "Daginik mesajlasma yerine daha duzenli, izlenebilir ve aksiyon alinabilir bir salon akisi.",
      },
      {
        icon: "sparkles",
        title: "Donusume yakin otomasyon",
        description: "Amac yalnizca cevap vermek degil; musait anlarda randevuya yaklastiran bir akis kurmak.",
      },
      {
        icon: "growth",
        title: "Buyumeye acik sistem mantigi",
        description: "Kampanya, takip ve web varligi gibi ileri katmanlar icin de temel bir yapi kurar.",
      },
    ],
    categories: [
      {
        icon: "message",
        title: "Mesaj Yonetimi",
        description: "Instagram ve WhatsApp tarafindaki talepleri daha kontrollu yonetmek icin tasarlanmistir.",
        items: [
          { title: "Kanal bazli daginikligi azaltir", description: "Mesajlar daha standart bir operasyon mantiginda ele alinir." },
          { title: "Sik sorulari hizli karsilar", description: "Fiyat, uygunluk ve islem detaylari daha akici yanitlanir." },
          { title: "Konusma baglamini korur", description: "Soru degistiginde veya ekip devreye girdiginde baglam kaybi azalir." },
        ],
      },
      {
        icon: "sparkles",
        title: "Yapay Zeka Otomasyonu",
        description: "Tekrarlayan mesaj yukunu azaltirken kaliteyi tutarli hale getirmeyi hedefler.",
        items: [
          { title: "Niyet anlama", description: "Musterinin ne sordugunu ve neye yonlendirilmesi gerektigini yorumlar." },
          { title: "Aninda cevap", description: "Ekip musait olmasa bile sureci bekletmeden ilerletir." },
          { title: "Kontrollu otomasyon", description: "Her sey otomatik olmak zorunda degil; kritik anlarda ekip kontrolu korunur." },
        ],
      },
      {
        icon: "booking",
        title: "Randevu Akislari",
        description: "Konusmayi gereksiz yere uzatmadan rezervasyon tarafina gecis kurar.",
        items: [
          { title: "Magic booking link", description: "Dogru anda paylasilan link ile karar anini kacirmamaya yardimci olur." },
          { title: "Yonlendirme mantigi", description: "Musteri once bilgi, sonra aksiyon alacak sekilde akis ilerler." },
          { title: "Daha az surtunme", description: "Mesajlasma ile randevu arasindaki adimlari sadelestirir." },
        ],
      },
      {
        icon: "team",
        title: "Ekip Kontrolu",
        description: "Otomasyonun yaninda insan mudahalesini de kullanisli hale getirir.",
        items: [
          { title: "Insan devralma", description: "Konusma tek tik mantiginda ekibe aktarilabilir." },
          { title: "Rollere uygun isleyis", description: "Onay veya satis kapama gibi anlarda dogru kisi devreye girebilir." },
          { title: "Daha az daginik takip", description: "Ekip icinde kimin neye baktigi daha net hale gelir." },
        ],
      },
      {
        icon: "workflow",
        title: "Operasyonel Verimlilik",
        description: "Kedy, zamanla daha genis operasyon katmanlari icin temel olacak sekilde kurgulandi.",
        items: [
          { title: "Salon sureclerine uyum", description: "Teklif, takip ve randevu gibi birden fazla adimi destekler." },
          { title: "Kampanya icin zemin", description: "Sonradan geri kazanim veya segment bazli iletisim akislari eklenebilir." },
          { title: "Dijital duzen", description: "Mesajlasma tarafini yalniz bir sohbet kutusu olmaktan cikarir." },
        ],
      },
    ],
    closing: {
      title: "Kedy, sadece mesajlara cevap veren bir arac gibi degil; salonunuzun akisini sadelestiren bir sistem gibi tasarlandi.",
      description: "Detayli bir kurgu gormek veya ihtiyaciniza uygun paketi netlestirmek icin bizimle iletisime gecin.",
      primaryCta: "Iletisime Gec",
    },
  },
  en: {
    metadata: {
      title: "Features | Kedy",
      description: "Explore Kedy's salon-focused capabilities across messaging, AI automation, booking flows, team control, and operational efficiency.",
    },
    hero: {
      eyebrow: "Features",
      title: "Product value that starts with messaging and expands into operations.",
      description:
        "Kedy delivers immediate value through customer communication, while the architecture also leaves room for broader operational depth as the product grows.",
    },
    highlights: [
      {
        icon: "message",
        title: "Clearer communication flow",
        description: "A more organized way to handle customer demand across Instagram and WhatsApp.",
      },
      {
        icon: "sparkles",
        title: "Automation with conversion intent",
        description: "Built not just to answer, but to move the customer toward the next action.",
      },
      {
        icon: "growth",
        title: "A system you can grow into",
        description: "Ready to support broader workflows such as campaigns, follow-up, and digital operations later on.",
      },
    ],
    categories: [
      {
        icon: "message",
        title: "Message Management",
        description: "Built to make salon communication easier to track and easier to run.",
        items: [
          { title: "Less channel fragmentation", description: "Brings customer conversations into a more consistent operating rhythm." },
          { title: "Faster answers to recurring questions", description: "Helps with pricing, availability, and treatment-related questions." },
          { title: "Context-aware handling", description: "Keeps the conversation coherent as customer needs change." },
        ],
      },
      {
        icon: "sparkles",
        title: "AI Automation",
        description: "Designed to reduce repetitive work while keeping the customer experience controlled.",
        items: [
          { title: "Intent understanding", description: "Interprets what the customer wants and chooses an appropriate path." },
          { title: "Instant response layer", description: "Keeps the interaction moving even when the team is busy." },
          { title: "Selective automation", description: "Not everything has to be automated; the system stays flexible." },
        ],
      },
      {
        icon: "booking",
        title: "Booking Journeys",
        description: "Bridges the gap between inquiry and reservation with less friction.",
        items: [
          { title: "Magic booking link", description: "Shared at the right moment to help capture intent before it cools down." },
          { title: "Guided flow logic", description: "Customers move from information to action more naturally." },
          { title: "Reduced friction", description: "Cuts unnecessary back-and-forth before the reservation step." },
        ],
      },
      {
        icon: "team",
        title: "Team Control",
        description: "Lets automation and live staff work together in a practical way.",
        items: [
          { title: "Human takeover", description: "A team member can step in whenever the conversation requires it." },
          { title: "Role-friendly workflow", description: "Approvals, pricing nuance, or closing moments can stay with the right person." },
          { title: "Cleaner follow-up", description: "Reduces confusion around who should handle what next." },
        ],
      },
      {
        icon: "workflow",
        title: "Operational Efficiency",
        description: "Built with a wider operational vision than chat alone.",
        items: [
          { title: "Fits salon processes", description: "Supports the flow between customer messaging, follow-up, and appointment intent." },
          { title: "Campaign-ready foundation", description: "Makes it easier to add reactivation or targeted outreach later." },
          { title: "A more usable digital layer", description: "Moves messaging away from being an unmanaged inbox experience." },
        ],
      },
    ],
    closing: {
      title: "Kedy is designed to feel like a clean operating system for salon communication, not a generic automation widget.",
      description: "If you want to map the right setup for your team, reach out and we can shape the flow together.",
      primaryCta: "Contact us",
    },
  },
};
