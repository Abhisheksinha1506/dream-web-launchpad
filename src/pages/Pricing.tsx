import { Pricing as PricingSection } from "@/components/Pricing";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;