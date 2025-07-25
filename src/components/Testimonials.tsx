import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    company: "Pixel Studios",
    avatar: "AM",
    rating: 5,
    content: "DesignForge completely revolutionized our workflow. What used to take our team days now happens in minutes, with results that exceed our expectations every time."
  },
  {
    name: "Jessica Park",
    role: "Freelance Designer", 
    company: "Park Design Co.",
    avatar: "JP",
    rating: 5,
    content: "As a solo designer, this platform is like having an entire creative team at my fingertips. The quality is incredible and my clients are amazed by the turnaround time."
  },
  {
    name: "David Kim",
    role: "Marketing Manager",
    company: "StartupFlow",
    avatar: "DK",
    rating: 5,
    content: "The brand consistency features are game-changing. Every design perfectly matches our style guide without any manual adjustments. It's like magic."
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Loved by Designers Everywhere
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={
                `relative group transition-all duration-300 border bg-card h-full ` +
                'hover:shadow-card-hover hover:scale-105 border-border shadow-card'
              }
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-card-foreground leading-relaxed mb-6 italic flex-grow">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mt-auto">
                  <Avatar className="w-12 h-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">
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