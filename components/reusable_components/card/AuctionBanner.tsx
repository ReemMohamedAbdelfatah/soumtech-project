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
  logo1Src = "/Images/Logos/REGA-Logo.png",
  logo2Src = "/dummy/infath-logo.svg",
}: AuctionBannerProps) {
  const isDefaultLogo = logo1Src === "/Images/Logos/REGA-Logo.png";

  return (
    <section className="flex w-full flex-col">
      {/* Banner Title */}
      <div className="w-full px-3 md:px-20">
        <div className="mx-auto max-w-338">
          <TextUnderLine
            text={bannerTitle}
            fontSize="text-2xl md:text-4xl font-bold"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full overflow-hidden bg-border shadow-[0_15px_40px_rgba(0,0,0,0.03)] px-3 md:px-20">
        <div className="mx-auto flex max-w-338 items-center justify-between  py-4 md:min-h-28.75 ">
          {/* Text */}
          <div className="flex flex-col gap-2">
            <h3 className="truncate text-sm font-extrabold text-primary transition-colors duration-200 ease-in-out xs:text-base sm:text-xl md:text-2xl">
              {title}
            </h3>

            <div className="flex items-center gap-1.5 text-[10px] font-bold sm:gap-2 sm:text-xs md:text-base">
              {Icon}

              <span className="font-semibold text-gray-500 dark:text-gray-400">
                {assetsCountLabel}
              </span>

              <span className="text-[#DC5224]">({assetsCount})</span>
            </div>
          </div>

          {/* Logos */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="relative h-10 w-18.75 sm:h-12.5 sm:w-26.25 md:h-15 md:w-31.25">
              <Image
                src={logo1Src}
                alt="Logo 1"
                fill
                className={`object-contain ${
                  isDefaultLogo ? "invert dark:invert-0" : ""
                }`}
              />
            </div>

            <div className="relative h-10 w-15 sm:h-12.5 sm:w-21.25 md:h-15 md:w-26.25">
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
    </section>
  );
}
