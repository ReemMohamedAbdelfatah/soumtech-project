import PreviewCard from "@/features/auctions/preview-card/PreviewCard";

interface FilterCardsProps {
  data: any;
  locale: "en" | "ar";
}
export default async function FilterCards({ data, locale }: FilterCardsProps) {
  console.log(data);

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((card) => (
        // <AuctionCard key={card.id} {...card} />
        <PreviewCard key={card.uuid} {...card} locale={locale} />
      ))}
    </div>
  );
}
