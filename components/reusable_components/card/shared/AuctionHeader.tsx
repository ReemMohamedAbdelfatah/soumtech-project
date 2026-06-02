import Image from 'next/image';

interface AuctionHeaderProps {
  title: string;
  area?: string;
  logoSrc?: string;
  showLogo?: boolean;
}

export default function AuctionHeader({
  title,
  area,
  logoSrc,
  showLogo = true,
}: AuctionHeaderProps) {
  return (
    <div className="flex justify-between items-start gap-3 px-1 shrink-0 mb-2">
      <div className="flex flex-col items-start text-start min-w-0">
        <h3 className="text-[#171D5B]  text-[18px] font-bold tracking-tight leading-snug truncate w-full">
          {title}
        </h3>

        {area && (
          <span className="text-[#171D5B] text-[12px] font_regular leading-[100%] text-xs mt-1 flex items-center gap-1 select-none">
            <Image
              src="/icons/ruler-combined.svg"
              alt="ruler-combined"
              width={15}
              height={15}
            />
            {area}
          </span>
        )}
      </div>

      {showLogo && logoSrc && (
        <div className="relative h-8 w-24 shrink-0 flex items-center justify-end">
          <Image
            src={logoSrc}
            alt="Company Logo"
            fill
            sizes="96px"
            className="object-contain object-left"
          />
        </div>
      )}
    </div>
  );
}
