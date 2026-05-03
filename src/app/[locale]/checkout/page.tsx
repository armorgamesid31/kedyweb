"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutStartPage() {
  const [planKey, setPlanKey] = useState("studio");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [salonNameDraft, setSalonNameDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locale = useMemo(() => {
    if (typeof window === "undefined") return "tr";
    const parts = window.location.pathname.split("/").filter(Boolean);
    return parts[0] || "tr";
  }, []);

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get("plan");
    if (plan) setPlanKey(plan.toLowerCase());
  }, []);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/checkout/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planKey,
          ownerName,
          ownerEmail,
          ownerPhone,
          salonNameDraft,
          locale,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.message || "Checkout baÅŸlatÄ±lamadÄ±.");
      }
      if (!payload?.checkoutUrl) {
        throw new Error("Checkout URL dÃ¶nmedi.");
      }
      window.location.assign(payload.checkoutUrl);
    } catch (err: any) {
      setError(err?.message || "Checkout baÅŸlatÄ±lamadÄ±.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">AboneliÄŸinizi BaÅŸlatÄ±n</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ã–deme Stripe Ã¼zerinden gÃ¼venli ÅŸekilde tamamlanÄ±r. SonrasÄ±nda mobil uygulamada davet ile aktivasyon yapacaksÄ±nÄ±z.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-3xl border border-black/10 bg-white p-6">
        <div>
          <label className="mb-1 block text-sm">Paket</label>
          <select
            value={planKey}
            onChange={(e) => setPlanKey(e.target.value)}
            className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm"
          >
            <option value="launch">Launch</option>
            <option value="studio">Studio</option>
            <option value="signature">Signature</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm">Ad Soyad</label>
          <Input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required />
        </div>
        <div>
          <label className="mb-1 block text-sm">E-posta</label>
          <Input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Telefon</label>
          <Input value={ownerPhone} onChange={(e) => setOwnerPhone(e.target.value)} required />
        </div>
        <div>
          <label className="mb-1 block text-sm">Salon AdÄ± (opsiyonel)</label>
          <Input value={salonNameDraft} onChange={(e) => setSalonNameDraft(e.target.value)} />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "YÃ¶nlendiriliyor..." : "Stripe ile Ã–demeye GeÃ§"}
        </Button>
      </form>
    </section>
  );
}
