import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).events;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-8">
        <div className="flex flex-wrap gap-2">
          {d.categories.map((c) => (
            <span key={c} className="text-xs uppercase tracking-widest bg-brand-50 text-brand-700 px-3 py-1">
              {c}
            </span>
          ))}
        </div>
      </section>
      <section className="container-x pb-16">
        <div className="divide-y divide-surface-border border-y border-surface-border">
          {d.upcoming.map((e) => (
            <article key={e.title} className="py-8 grid gap-4 md:grid-cols-8">
              <div className="md:col-span-2">
                <div className="font-display text-2xl font-semibold text-brand-700">{e.date}</div>
                <div className="text-sm text-ink-muted uppercase tracking-widest">{e.place}</div>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 text-ink-soft">{e.text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs text-ink-muted italic">{d.calendarNote}</p>
      </section>
    </>
  );
}
