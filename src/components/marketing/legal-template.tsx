import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import type { LegalSection } from "@/content/types";

export function LegalTemplate({
  eyebrow,
  title,
  description,
  sections,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-space">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/95">
            <CardContent className="space-y-10 p-6 sm:p-8 lg:p-10">
              {sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                  <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
