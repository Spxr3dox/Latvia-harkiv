import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).latviaKharkiv;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {d.tracks.map((t) => (
            <div key={t.title} className="border border-surface-border p-6 bg-white">
              <div className="divider-red" />
              <h3 className="mt-4 font-display text-xl font-semibold">{t.title}</h3>
              <p className="mt-3 text-ink-soft text-sm">{t.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.points.map((p) => (
                  <li key={p} className="text-xs uppercase tracking-widest bg-brand-50 text-brand-700 px-2 py-1">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
