import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "初心者でも大丈夫ですか？",
    answer: "もちろん大丈夫です！英語を始めたばかりの方も多く受講されています。基礎からゆっくり丁寧に進めますので、安心してお申し込みください。「アルファベットから不安...」という方も大歓迎です。",
  },
  {
    question: "日本語で説明してもらえますか？",
    answer: "はい、必要に応じて日本語で説明いたします。特に文法の説明や、複雑な内容を理解する際には日本語を使用します。レッスンが進むにつれて、徐々に英語の比率を増やしていくこともできます。",
  },
  {
    question: "オンラインでも効果がありますか？",
    answer: "はい、オンラインレッスンでも十分な効果が得られます。画面共有で教材を見ながら進められますし、対面と同じように会話の練習ができます。実際、多くの生徒さんがオンラインで着実に上達されています。",
  },
  {
    question: "どのくらいの頻度で受けるのがいいですか？",
    answer: "週1〜2回の受講をおすすめしています。定期的にレッスンを受けることで、学んだことを忘れにくく、着実に上達できます。ただし、お忙しい方は月2回からでも大丈夫です。継続できるペースで始めましょう。",
  },
  {
    question: "体験レッスンはありますか？",
    answer: "はい、30分の体験レッスンをご用意しています。実際のレッスンの雰囲気を体験していただき、レベルチェックや学習相談もできます。体験後、無理な勧誘は一切いたしませんので、お気軽にお申し込みください。",
  },
  {
    question: "予約のキャンセルや変更はできますか？",
    answer: "はい、レッスンの24時間前までであれば、無料でキャンセル・変更が可能です。急な予定変更にも柔軟に対応いたしますので、お気軽にご連絡ください。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "銀行振込、クレジットカード、PayPayなどに対応しています。月額プランの場合は、毎月のお支払いとなります。詳細はお問い合わせ時にご案内いたします。",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">よくある質問</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            ご不明な点はありますか？
          </h2>
          <p className="text-muted-foreground text-pretty">
            よくいただくご質問をまとめました。
            こちらにないご質問は、お気軽にお問い合わせください。
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
