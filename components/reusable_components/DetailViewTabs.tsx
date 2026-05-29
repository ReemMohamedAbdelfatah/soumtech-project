"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const auctionStatuses = ["active", "upcoming", "ended"] as const;

export type AuctionStatus = (typeof auctionStatuses)[number];

type DetailViewTabsProps = {
  value?: AuctionStatus;
  defaultValue?: AuctionStatus;
  counts?: Partial<Record<AuctionStatus, number>>;
  className?: string;
  onValueChange?: (status: AuctionStatus) => void;
};

const statusTabs: { value: AuctionStatus; labelKey: AuctionStatus }[] = [
  { value: "active", labelKey: "active" },
  { value: "upcoming", labelKey: "upcoming" },
  { value: "ended", labelKey: "ended" },
];

function isAuctionStatus(value: string): value is AuctionStatus {
  return auctionStatuses.includes(value as AuctionStatus);
}

export default function DetailViewTabs({
  value,
  defaultValue = "active",
  counts,
  className,
  onValueChange,
}: DetailViewTabsProps) {
  const t = useTranslations("AuctionStatusTabs");
  const [internalValue, setInternalValue] =
    useState<AuctionStatus>(defaultValue);
  const selectedValue = value ?? internalValue;

  const handleValueChange = (nextValue: string) => {
    if (!isAuctionStatus(nextValue)) return;

    setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <Tabs
      value={selectedValue}
      onValueChange={handleValueChange}
      className={cn("w-full items-center", className)}
    >
      <TabsList
        aria-label={t("ariaLabel")}
        className="h-12 w-full max-w-xl rounded-full bg-white p-1 shadow-sm"
      >
        {statusTabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="h-10 rounded-full px-6 text-sm font-semibold data-active:bg-orange-600 data-active:text-white data-active:shadow-none"
          >
            <span>{t(tab.labelKey)}</span>
            {typeof counts?.[tab.value] === "number" && (
              <span className="text-xs opacity-75">{counts[tab.value]}</span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
