"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, MessageCircleMore, Sparkles } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type HeroVisualProps = {
  inboxTitle: string;
  inboxSubtitle: string;
  bookingTitle: string;
  bookingSubtitle: string;
  automationTitle: string;
  automationSubtitle: string;
  messageStream: {
    sender: string;
    text: string;
    status: string;
  }[];
};

export function HeroVisual({
  inboxTitle,
  inboxSubtitle,
  bookingTitle,
  bookingSubtitle,
  automationTitle,
  automationSubtitle,
  messageStream,
}: HeroVisualProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="absolute -left-6 top-8 h-32 w-32 rounded-full bg-blue/20 blur-3xl" />
      <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-orange/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative grid gap-4 lg:grid-cols-[1.12fr_0.88fr]"
      >
        <Card className="overflow-hidden bg-foreground text-white shadow-[0_30px_80px_-30px_rgba(36,36,38,0.65)]">
          <CardHeader className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-3 text-orange">
              <MessageCircleMore className="h-5 w-5" />
              <CardTitle className="text-white">{inboxTitle}</CardTitle>
            </div>
            <CardDescription className="text-white/70">{inboxSubtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            {messageStream.map((item, index) => (
              <motion.div
                key={`${item.sender}-${index}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.12 }}
                className="rounded-3xl border border-white/10 bg-white/6 p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <div className="text-sm font-semibold text-white">{item.sender}</div>
                  <div className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/70">{item.status}</div>
                </div>
                <p className="text-sm leading-6 text-white/80">{item.text}</p>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card className="border-orange/20 bg-white/90">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 text-orange">
                <CalendarCheck2 className="h-5 w-5" />
                <CardTitle>{bookingTitle}</CardTitle>
              </div>
              <CardDescription>{bookingSubtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl bg-orange/8 p-4">
                <div className="text-sm font-semibold text-foreground">kedy.app/randevu</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted">
                  Uygun saat secimi
                  <ArrowRight className="h-4 w-4 text-orange" />
                  Hizli rezervasyon
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue/20 bg-white/90">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 text-blue">
                <Sparkles className="h-5 w-5" />
                <CardTitle>{automationTitle}</CardTitle>
              </div>
              <CardDescription>{automationSubtitle}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Sik sorular otomatik karsilanir",
                "Baglam degistiginde insan devir modu acilir",
                "Mesajlar randevu niyetine gore yonlenir",
              ].map((line) => (
                <div key={line} className="rounded-2xl border border-black/8 bg-background px-4 py-3 text-sm text-foreground">
                  {line}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
