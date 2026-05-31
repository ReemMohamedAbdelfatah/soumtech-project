
import AuctionCard, { AuctionCardProps } from './AuctionCard';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 w-full mx-auto px-4 py-8"
    >
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} {...auction} />
      ))}
    </div>
  );
}



