"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { LOCALES, LOCALE_LABELS } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BrandMark, FlagStripe } from "@/components/CoatOfArms";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const p = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
            <BrandMark className="h-7 w-11 rounded-md shadow-sm" />
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

      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-2xl flex flex-col rounded-l-2xl">
            <div className="flex items-center justify-between p-4 border-b border-surface-border">
              <div className="flex items-center gap-3">
                <BrandMark className="h-6 w-10 rounded-md shadow-sm" />
                <span className="font-display font-semibold text-ink text-sm">
                  {dict.meta.honoraryConsulate}
                </span>
              </div>
              <button
                aria-label="Close"
                className="p-2 text-ink"
                onClick={() => setOpen(false)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="flex gap-2 px-4 py-3 border-b border-surface-border">
              {LOCALES.map((l) => {
                const target = `/${l}${stripPath(pathname).slice(1) ? stripPath(pathname) : ""}`;
                return (
                  <Link
                    key={l}
                    href={target}
                    onClick={() => setOpen(false)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-full border ${
                      l === locale ? "border-brand-600 text-brand-700 bg-brand-50" : "border-surface-border text-ink-muted"
                    }`}
                  >
                    {LOCALE_LABELS[l]}
                  </Link>
                );
              })}
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-2">
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
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-3 rounded-xl text-sm ${
                      isActive ? "bg-brand-50 text-brand-700 font-semibold" : "text-ink-soft hover:bg-surface-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
