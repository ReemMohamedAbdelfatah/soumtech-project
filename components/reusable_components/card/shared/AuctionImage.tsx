import Image from 'next/image';
import { Badge } from "@/components/ui/badge";

interface AuctionImageProps {
  imageSrc: string;
  title: string;
  location?: string;
  className?: string;
  transparentLocationBg?: boolean;
}

export default function AuctionImage({
  imageSrc,
  title,
  location,
  className = '',
  transparentLocationBg = false,
}: AuctionImageProps) {
  return (
    <div className={className}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-w-md) 100vw, 400px"
        priority
        className="object-cover"
      />

      {location && (
        <Badge
          className={`absolute bottom-0 left-0 right-0 w-full text-white text-xs py-2 px-1.5 sm:px-3 flex items-center gap-1 sm:gap-1.5 z-10 border-none rounded-b-[10px] rounded-t-none ${
            transparentLocationBg
              ? 'bg-transparent hover:bg-transparent shadow-none backdrop-blur-none'
              : 'bg-[#0f1b4c]/80 hover:bg-[#0f1b4c]/90 backdrop-blur-md shadow-sm'
          }`}
          dir="rtl"
        >
          <Image
            src="/icons/loc.svg"
            alt="location icon"
            width={9}
            height={14}
            className="brightness-0 invert shrink-0" 
          />
          <span className="font-medium text-[9px] sm:text-[13px] leading-none truncate flex-1 min-w-0">
            {location}
          </span>
        </Badge>
      )}
    </div>
  );
}
