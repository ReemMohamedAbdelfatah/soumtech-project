
import AuctionCard, { AuctionCardProps } from './AuctionCard';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-30 justify-items-center w-full max-w-[1480px] mx-auto px-4 py-8"
    >
      {auctions.map((auction) => (
        <AuctionCard key={auction.id} {...auction} />
      ))}
    </div>
  );
}



