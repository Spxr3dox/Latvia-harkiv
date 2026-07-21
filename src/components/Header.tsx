"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import { LOCALES, LOCALE_LABELS } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BrandMark, FlagStripe } from "@/components/CoatOfArms";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const p = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const nav = [
    { href: "/", label: dict.nav.home },
    { href: "/consulate", label: dict.nav.consulate },
    { href: "/consular", label: dict.nav.consular },
    { href: "/latvia-kharkiv", label: dict.nav.latviaKharkiv },
    { href: "/business-bridge", label: dict.nav.businessBridge },
    { href: "/innovation", label: dict.nav.innovation },
    { href: "/investment", label: dict.nav.investment },
    { href: "/cooperation", label: dict.nav.cooperation },
    { href: "/events", label: dict.nav.events },
    { href: "/media", label: dict.nav.media },
    { href: "/resources", label: dict.nav.resources },
    { href: "/contact", label: dict.nav.contact },
  ];

  const stripPath = (path: string) => {
    const parts = path.split("/");
    parts.splice(1, 1);
    return parts.join("/") || "/";
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-surface-border">
      <FlagStripe />
      <div className="container-x">
        <div className="flex items-center gap-4 py-4">
          <Link href={p("/")} className="flex items-center gap-3 shrink-0">
            <BrandMark className="h-11 w-11" />
            <div className="leading-tight">
              <div className="font-display text-[15px] font-semibold text-ink">
                {dict.meta.honoraryConsulate}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-ink-muted">
                {dict.meta.republic} · {dict.meta.inKharkiv}
              </div>
            </div>
          </Link>

          <div className="flex-1" />

          <div className="hidden lg:flex items-center gap-1 text-[13px] text-ink-soft">
            {LOCALES.map((l) => {
              const target = `/${l}${stripPath(pathname).slice(1) ? stripPath(pathname) : ""}`;
              return (
                <Link
                  key={l}
                  href={target}
                  className={`px-2 py-1 rounded-sm font-semibold tracking-wider transition ${
                    l === locale ? "text-brand-700" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {LOCALE_LABELS[l]}
                </Link>
              );
            })}
          </div>

          <button
            className="lg:hidden inline-flex flex-col gap-1.5 p-2 text-ink"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 pb-3 text-[13px] font-medium overflow-x-auto">
          {nav.map((item) => {
            const href = p(item.href);
            const isActive =
              item.href === "/"
                ? pathname === href || pathname === `/${locale}`
                : pathname.startsWith(href);
            return (
              <Link
                key={item.href}
                href={href}
                className={`whitespace-nowrap pb-1 border-b-2 transition ${
                  isActive ? "border-brand-600 text-brand-700" : "border-transparent text-ink-soft hover:text-ink hover:border-surface-border"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {open && (
          <div className="lg:hidden pb-4 -mt-2">
            <div className="flex flex-wrap gap-2 mb-3">
              {LOCALES.map((l) => {
                const target = `/${l}${stripPath(pathname).slice(1) ? stripPath(pathname) : ""}`;
                return (
                  <Link
                    key={l}
                    href={target}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-1 text-xs font-semibold border ${
                      l === locale ? "border-brand-600 text-brand-700" : "border-surface-border text-ink-muted"
                    }`}
                  >
                    {LOCALE_LABELS[l]}
                  </Link>
                );
              })}
            </div>
            <nav className="grid grid-cols-1 divide-y divide-surface-border border-t border-surface-border">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={p(item.href)}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-ink-soft hover:text-brand-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
