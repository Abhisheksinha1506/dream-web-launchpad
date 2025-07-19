import { Card, CardContent } from "@/components/ui/card";
import { FileText, Bot, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Your Brief",
    description: "Tell us about your project, target audience, and creative requirements. Our AI analyzes your brief to understand your needs perfectly."
  },
  {
    icon: Bot,
    title: "AI Creates & Humans Refine",
    description: "Our advanced AI generates initial concepts and creative materials. Then our expert human team reviews, refines, and perfects every piece."
  },
  {
    icon: CheckCircle,
    title: "Get Perfect Results",
    description: "Receive high-quality, conversion-optimized creative content that's ready to use across all your marketing channels immediately."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process combines the best of AI technology with human expertise 
            to deliver exceptional creative results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary via-primary-glow to-primary opacity-30 transform -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative z-10 group hover:shadow-soft transition-all duration-300 bg-card border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};