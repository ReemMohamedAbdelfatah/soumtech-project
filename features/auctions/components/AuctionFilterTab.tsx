"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from 'next/link';
export type TabType = "active" | "upcoming" | "ended";
interface AuctionsTabsProps {
  children: ReactNode;
  currentTab: TabType;
}

export default function AuctionTabFilter({
  children,
  currentTab,
}: AuctionsTabsProps) {
  const t = useTranslations("AuctionStatusTabs");

  const tabs: TabType[] = ["active", "upcoming", "ended"];

  return (
    <>
      <div className="flex justify-center mb-6 ">
        <div
          className="flex gap-3 self-center
    border border-gray-100
    rounded-full
    p-2
    shadow-md
    bg-white"
          role="tablist"
        >
          {tabs.map((tab) => {
            const isActive = tab === currentTab;
            return (
              <Link
                href={`/auctions?status=${tab}`}
                key={tab}
                role="tab"
                aria-selected={isActive}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md hover:bg-orange-700"
                    : " text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t(tab)}
              </Link>
            );
          })}
        </div>
      </div>
      {children}
    </>
  );
}
