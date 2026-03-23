"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import type { NavigationItem } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

export function MobileNav({
  locale,
  label,
  links,
  loginLabel,
  subscribeLabel,
  loginHref,
  subscribeHref,
}: {
  locale: Locale;
  label: string;
  links: NavigationItem[];
  loginLabel: string;
  subscribeLabel: string;
  loginHref: string;
  subscribeHref: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={label}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white text-foreground shadow-sm"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[70] bg-background">
          <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_right,rgba(244,122,32,0.14),transparent_22%),radial-gradient(circle_at_top_left,rgba(0,184,255,0.10),transparent_18%),linear-gradient(180deg,#ffffff_0%,#f7f6f6_100%)] p-6">
            <div className="flex items-center justify-between border-b border-black/6 pb-6">
              <Link href={localizeHref(locale, "/")} className="font-display text-2xl font-bold text-foreground" onClick={() => setOpen(false)}>
                Kedy
              </Link>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/8 bg-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={localizeHref(locale, item.href)}
                  className="rounded-2xl bg-white/85 px-4 py-3 text-base font-medium text-foreground shadow-sm ring-1 ring-black/6 transition hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-3 pt-8">
              <Button asChild variant="secondary" className="w-full">
                <Link href={localizeHref(locale, loginHref)} onClick={() => setOpen(false)}>
                  {loginLabel}
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href={localizeHref(locale, subscribeHref)} onClick={() => setOpen(false)}>
                  {subscribeLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
