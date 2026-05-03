import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14">
      <h1 className="text-3xl font-bold">Ödeme Alındı</h1>
      <p className="mt-3 text-muted-foreground">
        Hesabınız hazırlanıyor. Davet kodunuz kısa süre içinde tarafınıza iletilir.
      </p>
      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 text-sm">
        Mobil uygulamada çalışacak giriş adımları:
        <ul className="mt-3 list-disc pl-5">
          <li>Davet Kodum Var</li>
          <li>Telefon doğrulama</li>
          <li>Şifre belirleme ve salon kurulumu</li>
        </ul>
      </div>
      <p className="mt-4 text-sm font-medium text-emerald-700">Tüm paketlerde koşulsuz iade garantisi bulunur.</p>
      <Link href="/" className="mt-8 inline-block text-sm font-semibold underline">
        Ana sayfaya dön
      </Link>
    </section>
  );
}
