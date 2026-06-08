


import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import AuctionButton from "./shared/AuctionButton";
import AuctionImage from "./shared/AuctionImage";
import AuctionStatus from "./shared/AuctionStatus";
import AuctionHeader from "./shared/AuctionHeader";
import AuctionPrice from "./shared/AuctionPrice";

export interface AuctionCardProps {
  title: string;
  imageSrc: string;
  logoSrc: string;
  assetsCount?: number;
  status: 'active' | 'closed';
  endDate: string | Date;
  detailsUrl?: string;
  location?: string;
  area?: string;
  auctionDate?: string;
  auctionTime?: string;
  priceInfo?: {
    amount: string;
    subText?: string;
  };
}

export default function AuctionCard({
  title,
  imageSrc,
  logoSrc,
  assetsCount,
  status = 'active',
  endDate,
  detailsUrl = '#',
  location,
  area,
  auctionDate,
  auctionTime,
  priceInfo,
}: AuctionCardProps) {
  const t = useTranslations("auctionCard");


  const buttonWrapperClass = (priceInfo || assetsCount !== undefined)
    ? "w-1/2 min-w-0"
    : "w-full";

  return (

    <Card className="h-auto w-full max-w-[350px] mx-auto min-[700px]:max-w-none p-[10px] bg-white dark:bg-white text-[#171D5B] dark:text-[#171D5B] border border-gray-100 dark:border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.06)] rounded-[15px]">

      <div className="flex flex-col gap-[5px] w-full">
        <CardHeader className="p-0 space-y-2">
          <AuctionImage
            imageSrc={imageSrc}
            title={title}
            location={location}
            className="relative w-full h-[180px] md:h-[230px] shrink-0 overflow-hidden rounded-[10px] bg-gray-50 " />
          <AuctionHeader
            title={title}
            area={area}
            logoSrc={logoSrc}
            align="start" />
        </CardHeader>

        <CardContent className="p-0 w-full min-h-[50px] flex items-center justify-center">
          <AuctionStatus
            auctionDate={auctionDate}
            auctionTime={auctionTime}
            status={status}
            endDate={endDate}
          />
        </CardContent>

        <CardFooter className="p-0 pt-2 flex flex-row justify-between gap-4 bg-transparent dark:bg-transparent border-none w-full items-center mt-[-5px]">
          {priceInfo ? (
            <div className="w-1/2 min-w-0">
              <AuctionPrice amount={priceInfo.amount} subText={priceInfo.subText} />
            </div>
          ) : assetsCount !== undefined ? (
            <div className="flex flex-col items-start text-start w-1/2 min-w-0">
              <span className="text-gray-500 dark:text-gray-500 text-xs font-semibold">{t("assetsCount")}</span>
              <span className="text-[#EEA820] text-base font-bold">{assetsCount}</span>
            </div>
          ) : (
            <div className="w-1/2 min-w-0" />
          )}

          <div className="w-1/2 min-w-0">
            <AuctionButton href={detailsUrl} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
