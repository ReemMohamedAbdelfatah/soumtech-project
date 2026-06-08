"use client";
// import AuctionSearchFilterBar from "@/components/reusable_components/AuctionSearchFilterBar";
// import AuctionGrid from "@/components/reusable_components/AuctionGrid";
// // import {
// //   isAuctionFilterStatus,
// //   type AuctionFilterStatus,
// // } from "@/components/shared/AuctionTabFilter";
// // import auctions from "@/lib/mocks/auctions";
// // import Link from "next/link";

// type AuctionsPageProps = {
//   params: {
//     locale: string;
//   };
//   searchParams: Promise<{
//     status?: string | string[];
//   }>;
// };

// function getActiveStatus(status?: string | string[]): AuctionFilterStatus {
//   const value = Array.isArray(status) ? status[0] : status;

//   return value && isAuctionFilterStatus(value) ? value : "active";
// }

// export default async function AuctionsPage({
//   params,
//   searchParams,
// }: AuctionsPageProps) {
//   const { status } = await searchParams;

//   const activeStatus = getActiveStatus(status);
//   const filteredAuctions = auctions.filter(
//     (auction) => auction.status === activeStatus,
//   );

//   return (
//     <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
//       <AuctionSearchFilterBar activeStatus={activeStatus} />
//       <AuctionGrid auctions={filteredAuctions} />
//       <div className="mt-6 flex justify-center">
//         <Link
//           href={`/auctions/all-auctions`}
//           className="inline-flex items-center rounded-md bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
//         >
//           All Auctions
//         </Link>
//       </div>
//     </main>
//   );
// }

import AuctionGrid from "@/components/reusable_components/AuctionGrid";
import AuctionTabFilter, {
  TabType,
} from "@/components/shared/AuctionTabFilter";
import auctions from "@/lib/mocks/auctions";
import React, { useState } from "react";

const AuctionsPage = () => {
  const [tab, setTab] = useState<TabType>("active");

  const handleReset = () => {
    setTab("active");
  };

  return (
    <AuctionTabFilter currentTab={tab} onChange={setTab} onReset={handleReset}>
      <AuctionGrid auctions={auctions} filterTabValue={tab} />
    </AuctionTabFilter>
  );
};

export default AuctionsPage;
