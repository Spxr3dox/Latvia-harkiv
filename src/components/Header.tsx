"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import { LOCALES, LOCALE_LABELS } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BrandMark } from "@/components/CoatOfArms";

type NavGroup = {
  key: string;
  label: string;
  href: string;
  children?: { href: string; label: string }[];
};

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const p = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  const groups: NavGroup[] = [
    {
      key: "about",
      label: dict.nav.consulate,
      href: "/consulate",
      children: [
        { href: "/consulate", label: dict.nav.consulate },
        { href: "/consular", label: dict.nav.consular },
        { href: "/contact", label: dict.nav.contact },
      ],
    },
    {
      key: "policy",
      label: dict.nav.latviaKharkiv,
      href: "/latvia-kharkiv",
      children: [
        { href: "/latvia-kharkiv", label: dict.nav.latviaKharkiv },
        { href: "/cooperation", label: dict.nav.cooperation },
        { href: "/investment", label: dict.nav.investment },
        { href: "/innovation", label: dict.nav.innovation },
      ],
    },
    {
      key: "business",
      label: dict.nav.businessBridge,
      href: "/business-bridge",
    },
    {
      key: "current",
      label: dict.nav.events,
      href: "/events",
      children: [
        { href: "/events", label: dict.nav.events },
        { href: "/media", label: dict.nav.media },
      ],
    },
    {
      key: "resources",
      label: dict.nav.resources,
      href: "/resources",
    },
    {
      key: "contact",
      label: dict.nav.contact,
      href: "/contact",
    },
  ];

  const stripPath = (path: string) => {
    const parts = path.split("/");
    parts.splice(1, 1);
    return parts.join("/") || "/";
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-surface-border">
      {/* Utility top bar */}
      <div className="bg-brand-700 text-white text-xs">
        <div className="container-x flex items-center justify-between h-8">
          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:info@latviakharkiv.org" className="opacity-90 hover:opacity-100">
              info@latviakharkiv.org
            </a>
            <span className="opacity-40">·</span>
            <a href="tel:+380670000000" className="opacity-90 hover:opacity-100">
              +380 67 000 00 00
            </a>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            {LOCALES.map((l) => {
              const target = `/${l}${stripPath(pathname).slice(1) ? stripPath(pathname) : ""}`;
              return (
                <Link
                  key={l}
                  href={target}
                  className={`px-2 py-1 uppercase tracking-widest font-semibold transition ${
                    l === locale ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  {LOCALE_LABELS[l]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-x">
        <div className="flex items-center gap-6 py-5">
          <Link href={p("/")} className="flex items-center gap-4 shrink-0">
            <BrandMark className="h-9 w-14 rounded-md shadow-sm" />
            <div className="leading-tight">
              <div className="font-display text-[15px] md:text-base font-semibold text-ink">
                {dict.meta.honoraryConsulate}
              </div>
              <div className="text-[11px] uppercase tracking-widest text-ink-muted">
                {dict.meta.republic} · {dict.meta.inKharkiv}
              </div>
            </div>
          </Link>

          <div className="flex-1" />

          <button
            className="lg:hidden inline-flex flex-col gap-1.5 p-2 text-ink ml-auto"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Main nav */}
        <nav className="hidden lg:flex items-stretch border-t border-surface-border">
          {groups.map((g) => {
            const groupHref = p(g.href);
            const isActive =
              pathname === groupHref ||
              (g.children ?? []).some((c) => pathname.startsWith(p(c.href)));
            return (
              <div
                key={g.key}
                className="relative"
                onMouseEnter={() => setDropdown(g.key)}
                onMouseLeave={() => setDropdown(null)}
              >
                <Link
                  href={groupHref}
                  className={`inline-flex items-center gap-1 px-4 py-3 text-sm font-semibold border-b-2 transition ${
                    isActive
                      ? "border-brand-600 text-brand-700"
                      : "border-transparent text-ink-soft hover:text-brand-700 hover:border-surface-border"
                  }`}
                >
                  {g.label}
                  {g.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-60">
                      <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </Link>
                {g.children && dropdown === g.key && (
                  <div className="absolute left-0 top-full min-w-[240px] bg-white border border-surface-border shadow-lg rounded-b-xl py-2 z-30">
                    {g.children.map((c) => (
                      <Link
                        key={c.href}
                        href={p(c.href)}
                        className="block px-5 py-2.5 text-sm text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile overlay */}
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
              {groups.map((g) => (
                <div key={g.key} className="mb-1">
                  <Link
                    href={p(g.href)}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-xl text-sm font-semibold text-ink hover:bg-brand-50"
                  >
                    {g.label}
                  </Link>
                  {g.children && (
                    <div className="pl-4 border-l border-surface-border ml-3 mt-1 space-y-1">
                      {g.children.map((c) => (
                        <Link
                          key={c.href}
                          href={p(c.href)}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
