import { ArrowUpRight } from "lucide-react";

const categories = [
  { kr: "용융석영·규석", en: "Fused Silica / Quartz", count: "06", desc: "광학 등급 SiO₂ 99.999%" },
  { kr: "희토류", en: "Rare Earth", count: "02", desc: "Nd, Dy, Tb 화합물" },
  { kr: "지르코니아", en: "Zirconia ZrO₂", count: "05", desc: "고밀도 6.05 g/cm³" },
  { kr: "알루미나", en: "Alumina Al₂O₃", count: "02", desc: "구조용 14.4 GPa" },
  { kr: "탄화물·질화물", en: "Carbides / Nitrides", count: "04", desc: "SiC · Si₃N₄ · BN" },
  { kr: "금속 분말", en: "Metal Powders", count: "03", desc: "Ti · Cu · Ni 정밀 입도" },
  { kr: "나노소재", en: "Nano Materials", count: "07", desc: "1–100 nm 스케일" },
];

const ProductCategories = () => {
  return (
    <section id="products" className="relative bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Product Categories · 취급 소재
              </span>
            </div>
            <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              7개 카테고리, <br />
              <span className="text-ink-soft">하나의 정밀한 표준.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            나노코리아는 글로벌 첨단소재 제조사의 정식 파트너로서 검증된 원료를
            국내 첨단 산업에 안정적으로 공급합니다.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <a
              key={c.kr}
              href="#"
              className="group relative flex min-h-[280px] flex-col justify-between bg-background p-8 transition-colors duration-500 hover:bg-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs font-semibold tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
              </div>

              <div>
                <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-accent">
                  {c.en}
                </div>
                <h3 className="mb-3 text-2xl font-medium tracking-tight text-ink transition-colors group-hover:text-white">
                  {c.kr}
                </h3>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-white/60">
                  {c.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-ink transition-colors group-hover:text-accent">
                    {c.count}
                  </span>
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-white/40">
                    products
                  </span>
                </div>
              </div>
            </a>
          ))}

          {/* CTA tile */}
          <a
            href="#contact"
            className="group relative flex min-h-[280px] flex-col justify-between gradient-prism p-8 transition-all hover:opacity-90"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs font-semibold tracking-widest text-ink/70">
                CONTACT
              </span>
              <ArrowUpRight className="h-5 w-5 text-ink transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </div>
            <div>
              <h3 className="mb-3 text-3xl font-semibold tracking-tight text-ink">
                맞춤 견적<br />문의하기
              </h3>
              <p className="text-sm text-ink/70">
                필요한 소재의 사양과 수량을 알려주세요.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
