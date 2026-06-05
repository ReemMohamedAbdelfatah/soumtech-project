import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import {
  CalendarDays,
  Clock,
  Eye,
  Gavel,
  MapPin,
  Users,
  type LucideIcon,
} from "lucide-react";
import activePlaceholder from "@/public/placeholder-acive.png";
import upcomingPlaceholder from "@/public/placeholder-coming.png";
import endedPlaceholder from "@/public/placeholder-ended.png";

import { cn } from "@/lib/utils";

export type AuctionCardStatus = "active" | "upcoming" | "ended";

export type AuctionCardMetric = {
  label: string;
  value: string | number;
  icon?: LucideIcon;
};

type AuctionCardProps = {
  title?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  href?: string;
  status?: AuctionCardStatus;
  location?: string;
  companyName?: string;
  currentBid?: string;
  startingBid?: string;
  endDate?: string;
  remainingTime?: string;
  lotNumber?: string | number;
  bidsCount?: number;
  viewsCount?: number;
  metrics?: AuctionCardMetric[];
  className?: string;
};

const statusStyles: Record<AuctionCardStatus, string> = {
  active: "bg-accent text-accent-foreground",
  upcoming: "bg-secondary text-secondary-foreground",
  ended: "bg-muted text-muted-foreground",
};

const actionLabelKeys: Record<AuctionCardStatus, string> = {
  active: "actions.bidNow",
  upcoming: "actions.viewDetails",
  ended: "actions.viewResults",
};

const imagePlaceholder: Record<AuctionCardStatus, StaticImageData> = {
  active: activePlaceholder,
  upcoming: upcomingPlaceholder,
  ended: endedPlaceholder,
};

function hasMetricValue(
  metric: AuctionCardMetric,
): metric is AuctionCardMetric {
  return (
    metric.value !== undefined && metric.value !== null && metric.value !== ""
  );
}

export default function AuctionCard({
  title,
  imageSrc,
  imageAlt,
  href = "#",
  status = "active",
  location,
  companyName,
  currentBid,
  startingBid,
  endDate,
  remainingTime,
  lotNumber = "A-1024",
  bidsCount = 14,
  viewsCount = 240,
  metrics,
  className,
}: AuctionCardProps) {
  const t = useTranslations("AuctionCard");
  const locale = useLocale();
  const numberFormatter = new Intl.NumberFormat(locale);
  const cardTitle = title ?? t("defaultTitle");
  const displayedLocation = location ?? t("defaultLocation");
  const displayedCompany = companyName ?? t("defaultCompany");
  const displayedCurrentBid = currentBid ?? t("defaultCurrentBid");
  const displayedStartingBid = startingBid ?? t("defaultStartingBid");
  const displayedEndDate = endDate ?? t("defaultEndDate");
  const displayedRemainingTime = remainingTime ?? t("defaultRemainingTime");
  const displayedImageAlt = imageAlt ?? t("defaultImageAlt");

  const cardMetrics =
    metrics ??
    [
      { label: t("labels.lotNumber"), value: lotNumber, icon: Gavel },
      { label: t("labels.bids"), value: bidsCount, icon: Users },
      { label: t("labels.views"), value: viewsCount, icon: Eye },
    ].filter(hasMetricValue);

  const formatMetricValue = (value: string | number) =>
    typeof value === "number" ? numberFormatter.format(value) : value;

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-md border border-border bg-card text-card-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-primary">
        {
          <Image
            src={imagePlaceholder[status]}
            alt={displayedImageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        }

        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold shadow-sm",
              statusStyles[status],
            )}
          >
            {t(`status.${status}`)}
          </span>
          <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
            {displayedCompany}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <Link
            href={href}
            className="line-clamp-2 block text-base font-semibold leading-6 text-foreground transition hover:text-primary"
          >
            {cardTitle}
          </Link>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{displayedLocation}</span>
          </div>

          <div className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
              <span>{displayedEndDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              <span>{displayedRemainingTime}</span>
            </div>
          </div>
        </div>

        {status === "ended" ? (
          <p className="bg-orange-600 text-white inline-flex h-10 shrink-0 items-center justify-center rounded-md px-4 w-full">
            auction closed
          </p>
        ) : (
          <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-md border border-border text-center rtl:divide-x-reverse">
            {cardMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div key={metric.label} className="min-w-0 px-2 py-2">
                  <div className="flex items-center justify-center gap-1 text-muted-foreground">
                    {Icon && <Icon className="size-3.5" aria-hidden="true" />}
                    <span className="truncate text-[11px]">{metric.label}</span>
                  </div>
                  <p className="mt-1 truncate text-sm font-semibold text-foreground ">
                    {formatMetricValue(metric.value)}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex items-end justify-between gap-3 border-t border-border pt-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">
              {t("labels.currentBid")}
            </p>
            <p className="truncate text-base font-bold text-foreground">
              {displayedCurrentBid}
            </p>
            <p className="mt-1 truncate text-xs text-muted-foreground">
              {t("labels.startingBid")}: {displayedStartingBid}
            </p>
          </div>

          <Link
            href={href}
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Gavel className="me-2 size-4" aria-hidden="true" />
            {t(actionLabelKeys[status])}
          </Link>
        </div>
      </div>
    </article>
  );
}
