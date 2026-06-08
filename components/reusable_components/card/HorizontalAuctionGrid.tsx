'use client';

import React from 'react';
import HorizontalAuctionCard from './HorizontalAuctionCard';
import { AuctionCardProps } from './AuctionCard';

interface HorizontalAuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function HorizontalAuctionGrid({ auctions }: HorizontalAuctionGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[15px] w-full mx-auto px-4 py-8">
      {auctions.map((auction) => (
        <HorizontalAuctionCard key={auction.id} {...auction} />
      ))}
    </div>
  );
}
