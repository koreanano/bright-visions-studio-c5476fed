import Navigation from "@/components/Navigation";
import HeroSlider from "@/components/HeroSlider";
import TrustMarquee from "@/components/TrustMarquee";
import StatsBand from "@/components/StatsBand";
import ProductCategories from "@/components/ProductCategories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSlider />
      <TrustMarquee />
      <StatsBand />
      <ProductCategories />
      <Footer />
    </main>
  );
};

export default Index;
