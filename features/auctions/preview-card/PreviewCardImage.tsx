import { MapPin } from "lucide-react";
import Image from "next/image";

interface PreviewCardImageProps {
  src: string;
  imageCaption?: boolean;
  imageCationHover?: boolean;
  location: string;
}

export default async function PreviewCardImage({
  src,
  imageCaption = true,
  imageCationHover = false,
  location,
}: PreviewCardImageProps) {
  return (
    <figure className="relative w-full h-63.6 rounded-[10px] overflow-hidden group">
      <Image
        src={src || "https://picsum.photos/800/500?random=101"}
        alt="Auction Card"
        width={400}
        height={300}
        className="w-full h-full object-cover rounded-[10px] min-h-63.5"
      />
      {imageCaption && (
        <figcaption
          className={`absolute w-full py-1.5 px-2.5 transition-all duration-150 ${imageCationHover ? "-bottom-10 group-hover:bottom-0" : "bottom-0 "}`}
        >
          <div className="absolute inset-0 bg-black/20 backdrop-blur-md rounded-b-[10px]" />
          <span className="relative z-10   text-sm font-medium text-white flex items-center gap-1.25">
            <MapPin className="w-5 h-5" />
            {location}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
