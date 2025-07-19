import { Testimonials } from "@/components/Testimonials";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* About Hero Section */}
        <section className="py-24 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About CreativeAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We're revolutionizing creative workflows by combining the speed of AI with 
              the expertise of human creativity. Our mission is to empower businesses to 
              create exceptional marketing content at scale.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Human-Centered
                </h3>
                <p className="text-muted-foreground">
                  We believe AI should enhance human creativity, not replace it. Every piece 
                  of content is reviewed and refined by our expert creative team.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Quality First
                </h3>
                <p className="text-muted-foreground">
                  We're committed to delivering exceptional quality in every project. 
                  Our rigorous review process ensures your brand always looks its best.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Global Impact
                </h3>
                <p className="text-muted-foreground">
                  We work with businesses worldwide, helping them connect with their 
                  audiences through compelling, culturally-aware creative content.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default About;