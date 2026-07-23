import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = (h: string) => `/${locale}${h === "/" ? "" : h}`;

  const featured = dict.home.news[0];
  const restNews = dict.home.news.slice(1, 4);

  return (
    <>
      {/* Spotlight hero — dark navy panel like mfa.gov.lv top feature */}
      <section className="bg-brand-700 text-white">
        <div className="container-x grid gap-10 py-14 md:py-20 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/80">
              <span className="h-px w-8 bg-white/50" />
              {dict.home.heroKicker}
            </div>
            <h1 className="mt-6 font-display text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl">
              {dict.home.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={p("/consular")}
                className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 text-sm font-semibold rounded-full hover:bg-brand-50 transition"
              >
                {dict.home.ctaConsular} →
              </Link>
              <Link
                href={p("/business-bridge")}
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-white/10 transition"
              >
                {dict.home.ctaBridge} →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-widest text-white/70 font-semibold">
                {dict.common.consularDistrict}
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {dict.consulate.district.oblasts.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-white/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/15">
                <div className="text-[11px] uppercase tracking-widest text-white/70 font-semibold">
                  {dict.common.emergency}
                </div>
                <div className="mt-2 font-display text-xl">+380 67 000 00 00</div>
                <a
                  href="mailto:emergency@latviakharkiv.org"
                  className="text-sm text-white/80 hover:text-white"
                >
                  emergency@latviakharkiv.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful — quick tiles, mfa.gov.lv style */}
      <section className="bg-surface-alt border-b border-surface-border">
        <div className="container-x py-10 md:py-14">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-ink">
              {dict.home.quickTitle}
            </h2>
            <Link href={p("/resources")} className="text-sm font-semibold text-brand-700 hover:text-brand-500">
              {dict.common.seeAll} →
            </Link>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.quick.map((q) => (
              <a
                key={q.title}
                href={q.href}
                target={q.href.startsWith("http") ? "_blank" : undefined}
                rel={q.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white border border-surface-border rounded-xl p-5 flex items-start gap-3 hover:border-brand-500 hover:shadow-md transition"
              >
                <div className="mt-0.5 h-9 w-9 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-ink group-hover:text-brand-700 text-sm">
                    {q.title}
                  </div>
                  <p className="mt-1 text-xs text-ink-muted leading-relaxed">{q.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome from the Consul */}
      <section className="border-b border-surface-border">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm">
                <img
                  src="/anton.jpg"
                  alt={dict.home.welcomeSignature}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
                  {dict.home.welcomeTitle}
                </div>
                <div className="mt-2 font-display text-lg font-semibold text-ink">
                  {dict.home.welcomeSignature}
                </div>
                <div className="text-sm text-ink-muted">{dict.home.welcomeRole}</div>
              </div>
            </div>
            <div className="md:col-span-8">
              <blockquote className="font-display text-2xl md:text-3xl leading-snug text-ink">
                “{dict.home.welcomeQuote}”
              </blockquote>
              <div className="mt-8 h-px bg-surface-border" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {dict.home.highlights.slice(0, 4).map((h) => (
                  <Link
                    key={h.title}
                    href={p(h.href)}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-surface-border hover:border-brand-500 hover:bg-brand-50/40 transition"
                  >
                    <div className="mt-1 h-8 w-8 rounded-lg bg-brand-600 text-white flex items-center justify-center shrink-0 text-sm font-display">
                      ◆
                    </div>
                    <div>
                      <div className="font-semibold text-ink text-sm group-hover:text-brand-700">
                        {h.title}
                      </div>
                      <p className="mt-1 text-xs text-ink-muted leading-relaxed">{h.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News — mfa.gov.lv card grid style */}
      <section className="border-b border-surface-border">
        <div className="container-x py-14 md:py-20">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
                {dict.home.newsTitle}
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold">{dict.home.newsTitle}</h2>
            </div>
            <Link href={p("/media")} className="text-sm font-semibold text-brand-700 hover:text-brand-500">
              {dict.common.seeAll} →
            </Link>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Featured */}
            {featured && (
              <Link href={p("/media")} className="lg:col-span-7 group block">
                <div className="aspect-[665/375] w-full overflow-hidden rounded-2xl bg-brand-50 border border-surface-border">
                  <div
                    className="h-full w-full flex items-center justify-center text-brand-600/40 font-display text-6xl group-hover:scale-[1.02] transition duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, #eef3fb 0%, #dbe4f0 60%, #c4d3ea 100%)",
                    }}
                  >
                    ◆
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs">
                  <span className="uppercase tracking-widest bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full font-semibold">
                    {featured.tag}
                  </span>
                  <span className="text-ink-muted">{featured.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl md:text-2xl font-semibold text-ink group-hover:text-brand-700 leading-snug">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{featured.excerpt}</p>
              </Link>
            )}

            {/* Rest of news list */}
            <div className="lg:col-span-5 divide-y divide-surface-border">
              {restNews.map((n) => (
                <Link
                  key={n.title}
                  href={p("/media")}
                  className="group block py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex items-center gap-3 text-xs">
                    <span className="uppercase tracking-widest bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full font-semibold">
                      {n.tag}
                    </span>
                    <span className="text-ink-muted">{n.date}</span>
                  </div>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink group-hover:text-brand-700 leading-snug">
                    {n.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events calendar */}
      <section className="bg-surface-alt border-b border-surface-border">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
                {dict.home.eventsTitle}
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-ink">
                {dict.home.eventsTitle}
              </h2>
              <p className="mt-4 text-sm text-ink-soft leading-relaxed max-w-md">
                {dict.home.contactStripLead}
              </p>
              <Link
                href={p("/events")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-500"
              >
                {dict.common.seeAll} →
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-surface-border bg-white rounded-2xl border border-surface-border overflow-hidden">
                {dict.home.events.map((e) => (
                  <li key={e.title} className="flex items-start gap-5 p-5">
                    <div className="shrink-0 w-16 text-center">
                      <div className="text-[10px] uppercase tracking-widest text-brand-700 font-semibold">
                        {e.date.split(" ").slice(1).join(" ") || e.date}
                      </div>
                      <div className="font-display text-2xl font-semibold text-ink leading-none mt-1">
                        {e.date.split(" ")[0]}
                      </div>
                    </div>
                    <div className="border-l border-surface-border pl-5 flex-1">
                      <div className="text-xs uppercase tracking-widest text-ink-muted">
                        {e.place}
                      </div>
                      <div className="mt-1 font-display font-semibold text-ink">{e.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the Consulate — mfa.gov.lv "About the Ministry" style */}
      <section className="border-b border-surface-border">
        <div className="container-x py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
                {dict.nav.consulate}
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-ink">
                {dict.consulate.title}
              </h2>
              <p className="mt-4 text-ink-soft leading-relaxed">{dict.consulate.lead}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={p("/consulate")} className="btn-primary">
                  {dict.common.readMore} →
                </Link>
                <Link href={p("/contact")} className="btn-outline">
                  {dict.common.contactUs}
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/consulate", label: dict.nav.consulate },
                { href: "/consular", label: dict.nav.consular },
                { href: "/latvia-kharkiv", label: dict.nav.latviaKharkiv },
                { href: "/cooperation", label: dict.nav.cooperation },
                { href: "/investment", label: dict.nav.investment },
                { href: "/innovation", label: dict.nav.innovation },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={p(l.href)}
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-surface-border hover:border-brand-500 hover:bg-brand-50/40 transition"
                >
                  <span className="text-sm font-semibold text-ink group-hover:text-brand-700">
                    {l.label}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-600 group-hover:translate-x-1 transition">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-700 text-white">
        <div className="container-x py-14 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-white/70 font-semibold">
                {dict.common.contactUs}
              </div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-semibold">
                {dict.home.contactStripTitle}
              </h2>
              <p className="mt-3 text-white/80 max-w-lg">{dict.home.contactStripLead}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href={p("/contact")}
                className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 text-sm font-semibold rounded-full hover:bg-brand-50 transition"
              >
                {dict.common.contactUs} →
              </Link>
              <a
                href="mailto:emergency@latviakharkiv.org"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 text-sm font-semibold rounded-full hover:bg-white/10 transition"
              >
                {dict.common.emergency}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
