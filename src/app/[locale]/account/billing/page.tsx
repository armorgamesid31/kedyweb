"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SubscriptionSummary = {
  subscription: null | {
    planKey: string;
    status: string;
    currentPeriodEnd: string | null;
    cancelAtPeriodEnd: boolean;
  };
};

export default function BillingAccountPage() {
  const [token, setToken] = useState("");
  const [summary, setSummary] = useState<SubscriptionSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const loadSummary = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/subscription/summary", {
        headers: { authorization: `Bearer ${token}` },
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message || "Abonelik bilgisi alÄ±namadÄ±.");
      setSummary(payload);
    } catch (err: any) {
      setError(err?.message || "Abonelik bilgisi alÄ±namadÄ±.");
    } finally {
      setLoading(false);
    }
  };

  const openPortal = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/subscription/portal-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ returnUrl: window.location.href }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload?.message || "Portal link Ã¼retilemedi.");
      if (!payload?.url) throw new Error("Portal URL dÃ¶nmedi.");
      window.location.assign(payload.url);
    } catch (err: any) {
      setError(err?.message || "Portal link Ã¼retilemedi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Abonelik YÃ¶netimi</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Ã–zet bu ekranda, plan/kart/iptal iÅŸlemleri Stripe portalÄ±nda.
      </p>

      <div className="mt-6 space-y-3 rounded-3xl border border-black/10 bg-white p-6">
        <label className="text-sm">EriÅŸim TokenÄ± (geÃ§ici)</label>
        <Input value={token} onChange={(e) => setToken(e.target.value)} placeholder="Bearer token olmadan da sadece ekran yapÄ±sÄ±nÄ± gÃ¶rebilirsiniz" />
        <div className="flex gap-3">
          <Button onClick={loadSummary} disabled={loading}>Ã–zeti Getir</Button>
          <Button variant="secondary" onClick={openPortal} disabled={loading}>Stripe PortalÄ±nÄ± AÃ§</Button>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        {summary?.subscription ? (
          <div className="rounded-2xl border border-black/10 bg-background p-4 text-sm">
            <p>Paket: <strong>{summary.subscription.planKey}</strong></p>
            <p>Durum: <strong>{summary.subscription.status}</strong></p>
            <p>Yenileme: <strong>{summary.subscription.currentPeriodEnd || "-"}</strong></p>
            <p>DÃ¶nem sonu iptal: <strong>{summary.subscription.cancelAtPeriodEnd ? "Evet" : "HayÄ±r"}</strong></p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

