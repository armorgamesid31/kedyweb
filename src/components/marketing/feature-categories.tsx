import { MotionReveal } from "@/components/marketing/motion-reveal";
import { IconTile } from "@/components/shared/icon";
import { Card, CardContent } from "@/components/ui/card";
import type { FeatureCategory } from "@/content/types";

export function FeatureCategories({ categories }: { categories: FeatureCategory[] }) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {categories.map((category, index) => (
        <MotionReveal key={category.title} delay={index * 0.05}>
          <Card className="h-full bg-white/95">
            <CardContent className="p-7">
              <div className="flex items-start gap-4">
                <IconTile icon={category.icon} />
                <div>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">{category.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{category.description}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-background px-5 py-4">
                    <div className="text-sm font-semibold text-foreground">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </MotionReveal>
      ))}
    </div>
  );
}
