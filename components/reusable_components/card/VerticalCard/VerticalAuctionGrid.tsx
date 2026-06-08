'use client';

import React from 'react';
import AuctionCard, { AuctionCardProps } from './AuctionCard';

interface VerticalAuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function VerticalAuctionGrid({ auctions }: VerticalAuctionGridProps) {
  return (
    <div className="grid grid-cols-1 min-[700px]:grid-cols-2 min-[1040px]:grid-cols-3 min-[1380px]:grid-cols-4 gap-[15px] min-[1040px]:gap-[21px] w-full lg:max-w-[1352px] mx-auto px-4 py-8">
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} {...auction} />
      ))}
    </div>
  );
}
