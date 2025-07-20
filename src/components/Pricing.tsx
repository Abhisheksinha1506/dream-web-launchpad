import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small teams",
    price: 49,
    period: "month",
    features: [
      "10 AI Generations/month",
      "Human Enhancement for 5 creatives",
      "Basic Performance Analytics",
      "3 Brand Profiles",
      "Email Support"
    ],
    buttonText: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    description: "For growing businesses and agencies",
    price: 149,
    period: "month",
    features: [
      "Unlimited AI Generations",
      "Human Enhancement for 20 creatives",
      "Advanced Analytics & Insights",
      "10 Brand Profiles",
      "Priority Support",
      "Video Ad Creation",
      "Competitor Analysis"
    ],
    buttonText: "Start Free Trial",
    popular: true
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Everything",
      "Dedicated Design Team",
      "Custom Model Training",
      "API Access",
      "Enterprise Support",
      "Custom Integrations",
      "Brand Strategy Consulting"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose your perfect plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the perfect blend of AI efficiency and human expertise at a price that works for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 border-0 ${
                plan.popular 
                  ? 'bg-secondary text-secondary-foreground shadow-elegant scale-105' 
                  : 'bg-card hover:shadow-soft hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-secondary-foreground/80' : 'text-muted-foreground'}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div>
                      <span className="text-5xl font-bold">${plan.price}</span>
                      <span className={`text-sm ${plan.popular ? 'text-secondary-foreground/80' : 'text-muted-foreground'}`}>
                        /{plan.period}
                      </span>
                    </div>
                  ) : (
                    <span className="text-5xl font-bold">{plan.price}</span>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-8 pt-0">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 ${plan.popular ? 'text-secondary-foreground' : 'text-primary'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-secondary-foreground' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "secondary" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};