"use client";

import { MessageSquare, ClipboardList, PlayCircle, FileText, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    { icon: MessageSquare, ...t.process.steps.contact },
    { icon: ClipboardList, ...t.process.steps.consultation },
    { icon: PlayCircle, ...t.process.steps.trial },
    { icon: FileText, ...t.process.steps.plan },
    { icon: CalendarCheck, ...t.process.steps.start },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.process.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.process.description}
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary mb-2">STEP {step.step}</span>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
