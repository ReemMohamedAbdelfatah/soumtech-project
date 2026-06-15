import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

export interface HighestBidderBadgeProps {
  userPosition: 1 | 2 | 3 | null;
  isHighestBidder: boolean;
}

export default async function HighestBidderBadge({
  userPosition,
}: HighestBidderBadgeProps) {
  if (userPosition === null) return null;

  const t = await getTranslations("HighestBidderBadge");
  const key = `rank${userPosition}` as const;

  // Figma: green (#57B73C) fully-rounded pill, 16px / 500 white text, h ~40px
  return (
    <Badge className="h-10 gap-1.5 rounded-full bg-accent px-4 text-base font-medium text-accent-foreground">
      {t(key)}
    </Badge>
  );
}
