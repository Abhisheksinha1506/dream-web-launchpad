import { Sparkles, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Sparkles className="w-8 h-8 text-primary mr-3" />
              <span className="text-2xl font-bold">CreativeAI</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              The perfect blend of AI efficiency and human creativity for all your marketing needs. 
              Transform your creative workflow today.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:bg-secondary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary-foreground/10">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-secondary-foreground/10">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-6">Product</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">API</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 CreativeAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary-foreground/60 hover:text-secondary-foreground text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};