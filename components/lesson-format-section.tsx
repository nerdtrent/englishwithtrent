import { Monitor, Users, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formats = [
  {
    icon: Monitor,
    title: "オンラインレッスン",
    description: "Zoom等を使用した便利なオンラインレッスン",
    features: [
      { text: "スケジュールの柔軟性が高い", highlight: true },
      { text: "自宅からリラックスして受講", highlight: true },
      { text: "忙しい方におすすめ", highlight: true },
      { text: "全国どこからでも受講可能", highlight: false },
      { text: "録画で復習も可能（ご希望の場合）", highlight: false },
    ],
    recommended: true,
  },
  {
    icon: Users,
    title: "対面レッスン",
    description: "直接お会いして行う対面形式のレッスン",
    features: [
      { text: "より直接的なコミュニケーション", highlight: true },
      { text: "対面での学習を好む方向け", highlight: true },
      { text: "一部エリアで対応可能", highlight: true },
      { text: "教材をその場で共有", highlight: false },
      { text: "身振り手振りも交えた指導", highlight: false },
    ],
    recommended: false,
  },
];

export function LessonFormatSection() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">レッスン形式</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            オンラインと対面、選べる受講スタイル
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            ライフスタイルやお好みに合わせて、レッスン形式をお選びいただけます。
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
                    おすすめ
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
