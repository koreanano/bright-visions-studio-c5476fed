const items = [
  "ISO 9001 CERTIFIED",
  "ISO 14001 CERTIFIED",
  "GLOBAL PARTNERSHIP",
  "HIGH PURITY GUARANTEE",
  "B2B SUPPLY EXPERTS",
  "1–100 NM PRECISION",
];

const TrustMarquee = () => {
  return (
    <section className="relative w-full overflow-hidden border-y border-border bg-surface py-7">
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ink-soft">
              {t}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustMarquee;
