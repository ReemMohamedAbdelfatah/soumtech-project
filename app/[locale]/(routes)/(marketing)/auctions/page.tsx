import Image from "next/image";
//components
import AuctionFilter from "@/components/reusable_components/aution-filter/AuctionFilter";
import AuctionBanner from "@/components/reusable_components/card/AuctionBanner";
import AuctionGrid from "@/components/reusable_components/card/AuctionGrid";
//i18n
import { getTranslations } from "next-intl/server";
//icons
import Gavel from "@/public/icons/Icon material-gavel.svg";
//----------------------------
export default async function AuctionsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    status?: string;
  }>;
}) {
   const t = await getTranslations("AuctionsBanner");

  const response = await fetch(
    "http://localhost:3001/auctions?status=active&_page=1&_per_page=8",
    { cache: "no-store" }
  );
  const { data, items } = await response.json();
  const params = await searchParams;
  return (
    <div className="min-h-screen bg-[#f7f9fc] dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Main Section */}
      <main className="max-w-[1352px] mx-auto px-4 py-12 flex flex-col gap-8">
        {/* Title and Banner */}
        <AuctionBanner 
          bannerTitle={t("title")}
          title={t("allAuctions")}
          assetsCount={items}
          assetsCountLabel={t("assetsCountLabel")}
          icon={<Image
          src={Gavel}
          alt="Gavel icon"
          width={18}
          height={18}
         />}
        />
        {/* Dynamic Responsive Auction Grid */}
        <AuctionFilter
          status={params.status ?? "active"}
          page={Number(params.page ?? 1)}
          mypage="auctions"
        />
      </main>
    </div>
  );
}
