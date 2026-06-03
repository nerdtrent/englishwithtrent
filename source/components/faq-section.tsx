"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/lib/language-context";

export function FaqSection() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.faq.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground text-pretty">
            {t.faq.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
