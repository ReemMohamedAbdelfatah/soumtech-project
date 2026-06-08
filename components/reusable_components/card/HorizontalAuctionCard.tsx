import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import AuctionButton from './shared/AuctionButton';
import AuctionHeader from './shared/AuctionHeader';
import AuctionImage from './shared/AuctionImage';
import AuctionPrice from './shared/AuctionPrice';
import AuctionStatus from './shared/AuctionStatus';

export interface HorizontalAuctionCardProps {
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
  numberOfBids?: number;
}

export default function HorizontalAuctionCard({
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
  numberOfBids,
}: HorizontalAuctionCardProps) {
  const t = useTranslations("auctionCard");

  return (
    <Card
      className="bg-white rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-1.5 sm:p-2 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-row justify-between gap-[8px] sm:gap-[10px] w-full"
    >
      <AuctionImage
        imageSrc="/image4.png"
        title={title}
        location={location}
        transparentLocationBg
        className="relative w-[90px] xs:w-[115px] sm:w-[145px] md:w-[170px] h-auto self-stretch min-h-[130px] xs:min-h-[145px] sm:min-h-[155px] md:min-h-[160px] shrink-0 overflow-hidden rounded-[10px] bg-gray-50 mt-[-4px]"
      />

      {/* Left Section: Details */}
      <div className="flex flex-col justify-between gap-1 xs:gap-2 sm:gap-3 flex-1 min-w-0">

        <CardHeader className="p-0 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 sm:gap-2 w-full space-y-0">
          {/* Title & Subtitle/Area */}
          <div className="flex-1 min-w-0 w-full">
            <AuctionHeader
              title={title}
              area={area}
              showLogo={false}
              align="start"
            />
          </div>

          {/* Info on the Right (First in RTL) */}
          {priceInfo ? (
            <div className="flex-shrink-0 w-full sm:w-auto">
              <AuctionPrice amount={priceInfo.amount} subText={priceInfo.subText} />
            </div>
          ) : null}
        </CardHeader>

        {/* Interactive Status Section (Countdown / Date & Time / Closed State Banner) */}
        <CardContent className="p-0 shrink-0 mb-auto">
          <AuctionStatus
            auctionDate={auctionDate}
            auctionTime={auctionTime}
            status={status}
            endDate={endDate}
            horizontal
          />
        </CardContent>

        {/* Footer Area: Details Button & Asset Count / Price Info */}
        <CardFooter className="p-0 flex flex-row justify-between items-center gap-2 w-full border-none bg-transparent">
          {assetsCount !== undefined ? (
            <div className="flex flex-col items-start text-start">
              <span className="text-[#171D5B] text-[10px] xs:text-[12px] sm:text-[17px] font-bold">
                {t("assetsCount")}
              </span>

              <span className="text-[#EEA820] text-[11px] xs:text-[14px] sm:text-[19px] font-bold">
                {assetsCount}
              </span>
            </div>
          ) : numberOfBids !== undefined ? (
            <div className="flex flex-col items-start text-start">
              <span className="text-[#171D5B] text-[8px] xs:text-[10px] sm:text-[14px] font-bold flex gap-1 items-center">
                <Image
                  src="/icons/gavel.svg"
                  alt="bid"
                  width={13}
                  height={13}
                  className="w-2.5 h-2.5 sm:w-[13px] sm:h-[13px]"
                />

                {t("numberOfBids")}
              </span>

              <span className="text-[#EEA820] text-[9px] xs:text-[12px] sm:text-[15px] font-bold">
                {numberOfBids}
                <span className="text-[#757575] text-[8px] xs:text-[10px] sm:text-[12px] font-normal">
                  {" "}
                  {t("bidder")}
                </span>
              </span>
            </div>
          ) : (
            <div />
          )}

          {/* Details Button*/}
          <div className="flex justify-end w-[45%] sm:w-1/2 min-w-0">
            <AuctionButton href={detailsUrl} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
