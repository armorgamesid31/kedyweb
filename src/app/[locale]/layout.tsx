import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { locales, type AsyncParams, getLocaleFromParams } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: AsyncParams;
}) {
  const locale = await getLocaleFromParams(params);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
