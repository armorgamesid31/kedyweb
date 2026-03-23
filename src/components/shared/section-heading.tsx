import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center", className)}>
      <div className="inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-muted sm:text-lg">{description}</p>
    </div>
  );
}
