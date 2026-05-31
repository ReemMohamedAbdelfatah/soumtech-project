import AuctionSearchFilterBar from "@/components/reusable_components/AuctionSearchFilterBar";
import AuctionGrid from "@/components/reusable_components/AuctionGrid";
import {
  isAuctionFilterStatus,
  type AuctionFilterStatus,
} from "@/components/shared/AuctionTabFilter";
import auctions from "@/lib/mocks/auctions";

type AuctionsPageProps = {
  searchParams: Promise<{
    status?: string | string[];
  }>;
};

function getActiveStatus(status?: string | string[]): AuctionFilterStatus {
  const value = Array.isArray(status) ? status[0] : status;

  return value && isAuctionFilterStatus(value) ? value : "active";
}

export default async function AuctionsPage({
  searchParams,
}: AuctionsPageProps) {
  const { status } = await searchParams;
  const activeStatus = getActiveStatus(status);
  const filteredAuctions = auctions.filter(
    (auction) => auction.status === activeStatus,
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <AuctionSearchFilterBar activeStatus={activeStatus} />
      <AuctionGrid auctions={filteredAuctions} />
    </main>
  );
}
