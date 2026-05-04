import { Link, useParams } from "react-router-dom";
import { Home } from "lucide-react";
import { CATEGORIES } from "@/data/products";

const CategoryNav = () => {
  const { categoryKey } = useParams();

  return (
    <div className="sticky top-[65px] z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          <Link
            to="/"
            aria-label="홈으로"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent"
          >
            <Home className="h-3.5 w-3.5" />
            홈
          </Link>
          <Link
            to="/products"
            className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
              !categoryKey
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-ink hover:border-accent hover:text-accent"
            }`}
          >
            전체
          </Link>
          {CATEGORIES.map((c) => {
            const active = c.key === categoryKey;
            return (
              <Link
                key={c.key}
                to={`/products/${c.key}`}
                className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  active
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-ink hover:border-accent hover:text-accent"
                }`}
              >
                {c.kr}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
