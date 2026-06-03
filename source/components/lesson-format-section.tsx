"use client";

import { Monitor, Users, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function LessonFormatSection() {
  const { t } = useLanguage();

  const formats = [
    {
      icon: Monitor,
      title: t.lessonFormat.online.title,
      description: t.lessonFormat.online.description,
      features: t.lessonFormat.online.features,
      recommended: true,
    },
    {
      icon: Users,
      title: t.lessonFormat.inPerson.title,
      description: t.lessonFormat.inPerson.description,
      features: t.lessonFormat.inPerson.features,
      recommended: false,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-card border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.lessonFormat.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.lessonFormat.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.lessonFormat.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {formats.map((format, index) => (
            <Card
              key={index}
              className={`relative ${
                format.recommended
                  ? "border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              {format.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {t.lessonFormat.recommended}
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <format.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{format.title}</CardTitle>
                <CardDescription>{format.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {format.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 flex-shrink-0 ${
                          feature.highlight ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          feature.highlight ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
