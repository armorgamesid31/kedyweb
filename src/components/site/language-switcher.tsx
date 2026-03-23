"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n";
import { switchLocaleInPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-2 py-1 backdrop-blur">
      <span className="hidden text-xs font-medium text-muted sm:inline">{label}</span>
      {(["tr", "en"] as const).map((item) => {
        const href = switchLocaleInPath(pathname || "/", item);
        const active = item === locale;

        return (
          <Link
            key={item}
            href={href}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition",
              active ? "bg-foreground text-white" : "text-muted hover:bg-black/5 hover:text-foreground",
            )}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
