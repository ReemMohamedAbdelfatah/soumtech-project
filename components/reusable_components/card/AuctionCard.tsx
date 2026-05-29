import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import AuctionButton from './AuctionButton';
import AuctionDateTime from './AuctionDateTime';

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
    label: string;
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
  return (
    <div
      dir="rtl"
      className="w-[323px] h-[448px]  bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-5 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col justify-between"
    >
      {/* Main Image */}
      <div className="relative w-full h-[160px] shrink-0 overflow-hidden rounded-[1.5rem] bg-gray-50 mb-2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-w-md) 100vw, 400px"
          priority
          className="object-cover transition-transform duration-500 "
        />
        {/* Location Badge at the bottom of the image */}
        {location && (
          <div className="absolute bottom-0 inset-x-0 bg-[#0f1b4c]/90 text-white text-xs py-2 px-3 flex items-center justify-start gap-1 backdrop-blur-sm z-10 ">
            <span>📍</span>
            <span className="font-bold truncate">{location}</span>
          </div>
        )}
      </div>

      {/* Middle Section: Title & Logo */}
      <div className="flex justify-between items-start gap-3 px-1 shrink-0 mb-2">
        {/* Title & Subtitle/Area */}
        <div className="flex flex-col items-start text-start min-w-0">
          <h3 className="text-[#0f1b4c] font-black text-lg tracking-tight leading-snug truncate w-full">
            {title}
          </h3>
          {/* Subtitle / Land area */}
          {area && (
            <span className="text-gray-500 dark:text-gray-400 text-xs mt-1 flex items-center gap-1 select-none">
              <span className="text-[#e9a11d]">📐</span> {area}
            </span>
          )}
        </div>

        {/* Company Logo Badge */}
        <div className="relative h-8 w-24 shrink-0 flex items-center justify-end">
          <Image
            src={logoSrc}
            alt="Company Logo"
            fill
            sizes="96px"
            className="object-contain object-left"
          />
        </div>
      </div>

      {/* Interactive Status Section (Countdown / Date & Time / Closed State Banner) */}
      <div className="px-1 shrink-0 mb-4">
        {auctionDate && auctionTime ? (
          <AuctionDateTime date={auctionDate} time={auctionTime} />
        ) : status === 'active' ? (
          <CountdownTimer targetDate={endDate} />
        ) : (
          <AuctionButton variant="closed" />
        )}
      </div>

      {/* Footer Area: Details Button & Asset Count / Price Info */}
      <div className="flex justify-between items-center gap-4 mt-auto pt-2 px-1 w-full shrink-0 border-t border-gray-100/50">
        {priceInfo || assetsCount !== undefined ? (
          <>
            {/* Info on the Right (First in RTL) - occupying 50% width */}
            <div className="w-1/2 select-none min-w-0">
              {priceInfo ? (
                <div className="flex flex-col items-start text-start">
                  <span className="text-[#0f1b4c] text-xs font-bold opacity-80 truncate w-full">
                    {priceInfo.label}
                  </span>
                  <span className="text-[#e9a11d] text-base font-black mt-0.5 truncate w-full" title={priceInfo.amount}>
                    {priceInfo.amount}
                  </span>
                  {priceInfo.subText && (
                    <span className="text-gray-400 text-[10px] mt-0.5 truncate w-full">
                      {priceInfo.subText}
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-start text-start">
                  <span className="text-[#0f1b4c] text-xs font-bold opacity-80 truncate w-full">
                    عدد الاصول
                  </span>
                  <span className="text-[#e9a11d] text-lg font-black mt-0.5 truncate w-full">
                    {assetsCount} الأصول
                  </span>
                </div>
              )}
            </div>

            {/* Details Button*/}
            <div className="w-1/2 flex justify-end min-w-0 mb-2">
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


