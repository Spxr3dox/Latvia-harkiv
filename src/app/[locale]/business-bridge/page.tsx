import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).bridge;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />

      <section className="container-x py-16 grid gap-6 md:grid-cols-2">
        {[d.forUa, d.forLv].map((b) => (
          <div key={b.title} className="border border-surface-border p-8 bg-white">
            <div className="divider-red" />
            <h2 className="mt-4 font-display text-2xl font-semibold">{b.title}</h2>
            <p className="mt-3 text-ink-soft">{b.body}</p>
            <ul className="mt-6 space-y-2">
              {b.bullets.map((x) => (
                <li key={x} className="flex gap-3 text-ink-soft">
                  <span className="text-brand-600 mt-1">→</span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="border-t border-surface-border bg-surface-alt">
        <div className="container-x py-16">
          <div className="kicker">{d.howItWorks.title}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">{d.howItWorks.title}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {d.howItWorks.steps.map((s, i) => (
              <div key={s.title}>
                <div className="text-4xl font-display text-brand-600">0{i + 1}</div>
                <div className="mt-4 divider-red" />
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="container-x py-16 grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-500">
              {d.ai.title}
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold">{d.ai.title}</h2>
            <p className="mt-4 text-white/80 leading-relaxed">{d.ai.lead}</p>
            <p className="mt-6 text-xs text-white/60 italic">{d.ai.note}</p>
          </div>
          <div className="grid gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-500">
                Signals
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {d.ai.signals.map((s) => (
                  <li key={s} className="border border-white/25 px-3 py-1 text-xs">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-500">
                Programmes
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {d.ai.programmes.map((s) => (
                  <li key={s} className="bg-brand-600 text-white px-3 py-1 text-xs font-semibold">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="border border-surface-border p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="kicker">{d.apply.title}</div>
            <h2 className="mt-4 font-display text-2xl font-semibold">{d.apply.title}</h2>
            <p className="mt-2 text-ink-soft max-w-2xl">{d.apply.body}</p>
          </div>
          <a href="mailto:matchmaking@latviakharkiv.org" className="btn-primary">
            {d.apply.button} →
          </a>
        </div>
        <p className="mt-8 text-xs text-ink-muted italic max-w-3xl">{d.disclaimer}</p>
      </section>
    </>
  );
}
