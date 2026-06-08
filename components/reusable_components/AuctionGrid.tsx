import type { ReactNode } from "react";

import AuctionCard from "@/components/reusable_components/AuctionCard";
import auctionsData, { type Auction } from "@/lib/mocks/auctions";
import { cn } from "@/lib/utils";

type AuctionGridProps = {
  auctions?: Auction[];
};

export default function AuctionGrid({
  auctions = auctionsData,
}: AuctionGridProps) {
  return (
    <>
      <ul>
        {auctions.map((auction) => {
          return (
            <li key={auction.id}>
              <span>{auction.status}</span>
              <span>{auction.title}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
