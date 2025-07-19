import { Features as FeaturesSection } from "@/components/Features";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Features;