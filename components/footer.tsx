"use client";

import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.lessons, href: "#lessons" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t.footer.brand}</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-medium mb-4">{t.footer.sitemap}</h4>
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
            <h4 className="font-medium mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>{t.footer.emailLabel} englishwithtrent@gmail.com</li>
              <li>{t.footer.lineLabel} trentwdb</li>
              <li>{t.footer.responseLabel} {t.footer.responseValue}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/50">
            © {new Date().getFullYear()} English Lessons. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
