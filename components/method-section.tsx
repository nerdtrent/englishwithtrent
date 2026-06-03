import { Target, MessageCircle, BookText, Mic, ClipboardCheck } from "lucide-react";

const methods = [
  {
    icon: Target,
    title: "目標に合わせたカリキュラム",
    description: "会話力向上、試験対策、ビジネス英語など、あなたの目標に合わせてレッスン内容をカスタマイズします。",
  },
  {
    icon: MessageCircle,
    title: "実践的な会話練習",
    description: "実際の場面で使える表現を重視。自然な会話ができるよう、たくさん話す機会を作ります。",
  },
  {
    icon: BookText,
    title: "わかりやすい文法解説",
    description: "複雑な文法も、日本語との違いを踏まえて丁寧に説明します。「なぜそうなるか」を理解できます。",
  },
  {
    icon: Mic,
    title: "発音・リスニング強化",
    description: "日本人が苦手とする発音やリスニングを重点的にサポート。聞き取れる・伝わる英語を目指します。",
  },
  {
    icon: ClipboardCheck,
    title: "復習サポート（希望者のみ）",
    description: "ご希望に応じて、宿題や復習用の教材をお渡しします。レッスン以外の時間も効果的に学べます。",
  },
];

export function MethodSection() {
  return (
    <section className="py-20 md:py-28 bg-primary/5 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">指導方針</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            実践的で、わかりやすいレッスン
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            「英語を使える」ようになることを最優先に考えています。
            理論だけでなく、実際に使える英語力を身につけていただきます。
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
