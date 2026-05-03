export const siteConfig = {
  name: "Kedy",
  siteUrl: "https://kedyapp.com",
  description: {
    tr: "Güzellik salonları için yapay zekâ destekli iletişim ve operasyon platformu.",
    en: "AI-powered communication and operations platform for appointment-based beauty salons.",
  },
  contact: {
    email: "hello@kedyapp.com",
    phone: "+905364568084",
    instagram: "@kedyapp",
  },
  legalPaths: ["/privacy-policy", "/terms-of-service", "/data-deletion"],
  staticPaths: ["", "/features", "/pricing", "/contact"],
} as const;
