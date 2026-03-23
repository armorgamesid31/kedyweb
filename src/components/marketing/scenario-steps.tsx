import { MotionReveal } from "@/components/marketing/motion-reveal";
import { Card, CardContent } from "@/components/ui/card";

export function ScenarioSteps({
  steps,
}: {
  steps: {
    title: string;
    description: string;
    channel: string;
  }[];
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {steps.map((step, index) => (
        <MotionReveal key={step.title} delay={index * 0.05}>
          <Card className="h-full bg-white/95">
            <CardContent className="space-y-4 px-6 py-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-lg font-bold text-white">
                {step.channel}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </CardContent>
          </Card>
        </MotionReveal>
      ))}
    </div>
  );
}
