import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-background pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* CTA block */}
        <div className="mb-24 grid grid-cols-1 gap-12 border-t border-border pt-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-10 bg-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Get in touch
              </span>
            </div>
            <h2 className="text-balance text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-6xl">
              다음 프로젝트의 <br />
              <span className="gradient-text-prism">정밀 소재</span>를 함께.
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6">
            <a
              href="mailto:contact@nano-korea.co.kr"
              className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-accent"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </div>
                <div className="mt-1 text-lg font-medium text-ink">contact@nano-korea.co.kr</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </a>
            <a
              href="tel:+82"
              className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-accent"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Phone
                </div>
                <div className="mt-1 text-lg font-medium text-ink">+82 · 영업팀 직통</div>
              </div>
              <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent" />
            </a>
            <div className="flex items-center gap-3 pt-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              South Korea · Global Supply Network
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border py-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center bg-ink">
              <span className="h-2.5 w-2.5 gradient-prism" />
            </span>
            <span className="text-sm font-bold tracking-tight text-ink">
              NANO<span className="gradient-text-prism">KOREA</span>
            </span>
            <span className="ml-3 text-xs text-muted-foreground">첨단 나노소재 공급 전문</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>© {new Date().getFullYear()} Nano Korea</span>
            <span>·</span>
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
