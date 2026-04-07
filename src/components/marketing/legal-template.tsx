import { PageHero } from "@/components/marketing/page-hero";
import { Card, CardContent } from "@/components/ui/card";
import type { LegalSection } from "@/content/types";

export function LegalTemplate({
  eyebrow,
  title,
  description,
  sections,
  documents,
}: {
  eyebrow: string;
  title: string;
  description: string;
  sections?: LegalSection[];
  documents?: Array<{
    languageLabel: string;
    title: string;
    description: string;
    sections: LegalSection[];
  }>;
}) {
  const contentBlocks =
    documents && documents.length > 0
      ? documents
      : [
          {
            languageLabel: "",
            title,
            description,
            sections: sections || [],
          },
        ];

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="section-space">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/95">
            <CardContent className="space-y-10 p-6 sm:p-8 lg:p-10">
              {contentBlocks.map((block, blockIndex) => (
                <div key={`${block.languageLabel}-${block.title}`} className="space-y-8">
                  <div className="space-y-3">
                    {block.languageLabel ? (
                      <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">{block.languageLabel}</p>
                    ) : null}
                    <div className="space-y-2">
                      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">{block.title}</h2>
                      <p className="text-sm leading-7 text-muted sm:text-base">{block.description}</p>
                    </div>
                  </div>

                  {block.sections.map((section) => (
                    <div key={`${block.languageLabel}-${section.title}`} className="space-y-4">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{section.title}</h3>
                      <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}

                  {blockIndex < contentBlocks.length - 1 ? (
                    <div className="border-t border-border/70 pt-2" aria-hidden="true" />
                  ) : null}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
