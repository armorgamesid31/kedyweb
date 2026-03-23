import { MotionReveal } from "@/components/marketing/motion-reveal";
import { IconTile } from "@/components/shared/icon";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { IconCard } from "@/content/types";

export function IconGrid({ items, columns = 3 }: { items: IconCard[]; columns?: 2 | 3 }) {
  const gridClass = columns === 3 ? "lg:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`grid gap-5 ${gridClass}`}>
      {items.map((item, index) => (
        <MotionReveal key={item.title} delay={index * 0.05}>
          <Card className="h-full bg-white/95">
            <CardHeader>
              <IconTile icon={item.icon} />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        </MotionReveal>
      ))}
    </div>
  );
}
