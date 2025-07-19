import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Bot, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Your Brief",
    description: "Tell us about your project, target audience, and creative requirements."
  },
  {
    icon: Bot,
    title: "AI Creates & Humans Refine",
    description: "Our AI generates concepts and our experts review and perfect every piece."
  },
  {
    icon: CheckCircle,
    title: "Get Perfect Results",
    description: "Receive high-quality, conversion-optimized creative content ready to use."
  }
];

const HowItWorks = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navigation />
      
      {/* Main content area that fills remaining space */}
      <main className="flex-1 flex items-center pt-16 pb-4">
        <div className="container mx-auto px-6 h-full flex flex-col justify-center">
          {/* Compact header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process combines AI technology with human expertise.
            </p>
          </div>
          
          {/* Horizontal layout for steps */}
          <div className="grid md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-30" />
            
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative z-10 group hover:shadow-soft transition-all duration-300 bg-card border-0 h-fit"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      {/* Compact footer */}
      <footer className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-secondary-foreground/60">
              © 2024 CreativeAI. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HowItWorks;