import type { Localized, NavigationItem } from "@/content/types";

type NavigationContent = {
  links: NavigationItem[];
  loginLabel: string;
  subscribeLabel: string;
  languageLabel: string;
  mobileLabel: string;
};

export const navigation: Localized<NavigationContent> = {
  tr: {
    links: [
      { label: "Özellikler", href: "/features" },
      { label: "Fiyatlandırma", href: "/pricing" },
      { label: "İletişim", href: "/contact" },
    ],
    loginLabel: "Giriş Yap",
    subscribeLabel: "Hizmete Abone Ol",
    languageLabel: "Dil",
    mobileLabel: "Menü",
  },
  en: {
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
    loginLabel: "Log In",
    subscribeLabel: "Subscribe",
    languageLabel: "Language",
    mobileLabel: "Menu",
  },
};
