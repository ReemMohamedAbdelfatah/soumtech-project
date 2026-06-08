"use client";

import { ReactNode } from "react";
import { useTranslations } from "next-intl";

export type TabType = "active" | "upcoming" | "ended";

interface AuctionsTabsProps {
  children: ReactNode;
  onChange: (value: TabType) => void;
  onReset?: () => void;
  currentTab: TabType;
}

export default function AuctionTabFilter({
  children,
  onChange,
  onReset,
  currentTab,
}: AuctionsTabsProps) {
  const t = useTranslations("AuctionStatusTabs");

  const tabs: TabType[] = ["active", "upcoming", "ended"];

  return (
    <>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex gap-3" role="tablist">
          {tabs.map((tab) => {
            const isActive = tab === currentTab;
            return (
              <button
                key={tab}
                onClick={() => onChange(tab)}
                role="tab"
                aria-selected={isActive}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md hover:bg-orange-600"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t(tab)}
              </button>
            );
          })}
        </div>

        {onReset && (
          <button
            onClick={onReset}
            className="px-6 py-2 rounded-full bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-all duration-200 shadow-md"
          >
            {t("reset")}
          </button>
        )}
      </div>
      {children}
    </>
  );
}
