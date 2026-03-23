import {
  Bot,
  CalendarCheck2,
  Clock3,
  HandCoins,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRoundCog,
  Waypoints,
} from "lucide-react";

import type { IconName } from "@/content/types";
import { cn } from "@/lib/utils";

const iconMap = {
  message: MessageCircleMore,
  sparkles: Sparkles,
  handover: UserRoundCog,
  booking: CalendarCheck2,
  workflow: Waypoints,
  campaign: HandCoins,
  team: ShieldCheck,
  shield: ShieldCheck,
  clock: Clock3,
  growth: TrendingUp,
} satisfies Record<IconName, typeof Bot>;

export function IconTile({ icon, className }: { icon: IconName; className?: string }) {
  const Icon = iconMap[icon];
  return (
    <div className={cn("flex h-11 w-11 items-center justify-center rounded-2xl bg-orange/10 text-orange", className)}>
      <Icon className="h-5 w-5" />
    </div>
  );
}
