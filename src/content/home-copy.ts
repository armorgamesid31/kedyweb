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
      title: "Kedy | Guzellik salonlari icin AI destekli iletisim ve operasyon",
      description:
        "Instagram ve WhatsApp mesajlarini hizla yonetin, sorulari otomatik karsilayin ve konusmalari randevuya donusturun.",
    },
    hero: {
      eyebrow: "Guzellik salonlari icin tasarlandi",
      title: "Instagram ve WhatsApp mesajlarini randevuya donusturun.",
      description:
        "Kedy; yogun salon ekipleri icin gelistirilmis, yapay zeka destekli iletisim ve operasyon platformudur. Mesajlari karsilar, uygun anda yanit verir, randevu akisini hizlandirir ve gerektiginde konusmayi ekibinize devreder.",
      primaryCta: "Hizmete Abone Ol",
      secondaryCta: "Fiyatlari Gor",
      chips: ["Instagram + WhatsApp", "Insan devir modu", "Booking link akisi"],
      statCards: [
        { value: "7/24", label: "mesaj karsilama duzeni" },
        { value: "tek akista", label: "yanit, yonlendirme ve rezervasyon" },
        { value: "salon odakli", label: "senaryolar ve operasyon mantigi" },
      ],
      visual: {
        inboxTitle: "Gelen kutusu akisi",
        inboxSubtitle: "Instagram ve WhatsApp ayni operasyon duzeninde.",
        bookingTitle: "Magic booking link",
        bookingSubtitle: "Dogru anda paylasilir, rezervasyona giden yolu kisaltir.",
        bookingFlowStart: "Uygun saat secimi",
        bookingFlowEnd: "Hizli rezervasyon",
        automationTitle: "AI + insan kontrolu",
        automationSubtitle: "Tekrarlayan sorulari otomatik, ozel durumlari ekibiniz yonetir.",
        automationBullets: [
          "Sik sorular otomatik karsilanir",
          "Baglam degistiginde insan devir modu acilir",
          "Mesajlar randevu niyetine gore yonlenir",
        ],
        messageStream: [
          {
            sender: "Instagram DM",
            text: "Ipek kirpik icin yarin uygun saat var mi?",
            status: "Yeni mesaj",
          },
          {
            sender: "Kedy",
            text: "Merhaba, uygun saatleri paylasayim. Dilerseniz hemen randevu linkini de gonderebilirim.",
            status: "AI yaniti",
          },
          {
            sender: "Kedy",
            text: "Buradan size uygun saat secilebilir: kedy.app/randevu",
            status: "Booking link gonderildi",
          },
        ],
      },
    },
    trust: {
      eyebrow: "Neden Kedy",
      title: "Salona ozel akislari bozmadan, onlari hizlandirir.",
      description:
        "Kedy, sadece cevap yazan bir arac gibi davranmaz. Yogun mesaj trafigi olan salonlarin hem iletisim tarafini hem de operasyon duzenini daha kontrollu hale getirir.",
      items: [
        {
          icon: "message",
          title: "Salon odakli senaryolar",
          description: "Fiyat sorulari, uygunluk, islem detaylari ve randevu yonlendirmeleri gibi gercek salon konularina gore kurgulanir.",
        },
        {
          icon: "clock",
          title: "Hizli kurulum",
          description: "Yogun operasyonu bekletmeden temel iletisim akisini kisa surede canliya alacak bicimde planlanir.",
        },
        {
          icon: "sparkles",
          title: "Ihtiyac oldugunda tam otomasyon",
          description: "Tekrarlayan sorulara aninda doner, ekip uzerindeki manuel yuk azaltir.",
        },
        {
          icon: "handover",
          title: "Gerektiginde insan devri",
          description: "Ozel durumlarda veya ikna gerektiren anlarda ekip sohbete dogrudan dahil olabilir.",
        },
        {
          icon: "booking",
          title: "Mesaj icinde booking akisi",
          description: "Randevu linki, konusmanin dogal akisinda paylasilarak rezervasyona gecisi hizlandirir.",
        },
        {
          icon: "workflow",
          title: "Yogun ekipler icin duzen",
          description: "Birden fazla adim, birden fazla kisi ve birden fazla kanal olan salonlarda karmasayi azaltir.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Sadece chatbot degil",
      title: "Mesajlasmanin otesinde, isletme akisini toparlayan bir katman.",
      description:
        "Kedy'nin mimarisi, bugunku mesaj yonetimi ihtiyacini cozerken ileride kampanya, takip ve operasyonel akislari da ayni sistem mantigina baglayacak sekilde dusunuldu.",
      items: [
        {
          icon: "message",
          title: "Mesaj Yonetimi",
          description: "Instagram ve WhatsApp'taki yogun iletisimi tek bir operasyon mantigi ile daha izlenebilir hale getirir.",
        },
        {
          icon: "sparkles",
          title: "Otomatik Yanitlar",
          description: "Sik gelen sorulari hizli ve tutarli sekilde karsilar, cevap kalitesini kisilere bagli hale getirmez.",
        },
        {
          icon: "handover",
          title: "Insan Devir Modu",
          description: "Gorusmenin kontrolu sizde kalir. Gerektiginde ekip mudahale eder, sistem ise baglami korur.",
        },
        {
          icon: "booking",
          title: "Magic Booking Link",
          description: "Dogru anda gonderilen rezervasyon baglantisi, mesajdan randevuya gecis yolunu kisaltir.",
        },
        {
          icon: "workflow",
          title: "Operasyonel Akislar",
          description: "Sadece mesaj degil; salon ici surecler, yonlendirmeler ve takip yapilari icin de temel olusturur.",
        },
        {
          icon: "campaign",
          title: "Kampanya ve Takip",
          description: "Geri donmeyen potansiyel musterileri veya belirli segmentleri yeniden harekete gecirmek icin zemin hazirlar.",
        },
      ],
    },
    scenario: {
      eyebrow: "Gercek bir akista nasil calisir",
      title: "Mesaj gelir, niyet anlasilir, yanit verilir, rezervasyon kapanisa yaklasir.",
      description:
        "Bu deneyim teknik bir demo gibi degil; salon sahibinin gun icindeki is yuku azaltan, donusum ihtimalini artiran pratik bir akis gibi hissettirmelidir.",
      steps: [
        {
          title: "Musteri yaziyor",
          description: "Instagram DM veya WhatsApp'tan fiyat, uygun saat ya da islem detayi soruluyor.",
          channel: "1",
        },
        {
          title: "Kedy niyeti anliyor",
          description: "Konusmanin neye ihtiyac duydugunu ayiklayip uygun cevabi ve sonraki adimi belirliyor.",
          channel: "2",
        },
        {
          title: "Aninda yanit ve booking link",
          description: "Bekletmeden cevap veriyor, uygun oldugunda randevu linkini paylasiyor ve kullaniciyi yonlendiriyor.",
          channel: "3",
        },
        {
          title: "Gerektiginde ekip devraliyor",
          description: "Ozel bir talep varsa veya karar destegi gerekiyorsa ekip konusmayi kaldigi yerden aliyor.",
          channel: "4",
        },
      ],
    },
    comparison: {
      eyebrow: "Karsilastirma",
      title: "Manuel mesajlasmaya gore daha hizli, daha tutarli ve daha takip edilebilir.",
      description:
        "Salon ekipleri icin asil fark, sadece hizda degil; kacirilan talebin azalmasinda ve yanitin standartlasmasinda ortaya cikar.",
      manualLabel: "Manuel salon mesajlasmasi",
      kedyLabel: "Kedy ile",
      rows: [
        { label: "Yanit hizi", manual: "Musait olan kisiye bagli", kedy: "Aninda veya kurgulanan sure icinde" },
        { label: "Kacirilan musteri riski", manual: "Yogun anlarda yuksek", kedy: "Akis takip altinda ve daha kontrollu" },
        { label: "Ekip is yuku", manual: "Tekrarlayan sorular personeli yoruyor", kedy: "Rutin sorulari sistem karsiliyor" },
        { label: "Randevuya gecis", manual: "Mesajlasma uzayabiliyor", kedy: "Booking link ile daha net yonlendirme" },
        { label: "Tutarlilik", manual: "Kisiye gore degisebilir", kedy: "Daha standart ve kontrollu iletisim" },
        { label: "Calisma disi saatler", manual: "Cevap gecikebilir", kedy: "Salon kapaliyken bile akis devam edebilir" },
      ],
    },
    pricingPreview: {
      eyebrow: "Fiyatlandirma",
      title: "Baslamak kolay, kapsam buyudukce paket de buyuyebilir.",
      description:
        "Paketler kolayca guncellenebilir bir config uzerinden yonetiliyor. Bu yapi, MVP'den sonraki fiyat revizyonlarini teknik borc olusturmadan yapmanizi saglar.",
      note: "Tum planlar aylik gosterimle hazirlandi. Sonraki asamada yillik secenek ve ek moduller ayni yapiya eklenebilir.",
    },
    faq: {
      eyebrow: "Sik sorulanlar",
      title: "Salon sahiplerinin ilk bakista sordugu sorular.",
      description: "Sayfa ilk gorusmede guven vermeli; bu nedenle cevaplar net, sakin ve satisa destek olacak tonda tutuldu.",
    },
    finalCta: {
      title: "Mesaj yukunu azaltip randevu akisinizi guclendirmek istiyorsaniz, Kedy ile baslayin.",
      description:
        "Ister dogrudan abonelik niyetiyle, ister once surecinizi konusmak icin ulasin. Kedy, salonunuzun gercek is akisina gore konumlanir.",
      primaryCta: "Hizmete Abone Ol",
      secondaryCta: "Iletisime Gec",
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
