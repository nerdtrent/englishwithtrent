import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "田中 美咲",
    role: "会社員・30代",
    content: "仕事で英語を使う機会が増え、不安でしたが、丁寧に教えていただき自信がつきました。今では海外のクライアントとの会議も怖くありません。",
    rating: 5,
  },
  {
    name: "佐藤 健太",
    role: "大学生・20代",
    content: "留学前の準備として受講しました。実践的な会話練習のおかげで、留学先でもすぐにコミュニケーションが取れました。",
    rating: 5,
  },
  {
    name: "山田 由美子",
    role: "主婦・40代",
    content: "子育てが落ち着き、趣味として始めました。オンラインなので自宅から気軽に受講でき、毎週のレッスンが楽しみです。",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">生徒さんの声</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            受講された方からの感想
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            実際にレッスンを受講された生徒さんからいただいた声をご紹介します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Placeholder for more testimonials */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            ※ プライバシー保護のため、お名前は仮名を使用しています
          </p>
        </div>
      </div>
    </section>
  );
}
