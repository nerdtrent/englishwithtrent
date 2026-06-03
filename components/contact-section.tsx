"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Clock, Send } from "lucide-react";
import { LineIcon } from "@/components/brand-icons";
import { useLanguage } from "@/lib/language-context";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject || t.contact.form.subjectPlaceholder);
    const body = encodeURIComponent(
      `${t.contact.form.name}: ${formData.name}\n` +
      `${t.contact.form.emailLabel}: ${formData.email}\n\n` +
      `${t.contact.form.message}:\n${formData.message}`
    );

    window.location.href = `mailto:englishwithtrent@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2 text-sm">{t.contact.tagline}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <a href="mailto:englishwithtrent@gmail.com" className="block transition-transform hover:-translate-y-0.5">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t.contact.email}</h3>
                    <p className="text-sm text-muted-foreground">englishwithtrent@gmail.com</p>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://line.me/ti/p/trentwdb" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-0.5">
              <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <LineIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t.contact.line}</h3>
                    <p className="text-sm text-muted-foreground">trentwdb</p>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <Card>
              <CardContent className="pt-6 text-center">
                <h3 className="font-medium text-foreground mb-3">{t.contact.lineQrTitle}</h3>
                <div className="mx-auto w-40 h-40 rounded-xl bg-background border border-border/60 p-3 flex items-center justify-center">
                  <img
                    src="/line-qr.png"
                    alt={t.contact.lineQrAlt}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-3">{t.contact.lineQrDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t.contact.responseTime}</h3>
                    <p className="text-sm text-muted-foreground">{t.contact.responseTimeValue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>{t.contact.form.title}</CardTitle>
              <CardDescription>
                {t.contact.form.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name} {t.contact.form.required}</Label>
                    <Input
                      id="name"
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.emailLabel} {t.contact.form.required}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.contact.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input
                    id="subject"
                    placeholder={t.contact.form.subjectPlaceholder}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message} {t.contact.form.required}</Label>
                  <Textarea
                    id="message"
                    placeholder={t.contact.form.messagePlaceholder}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
