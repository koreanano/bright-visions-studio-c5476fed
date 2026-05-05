import { LifeBuoy, BookOpen } from "lucide-react";

const stats = [
  { value: "100", unit: "nm↓", label: "소재 입자 스케일", caption: "Particle Scale" },
  { value: "B2B", unit: "", label: "기업 전문 공급", caption: "Enterprise Supply" },
  { value: "정식", unit: "", label: "글로벌 파트너십", caption: "Official Partnership" },
];

const StatsBand = () => {
  return (
    <section className="relative bg-ink py-20 lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-[0.04]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-px bg-white/10 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* First stat */}
        <div className="bg-ink p-8 lg:p-10">
          <div className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
            01 · {stats[0].caption}
          </div>
          <div className="mb-4 flex items-baseline gap-2">
            <span className="text-5xl font-medium tracking-tight text-white lg:text-6xl">
              {stats[0].value}
            </span>
            <span className="text-2xl font-light text-accent">{stats[0].unit}</span>
          </div>
          <div className="text-sm text-white/60">{stats[0].label}</div>
        </div>

        {/* Tech Support + Reference Access — featured card */}
        <div className="relative overflow-hidden bg-gradient-to-br from-accent/15 via-ink to-ink p-8 lg:p-10">
          <div className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
            02 · Tech Support + Reference Access
          </div>
          <div className="mb-5 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-sm bg-accent/15 text-accent">
              <LifeBuoy className="h-5 w-5" />
            </div>
            <span className="text-2xl font-semibold text-white">+</span>
            <div className="grid h-11 w-11 place-items-center rounded-sm bg-accent/15 text-accent">
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">
            엔지니어 기술지원 &<br />레퍼런스 자료 제공
          </h3>
          <p className="text-sm leading-relaxed text-white/60">
            소재 선정·사양 검토부터 적용 사례 자료까지 — 실무진에게 필요한 모든 기술 지원을 제공합니다.
          </p>
        </div>

        {/* Remaining stats */}
        {stats.slice(1).map((s, i) => (
          <div key={i} className="bg-ink p-8 lg:p-10">
            <div className="mb-6 font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
              {String(i + 3).padStart(2, "0")} · {s.caption}
            </div>
            <div className="mb-4 flex items-baseline gap-2">
              <span className="text-5xl font-medium tracking-tight text-white lg:text-6xl">
                {s.value}
              </span>
              {s.unit && <span className="text-2xl font-light text-accent">{s.unit}</span>}
            </div>
            <div className="text-sm text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBand;
