import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">Ã–deme AlÄ±ndÄ±</h1>
      <p className="mt-3 text-muted-foreground">
        HesabÄ±nÄ±z hazÄ±rlanÄ±yor. Davet kodunuz ve davet linkiniz kÄ±sa sÃ¼re iÃ§inde tarafÄ±nÄ±za iletilir.
      </p>
      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 text-sm">
        Mobil uygulamada Ã§alÄ±ÅŸacak giriÅŸ adÄ±mlarÄ±:
        <ul className="mt-3 list-disc pl-5">
          <li>Davet Kodum Var veya Davetimi Kabul Et</li>
          <li>WhatsApp doÄŸrulama</li>
          <li>Åifre belirleme ve salon kurulumu</li>
        </ul>
      </div>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold underline">
        Ana sayfaya dÃ¶n
      </Link>
    </section>
  );
}

