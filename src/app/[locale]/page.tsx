import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { FlagStripe } from "@/components/CoatOfArms";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const p = (h: string) => `/${locale}${h === "/" ? "" : h}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 90% 0%, #9e3039 0%, transparent 45%), radial-gradient(circle at 0% 100%, #9e3039 0%, transparent 40%)",
          }}
        />
        <div className="container-x grid gap-10 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="kicker">{dict.home.heroKicker}</div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-ink">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
              {dict.home.heroLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={p("/consular")} className="btn-primary">
                {dict.home.ctaConsular} →
              </Link>
              <Link href={p("/business-bridge")} className="btn-outline">
                {dict.home.ctaBridge} →
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-4 border-l border-surface-border pl-8 space-y-4">
            <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
              {dict.common.consularDistrict}
            </div>
            <ul className="space-y-2 text-sm text-ink-soft">
              {dict.consulate.district.oblasts.map((o) => (
                <li key={o} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                  {o}
                </li>
              ))}
            </ul>
            <div className="pt-4 mt-4 border-t border-surface-border">
              <div className="text-[11px] uppercase tracking-widest text-brand-700 font-semibold">
                {dict.common.emergency}
              </div>
              <div className="mt-2 font-display text-lg">+380 67 000 00 00</div>
              <div className="text-sm text-ink-muted">emergency@latviakharkiv.org</div>
            </div>
          </aside>
        </div>
        <FlagStripe />
      </section>

      {/* Welcome */}
      <section className="bg-surface-alt">
        <div className="container-x py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 items-start">
            <div className="md:col-span-4">
              <div className="kicker">{dict.home.welcomeTitle}</div>
              <div className="mt-6 h-40 w-40 bg-white border border-surface-border flex items-center justify-center">
                <div className="text-center text-ink-muted text-xs px-4">
                  Фото Почесного консула
                </div>
              </div>
              <div className="mt-4 font-display font-semibold">{dict.home.welcomeSignature}</div>
              <div className="text-sm text-ink-muted">{dict.home.welcomeRole}</div>
            </div>
            <div className="md:col-span-8">
              <div className="divider-red" />
              <blockquote className="mt-6 font-display text-2xl md:text-3xl leading-snug text-ink">
                “{dict.home.welcomeQuote}”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-x py-16 md:py-20">
        <div className="kicker">{dict.home.highlightsTitle}</div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dict.home.highlights.map((h) => (
            <Link key={h.title} href={p(h.href)} className="card group">
              <div className="text-brand-600 text-3xl font-display leading-none">◆</div>
              <div className="mt-4 font-display text-lg font-semibold group-hover:text-brand-700">
                {h.title}
              </div>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{h.text}</p>
              <div className="mt-4 text-sm font-semibold text-brand-700">{dict.common.readMore} →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* News + Events */}
      <section className="border-t border-surface-border">
        <div className="container-x py-16 md:py-20 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="kicker">{dict.home.newsTitle}</div>
                <h2 className="mt-3 font-display text-3xl font-semibold">{dict.home.newsTitle}</h2>
              </div>
              <Link href={p("/media")} className="btn-ghost">
                {dict.common.seeAll} →
              </Link>
            </div>
            <div className="mt-8 divide-y divide-surface-border border-t border-surface-border">
              {dict.home.news.map((n) => (
                <article key={n.title} className="py-6 grid gap-2 md:grid-cols-6">
                  <div className="md:col-span-1 text-sm text-ink-muted">
                    <div>{n.date}</div>
                    <div className="mt-1 inline-block text-[10px] uppercase tracking-widest bg-brand-50 text-brand-700 px-2 py-0.5">
                      {n.tag}
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{n.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{n.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside>
            <div className="kicker">{dict.home.eventsTitle}</div>
            <h2 className="mt-3 font-display text-3xl font-semibold">{dict.home.eventsTitle}</h2>
            <ul className="mt-8 space-y-6">
              {dict.home.events.map((e) => (
                <li key={e.title} className="border-l-2 border-brand-600 pl-4">
                  <div className="text-xs text-ink-muted uppercase tracking-widest">
                    {e.date} · {e.place}
                  </div>
                  <div className="mt-1 font-display font-semibold">{e.title}</div>
                </li>
              ))}
            </ul>
            <Link href={p("/events")} className="btn-ghost mt-6 inline-flex">
              {dict.common.seeAll} →
            </Link>
          </aside>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-ink text-white">
        <div className="container-x py-16 md:py-20">
          <div className="kicker !text-brand-500">{dict.home.quickTitle}</div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dict.home.quick.map((q) => (
              <a
                key={q.title}
                href={q.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-white/15 p-6 transition hover:border-brand-500 hover:bg-white/5"
              >
                <div className="font-display font-semibold text-white group-hover:text-brand-500">
                  {q.title}
                </div>
                <p className="mt-2 text-sm text-white/70">{q.text}</p>
                <div className="mt-4 text-xs uppercase tracking-widest text-brand-500">↗ open</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="container-x py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 items-center border border-surface-border p-8 md:p-12">
          <div>
            <div className="kicker">{dict.common.contactUs}</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              {dict.home.contactStripTitle}
            </h2>
            <p className="mt-3 text-ink-soft">{dict.home.contactStripLead}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href={p("/contact")} className="btn-primary">
              {dict.common.contactUs} →
            </Link>
            <a href="mailto:emergency@latviakharkiv.org" className="btn-outline">
              {dict.common.emergency}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
