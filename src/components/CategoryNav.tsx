import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Home, Search } from "lucide-react";
import { useState } from "react";
import { CATEGORIES } from "@/data/products";

const CategoryNav = () => {
  const { categoryKey } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [q, setQ] = useState(params.get("q") || "");

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const term = q.trim();
    navigate(term ? `/products?q=${encodeURIComponent(term)}` : "/products");
  };

  return (
    <div className="sticky top-[65px] z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
          <Link
            to="/products"
            aria-label="제품 카테고리 홈"
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
          <form onSubmit={onSearch} className="ml-auto flex shrink-0 items-center gap-1 rounded-full border border-border bg-background px-3 py-1.5 focus-within:border-accent">
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="제품 검색..."
              className="w-32 bg-transparent text-xs text-ink placeholder:text-muted-foreground focus:outline-none md:w-44"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
