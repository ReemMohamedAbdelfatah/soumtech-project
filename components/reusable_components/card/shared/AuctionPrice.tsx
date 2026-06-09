import { useTranslations } from "next-intl";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AuctionPriceProps {
  amount: string;
  subText?: string;
}

export default function AuctionPrice({ amount, subText }: AuctionPriceProps) {
  const t = useTranslations("auctionCard");

  return (
    <TooltipProvider>
      <div className="flex flex-col items-start text-start w-full min-w-0">

        <Label className="text-[#171D5B] dark:text-gray-500 text-xs sm:text-[16px]  font-semibold select-none">
          {t("currentBidPrice")}
        </Label>

        <span className="text-[#EEA820] text-[10px] sm:text-[16px] font-bold">
          {amount}{" "}
          <span className="text-[#171D5B] dark:text-[#171D5B] text-xs sm:text-[17px] font-light ">
            {t("SAR")}
          </span>
        </span>

        {subText && (
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="text-gray-400 dark:text-gray-400 text-[10px] truncate cursor-help block max-w-[120px]">
                ({subText} {t("SARperMeter")})
              </span>
            </TooltipTrigger>
            <TooltipContent side="bottom" className="bg-[#171D5B] text-white border-none shadow-md">
              <p>{subText} {t("SARperMeter")}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    </TooltipProvider>
  );
}
