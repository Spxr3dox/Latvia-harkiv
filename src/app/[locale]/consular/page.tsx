import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).consular;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />

      <section className="container-x py-16">
        <div className="grid gap-4 md:grid-cols-2">
          {d.services.map((s) => (
            <div key={s.title} className="border border-surface-border p-6">
              <div className="text-brand-600 font-display text-2xl leading-none">◆</div>
              <div className="mt-3 font-display text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-ink-soft text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-surface-border bg-brand-600 text-white">
        <div className="container-x py-14 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest font-semibold text-white/70">
              {d.emergencyBlock.title}
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold">{d.emergencyBlock.title}</h2>
            <p className="mt-3 text-white/90 max-w-2xl">{d.emergencyBlock.body}</p>
          </div>
          <a
            href={`mailto:${d.emergencyBlock.button}`}
            className="inline-flex items-center justify-center border border-white bg-white text-brand-700 px-5 py-3 font-semibold hover:bg-transparent hover:text-white transition"
          >
            {d.emergencyBlock.button}
          </a>
        </div>
      </section>

      <section className="container-x py-16 grid gap-10 md:grid-cols-2">
        <div>
          <div className="divider-red" />
          <h2 className="mt-4 font-display text-2xl font-semibold">{d.documents.title}</h2>
          <p className="mt-3 text-ink-soft">{d.documents.body}</p>
          <ul className="mt-4 space-y-2">
            {d.documents.items.map((it) => (
              <li key={it} className="flex gap-3 text-ink-soft">
                <span className="text-brand-600 mt-1">•</span>
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-surface-border p-8 bg-surface-alt">
          <div className="divider-red" />
          <h2 className="mt-4 font-display text-2xl font-semibold">{d.embassyRedirect.title}</h2>
          <p className="mt-3 text-ink-soft">{d.embassyRedirect.body}</p>
          <a
            href="https://www2.mfa.gov.lv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6"
          >
            {d.embassyRedirect.button} ↗
          </a>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="divider-red" />
        <h2 className="mt-4 font-display text-2xl font-semibold">FAQ</h2>
        <div className="mt-8 divide-y divide-surface-border border-y border-surface-border">
          {d.faq.map((qa) => (
            <details key={qa.q} className="group py-5">
              <summary className="cursor-pointer flex items-center justify-between gap-4 font-display text-lg font-semibold">
                <span>{qa.q}</span>
                <span className="text-brand-600 text-2xl leading-none group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-ink-soft leading-relaxed">{qa.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
