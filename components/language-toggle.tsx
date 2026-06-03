"use client";

import { useLanguage } from "@/lib/language-context";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
      aria-label={language === "ja" ? "Switch to English" : "日本語に切り替える"}
    >
      <Globe className="h-4 w-4" />
      <span>{t.langToggle.label}</span>
    </Button>
  );
}
