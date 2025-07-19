import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes your AI + Human approach different?",
    answer: "Our unique approach combines AI's speed and consistency with human creativity and quality control. Every AI-generated piece is reviewed and refined by our team of creative professionals, ensuring you get the best of both worlds - efficiency and excellence."
  },
  {
    question: "How long does the creative process take?",
    answer: "Most projects are completed within 24-48 hours. Simple ad creatives can be ready in just a few hours, while more complex campaigns may take 2-3 days. Our AI generates initial concepts instantly, and our human team refines them quickly."
  },
  {
    question: "Can I request revisions?",
    answer: "Absolutely! All plans include multiple revision rounds. Our team works with you to ensure every piece of creative content meets your exact requirements and brand standards."
  },
  {
    question: "Do you handle brand guidelines?",
    answer: "Yes, we carefully follow your brand guidelines and can help establish them if needed. Our AI learns your brand voice, visual style, and messaging preferences to maintain consistency across all creative outputs."
  },
  {
    question: "What types of creative content do you offer?",
    answer: "We create a wide range of marketing materials including social media ads, display banners, email campaigns, landing page copy, video ad scripts, print advertisements, and more. Our team adapts to virtually any creative need."
  },
  {
    question: "How do you measure creative performance?",
    answer: "We provide detailed analytics on engagement rates, conversion metrics, and A/B testing results. Our team continuously optimizes based on performance data to improve future creative output and maximize your ROI."
  }
];

export const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our AI + Human creative platform.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};