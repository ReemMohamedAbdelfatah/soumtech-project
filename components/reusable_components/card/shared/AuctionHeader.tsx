import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AuctionHeaderProps {
  title: string;
  area?: string;
  logoSrc?: string;
  showLogo?: boolean;
  align?: 'start' | 'end';
}

export default function AuctionHeader({
  title,
  area,
  logoSrc,
  showLogo = true,
  align = 'end',
}: AuctionHeaderProps) {
  return (
    <TooltipProvider>
      <div className="flex justify-between items-start gap-3 shrink-0 mb-2 w-full">
        <div className={`flex flex-col min-w-0 flex-1 ${align === 'start' ? 'items-start text-start' : 'items-end text-end'}`}>
          <Tooltip>
            <TooltipTrigger asChild>
              <h3 className="text-[#171D5B] text-[clamp(11px,2.5vw,18px)] font-bold tracking-tight leading-snug truncate w-full cursor-help px-[4px] sm:px-[10px]">
                {title}
              </h3>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-[#171D5B] text-white border-none shadow-md">
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>

          {area && (
            <span className="text-[#171D5B] text-[clamp(9px,1.8vw,12px)] font-normal leading-[100%] mt-1 flex items-center gap-1 select-none px-[4px] sm:px-[10px]">
              <i className="fa-solid fa-ruler-combined text-[clamp(9px,1.8vw,15px)] text-[#171D5B]"></i>

              {area}
            </span>
          )}
        </div>

        {showLogo && logoSrc && (
          <div className="relative h-8 w-24 md:w-[101px] md:h-[23px] shrink-0 flex items-center justify-start">
            <Image
              src={logoSrc}
              alt="Company Logo"
              fill
              sizes="101px"
              className="object-contain object-right"
            />
          </div>
        )}
      </div>
    </TooltipProvider>
  );
}
