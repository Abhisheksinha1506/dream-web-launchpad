import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <Sparkles className="w-8 h-8 text-primary mr-3" />
          <span className="text-2xl font-bold text-foreground">DesignForge</span>
        </div>
        
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Transform Ideas into
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Stunning Visuals
          </span>
          <br />
          with Smart Design
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Revolutionize your creative workflow with intelligent design automation. Create professional graphics, branding, and digital assets in minutes, not hours.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" className="group">
            Start Creating
          </Button>
          <Button variant="outline" size="lg">
            See Examples
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground mb-4">Trusted by 25,000+ designers and agencies</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
              Acme Corp
            </div>
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
              Globex Inc
            </div>
            <div className="w-24 h-8 bg-muted rounded flex items-center justify-center text-xs font-medium">
              Initech
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};