'use client';

import React from 'react';
import AuctionCard, { AuctionCardProps } from './AuctionCard';
import Image from "next/image";
import HorizontalAuctionCard from './HorizontalAuctionCard';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  const [cardFormat, setCardFormat] = React.useState<'grid' | 'list'>('grid');

  return (
    <>
      <div className="flex gap-[10px] justify-end font-medium text-[16px]">
        <button
          className={`px-4 py-2 rounded-[12px] w-[120px] h-[50px] flex gap-[10px] justify-center ${cardFormat === 'grid' ? 'bg-[#171D5B] text-white' : 'bg-[#F5F5F5] text-black'}`}
          onClick={() => setCardFormat('grid')}

        >
          <span> البطاقات</span>
          <Image
            src={cardFormat === 'grid' ? "/icons/GridWhite.svg" : "/icons/GridBlack.svg"}
            alt="grid"
            width={24}
            height={24}
          />
        </button>
        <button
          className={`flex px-4 py-2 rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center ${cardFormat === 'list' ? 'bg-[#171D5B] text-white' : 'bg-[#F5F5F5] text-black'}`}
          onClick={() => setCardFormat('list')}
        >
          <span> القائمة</span>
          <Image
            src={cardFormat === 'list' ? "/icons/ListBulletsWhite.svg" : "/icons/ListBulletsBlack.svg"}
            alt="list"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div
        dir="rtl"
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



