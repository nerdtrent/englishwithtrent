"use client";

import { Target, MessageCircle, BookText, Mic, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function MethodSection() {
  const { t } = useLanguage();

  const methods = [
    { icon: Target, ...t.method.items.customized },
    { icon: MessageCircle, ...t.method.items.conversation },
    { icon: BookText, ...t.method.items.grammar },
    { icon: Mic, ...t.method.items.pronunciation },
    { icon: ClipboardCheck, ...t.method.items.review },
  ];

  return (
    <section className="py-20 md:py-28 bg-primary/5 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.method.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.method.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.method.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className={`p-6 bg-card rounded-xl border border-border ${
                index === methods.length - 1 && methods.length % 3 !== 0
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <method.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
