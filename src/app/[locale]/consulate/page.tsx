import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).consulate;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />

      <section className="container-x py-16 grid gap-10 md:grid-cols-3">
        {[d.history, d.mission, d.powers].map((b) => (
          <div key={b.title}>
            <div className="divider-red" />
            <h2 className="mt-4 font-display text-xl font-semibold">{b.title}</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">{b.body}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-surface-border bg-surface-alt">
        <div className="container-x py-16 grid gap-10 md:grid-cols-2">
          <div>
            <div className="kicker">{d.district.title}</div>
            <h2 className="mt-4 font-display text-2xl font-semibold">{d.district.title}</h2>
            <p className="mt-4 text-ink-soft">{d.district.body}</p>
            <ul className="mt-6 space-y-2">
              {d.district.oblasts.map((o) => (
                <li key={o} className="flex items-center gap-3">
                  <span className="h-1.5 w-6 bg-brand-600" />
                  <span className="font-display text-lg">{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-surface-border p-8 rounded-2xl">
            <div className="flex items-start gap-5">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-surface-border shadow-sm">
                <img src="/anton.jpg" alt={d.consul.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="kicker">{d.consul.title}</div>
                <h2 className="mt-2 font-display text-2xl font-semibold">{d.consul.name}</h2>
                <div className="text-brand-700 font-semibold text-sm mt-1">{d.consul.role}</div>
              </div>
            </div>
            <p className="mt-4 text-ink-soft leading-relaxed">{d.consul.bio}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-white border border-surface-border p-8">
            <div className="kicker">{d.doTitle}</div>
            <h2 className="mt-4 font-display text-2xl font-semibold">{d.doTitle}</h2>
            <ul className="mt-6 space-y-3">
              {d.doList.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="text-brand-600 mt-1">✓</span>
                  <span className="text-ink-soft">{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink text-white p-8">
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-500">
              {d.dontTitle}
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold">{d.dontTitle}</h2>
            <ul className="mt-6 space-y-3">
              {d.dontList.map((it) => (
                <li key={it} className="flex gap-3">
                  <span className="text-brand-500 mt-1">✕</span>
                  <span className="text-white/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <div className="divider-red" />
          <h2 className="mt-4 font-display text-2xl font-semibold">{d.team.title}</h2>
          <p className="mt-3 text-ink-soft max-w-3xl">{d.team.body}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {d.team.roles.map((r) => (
              <div key={r.name} className="border border-surface-border p-6">
                <div className="font-display font-semibold">{r.name}</div>
                <div className="mt-2 text-sm text-ink-muted">{r.role}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-ink-muted italic max-w-3xl">{d.legalNote}</p>
      </section>
    </>
  );
}
