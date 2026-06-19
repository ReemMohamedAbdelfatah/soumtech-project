import Image from "next/image";
import TextUnderLine from "@/components/reusable_components/TextUnderLine";
interface AuctionBannerProps {
  bannerTitle: string;
  title: string;
  assetsCount: number;
  assetsCountLabel: string;
  logo1Src?: string;
  logo2Src?: string;
  icon?: React.ReactNode;
}

export default function AuctionBanner({
  bannerTitle,
  title,
  assetsCount,
  assetsCountLabel,
  icon: Icon,
  logo1Src = "/dummy/infath-logo.svg",
  logo2Src = "/image3.png",
}: AuctionBannerProps) {
  return (
    <div className="flex flex-col w-full">
      <TextUnderLine
        text={bannerTitle}
        fontSize="text-2xl md:text-3xl font-bold"
      />
      <div className="w-full min-h-[95px] md:min-h-[115px] bg-[#F3F4F6] dark:bg-[#121824] rounded-[15px] flex flex-row justify-between items-center gap-3 border border-gray-100 dark:border-gray-800 shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        {/* Text */}
        <div className="text-right flex flex-col gap-0.5 min-w-0 px-3">
          <h3 className="text-sm xs:text-base sm:text-xl md:text-2xl font-extrabold text-primary mb-2 truncate transition-colors duration-200 ease-in-out">
            {title}
          </h3>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs md:text-[16px] font-bold ">
            {Icon}
            <span className="text-gray-500 dark:text-gray-400 font-semibold">
              {assetsCountLabel}
            </span>

            <span className="text-[#DC5224]">({assetsCount})</span>
          </div>
        </div>

        {/* Logos */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <div className="relative w-[75px] sm:w-[105px] md:w-[125px] h-[40px] sm:h-[50px] md:h-[60px]">
            <Image
              src={logo1Src}
              alt="Logo 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative w-[60px] sm:w-[85px] md:w-[105px] h-[40px] sm:h-[50px] md:h-[60px]">
            <Image
              src={logo2Src}
              alt="Logo 2"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
