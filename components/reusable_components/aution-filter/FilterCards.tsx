import { AuctionCardProps } from "@/interfaces/auctions";
import AuctionCard from "../card/VerticalCard/AuctionCard";

interface FilterCardsProps {
  data: AuctionCardProps[];
}
export default function FilterCards({ data }: FilterCardsProps) {
  console.log(data);
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-w-full">
      {data?.map((card) => (
        <AuctionCard key={card.id} {...card} />
      ))}
    </div>
  );
}
