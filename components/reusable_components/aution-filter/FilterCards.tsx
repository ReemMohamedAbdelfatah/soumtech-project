import PreviewCardAuction from "@/features/auctions/preview-card/PreviewCardAuction";
import { Auction } from "@/interfaces/auctions";

interface FilterCardsProps {
  data: Auction[];
  locale: "en" | "ar";
}
export default async function FilterCards({ data, locale }: FilterCardsProps) {
  console.log("Data", data);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((card) => (
        <PreviewCardAuction key={card.uuid} {...card} locale={locale} />
      ))}
    </div>
  );
}
