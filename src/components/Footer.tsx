import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BrandMark } from "@/components/CoatOfArms";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.6H8v3.2h2.5V22",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M4.5 4.5a2 2 0 100 4 2 2 0 000-4zM3 10h3v11H3zm5.5 0h2.9v1.6h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V21h-3v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-3z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    path: "M22 8.5s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C15.9 5 12 5 12 5s-3.9 0-7.1.2c-.4 0-1.3.1-2.1 1C2.2 6.9 2 8.5 2 8.5S1.8 10.3 1.8 12v1.5c0 1.8.2 3.5.2 3.5s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1C7 20.5 12 20.6 12 20.6s3.9 0 7.1-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.7.2-3.5V12c0-1.7-.2-3.5-.2-3.5zM10 15.5v-6l5 3z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    path: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 4a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-3a1 1 0 100 2 1 1 0 000-2z",
  },
];

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  return (
    <footer className="mt-0 bg-brand-700 text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand + tagline */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <BrandMark className="h-8 w-12 rounded-md shadow-sm" />
              <div className="text-sm font-display font-semibold">
                {dict.meta.honoraryConsulate}
              </div>
            </div>
            <p className="mt-5 text-sm text-white/80 leading-relaxed">{dict.footer.tagline}</p>
            <div className="mt-6 space-y-1 text-sm text-white/85">
              <div>
                <a href="mailto:info@latviakharkiv.org" className="hover:text-white underline decoration-white/30 underline-offset-4">
                  info@latviakharkiv.org
                </a>
              </div>
              <div>
                <a href="tel:+380670000000" className="hover:text-white">
                  +380 67 000 00 00
                </a>
              </div>
              <div className="text-white/60">Kharkiv, Ukraine</div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {dict.footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm text-white/85">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={p(item.href)} className="hover:text-white transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="md:col-span-2">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
              Newsletter
            </div>
            <p className="mt-4 text-sm text-white/80">{dict.footer.officialNote.slice(0, 90)}…</p>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="rounded-full bg-white/10 border border-white/20 placeholder-white/50 text-white text-sm px-4 py-2.5 focus:outline-none focus:border-white/60"
              />
              <button
                type="submit"
                className="rounded-full bg-white text-brand-700 text-sm font-semibold px-4 py-2.5 hover:bg-brand-50 transition"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/15 pt-6">
          <div className="text-xs text-white/60">{dict.footer.copyright}</div>
          <div className="flex flex-wrap gap-5 text-xs text-white/70">
            {dict.footer.legalLinks.map((l) => (
              <Link key={l.href} href={p(l.href)} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
