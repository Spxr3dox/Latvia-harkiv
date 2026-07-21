export function PageHeader({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-surface-border bg-surface-alt">
      <div className="container-x py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="kicker">{kicker}</div>
          <h1 className="mt-4 font-display text-3xl md:text-5xl font-semibold leading-[1.1] text-ink">
            {title}
          </h1>
          {lead && (
            <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-2xl">
              {lead}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
