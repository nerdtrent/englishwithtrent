import { MessageSquare, ClipboardList, PlayCircle, FileText, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "お問い合わせ",
    description: "フォームまたはメールでお気軽にご連絡ください。ご質問だけでも大歓迎です。",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "無料カウンセリング",
    description: "現在のレベルや目標、ご希望をお聞きして、最適なレッスンプランをご提案します。",
  },
  {
    icon: PlayCircle,
    step: "03",
    title: "体験レッスン",
    description: "実際のレッスンを体験していただき、相性や進め方を確認します。",
  },
  {
    icon: FileText,
    step: "04",
    title: "学習プラン作成",
    description: "あなた専用の学習プランを作成。目標達成までの道筋を一緒に考えます。",
  },
  {
    icon: CalendarCheck,
    step: "05",
    title: "レッスン開始",
    description: "ご都合に合わせてレッスンをスタート。継続しやすいペースで進めていきます。",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">ご利用の流れ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            レッスン開始までの5ステップ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            お申し込みからレッスン開始まで、丁寧にサポートいたします。
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
