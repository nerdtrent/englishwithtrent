import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide">
              日本人のための英語レッスン
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6 text-balance">
              あなたの目標に合わせた
              <br />
              <span className="text-primary">パーソナル英語レッスン</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              会話、ビジネス、旅行、試験対策まで。
              日本人学習者の悩みを理解する講師が、
              あなたの英語力を丁寧にサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base px-8">
                体験レッスンを予約する
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8">
                料金を見る
              </Button>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-muted flex items-center justify-center overflow-hidden shadow-lg">
                <div className="text-center text-muted-foreground p-6">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-3xl">👤</span>
                  </div>
                  <p className="text-sm">プロフィール写真</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 shadow-lg border border-border">
                <p className="text-sm font-medium text-foreground">経験豊富な講師</p>
                <p className="text-xs text-muted-foreground">丁寧でわかりやすい指導</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
