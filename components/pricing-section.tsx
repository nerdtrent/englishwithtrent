"use client";

import { useMemo, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

type PricingCategory = "student" | "adult" | "business";
type BillingMode = "single" | "monthly";
type LessonPlan = {
  id: string;
  basePrice: number;
  name: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  packageEligible?: boolean;
};

const MONTHLY_DISCOUNT = 0.25;

const pricingData: Record<PricingCategory, { trial: number; conversation?: number; conversationInPerson?: number; grammar?: number; grammarInPerson?: number; businessCurriculum?: number; businessCurriculumInPerson?: number }> = {
  student: {
    trial: 1000,
    conversation: 2000,
    conversationInPerson: 6000,
    grammar: 3500,
    grammarInPerson: 7500,
  },
  adult: {
    trial: 2000,
    conversation: 5000,
    conversationInPerson: 9000,
    grammar: 8500,
    grammarInPerson: 12500,
  },
  business: {
    trial: 4000,
    businessCurriculum: 12000,
    businessCurriculumInPerson: 16000,
  },
};

function formatYen(price: number) {
  return `¥${price.toLocaleString("ja-JP")}`;
}

function packagePrice(singleLessonPrice: number) {
  return Math.round(singleLessonPrice * 4 * (1 - MONTHLY_DISCOUNT));
}

export function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<PricingCategory>("student");
  const [billingMode, setBillingMode] = useState<BillingMode>("single");
  const { t } = useLanguage();

  const categoryInfo: Record<PricingCategory, { label: string; description: string }> = {
    student: t.pricing.categories.student,
    adult: t.pricing.categories.adult,
    business: t.pricing.categories.business,
  };

  const billingInfo: Record<BillingMode, { label: string; description: string }> = {
    single: t.pricing.billing.single,
    monthly: t.pricing.billing.monthly,
  };

  const plans = useMemo<LessonPlan[]>(() => {
    const prices = pricingData[selectedCategory];

    if (selectedCategory === "business") {
      return [
        {
          id: "trial",
          basePrice: prices.trial,
          ...t.pricing.plans.trialBusiness,
          packageEligible: false,
        },
        {
          id: "businessCurriculum",
          basePrice: prices.businessCurriculum!,
          ...t.pricing.plans.businessCurriculum,
          highlighted: true,
          packageEligible: true,
        },
        {
          id: "businessCurriculumInPerson",
          basePrice: prices.businessCurriculumInPerson!,
          ...t.pricing.plans.businessCurriculumInPerson,
          packageEligible: true,
        },
      ];
    }

    const studentCategory = selectedCategory === "student";

    return [
      {
        id: "trial",
        basePrice: prices.trial,
        ...(studentCategory ? t.pricing.plans.trialStudent : t.pricing.plans.trialAdult),
        packageEligible: false,
      },
      {
        id: "conversation",
        basePrice: prices.conversation!,
        ...(studentCategory ? t.pricing.plans.studentConversation : t.pricing.plans.adultConversation),
        highlighted: true,
        packageEligible: true,
      },
      {
        id: "conversationInPerson",
        basePrice: prices.conversationInPerson!,
        ...(studentCategory ? t.pricing.plans.studentConversationInPerson : t.pricing.plans.adultConversationInPerson),
        packageEligible: true,
      },
      {
        id: "grammar",
        basePrice: prices.grammar!,
        ...(studentCategory ? t.pricing.plans.studentGrammar : t.pricing.plans.adultGrammar),
        packageEligible: true,
      },
      {
        id: "grammarInPerson",
        basePrice: prices.grammarInPerson!,
        ...(studentCategory ? t.pricing.plans.studentGrammarInPerson : t.pricing.plans.adultGrammarInPerson),
        packageEligible: true,
      },
    ];
  }, [selectedCategory, t]);

  const displayedPrice = (plan: LessonPlan) => {
    if (billingMode === "monthly" && plan.packageEligible) {
      return formatYen(packagePrice(plan.basePrice));
    }
    return formatYen(plan.basePrice);
  };

  const displayedDuration = (plan: LessonPlan) => {
    if (billingMode === "monthly" && plan.packageEligible) {
      return t.pricing.monthlyDuration;
    }
    return plan.duration;
  };

  const displayedDescription = (plan: LessonPlan) => {
    if (billingMode === "monthly" && plan.packageEligible) {
      return `${plan.description} ${t.pricing.monthlyDescription}`;
    }
    if (billingMode === "monthly" && !plan.packageEligible) {
      return `${plan.description} ${t.pricing.trialNotPackage}`;
    }
    return plan.description;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-2 text-sm">{t.pricing.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.pricing.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.pricing.description}
          </p>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex flex-col sm:flex-row bg-card rounded-xl p-1.5 shadow-sm border border-border">
            {(Object.keys(categoryInfo) as PricingCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="block">{categoryInfo[category].label}</span>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-md">
            {categoryInfo[selectedCategory].description}
          </p>
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="inline-flex bg-card rounded-xl p-1.5 shadow-sm border border-border">
            {(Object.keys(billingInfo) as BillingMode[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setBillingMode(mode)}
                className={`relative px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  billingMode === mode
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {billingInfo[mode].label}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground text-center max-w-lg">
            {billingInfo[billingMode].description}
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 ${plans.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-5"} gap-6 mb-12`}>
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative ${
                plan.highlighted
                  ? "border-primary shadow-lg lg:scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                    {t.pricing.popular}
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription>{displayedDescription(plan)}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{displayedPrice(plan)}</span>
                  <span className="text-muted-foreground ml-1">/ {displayedDuration(plan)}</span>
                </div>
                <ul className="space-y-2 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {t.pricing.note}
        </p>
      </div>
    </section>
  );
}
