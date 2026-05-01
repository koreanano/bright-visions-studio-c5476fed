import { Globe } from "lucide-react";

const links = [
  { label: "Materials", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "R&D Center", href: "#about" },
  { label: "Company", href: "#company" },
];

const Navigation = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center bg-white">
            <span className="h-2.5 w-2.5 gradient-prism" />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            NANO<span className="gradient-text-prism">KOREA</span>
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden items-center gap-1.5 text-xs font-semibold tracking-widest text-white/60 transition-colors hover:text-white md:flex">
            <Globe className="h-3.5 w-3.5" />
            KR / EN
          </button>
          <a
            href="#contact"
            className="bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-accent"
          >
            문의하기
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
