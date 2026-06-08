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
      className="bg-[#EEA820] hover:bg-[#d59013] text-white font-medium py-1.5 px-1.5 sm:py-3 sm:px-3 rounded-[6px] transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-[0.98] w-full h-[38px] sm:h-[48px] text-[10px] sm:text-[14px] cursor-pointer flex items-center justify-center"
    >
      <a href={href}>
        {label ?? t("auctionDetails")}
      </a>
    </Button>
  );
}
