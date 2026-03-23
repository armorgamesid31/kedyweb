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
      { label: "Ozellikler", href: "/features" },
      { label: "Fiyatlandirma", href: "/pricing" },
      { label: "Iletisim", href: "/contact" },
    ],
    loginLabel: "Giris Yap",
    subscribeLabel: "Hizmete Abone Ol",
    languageLabel: "Dil",
    mobileLabel: "Menu",
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
