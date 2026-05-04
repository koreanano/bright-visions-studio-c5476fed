import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CATEGORIES, getCategory, slugify } from "@/data/products";

const ProductsList = () => {
  const { categoryKey } = useParams();
  const category = categoryKey ? getCategory(categoryKey) : null;

  // /products  → 전체 보기
  const items = category ? category.items : CATEGORIES.flatMap((c) => c.items.map((p) => ({ ...p, _cat: c })));

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-12">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <Link to="/#products" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> 카테고리로 돌아가기
          </Link>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {category ? category.en : "All Products"}
            </span>
            <h1 className="text-balance text-4xl font-medium tracking-tight text-ink md:text-5xl">
              {category ? category.kr : "전체 제품"}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              총 {items.length}개 제품 · 파트너사 전 제품 공급 가능 — 목록에 없는 소재도 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => {
              const catKey = category ? category.key : (p as any)._cat.key;
              const catKr = category ? category.kr : (p as any)._cat.kr;
              return (
                <Link
                  key={`${catKey}-${i}-${p.name}`}
                  to={`/products/${catKey}/${slugify(p.name)}`}
                  className="group flex flex-col border border-border bg-background p-6 transition-all hover:border-accent hover:shadow-[0_12px_32px_rgba(34,211,238,0.12)]"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent">
                      {catKr}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-ink">{p.name}</h3>
                  <div className="mb-3 font-mono text-xs text-muted-foreground">{p.formula}</div>
                  <p className="mb-4 text-sm leading-relaxed text-ink/70">{p.desc}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="bg-muted px-2.5 py-1 text-xs font-medium text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ProductsList;
