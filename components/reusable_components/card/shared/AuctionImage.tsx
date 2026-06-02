import Image from 'next/image';

interface AuctionImageProps {
  imageSrc: string;
  title: string;
  location?: string;
  className?: string;
}

export default function AuctionImage({
  imageSrc,
  title,
  location,
  className = '',
}: AuctionImageProps) {
  return (
    <div className={className}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-w-md) 100vw, 400px"
        priority
        className="object-cover transition-transform duration-500 "
      />

      {location && (
        <div className="absolute bottom-0 inset-x-0 bg-[#0f1b4c]/90 text-white text-xs py-2 px-3 flex items-center justify-start gap-1 backdrop-blur-sm z-10 ">
          <Image
            src="/icons/loc.svg"
            alt="menu"
            width={9}
            height={14}
          />
          <span className="font-medium text-[15px] leading-[100%]">
            {location}
          </span>
        </div>
      )}
    </div>
  );
}
