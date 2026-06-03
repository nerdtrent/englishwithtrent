const navLinks = [
  { label: "ホーム", href: "#" },
  { label: "講師について", href: "#about" },
  { label: "レッスン内容", href: "#lessons" },
  { label: "料金", href: "#pricing" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">English Lessons</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              日本人学習者のための
              <br />
              パーソナル英語レッスン
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">お問い合わせ</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>メール: example@email.com</li>
              <li>LINE: @english_lesson</li>
              <li>返信目安: 24時間以内</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/50">
            © {new Date().getFullYear()} English Lessons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
