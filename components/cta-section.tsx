import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 text-balance">
          まずは体験レッスンから始めてみませんか？
        </h2>
        <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
          30分の体験レッスンで、レッスンの雰囲気やあなたに合った学習プランをご提案します。
          無理な勧誘は一切ございませんので、お気軽にお申し込みください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="text-base px-8"
          >
            体験レッスンを予約する
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Mail className="mr-2 h-4 w-4" />
            お問い合わせ
          </Button>
        </div>
      </div>
    </section>
  );
}
