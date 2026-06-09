import AuctionGrid from "@/components/reusable_components/AuctionGrid";
import auctions from "@/lib/mocks/auctions";
import Link from "next/link";
import AuctionTabFilter, {
  TabType,
} from "@/components/shared/AuctionTabFilter";

type AuctionsPageProps = {
  params: {
    locale: string;
  };
  searchParams: Promise<{
    status?: TabType;
  }>;
};

export default async function AuctionsPage({
  searchParams,
}: AuctionsPageProps) {
  const { status = "active" } = await searchParams;
  // const [activeStatus, setActiveStatus] = useState<TabType>("active");
  const filteredAuctions = auctions.filter(
    (auction) => auction.status === status,
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <AuctionTabFilter currentTab={status}>
        <AuctionGrid auctions={filteredAuctions} />
      </AuctionTabFilter>
      <div className="mt-6 flex justify-center">
        <Link
          href={`/auctions/all-auctions`}
          className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
        >
          All Auctions
        </Link>
      </div>
    </main>
  );
}
