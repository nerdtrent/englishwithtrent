"use client";

import { LanguageProvider } from "@/lib/language-context";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { BenefitsSection } from "@/components/benefits-section";
import { MethodSection } from "@/components/method-section";
import { LessonTypesSection } from "@/components/lesson-types-section";
import { LessonFormatSection } from "@/components/lesson-format-section";
import { PricingSection } from "@/components/pricing-section";
import { ProcessSection } from "@/components/process-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <MethodSection />
        <LessonTypesSection />
        <LessonFormatSection />
        <PricingSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
