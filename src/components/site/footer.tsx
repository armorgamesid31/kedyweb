import Link from "next/link";

import { footerCopy } from "@/content/pages-copy";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const content = footerCopy[locale];

  return (
    <footer className="border-t border-black/6 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_repeat(2,0.7fr)] lg:px-8">
        <div className="max-w-md space-y-4">
          <div className="font-display text-3xl font-extrabold tracking-tight text-foreground">Kedy</div>
          <p className="text-sm leading-7 text-muted">{content.description}</p>
        </div>

        {content.columns.map((column) => (
          <div key={column.title} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground/70">{column.title}</h3>
            <div className="space-y-3">
              {column.links.map((link) => (
                <Link key={link.href} href={localizeHref(locale, link.href)} className="block text-sm text-muted transition hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-black/6 px-4 py-5 text-center text-sm text-muted sm:px-6 lg:px-8">
        {new Date().getFullYear()} Kedy. {content.bottom}
      </div>
    </footer>
  );
}
