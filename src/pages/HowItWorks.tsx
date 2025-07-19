import { HowItWorks as HowItWorksSection } from "@/components/HowItWorks";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;