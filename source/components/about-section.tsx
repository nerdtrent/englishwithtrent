"use client";

import { Heart, BookOpen, Users, Briefcase, Globe2, GraduationCap } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { assetPath } from "@/lib/site-assets";

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      title: t.about.features.experienced.title,
      description: t.about.features.experienced.description,
    },
    {
      icon: Heart,
      title: t.about.features.supportive.title,
      description: t.about.features.supportive.description,
    },
    {
      icon: Users,
      title: t.about.features.understanding.title,
      description: t.about.features.understanding.description,
    },
  ];

  const backgroundPoints = [
    {
      icon: Briefcase,
      text: t.about.background.points.us,
    },
    {
      icon: Globe2,
      text: t.about.background.points.startup,
    },
    {
      icon: GraduationCap,
      text: t.about.background.points.teaching,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.about.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.about.title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6 leading-relaxed text-base md:text-lg">{t.about.intro1}</p>
              <p className="mb-6 leading-relaxed text-base md:text-lg">{t.about.intro2}</p>
              <p className="leading-relaxed text-base md:text-lg">{t.about.intro3}</p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Background Section */}
        <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Profile placeholder */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted overflow-hidden">
                <img
                  src={assetPath("/profile.jpg")}
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-4">{t.about.background.title}</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.background.story1}</p>
                <p>{t.about.background.story2}</p>
                <p>{t.about.background.story3}</p>
              </div>

              {/* Background points */}
              <div className="flex flex-wrap gap-4 mt-6">
                {backgroundPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full"
                  >
                    <point.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
