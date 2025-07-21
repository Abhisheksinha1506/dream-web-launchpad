import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Users, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Design Engine",
    description: "Intelligent algorithms analyze your requirements and generate pixel-perfect designs that match your brand aesthetic and industry standards."
  },
  {
    icon: Zap,
    title: "Instant Generation",
    description: "Create stunning graphics, logos, and layouts in seconds. Transform concepts into professional designs with unprecedented speed."
  },
  {
    icon: Users,
    title: "Collaborative Workspace",
    description: "Seamlessly work with your team in real-time. Share, comment, and iterate on designs with built-in collaboration tools."
  },
  {
    icon: Target,
    title: "Brand Consistency",
    description: "Maintain perfect brand alignment across all designs with intelligent style guides and automated consistency checks."
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Design Smarter, Not Harder
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the future of design with intelligent automation that amplifies your creativity 
            and delivers professional results every time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border border-border bg-card/50 backdrop-blur-sm hover:scale-105 shadow-card"
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