import type { IconCard, Localized, SectionHeading } from "@/content/types";

type HomeSection = SectionHeading & {
  primaryCta?: string;
  secondaryCta?: string;
};

type HomeCopy = {
  metadata: {
    title: string;
    description: string;
  };
  hero: HomeSection & {
    primaryCta: string;
    secondaryCta: string;
    chips: string[];
    statCards: { value: string; label: string }[];
    visual: {
      inboxTitle: string;
      inboxSubtitle: string;
      bookingTitle: string;
      bookingSubtitle: string;
      bookingFlowStart: string;
      bookingFlowEnd: string;
      automationTitle: string;
      automationSubtitle: string;
      automationBullets: string[];
      messageStream: {
        sender: string;
        text: string;
        status: string;
      }[];
    };
  };
  trust: HomeSection & { items: IconCard[] };
  capabilities: HomeSection & { items: IconCard[] };
  scenario: HomeSection & {
    steps: {
      title: string;
      description: string;
      channel: string;
    }[];
  };
  comparison: HomeSection & {
    manualLabel: string;
    kedyLabel: string;
    rows: { label: string; manual: string; kedy: string }[];
  };
  pricingPreview: HomeSection & { note: string };
  faq: HomeSection;
  finalCta: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export const homeCopy: Localized<HomeCopy> = {
  tr: {
    metadata: {
      title: "Kedy | Güzellik salonları için yapay zekâ destekli iletişim ve operasyon",
      description:
        "Instagram ve WhatsApp mesajlarını hızla yönetin, soruları otomatik karşılayın ve konuşmaları randevuya dönüştürün.",
    },
    hero: {
      eyebrow: "Güzellik salonları için tasarlandı",
      title: "Instagram ve WhatsApp mesajlarını randevuya dönüştürün.",
      description:
        "Kedy; yoğun çalışan salon ekipleri için geliştirilen, yapay zekâ destekli bir iletişim ve operasyon platformudur. Mesajları karşılar, doğru anda yanıt verir, randevu akışını hızlandırır ve gerektiğinde konuşmayı ekibinize devreder.",
      primaryCta: "Hizmete Abone Ol",
      secondaryCta: "Fiyatları Gör",
      chips: ["Instagram + WhatsApp", "İnsan devir modu", "Randevu linki akışı"],
      statCards: [
        { value: "7/24", label: "mesaj karşılama düzeni" },
        { value: "tek akışta", label: "yanıt, yönlendirme ve rezervasyon" },
        { value: "salon odaklı", label: "senaryolar ve operasyon mantığı" },
      ],
      visual: {
        inboxTitle: "Gelen kutusu akışı",
        inboxSubtitle: "Instagram ve WhatsApp aynı operasyon düzeninde.",
        bookingTitle: "Akıllı randevu linki",
        bookingSubtitle: "Doğru anda paylaşılır, rezervasyona giden yolu kısaltır.",
        bookingFlowStart: "Uygun saat seçimi",
        bookingFlowEnd: "Hızlı rezervasyon",
        automationTitle: "Yapay zekâ + insan kontrolü",
        automationSubtitle: "Tekrarlayan soruları sistem karşılar, özel durumları ekibiniz yönetir.",
        automationBullets: [
          "Sık sorular otomatik karşılanır",
          "Bağlam değiştiğinde insan devir modu açılır",
          "Mesajlar randevu niyetine göre yönlendirilir",
        ],
        messageStream: [
          {
            sender: "Instagram DM",
            text: "İpek kirpik için yarın uygun saat var mı?",
            status: "Yeni mesaj",
          },
          {
            sender: "Kedy",
            text: "Merhaba, uygun saatleri paylaşayım. Dilerseniz hemen randevu linkini de gönderebilirim.",
            status: "Yapay zekâ yanıtı",
          },
          {
            sender: "Kedy",
            text: "Buradan size uygun saat seçebilirsiniz: kedy.app/randevu",
            status: "Randevu linki gönderildi",
          },
        ],
      },
    },
    trust: {
      eyebrow: "Neden Kedy",
      title: "Salonun düzenini bozmadan, işleyişi hızlandırır.",
      description:
        "Kedy, yalnızca otomatik cevap yazan bir araç gibi davranmaz. Yoğun mesaj trafiği olan salonlarda hem iletişimi hem de operasyon düzenini daha kontrollü hale getirir.",
      items: [
        {
          icon: "message",
          title: "Salonlara özel senaryolar",
          description: "Fiyat soruları, uygunluk, işlem detayları ve randevu yönlendirmeleri gibi gerçek salon ihtiyaçlarına göre kurgulanır.",
        },
        {
          icon: "clock",
          title: "Hızlı kurulum",
          description: "Yoğun operasyonu aksatmadan temel iletişim akışını kısa sürede canlıya alacak şekilde planlanır.",
        },
        {
          icon: "sparkles",
          title: "Gerektiğinde tam otomasyon",
          description: "Tekrarlayan soruları anında karşılar, ekibiniz üzerindeki manuel yükü azaltır.",
        },
        {
          icon: "handover",
          title: "Gerektiğinde insan devri",
          description: "Özel durumlarda veya ikna gerektiren anlarda ekip sohbete doğrudan dahil olabilir.",
        },
        {
          icon: "booking",
          title: "Mesaj içinde randevu akışı",
          description: "Randevu linki konuşmanın doğal akışında paylaşılır ve rezervasyona geçişi hızlandırır.",
        },
        {
          icon: "workflow",
          title: "Yoğun ekipler için düzen",
          description: "Birden fazla adım, kişi ve kanal içeren salon süreçlerinde karmaşayı azaltır.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Sadece chatbot değil",
      title: "Mesajlaşmanın ötesine geçen, işletme akışını toparlayan bir katman.",
      description:
        "Kedy’nin mimarisi, bugünkü mesaj yönetimi ihtiyacını çözerken ileride kampanya, takip ve operasyonel akışları da aynı sistem mantığında birleştirecek şekilde tasarlandı.",
      items: [
        {
          icon: "message",
          title: "Mesaj Yönetimi",
          description: "Instagram ve WhatsApp’taki yoğun iletişimi tek bir operasyon mantığıyla daha izlenebilir hale getirir.",
        },
        {
          icon: "sparkles",
          title: "Otomatik Yanıtlar",
          description: "Sık gelen soruları hızlı ve tutarlı şekilde karşılar, yanıt kalitesini kişilere bağlı olmaktan çıkarır.",
        },
        {
          icon: "handover",
          title: "İnsan Devir Modu",
          description: "Görüşmenin kontrolü sizde kalır. Gerektiğinde ekip müdahale eder, sistem ise bağlamı korur.",
        },
        {
          icon: "booking",
          title: "Magic Booking Link",
          description: "Doğru anda gönderilen rezervasyon bağlantısı, mesajdan randevuya geçiş yolunu kısaltır.",
        },
        {
          icon: "workflow",
          title: "Operasyonel Akışlar",
          description: "Yalnızca mesajları değil; salon içi süreçleri, yönlendirmeleri ve takip yapılarını da destekler.",
        },
        {
          icon: "campaign",
          title: "Kampanya ve Takip",
          description: "Geri dönmeyen potansiyel müşterileri veya belirli segmentleri yeniden harekete geçirmek için zemin hazırlar.",
        },
      ],
    },
    scenario: {
      eyebrow: "Gerçek bir akışta nasıl çalışır",
      title: "Mesaj gelir, niyet anlaşılır, yanıt verilir ve rezervasyon kapanışa yaklaşır.",
      description:
        "Bu deneyim teknik bir demo gibi değil; salon sahibinin günlük yükünü azaltan ve dönüşüm ihtimalini artıran pratik bir akış gibi hissettirmelidir.",
      steps: [
        {
          title: "Müşteri yazıyor",
          description: "Instagram DM veya WhatsApp üzerinden fiyat, uygun saat ya da işlem detayı soruyor.",
          channel: "1",
        },
        {
          title: "Kedy niyeti anlıyor",
          description: "Konuşmanın neye ihtiyaç duyduğunu anlayıp uygun cevabı ve sonraki adımı belirliyor.",
          channel: "2",
        },
        {
          title: "Anında yanıt ve randevu linki",
          description: "Bekletmeden cevap veriyor, uygun olduğunda randevu linkini paylaşıyor ve kullanıcıyı yönlendiriyor.",
          channel: "3",
        },
        {
          title: "Gerektiğinde ekip devralıyor",
          description: "Özel bir talep varsa veya karar desteği gerekiyorsa ekip konuşmayı kaldığı yerden alıyor.",
          channel: "4",
        },
      ],
    },
    comparison: {
      eyebrow: "Karşılaştırma",
      title: "Manuel mesajlaşmaya göre daha hızlı, daha tutarlı ve daha takip edilebilir.",
      description:
        "Salon ekipleri için asıl fark yalnızca hızda değil; kaçırılan talebin azalmasında ve iletişimin standartlaşmasında ortaya çıkar.",
      manualLabel: "Manuel salon mesajlaşması",
      kedyLabel: "Kedy ile",
      rows: [
        { label: "Yanıt hızı", manual: "Müsait olan kişiye bağlı", kedy: "Anında veya tanımlanan süre içinde" },
        { label: "Kaçırılan müşteri riski", manual: "Yoğun anlarda daha yüksek", kedy: "Akış takip altında ve daha kontrollü" },
        { label: "Ekip iş yükü", manual: "Tekrarlayan sorular personeli yoruyor", kedy: "Rutin soruları sistem karşılıyor" },
        { label: "Randevuya geçiş", manual: "Mesajlaşma uzayabiliyor", kedy: "Randevu linkiyle daha net yönlendirme" },
        { label: "Tutarlılık", manual: "Kişiye göre değişebiliyor", kedy: "Daha standart ve kontrollü iletişim" },
        { label: "Çalışma dışı saatler", manual: "Cevap gecikebiliyor", kedy: "Salon kapalıyken bile akış devam edebiliyor" },
      ],
    },
    pricingPreview: {
      eyebrow: "Fiyatlandırma",
      title: "Başlamak kolay, ihtiyaç büyüdükçe paket de genişleyebilir.",
      description:
        "Paketler kolayca güncellenebilir bir yapı üzerinden yönetiliyor. Bu sayede lansman sonrası fiyat değişikliklerini teknik borç oluşturmadan yapabilirsiniz.",
      note: "Tüm planlar şimdilik aylık gösterimle hazırlandı. Sonraki aşamada yıllık seçenekler ve ek modüller aynı yapıya kolayca eklenebilir.",
    },
    faq: {
      eyebrow: "Sık sorulanlar",
      title: "Salon sahiplerinin ilk bakışta sorduğu sorular.",
      description: "İlk temas anında güven vermek için cevapları net, sakin ve satışa destek olacak tonda tuttuk.",
    },
    finalCta: {
      title: "Mesaj yükünü azaltıp randevu akışınızı güçlendirmek istiyorsanız, Kedy ile başlayın.",
      description:
        "İster doğrudan abonelik niyetiyle, ister önce sürecinizi konuşmak için ulaşın. Kedy, salonunuzun gerçek iş akışına göre konumlanır.",
      primaryCta: "Hizmete Abone Ol",
      secondaryCta: "İletişime Geç",
    },
  },
  en: {
    metadata: {
      title: "Kedy | AI-powered communication and operations for beauty salons",
      description:
        "Manage Instagram and WhatsApp conversations, respond faster, and turn customer chats into bookings with Kedy.",
    },
    hero: {
      eyebrow: "Built for beauty salons",
      title: "Turn Instagram and WhatsApp conversations into bookings.",
      description:
        "Kedy is an AI-powered communication and operations platform for appointment-based beauty salons. It handles incoming messages, replies at the right moment, speeds up booking flows, and hands the conversation to your team whenever human input matters.",
      primaryCta: "Subscribe",
      secondaryCta: "View pricing",
      chips: ["Instagram + WhatsApp", "Human takeover", "Booking link flow"],
      statCards: [
        { value: "24/7", label: "message coverage" },
        { value: "one operating flow", label: "reply, routing, and booking" },
        { value: "salon-specific", label: "scenarios and operational logic" },
      ],
      visual: {
        inboxTitle: "Conversation flow",
        inboxSubtitle: "Instagram and WhatsApp handled in one system rhythm.",
        bookingTitle: "Magic booking link",
        bookingSubtitle: "Shared at the right moment to reduce booking friction.",
        bookingFlowStart: "Choose an available slot",
        bookingFlowEnd: "Complete the booking faster",
        automationTitle: "AI with human control",
        automationSubtitle: "Routine questions are automated, nuanced cases stay with your team.",
        automationBullets: [
          "Recurring questions are handled automatically",
          "Human takeover opens when context changes",
          "Conversations are routed by booking intent",
        ],
        messageStream: [
          {
            sender: "Instagram DM",
            text: "Do you have availability tomorrow for lash extensions?",
            status: "New inquiry",
          },
          {
            sender: "Kedy",
            text: "Hi, I can share the available slots right away. If you want, I can also send the booking link now.",
            status: "AI reply",
          },
          {
            sender: "Kedy",
            text: "You can choose a suitable time here: kedy.app/booking",
            status: "Booking link sent",
          },
        ],
      },
    },
    trust: {
      eyebrow: "Why Kedy",
      title: "Designed around real salon workflows, not generic automation.",
      description:
        "Kedy is not positioned as a simple auto-reply bot. It is built to reduce communication load, protect conversion opportunities, and support the way busy salon teams actually work.",
      items: [
        {
          icon: "message",
          title: "Salon-specific scenarios",
          description: "Built around real customer questions such as pricing, availability, treatment details, and booking intent.",
        },
        {
          icon: "clock",
          title: "Fast setup",
          description: "Planned to go live quickly without disrupting the daily pace of the salon.",
        },
        {
          icon: "sparkles",
          title: "Automation when it helps",
          description: "Handles repetitive inquiries instantly and reduces manual front-desk workload.",
        },
        {
          icon: "handover",
          title: "Human takeover when it matters",
          description: "Your team can step in whenever the conversation needs nuance, approval, or sales judgment.",
        },
        {
          icon: "booking",
          title: "Booking flow inside the chat",
          description: "The booking link appears naturally in the messaging journey to move the customer closer to reservation.",
        },
        {
          icon: "workflow",
          title: "Built for busy teams",
          description: "Helps create order inside multi-step, multi-person, high-volume salon workflows.",
        },
      ],
    },
    capabilities: {
      eyebrow: "More than a chatbot",
      title: "A cleaner operational layer for salon communication and beyond.",
      description:
        "Kedy solves today's messaging workload while leaving room for broader operational value over time, including campaigns, follow-up flows, and digital service layers.",
      items: [
        {
          icon: "message",
          title: "Message Management",
          description: "Organizes high-volume Instagram and WhatsApp traffic into a clearer operating flow.",
        },
        {
          icon: "sparkles",
          title: "Automated Replies",
          description: "Responds to recurring questions with greater speed and consistency.",
        },
        {
          icon: "handover",
          title: "Human Takeover",
          description: "Keeps your team in control when a live touch is needed to close or clarify.",
        },
        {
          icon: "booking",
          title: "Magic Booking Link",
          description: "Moves conversations toward reservation without adding unnecessary friction.",
        },
        {
          icon: "workflow",
          title: "Operational Workflows",
          description: "Creates a foundation for broader salon processes, not just message handling.",
        },
        {
          icon: "campaign",
          title: "Campaigns and Follow-up",
          description: "Leaves room for future reactivation, campaign, and retention-driven communication layers.",
        },
      ],
    },
    scenario: {
      eyebrow: "A realistic usage story",
      title: "A customer asks, Kedy understands, replies instantly, and moves the conversation forward.",
      description:
        "This is not meant to feel like a technical workflow chart. It should feel like a cleaner day inside a busy beauty salon.",
      steps: [
        {
          title: "The customer reaches out",
          description: "A question arrives on Instagram or WhatsApp about pricing, timing, or service details.",
          channel: "1",
        },
        {
          title: "Kedy reads the intent",
          description: "The system understands what the customer is trying to achieve and chooses the right next step.",
          channel: "2",
        },
        {
          title: "It replies and shares the link",
          description: "The answer arrives quickly, and the booking link is shared when the timing makes sense.",
          channel: "3",
        },
        {
          title: "Your team steps in if needed",
          description: "If the situation needs a human touch, the conversation is smoothly handed over.",
          channel: "4",
        },
      ],
    },
    comparison: {
      eyebrow: "Comparison",
      title: "Faster, more consistent, and easier to control than manual salon messaging.",
      description:
        "The real value is not only speed. It is also lower missed-demand risk, less repetitive work, and a more reliable customer experience.",
      manualLabel: "Manual salon messaging",
      kedyLabel: "With Kedy",
      rows: [
        { label: "Response speed", manual: "Depends on who is available", kedy: "Immediate or rule-based response windows" },
        { label: "Missed customer risk", manual: "Higher during busy hours", kedy: "Lower through more controlled flows" },
        { label: "Staff workload", manual: "Repetitive questions consume team time", kedy: "Routine volume is handled by the system" },
        { label: "Booking conversion flow", manual: "Often fragmented and slow", kedy: "Clearer routing with booking links" },
        { label: "Consistency", manual: "Varies by person and shift", kedy: "More standardized communication" },
        { label: "After-hours coverage", manual: "Replies may be delayed", kedy: "The flow can continue outside business hours" },
      ],
    },
    pricingPreview: {
      eyebrow: "Pricing",
      title: "Simple to start, flexible enough to grow with your salon.",
      description:
        "Plans are managed from a single editable config so the pricing layer can evolve after launch without creating unnecessary technical overhead.",
      note: "The current setup uses monthly billing only. Annual options and add-ons can be introduced later through the same structure.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions salon owners are likely to ask first.",
      description: "Answers are written to create clarity and confidence, not to overload the page.",
    },
    finalCta: {
      title: "If you want less message chaos and a stronger booking flow, start with Kedy.",
      description:
        "You can come in ready to subscribe or simply start with a conversation about your salon workflow. The setup can then be shaped around the way your team actually operates.",
      primaryCta: "Subscribe",
      secondaryCta: "Contact us",
    },
  },
};
