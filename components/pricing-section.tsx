"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type PricingCategory = "student" | "adult" | "business";

const categoryInfo: Record<PricingCategory, { label: string; description: string }> = {
  student: {
    label: "学生向け",
    description: "中学生・高校生・大学生向けのレッスン",
  },
  adult: {
    label: "大人向け",
    description: "日常英会話や旅行英語を学びたい方向け",
  },
  business: {
    label: "ビジネス英語・TOEIC対策",
    description: "仕事・資格試験・キャリアアップを目的とした方向け",
  },
};

const pricingData: Record<PricingCategory, {
  trial: string;
  online: string;
  inPerson: string;
  monthly: string;
}> = {
  student: {
    trial: "¥1,000",
    online: "¥3,000",
    inPerson: "¥3,500",
    monthly: "¥10,000",
  },
  adult: {
    trial: "¥1,500",
    online: "¥4,000",
    inPerson: "¥5,000",
    monthly: "¥14,000",
  },
  business: {
    trial: "¥2,000",
    online: "¥5,500",
    inPerson: "¥6,500",
    monthly: "¥20,000",
  },
};

const getPricingPlans = (category: PricingCategory) => [
  {
    name: "体験レッスン",
    price: pricingData[category].trial,
    duration: "30分",
    description: "まずは気軽にお試しください",
    features: [
      "レベルチェック",
      "学習カウンセリング",
      "レッスン体験",
      "質問・相談",
    ],
    cta: "体験を予約する",
    highlighted: false,
  },
  {
    name: "オンラインレッスン",
    price: pricingData[category].online,
    duration: "60分",
    description: "自宅から便利に受講",
    features: [
      "Zoomで受講",
      "柔軟なスケジュール",
      "教材込み",
      "復習サポート",
    ],
    cta: "詳細を見る",
    highlighted: true,
  },
  {
    name: "対面レッスン",
    price: pricingData[category].inPerson,
    duration: "60分",
    description: "対面で集中して学習",
    features: [
      "直接指導",
      "一部エリア対応",
      "教材込み",
      "復習サポート",
    ],
    cta: "詳細を見る",
    highlighted: false,
  },
];

const getMonthlyPackage = (category: PricingCategory) => ({
  name: "月額パッケージ",
  price: pricingData[category].monthly,
  duration: "月4回",
  description: `定期的に学びたい方におすすめ。1回あたり¥${(parseInt(pricingData[category].monthly.replace(/[¥,]/g, "")) / 4).toLocaleString()}でお得に受講できます。`,
  features: [
    "月4回のレッスン（60分×4）",
    "オンライン/対面選択可",
    "優先予約",
    "メールサポート付き",
  ],
});

export function PricingSection() {
  const [selectedCategory, setSelectedCategory] = useState<PricingCategory>("adult");
  const pricingPlans = getPricingPlans(selectedCategory);
  const monthlyPackage = getMonthlyPackage(selectedCategory);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary font-medium mb-2 text-sm">料金プラン</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            シンプルでわかりやすい料金体系
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            入会金は不要です。レッスン料金のみで始められます。
          </p>
        </div>

        {/* Category Toggle */}
        <div className="flex flex-col items-center mb-12">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.highlighted
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    人気
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/ {plan.duration}</span>
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
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Monthly Package */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-border bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">{monthlyPackage.name}</CardTitle>
              <CardDescription>{monthlyPackage.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-foreground">{monthlyPackage.price}</span>
                <span className="text-muted-foreground ml-1">/ {monthlyPackage.duration}</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {monthlyPackage.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button size="lg">月額プランを申し込む</Button>
            </CardFooter>
          </Card>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          ※ 料金は変更になる場合があります。詳細はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
