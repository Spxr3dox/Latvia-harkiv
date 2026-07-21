import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).media;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {d.sections.map((s) => (
          <div key={s.title} className="border border-surface-border p-6 bg-white flex flex-col">
            <div className="divider-red" />
            <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
            <p className="mt-3 text-ink-soft text-sm flex-1">{s.body}</p>
            <button className="mt-6 self-start btn-outline">{s.button} →</button>
          </div>
        ))}
      </section>
    </>
  );
}
