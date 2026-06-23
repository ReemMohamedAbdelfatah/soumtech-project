'use client';

import React from 'react';
import HorizontalAuctionCard from './HorizontalAuctionCard';
import { AuctionCardProps } from '../VerticalCard/AuctionCard';

interface HorizontalAuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function HorizontalAuctionGrid({ auctions }: HorizontalAuctionGridProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3.75 w-full mx-auto ">
      {auctions.map((auction) => (
        <HorizontalAuctionCard key={auction.id} {...auction} />
      ))}
    </div>
  );
}
