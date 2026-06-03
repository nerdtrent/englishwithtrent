import { Coffee, Briefcase, Plane, PenTool, FileText, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const lessonTypes = [
  {
    icon: Coffee,
    title: "日常英会話",
    description: "日常生活で使える自然な会話力を身につけます。趣味の話から時事問題まで、幅広いトピックで楽しく練習。",
    features: ["自然なフレーズ", "リスニング強化", "発音練習"],
  },
  {
    icon: Briefcase,
    title: "ビジネス英語",
    description: "仕事で使える実践的なビジネス英語。メール、会議、プレゼンテーションなど、ビジネスシーンに対応。",
    features: ["ビジネスメール", "会議・プレゼン", "電話対応"],
  },
  {
    icon: Plane,
    title: "旅行英語",
    description: "海外旅行で役立つ英語を学びます。空港、ホテル、レストラン、観光地での会話に自信がつきます。",
    features: ["空港・ホテル対応", "レストラン会話", "緊急時の表現"],
  },
  {
    icon: PenTool,
    title: "文法・ライティング",
    description: "正確な英文を書く力を養います。文法の基礎から、エッセイやビジネス文書の書き方まで対応。",
    features: ["文法強化", "エッセイ添削", "文書作成"],
  },
  {
    icon: FileText,
    title: "試験対策",
    description: "TOEIC、TOEFL、英検などの試験対策をサポート。目標スコア達成に向けた効率的な学習を提供。",
    features: ["TOEIC/TOEFL", "英検対策", "面接練習"],
  },
  {
    icon: User,
    title: "カスタムレッスン",
    description: "上記以外の特別なご要望にも対応します。留学準備、海外赴任前研修など、目的に合わせた内容で。",
    features: ["完全オーダーメイド", "特定分野の英語", "集中レッスン"],
  },
];

export function LessonTypesSection() {
  return (
    <section id="lessons" className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">レッスン内容</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            あなたに合ったレッスンを選べます
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            目的やレベルに合わせて、最適なレッスンタイプをお選びいただけます。
            複数のタイプを組み合わせることも可能です。
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
