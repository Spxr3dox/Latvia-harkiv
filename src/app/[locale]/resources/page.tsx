import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).resources;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />
      <section className="container-x py-16 grid gap-8 md:grid-cols-2">
        {d.categories.map((c) => (
          <div key={c.title} className="border border-surface-border p-8 bg-white">
            <div className="divider-red" />
            <h2 className="mt-4 font-display text-2xl font-semibold">{c.title}</h2>
            <p className="mt-3 text-ink-soft">{c.body}</p>
            <ul className="mt-6 space-y-3">
              {c.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="link-underline text-sm">
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
