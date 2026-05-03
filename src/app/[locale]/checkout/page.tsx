"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CheckoutStartPage() {
  const [planKey, setPlanKey] = useState("profesyonel_plus");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [salonNameDraft, setSalonNameDraft] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const locale = useMemo(() => {
    if (typeof window === "undefined") return "tr";
    const parts = window.location.pathname.split("/").filter(Boolean);
    return parts[0] || "tr";
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plan = params.get("plan");
    const ref = params.get("ref");
    if (plan) setPlanKey(plan.toLowerCase());
    if (ref) setReferralCode(ref.toUpperCase());
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
          referralCode,
          locale,
        }),
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.message || "Checkout başlatılamadı.");
      }
      if (!payload?.checkoutUrl) {
        throw new Error("Checkout URL dönmedi.");
      }
      window.location.assign(payload.checkoutUrl);
    } catch (err: any) {
      setError(err?.message || "Checkout başlatılamadı.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">Aboneliğinizi Başlatın</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ödeme Stripe üzerinden güvenli şekilde tamamlanır. Sonrasında mobil uygulamada davet kodu ile aktivasyon yapacaksınız.
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-3xl border border-black/10 bg-white p-6">
        <div>
          <label className="mb-1 block text-sm">Paket</label>
          <select
            value={planKey}
            onChange={(e) => setPlanKey(e.target.value)}
            className="h-12 w-full rounded-2xl border border-black/10 px-4 text-sm"
          >
            <option value="temel">Temel - ₺499/ay</option>
            <option value="profesyonel_plus">Profesyonel+ - İlk 3 ay ₺999, sonra ₺2.999/ay</option>
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
          <label className="mb-1 block text-sm">Salon Adı (opsiyonel)</label>
          <Input value={salonNameDraft} onChange={(e) => setSalonNameDraft(e.target.value)} />
        </div>
        <div>
          <label className="mb-1 block text-sm">Referans Kodu (opsiyonel)</label>
          <Input value={referralCode} onChange={(e) => setReferralCode(e.target.value.toUpperCase())} />
        </div>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Yönlendiriliyor..." : "Stripe ile Ödemeye Geç"}
        </Button>
      </form>
    </section>
  );
}
