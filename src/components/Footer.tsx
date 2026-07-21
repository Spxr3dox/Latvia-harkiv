import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { BrandMark, FlagStripe } from "@/components/CoatOfArms";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  return (
    <footer className="mt-24 border-t border-surface-border bg-surface-alt">
      <FlagStripe />
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <BrandMark className="h-10 w-10" />
              <div className="text-sm font-display font-semibold">{dict.meta.honoraryConsulate}</div>
            </div>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              {dict.footer.tagline}
            </p>
            <p className="mt-4 text-xs text-ink-muted">{dict.footer.officialNote}</p>
          </div>

          {dict.footer.columns.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-brand-700">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link href={p(item.href)} className="hover:text-brand-700 transition">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-surface-border pt-6">
          <div className="text-xs text-ink-muted">{dict.footer.copyright}</div>
          <div className="flex flex-wrap gap-4 text-xs text-ink-muted">
            {dict.footer.legalLinks.map((l) => (
              <Link key={l.href} href={p(l.href)} className="hover:text-brand-700">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
