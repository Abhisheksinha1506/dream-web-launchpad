import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Users, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Creativity",
    description: "Advanced AI algorithms that understand your brand voice and generate compelling creative content that resonates with your audience."
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Get professional-quality ads and marketing materials in minutes, not days. Speed up your creative workflow dramatically."
  },
  {
    icon: Users,
    title: "Human Expert Review",
    description: "Every AI-generated piece is reviewed and refined by our team of creative professionals to ensure top-tier quality."
  },
  {
    icon: Target,
    title: "Performance Optimized",
    description: "All creative content is optimized for maximum conversion rates based on industry best practices and data insights."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of artificial intelligence and human creativity 
            to supercharge your marketing efforts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};