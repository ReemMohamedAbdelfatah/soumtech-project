"use client";
import AuctionSearchFilterBar from "@/components/reusable_components/AuctionSearchFilterBar";
import AuctionGrid from "@/components/reusable_components/AuctionGrid";
import auctions from "@/lib/mocks/auctions";
import Link from "next/link";
import AuctionTabFilter, {
  TabType,
} from "@/components/shared/AuctionTabFilter";
import { useState } from "react";

type AuctionsPageProps = {
  params: {
    locale: string;
  };
  searchParams: Promise<{
    status?: string | string[];
  }>;
};

export default function AuctionsPage() {
  // const { status } = await searchParams;
  const [activeStatus, setActiveStatus] = useState<TabType>("active");
  const filteredAuctions = auctions.filter(
    (auction) => auction.status === activeStatus,
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <AuctionTabFilter onChange={setActiveStatus} currentTab={activeStatus}>
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
