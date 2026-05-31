import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

export const auctionFilterStatuses = ["active", "upcoming", "ended"] as const;

export type AuctionFilterStatus = (typeof auctionFilterStatuses)[number];

type AuctionTabFilterProps = {
  activeStatus?: AuctionFilterStatus;
  counts?: Partial<Record<AuctionFilterStatus, number>>;
  className?: string;
};

export function isAuctionFilterStatus(
  value: string,
): value is AuctionFilterStatus {
  return auctionFilterStatuses.includes(value as AuctionFilterStatus);
}

export default function AuctionTabFilter({
  activeStatus = "active",
  counts,
  className,
}: AuctionTabFilterProps) {
  const t = useTranslations("AuctionStatusTabs");

  return (
    <nav
      aria-label={t("ariaLabel")}
      className={cn(
        "grid w-full max-w-xl grid-cols-3 gap-1 rounded-full border border-border bg-background p-1 shadow-sm",
        className,
      )}
    >
      {auctionFilterStatuses.map((status) => {
        const isActive = status === activeStatus;

        return (
          <Link
            key={status}
            href={`?status=${status}`}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "inline-flex h-10 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              isActive &&
                "bg-orange-600 text-white shadow-sm hover:bg-orange-600 hover:text-white",
            )}
          >
            <span>{t(status)}</span>
            {typeof counts?.[status] === "number" && (
              <span className="text-xs opacity-75">{counts[status]}</span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
