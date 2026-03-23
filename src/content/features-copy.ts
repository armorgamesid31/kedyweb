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
      title: "Özellikler | Kedy",
      description: "Kedy’nin salon odaklı mesaj yönetimi, yapay zekâ otomasyonu, randevu akışları ve ekip kontrolü özelliklerini keşfedin.",
    },
    hero: {
      eyebrow: "Özellikler",
      title: "Salonun iletişim tarafını düzene sokan, operasyon tarafını da güçlendiren özellikler.",
      description:
        "Kedy’nin bugünkü değeri mesaj yönetiminde başlar; ancak altyapısı yalnızca otomatik cevap vermekle sınırlı kalmayacak şekilde tasarlandı.",
    },
    highlights: [
      {
        icon: "message",
        title: "Tek akışta görünen iletişim",
        description: "Dağınık mesajlaşma yerine daha düzenli, izlenebilir ve aksiyon alınabilir bir salon akışı sunar.",
      },
      {
        icon: "sparkles",
        title: "Dönüşüme yakın otomasyon",
        description: "Amaç yalnızca cevap vermek değil; doğru anda müşteriyi randevuya yaklaştıran bir akış kurmak.",
      },
      {
        icon: "growth",
        title: "Büyümeye açık sistem mantığı",
        description: "Kampanya, takip ve web varlığı gibi ileri katmanlar için de sağlam bir temel oluşturur.",
      },
    ],
    categories: [
      {
        icon: "message",
        title: "Mesaj Yönetimi",
        description: "Instagram ve WhatsApp tarafındaki talepleri daha kontrollü yönetmek için tasarlanmıştır.",
        items: [
          { title: "Kanal bazlı dağınıklığı azaltır", description: "Mesajlar daha düzenli bir operasyon mantığıyla ele alınır." },
          { title: "Sık soruları hızlı karşılar", description: "Fiyat, uygunluk ve işlem detayları daha akıcı biçimde yanıtlanır." },
          { title: "Konuşma bağlamını korur", description: "Soru değiştiğinde veya ekip devreye girdiğinde bağlam kaybı azalır." },
        ],
      },
      {
        icon: "sparkles",
        title: "Yapay Zekâ Otomasyonu",
        description: "Tekrarlayan mesaj yükünü azaltırken yanıt kalitesini daha tutarlı hale getirmeyi hedefler.",
        items: [
          { title: "Niyet anlama", description: "Müşterinin ne sorduğunu ve hangi adıma yönlendirilmesi gerektiğini yorumlar." },
          { title: "Anında cevap", description: "Ekip müsait olmasa bile süreci bekletmeden ilerletir." },
          { title: "Kontrollü otomasyon", description: "Her şeyin otomatik olması gerekmez; kritik anlarda ekip kontrolü korunur." },
        ],
      },
      {
        icon: "booking",
        title: "Randevu Akışları",
        description: "Konuşmayı gereksiz yere uzatmadan rezervasyon tarafına geçiş kurar.",
        items: [
          { title: "Magic booking link", description: "Doğru anda paylaşılan link, karar anını kaçırmamanıza yardımcı olur." },
          { title: "Yönlendirme mantığı", description: "Müşteri önce bilgi alır, sonra aksiyona geçecek şekilde akış ilerler." },
          { title: "Daha az sürtünme", description: "Mesajlaşma ile randevu arasındaki adımları sadeleştirir." },
        ],
      },
      {
        icon: "team",
        title: "Ekip Kontrolü",
        description: "Otomasyonun yanında insan müdahalesini de pratik ve kullanışlı hale getirir.",
        items: [
          { title: "İnsan devralma", description: "Konuşma gerektiğinde hızlıca ekibe aktarılabilir." },
          { title: "Rollere uygun işleyiş", description: "Onay veya satış kapama gibi anlarda doğru kişi devreye girebilir." },
          { title: "Daha az dağınık takip", description: "Ekip içinde kimin neyle ilgilendiği daha net hale gelir." },
        ],
      },
      {
        icon: "workflow",
        title: "Operasyonel Verimlilik",
        description: "Kedy, zamanla daha geniş operasyon katmanları için temel olacak şekilde kurgulandı.",
        items: [
          { title: "Salon süreçlerine uyum", description: "Teklif, takip ve randevu gibi birden fazla adımı destekler." },
          { title: "Kampanya için zemin", description: "İleride geri kazanım veya segment bazlı iletişim akışları eklenebilir." },
          { title: "Dijital düzen", description: "Mesajlaşma tarafını yalnızca bir sohbet kutusu olmaktan çıkarır." },
        ],
      },
    ],
    closing: {
      title: "Kedy, yalnızca mesajlara cevap veren bir araç değil; salonunuzun akışını sadeleştiren bir sistem olarak tasarlandı.",
      description: "Daha detaylı bir kurgu görmek veya işletmenize uygun paketi netleştirmek için bizimle iletişime geçin.",
      primaryCta: "İletişime Geç",
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
