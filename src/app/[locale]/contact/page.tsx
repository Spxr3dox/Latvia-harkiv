import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { PageHeader } from "@/components/PageHeader";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale).contact;

  return (
    <>
      <PageHeader kicker={d.kicker} title={d.title} lead={d.lead} />

      <section className="container-x py-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-700">
              {getDictionary(locale).common.address}
            </div>
            <div className="mt-2 font-display text-lg">{d.address}</div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-700">
              {getDictionary(locale).common.hours}
            </div>
            <div className="mt-2 font-display text-lg">{d.hours}</div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-700">
              {getDictionary(locale).common.phone}
            </div>
            <ul className="mt-3 space-y-2">
              {d.phones.map((p) => (
                <li key={p.value}>
                  <div className="text-sm text-ink-muted">{p.label}</div>
                  <a href={`tel:${p.value.replace(/\s/g, "")}`} className="font-display text-lg link-underline">
                    {p.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-widest font-semibold text-brand-700">
              {getDictionary(locale).common.email}
            </div>
            <ul className="mt-3 space-y-2">
              {d.emails.map((e) => (
                <li key={e.value}>
                  <div className="text-sm text-ink-muted">{e.label}</div>
                  <a href={`mailto:${e.value}`} className="link-underline">
                    {e.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border border-surface-border p-8 bg-surface-alt">
            <div className="divider-red" />
            <h2 className="mt-4 font-display text-2xl font-semibold">{d.formTitle}</h2>
            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-ink-soft">{d.formName}</span>
                  <input className="border border-surface-border bg-white px-3 py-2 focus:border-brand-600 outline-none" />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-ink-soft">{d.formEmail}</span>
                  <input type="email" className="border border-surface-border bg-white px-3 py-2 focus:border-brand-600 outline-none" />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span className="text-ink-soft">{d.formSubject}</span>
                <input className="border border-surface-border bg-white px-3 py-2 focus:border-brand-600 outline-none" />
              </label>
              <label className="grid gap-2 text-sm">
                <span className="text-ink-soft">{d.formMessage}</span>
                <textarea rows={6} className="border border-surface-border bg-white px-3 py-2 focus:border-brand-600 outline-none" />
              </label>
              <button type="button" className="btn-primary self-start">
                {d.formSend} →
              </button>
              <p className="text-xs text-ink-muted">{d.formNote}</p>
            </form>
          </div>
        </div>
      </section>

      <section className="border-t border-surface-border bg-brand-600 text-white">
        <div className="container-x py-14 grid gap-6 md:grid-cols-3 items-center">
          <div className="md:col-span-2">
            <div className="text-[11px] uppercase tracking-widest font-semibold text-white/70">
              {d.emergencyTitle}
            </div>
            <h2 className="mt-3 font-display text-3xl font-semibold">{d.emergencyTitle}</h2>
            <p className="mt-3 text-white/90 max-w-2xl">{d.emergencyBody}</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="mailto:emergency@latviakharkiv.org" className="inline-flex items-center justify-center border border-white bg-white text-brand-700 px-5 py-3 font-semibold">
              emergency@latviakharkiv.org
            </a>
            <a href="tel:+380670000000" className="inline-flex items-center justify-center border border-white/70 px-5 py-3 font-semibold">
              +380 67 000 00 00
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
