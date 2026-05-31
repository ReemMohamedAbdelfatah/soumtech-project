import type { ReactNode } from "react";
import {
  CalendarDays,
  Clock,
  Eye,
  Gavel,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";

import AuctionCard, {
  type AuctionCardMetric as CardMetric,
} from "@/components/reusable_components/AuctionCard";
import auctionsData, {
  type Auction,
  type AuctionCardMetric as MockMetric,
} from "@/lib/mocks/auctions";
import { cn } from "@/lib/utils";

type AuctionGridProps = {
  auctions?: Auction[];
  className?: string;
  emptyState?: ReactNode;
};

const metricIcons: Record<string, LucideIcon> = {
  bid: Users,
  bids: Users,
  calendar: CalendarDays,
  clock: Clock,
  date: CalendarDays,
  eye: Eye,
  gavel: Gavel,
  location: MapPin,
  lot: Gavel,
  user: Users,
  users: Users,
  view: Eye,
  views: Eye,
};

function getMetricIcon(icon?: string) {
  if (!icon) return undefined;

  return metricIcons[icon.trim().toLowerCase()];
}

function toCardMetrics(metrics?: MockMetric[]): CardMetric[] | undefined {
  return metrics?.map(({ icon, ...metric }) => ({
    ...metric,
    icon: getMetricIcon(icon),
  }));
}

export default function AuctionGrid({
  auctions = auctionsData,
  className,
  emptyState,
}: AuctionGridProps) {
  if (auctions.length === 0) {
    return emptyState ? (
      <>{emptyState}</>
    ) : (
      <p className="rounded-md border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
        No auctions available.
      </p>
    );
  }

  return (
    <ul
      className={cn(
        "grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
        className,
      )}
    >
      {auctions.map(({ id, metrics, ...auction }) => (
        <li key={id} className="min-w-0">
          <AuctionCard
            {...auction}
            metrics={toCardMetrics(metrics)}
            className="h-full"
          />
        </li>
      ))}
    </ul>
  );
}
