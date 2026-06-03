"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide">
              {t.hero.tagline}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              {t.hero.title}
              <br />
              <span className="text-primary">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="text-base px-8">
                <a href="#contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <a href="#pricing">{t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-muted overflow-hidden shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border">
                <p className="text-sm font-medium text-foreground">{t.hero.experiencedTeacher}</p>
                <p className="text-xs text-muted-foreground">{t.hero.clearTeaching}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
