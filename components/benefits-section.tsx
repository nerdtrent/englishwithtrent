import { Plane, Briefcase, Globe, GraduationCap, Sparkles, Film } from "lucide-react";

const benefits = [
  {
    icon: Plane,
    title: "海外旅行をもっと楽しく",
    description: "現地での会話がスムーズになり、より深い旅行体験ができます。",
  },
  {
    icon: Briefcase,
    title: "仕事の幅が広がる",
    description: "英語力はキャリアアップや転職の大きな武器になります。",
  },
  {
    icon: Globe,
    title: "世界中の人と繋がる",
    description: "異なる文化の人々とコミュニケーションが取れるようになります。",
  },
  {
    icon: GraduationCap,
    title: "留学・海外移住の準備",
    description: "海外での生活や学習に必要な英語力を身につけられます。",
  },
  {
    icon: Sparkles,
    title: "自信がつく",
    description: "英語を話せる自分に自信が持て、新しいことに挑戦できます。",
  },
  {
    icon: Film,
    title: "英語コンテンツを楽しむ",
    description: "映画、音楽、本などを原語で楽しめるようになります。",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">英語を学ぶ理由</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            英語ができると、世界が広がります
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            英語は単なるスキルではなく、新しい可能性への扉です。
            あなたの目標が何であれ、英語力があれば、その実現がより身近になります。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
