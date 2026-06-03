"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
          {t.cta.title}
        </h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
          {t.cta.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-base px-8"
          >
            <a href="#contact">
              {t.cta.bookTrial}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              {t.cta.contact}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
