'use client';

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

interface AuctionButtonProps {
  href: string;
  label?: string;
}

export default function AuctionButton({
  href,
  label,
}: AuctionButtonProps) {
  const t = useTranslations("auctionCard");

  return (
    <Button
      asChild
      className="bg-[#EEA820] hover:bg-[#d59013] text-white font-medium py-1 px-[clamp(4px,1.2vw,12px)] sm:py-3 sm:px-3 rounded-[6px] transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-[0.98] w-full h-[clamp(28px,6vw,48px)] text-[clamp(8px,1.8vw,14px)] cursor-pointer flex items-center justify-center truncate whitespace-nowrap"
    >
      <a href={href} className="truncate whitespace-nowrap">
        {label ?? t("auctionDetails")}
      </a>
    </Button>
  );
}
