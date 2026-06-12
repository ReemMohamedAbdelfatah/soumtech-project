import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { TabType } from '@/features/auctions/components/AuctionFilterTab';
import imgended from "@/public/image3.png";
interface AuctionImageProps {
  imageSrc: string;
  title: string;
  status: TabType;
  location?: string;
  className?: string;
  transparentLocationBg?: boolean;
  style?: React.CSSProperties;
}

export default function AuctionImage({
  imageSrc,
  title,
  location,
  status,
  className = '',
  transparentLocationBg = false,
  style,
}: AuctionImageProps) {
  return (
    <div className={className} style={style}>
      
      <Image
        src={status === 'ended' ? imgended : imageSrc}
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
          <i className="fa-solid fa-location-dot text-[10px] sm:text-[14px] shrink-0 text-white"></i>
          <span className="font-medium text-[9px] sm:text-[13px] leading-none truncate flex-1 min-w-0">
            {location}
          </span>
        </Badge>
      )}
    </div>
  );
}
