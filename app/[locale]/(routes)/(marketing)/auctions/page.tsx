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
    { cache: "no-store" },
  );
  const { data, items } = await response.json();
  const params = await searchParams;
  return (
    <div className="min-h-screen w-full  ">
      {/* Main Section */}
      <main className=" flex flex-col">
        {/* Title and Banner */}
        <AuctionBanner
          bannerTitle={t("title")}
          title={t("allAuctions")}
          assetsCount={items}
          assetsCountLabel={t("assetsCountLabel")}
          icon={<Image src={Gavel} alt="Gavel icon" width={18} height={18} />}
        />
        {/* Dynamic Responsive Auction Grid */}
        <div className="w-full px-3 md:px-20">
          <div className=" max-w-338 mx-auto">
            <AuctionFilter
              status={params.status ?? "active"}
              page={Number(params.page ?? 1)}
              mypage="auctions"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
