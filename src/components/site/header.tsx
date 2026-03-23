import Link from "next/link";

import { navigation } from "@/content/navigation";
import { sharedCopy } from "@/content/pages-copy";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { MobileNav } from "@/components/site/mobile-nav";

export function Header({ locale }: { locale: Locale }) {
  const nav = navigation[locale];
  const shared = sharedCopy[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localizeHref(locale, "/")} className="font-display text-2xl font-extrabold tracking-tight text-foreground">
          Kedy
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.links.map((item) => (
            <Link key={item.href} href={localizeHref(locale, item.href)} className="text-sm font-medium text-muted transition hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={nav.languageLabel} />
          <Button asChild variant="ghost">
            <Link href={localizeHref(locale, shared.loginHref)}>{nav.loginLabel}</Link>
          </Button>
          <Button asChild>
            <Link href={localizeHref(locale, shared.subscribeHref)}>{nav.subscribeLabel}</Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-3 lg:hidden">
          <LanguageSwitcher locale={locale} label={nav.languageLabel} />
          <MobileNav
            locale={locale}
            label={nav.mobileLabel}
            links={nav.links}
            loginLabel={nav.loginLabel}
            subscribeLabel={nav.subscribeLabel}
            loginHref={shared.loginHref}
            subscribeHref={shared.subscribeHref}
          />
        </div>
      </div>
    </header>
  );
}
