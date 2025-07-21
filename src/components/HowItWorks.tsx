import { Card, CardContent } from "@/components/ui/card";
import { FileText, Bot, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Input Your Vision",
    description: "Describe your design goals, upload reference materials, or choose from our template library. Our system understands your creative direction instantly."
  },
  {
    icon: Bot,
    title: "AI Generates Options",
    description: "Watch as our intelligent design engine creates multiple professional variations based on your input, complete with typography, colors, and layouts."
  },
  {
    icon: CheckCircle,
    title: "Refine & Export",
    description: "Fine-tune your chosen design with our intuitive editor, then export in any format you need - from web-ready files to print-quality assets."
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple. Powerful. Instant.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to completion in three easy steps. Experience the fastest way 
            to bring your creative vision to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          {/* Removed horizontal line */}
          
          {steps.map((step, index) => (
            <Card
              key={index}
              className={
                `relative z-10 group transition-all duration-300 border bg-card ` +
                'hover:shadow-card-hover hover:scale-105 border-border shadow-card'
              }
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