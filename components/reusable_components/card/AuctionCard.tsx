import { useTranslations } from 'next-intl';

import AuctionButton from './shared/AuctionButton';
import AuctionHeader from './shared/AuctionHeader';
import AuctionImage from './shared/AuctionImage';
import AuctionStatus from './shared/AuctionStatus';

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

  return (
    <div
      className="min-h-[448px] bg-white rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-2 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between"
    >
      {/* Main Image */}
      <AuctionImage
        imageSrc={imageSrc}
        title={title}
        location={location}
        className="relative w-full h-[255px] shrink-0 overflow-hidden rounded-[10px] bg-gray-50 mb-2"
      />

      {/* Middle Section: Title & Logo */}
      <AuctionHeader
        title={title}
        area={area}
        logoSrc={logoSrc}
      />

      {/* Interactive Status Section (Countdown / Date & Time / Closed State Banner) */}
      <div className="shrink-0 mb-2">
        <AuctionStatus
          auctionDate={auctionDate}
          auctionTime={auctionTime}
          status={status}
          endDate={endDate}
        />
      </div>

      {/* Footer Area: Details Button & Asset Count / Price Info */}
      <div className="flex justify-between gap-4 mt-auto pt-2 px-1 w-full">
        {priceInfo || assetsCount !== undefined ? (
          <>
            {/* Info on the Right (First in RTL) */}
            {priceInfo ? (
              <div className="flex flex-col items-start text-start">
                <span className="text-[#171D5B] text-[14px] font-bold w-full">
                  {t("currentBidPrice")}
                </span>

                <span
                  className="text-[#EEA820] text-[14px] font-bold"
                  title={priceInfo.amount}
                >
                  {priceInfo.amount}
                  <span className="text-[#171D5B]">
                    {" "}
                    {t("SAR")}
                  </span>
                </span>

                {priceInfo.subText && (
                  <span className="text-gray-400 text-[10px] mt-0.5 truncate w-full">
                    ({priceInfo.subText} {t("SARperMeter")})
                  </span>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-start text-start">
                <span className="text-[#171D5B] text-[17px] font-bold">
                  {t("assetsCount")}
                </span>

                <span className="text-[#EEA820] text-[19px] font-bold ">
                  {assetsCount}
                </span>
              </div>
            )}

            {/* Details Button*/}
            <div className="flex justify-end w-1/2 min-w-0 mb-2">
              <AuctionButton href={detailsUrl} />
            </div>
          </>
        ) : (
          /* If no data is present, render the details button as full width (takes full card width just like the countdown banner) */
          <div className="w-full mb-2">
            <AuctionButton href={detailsUrl} />
          </div>
        )}
      </div>
    </div>
  );
}
