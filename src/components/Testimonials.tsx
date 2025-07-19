import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    avatar: "SC",
    rating: 5,
    content: "The combination of AI speed and human creativity has transformed our marketing. We're seeing 40% better engagement compared to our previous AI-only solutions."
  },
  {
    name: "Michael Rodriguez",
    role: "Brand Manager", 
    company: "Retail Innovations",
    avatar: "MR",
    rating: 5,
    content: "We've tried many creative tools, but the quality and consistency we get with the AI + human approach is unmatched. It's worth every penny."
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    company: "Global Brands Co.",
    avatar: "EW",
    rating: 5,
    content: "I was skeptical about AI creativity, but the quality and consistency we get with this platform's human oversight is remarkable. Game-changing results."
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card/70 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};