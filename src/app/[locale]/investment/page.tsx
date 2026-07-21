import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).investment;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16 grid gap-8 md:grid-cols-2">
        {[d.whyKharkiv, d.whyLatvia].map((b) => (
          <div key={b.title} className="border border-surface-border p-8">
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
      <section className="border-t border-surface-border bg-brand-600 text-white">
        <div className="container-x py-14">
          <div className="text-[11px] uppercase tracking-widest font-semibold text-white/70">
            {d.recovery.title}
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold">{d.recovery.title}</h2>
          <p className="mt-4 max-w-3xl text-white/90 leading-relaxed">{d.recovery.body}</p>
        </div>
      </section>
      <section className="container-x py-16">
        <div className="divider-red" />
        <h2 className="mt-4 font-display text-2xl font-semibold">{d.parks.title}</h2>
        <p className="mt-3 text-ink-soft max-w-3xl">{d.parks.body}</p>
      </section>
    </>
  );
}
