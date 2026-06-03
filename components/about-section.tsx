import { Heart, BookOpen, Users, Briefcase, Globe2, GraduationCap } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "経験豊富な指導",
    description: "多くの日本人学習者に英語を教えてきた経験があります。",
  },
  {
    icon: Heart,
    title: "丁寧なサポート",
    description: "一人ひとりのペースに合わせて、焦らず丁寧に指導します。",
  },
  {
    icon: Users,
    title: "日本人の悩みを理解",
    description: "発音、文法、リスニングなど、日本人特有の課題を熟知しています。",
  },
];

const backgroundPoints = [
  {
    icon: Briefcase,
    text: "アメリカの大手企業での勤務経験",
  },
  {
    icon: Globe2,
    text: "自分の会社を立ち上げた経験",
  },
  {
    icon: GraduationCap,
    text: "長年の英語指導経験",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">講師について</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            日本人学習者のための英語講師
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="prose prose-lg text-muted-foreground">
              <p className="mb-6 leading-relaxed text-base md:text-lg">
                はじめまして。私は英語講師として、長年にわたり日本人学習者の皆さんに英語を教えてきました。
              </p>
              <p className="mb-6 leading-relaxed text-base md:text-lg">
                日本人学習者が英語を学ぶ際に直面する課題 ― 発音の難しさ、文法の違い、会話への抵抗感 ― を深く理解しています。だからこそ、それぞれの生徒さんに合ったアプローチで、無理なく着実に上達できるようサポートしています。
              </p>
              <p className="leading-relaxed text-base md:text-lg">
                「英語を話せるようになりたい」「自信を持って海外旅行に行きたい」「仕事で英語を使いたい」 ― そんな皆さんの目標達成をお手伝いできることを楽しみにしています。
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teacher Background Section */}
        <div className="bg-background rounded-2xl border border-border p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Profile placeholder */}
            <div className="flex-shrink-0 flex justify-center lg:justify-start">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-2xl">&#128100;</span>
                  </div>
                  <p className="text-xs">プロフィール写真</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-4">私の経歴について</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  私はエンジニアとして、アメリカの大手企業で働いた経験があります。その後、自分の会社を立ち上げ、現在は日本で生活しています。
                </p>
                <p>
                  これまで海外で働き、さまざまな国の人たちと関わる中で、英語は単なる教科ではなく、仕事・旅行・人間関係・新しいチャンスにつながる大切なツールだと実感してきました。
                </p>
                <p>
                  日本に来てからは、本業のかたわら英語を教える活動も続けており、これまで多くの日本人学習者をサポートしてきました。日本人が英語を学ぶときにつまずきやすいポイントを理解し、一人ひとりの目標に合わせて、わかりやすく丁寧にレッスンを行っています。
                </p>
              </div>

              {/* Background points */}
              <div className="flex flex-wrap gap-4 mt-6">
                {backgroundPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full"
                  >
                    <point.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
