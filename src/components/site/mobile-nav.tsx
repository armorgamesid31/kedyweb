"use client";

import Link from "next/link";
import { useState } from "react";
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
        <div className="fixed inset-0 z-50 bg-foreground/45 backdrop-blur-sm">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-background p-6">
            <div className="flex items-center justify-between">
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
                  className="rounded-2xl px-4 py-3 text-base font-medium text-foreground hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-3">
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
