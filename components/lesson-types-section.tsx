"use client";

import { Coffee, Briefcase, Plane, PenTool, FileText, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export function LessonTypesSection() {
  const { t } = useLanguage();

  const lessonTypes = [
    { icon: Coffee, ...t.lessonTypes.items.conversation },
    { icon: Briefcase, ...t.lessonTypes.items.business },
    { icon: Plane, ...t.lessonTypes.items.travel },
    { icon: PenTool, ...t.lessonTypes.items.writing },
    { icon: FileText, ...t.lessonTypes.items.test },
    { icon: User, ...t.lessonTypes.items.custom },
  ];

  return (
    <section id="lessons" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.lessonTypes.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.lessonTypes.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.lessonTypes.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessonTypes.map((lesson, index) => (
            <Card key={index} className="border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <lesson.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{lesson.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {lesson.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {lesson.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
