'use client';

import React from 'react';
import AuctionCard, { AuctionCardProps } from './AuctionCard';
import Image from "next/image";
import HorizontalAuctionCard from './HorizontalAuctionCard';
import { useTranslations } from 'next-intl';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  const [cardFormat, setCardFormat] = React.useState<'grid' | 'list'>('grid');
  const t = useTranslations("grid");

  return (
    <>
      <div className="flex gap-[10px] font-medium text-[16px]">
        
        <button
          className={`flex px-4 py-2 rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center ${cardFormat === 'list' ? 'bg-[#171D5B] text-white' : 'bg-[#F5F5F5] text-black'}`}
          onClick={() => setCardFormat('list')}
        >
          <Image
            src={cardFormat === 'list' ? "/icons/ListBulletsWhite.svg" : "/icons/ListBulletsBlack.svg"}
            alt="list"
            width={24}
            height={24}
          />
          <span> {t("list")}</span>
        </button>
        <button
          className={`px-4 py-2 rounded-[12px] w-[120px] h-[50px] flex gap-[10px] justify-center ${cardFormat === 'grid' ? 'bg-[#171D5B] text-white' : 'bg-[#F5F5F5] text-black'}`}
          onClick={() => setCardFormat('grid')}
        >
          <Image
            src={cardFormat === 'grid' ? "/icons/GridWhite.svg" : "/icons/GridBlack.svg"}
            alt="grid"
            width={24}
            height={24}
          />
          <span> {t("card")}</span>
        </button>
      </div>
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
      </div>
    </>
  );
}



