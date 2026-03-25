import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export function FAQSection({ title = "Frequently Asked Questions", subtitle, faqs, className = "" }: FAQSectionProps) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] text-sm font-medium">
              <HelpCircle className="h-4 w-4" />
              <span>FAQs</span>
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--tertiary))] bg-clip-text text-transparent">{title}</span>
          </h2>
          {subtitle && <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-background border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg hover:text-[hsl(var(--accent))] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
