import React from 'react';
import Image from 'next/image';

interface AuctionBannerProps {
  title?: string;
  assetsCount?: number;
  logo1Src?: string;
  logo2Src?: string;
}

export default function AuctionBanner({
  title = "مزاد نفائس حريملاء",
  assetsCount = 34,
  logo1Src = "/image1.png",
  logo2Src = "/image3.png"
}: AuctionBannerProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      {/* Title */}
      <div className="flex flex-col items-end w-full px-4 mb-1 sm:mb-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171D5B] dark:text-white relative pb-2">
          المزادات
          <span className="absolute bottom-0 right-0 w-12 h-1 bg-[#EEA820] rounded"></span>
        </h2>
      </div>

      {/* Banner Card */}
      <div className="w-full min-h-[95px] md:min-h-[115px] bg-[#E5E7EB] dark:bg-[#121824] rounded-[15px] p-4 sm:p-5 md:py-5 md:px-6 flex flex-row-reverse justify-between items-center gap-3 border border-gray-100 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Right Side: Text info */}
        <div className="text-right flex flex-col gap-0.5 min-w-0">
          <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-extrabold text-[#171D5B] dark:text-white truncate">{title}</h3>
          <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-[16px] font-bold text-[#EEA820]">
            {/* Assets Count Number */}
            <span>({assetsCount})</span>

            {/* Label Text */}
            <span className="text-gray-500 dark:text-gray-400 font-semibold">عدد الأصول</span>

            {/* Building Icon (rightmost) */}
            <i className="fa-solid fa-building text-[#EEA820] text-[10px] sm:text-xs md:text-sm"></i>
          </div>
        </div>

        {/* Left Side: Logos */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="relative w-[75px] sm:w-[105px] md:w-[125px] h-[40px] sm:h-[50px] md:h-[60px] overflow-hidden rounded-[6px] sm:rounded-[8px] bg-[#171D5B] p-0.5 sm:p-1 flex items-center justify-center shrink-0">
            <Image src={logo1Src} alt="Logo 1" width={115} height={50} className="object-contain w-full h-full" />
          </div>
          <div className="relative w-[60px] sm:w-[85px] md:w-[105px] h-[40px] sm:h-[50px] md:h-[60px] overflow-hidden flex items-center justify-center shrink-0">
            <Image src={logo2Src} alt="Logo 2" width={95} height={50} className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
