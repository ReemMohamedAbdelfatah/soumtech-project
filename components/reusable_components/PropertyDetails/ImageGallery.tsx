"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ImageGalleryProps {
  images: string[];
  alt: string;
  logoUrl?: string;
  companyName?: string;
  contactNumber?: string;
  showRegistrationAction?: boolean;
  dimImage?: boolean;
}

export default function ImageGallery({
  images,
  alt,
  logoUrl,
  companyName,
  contactNumber,
  showRegistrationAction = true,
  dimImage = false,
}: ImageGalleryProps) {
  const t = useTranslations("ImageGallery");
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <div className="flex flex-col gap-4">
        {/* Gallery label (orange underline) + contact number */}
      <div className="flex items-center justify-between">
        <span className="inline-block border-b-[3px] border-[#DC5224] pb-1 text-lg font-medium text-foreground">
          {t("title")}
        </span>
        {contactNumber && (
          <span className="text-lg font-medium text-foreground">
            <span className="text-muted-foreground">{t("contactLabel")} </span>
            <span dir="ltr" className="tabular-nums">
              {contactNumber}
            </span>
          </span>
        )}
      </div>
      <div className="relative aspect-631/442 overflow-hidden rounded-xl ring-1 ring-foreground/10">
        <img
          src={images[index]}
          alt={alt}
          className={`h-full w-full object-cover ${dimImage ? "brightness-75" : ""}`}
        />

        {logoUrl && (
          <img
            src={logoUrl}
            alt={companyName ?? ""}
            className="absolute inset-e-3 top-3 h-13.75 w-28.25 rounded-lg object-contain p-1"
          />
        )}

        {/* Figma: navy (#171D5B) register pill, r=6, white 14px text + add icon */}
        {showRegistrationAction && (
          <Button
            size="sm"
            className="absolute inset-s-3 top-3 h-auto gap-1.5 rounded-md py-2 text-sm font-medium"
          >
            <Plus />
            {t("registerInAuction")}
          </Button>
        )}

        {count > 1 && (
          <>
            {/* Figma: left circle points left (‹), right circle points right (›) — arrows face outward */}
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("previous")}
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 size-9 -translate-y-1/2 rounded-full bg-transparent p-0 hover:bg-transparent hover:opacity-80"
            >
              <Image
                src="/icons/arrow-left-btn.png"
                alt=""
                width={36}
                height={36}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("next")}
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 size-9 -translate-y-1/2 rounded-full bg-transparent p-0 hover:bg-transparent hover:opacity-80"
            >
              <Image
                src="/icons/arrow-right-btn.png"
                alt=""
                width={36}
                height={36}
              />
            </Button>

            {/* Carousel dots — active dot orange (#DC5224) */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`size-2.5 rounded-full transition-colors ${
                    i === index ? "bg-[#DC5224]" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

    
    </div>
  );
}
