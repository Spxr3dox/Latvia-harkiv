import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).innovation;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {d.pillars.map((p) => (
          <div key={p.title} className="border border-surface-border p-6 bg-white">
            <div className="divider-red" />
            <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-ink-soft">{p.body}</p>
          </div>
        ))}
      </section>
      <section className="border-t border-surface-border bg-surface-alt">
        <div className="container-x py-16">
          <div className="kicker">{d.universities.title}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold">{d.universities.title}</h2>
          <p className="mt-3 text-ink-soft max-w-3xl">{d.universities.body}</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {d.universities.list.map((u) => (
              <li key={u} className="flex gap-3 items-center bg-white border border-surface-border p-4">
                <span className="h-2 w-2 bg-brand-600" />
                <span className="font-display">{u}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
