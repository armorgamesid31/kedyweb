"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const intentMessages = {
  subscribe: {
    tr: "Abonelik icin bilgi almak istiyorum.",
    en: "I would like more information about subscribing.",
  },
  login: {
    tr: "Giris ve urun erisimi hakkinda bilgi almak istiyorum.",
    en: "I would like information about login and product access.",
  },
  demo: {
    tr: "Kisa bir urun tanitimi planlamak istiyorum.",
    en: "I would like to schedule a short product walkthrough.",
  },
} as const;

export function ContactForm({
  locale,
  title,
  labels,
}: {
  locale: "tr" | "en";
  title: string;
  labels: {
    name: string;
    business: string;
    phone: string;
    email: string;
    instagram: string;
    message: string;
    submit: string;
    success: string;
    helper: string;
  };
}) {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") as keyof typeof intentMessages | null;
  const defaultMessage = useMemo(() => (intent && intentMessages[intent] ? intentMessages[intent][locale] : ""), [intent, locale]);

  const [message, setMessage] = useState(defaultMessage);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[32px] border border-black/8 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(36,36,38,0.35)] sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>{labels.name}</span>
          <Input name="name" placeholder={labels.name} required />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>{labels.business}</span>
          <Input name="business" placeholder={labels.business} required />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>{labels.phone}</span>
          <Input name="phone" placeholder={labels.phone} />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>{labels.email}</span>
          <Input name="email" type="email" placeholder={labels.email} required />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm font-medium text-foreground">
        <span>{labels.instagram}</span>
        <Input name="instagram" placeholder={labels.instagram} />
      </label>

      <label className="mt-4 block space-y-2 text-sm font-medium text-foreground">
        <span>{labels.message}</span>
        <Textarea name="message" placeholder={labels.helper} value={message} onChange={(event) => setMessage(event.target.value)} />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-muted">{submitted ? labels.success : labels.helper}</p>
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "..." : labels.submit}
        </Button>
      </div>
    </form>
  );
}
