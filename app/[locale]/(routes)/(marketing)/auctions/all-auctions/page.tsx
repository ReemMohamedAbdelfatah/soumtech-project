import AuctionGrid from "@/components/reusable_components/AuctionGrid";
import auctions from "@/lib/mocks/auctions";

export default function AllAuctionsPage() {
  const visibleAuctions = auctions.slice(0, 6);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">All Auctions</h1>
      </div>
      <AuctionGrid auctions={auctions} />
    </main>
  );
}
