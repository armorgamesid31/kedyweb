import { SectionHeading } from "@/components/shared/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_left,rgba(244,122,32,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(0,184,255,0.10),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7f6f6_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
