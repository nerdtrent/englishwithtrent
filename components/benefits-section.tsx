"use client";

import { Plane, Briefcase, Globe, GraduationCap, Sparkles, Film } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function BenefitsSection() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Plane, ...t.benefits.items.travel },
    { icon: Briefcase, ...t.benefits.items.career },
    { icon: Globe, ...t.benefits.items.connect },
    { icon: GraduationCap, ...t.benefits.items.study },
    { icon: Sparkles, ...t.benefits.items.confidence },
    { icon: Film, ...t.benefits.items.media },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.benefits.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.benefits.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.benefits.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
