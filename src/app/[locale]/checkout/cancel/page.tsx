import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">Ã–deme Ä°ptal Edildi</h1>
      <p className="mt-3 text-muted-foreground">
        SatÄ±n alma tamamlanmadÄ±. HazÄ±r olduÄŸunuzda tekrar deneyebilirsiniz.
      </p>
      <Link href="/tr/pricing" className="mt-8 inline-block text-sm font-semibold underline">
        FiyatlandÄ±rmaya geri dÃ¶n
      </Link>
    </section>
  );
}

