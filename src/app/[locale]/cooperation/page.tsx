import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).cooperation;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16">
        <div className="kicker">{d.institutional.title}</div>
        <h2 className="mt-4 font-display text-3xl font-semibold">{d.institutional.title}</h2>
        <p className="mt-3 text-ink-soft max-w-3xl">{d.institutional.body}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.institutional.groups.map((g) => (
            <div key={g.title} className="border border-surface-border p-6 bg-white">
              <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-700">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-ink-soft">
                    <span className="text-brand-600 mt-1">•</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="border-t border-surface-border bg-surface-alt">
        <div className="container-x py-16">
          <div className="kicker">{d.privateSector.title}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">{d.privateSector.title}</h2>
          <p className="mt-4 text-ink-soft max-w-3xl">{d.privateSector.body}</p>
          <p className="mt-6 text-xs text-ink-muted italic max-w-3xl">{d.privateSector.note}</p>
        </div>
      </section>
    </>
  );
}
