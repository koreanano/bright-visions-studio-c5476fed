import termsText from "@/data/terms.txt?raw";
import privacyText from "@/data/privacy.txt?raw";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

type Props = { kind: "terms" | "privacy" };

const LegalPage = ({ kind }: Props) => {
  const isTerms = kind === "terms";
  const title = isTerms ? "이용약관" : "개인정보처리방침";
  const content = isTerms ? termsText : privacyText;

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <h1 className="mb-10 text-4xl font-medium tracking-tight text-ink md:text-5xl">{title}</h1>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-ink/80">
            {content}
          </pre>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default LegalPage;
