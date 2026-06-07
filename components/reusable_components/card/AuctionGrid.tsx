'use client';

import React from 'react';
import AuctionCard, { AuctionCardProps } from './AuctionCard';
import Image from "next/image";
import HorizontalAuctionCard from './HorizontalAuctionCard';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import AuctionCardDetails from '@/features/auctions/components/AuctionCardDetails';
import PropertyMapContainer from '@/features/auctions/components/PropertyMapContainer';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  const [cardFormat, setCardFormat] = React.useState<'grid' | 'list' | 'map'>('grid');
  const t = useTranslations("grid");

  return (
    <>
      <div className="flex gap-[10px] font-medium text-[16px]">
        <Button
          onClick={() => setCardFormat("list")}
          className={`
    flex items-center justify-center gap-[10px]
    w-[120px] h-[50px] rounded-[12px]
    px-4 py-2
    ${cardFormat === "list"
              ? "bg-[#171D5B] text-white hover:bg-[#171D5B]"
              : "bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]"
            }
  `}
        >
          <Image
            src={
              cardFormat === "list"
                ? "/icons/ListBulletsWhite.svg"
                : "/icons/ListBulletsBlack.svg"
            }
            alt="list"
            width={24}
            height={24}
          />

          <span>{t("list")}</span>
        </Button>

        <Button
          onClick={() => setCardFormat("grid")}
          className={`
    flex items-center justify-center gap-[10px]
    w-[120px] h-[50px] rounded-[12px]
    px-4 py-2
    ${cardFormat === "grid"
              ? "bg-[#171D5B] text-white hover:bg-[#171D5B]"
              : "bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]"
            }
  `}
        >
          <Image
            src={
              cardFormat === "grid"
                ? "/icons/GridWhite.svg"
                : "/icons/GridBlack.svg"
            }
            alt="grid"
            width={24}
            height={24}
          />
          <span>{t("card")}</span>
        </Button>

        <Button
          onClick={() => setCardFormat("map")}
          className={`
    flex items-center justify-center gap-[10px]
    w-[120px] h-[50px] rounded-[12px]
    px-4 py-2
    ${cardFormat === "map"
              ? "bg-[#171D5B] text-white hover:bg-[#171D5B]"
              : "bg-[#F5F5F5] text-black hover:bg-[#F5F5F5]"
            }
  `}
        >
          <Image
            src={
              cardFormat === "map"
                ? "/icons/MapWhite.svg"
                : "/icons/MapBlack.svg"
            }
            alt="map"
            width={24}
            height={24}
          />
          <span>{t("map")}</span>
        </Button>
      </div>
      {cardFormat === "map" && (
        <div>
          <PropertyMapContainer></PropertyMapContainer>
        </div>
      )}{["list", "grid"].includes(cardFormat) && (
        <div
          className={`grid grid-cols-1 ${cardFormat === 'list' ? 'sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4' : ' md:grid-cols-2  lg:grid-cols-3'} gap-4 w-full mx-auto px-4 py-8`}
        >
          {auctions.map((auction) => (
            cardFormat === 'list' ? (
              <AuctionCard key={auction.id} {...auction} />
            ) : (
              <HorizontalAuctionCard key={auction.id} {...auction} />
            )
          ))}
        </div>)}
    </>
  );
}
