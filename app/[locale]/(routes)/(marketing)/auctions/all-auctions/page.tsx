import Display from "@/components/reusable_components/AuctionTable/Display";
import AuctionBanner from "@/components/reusable_components/card/AuctionBanner";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import building from "@/public/icons/Icon awesome-building.png";
type Props = {
  searchParams: Promise<{
    page?: string;
    view?: "grid" | "list" | "map";
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const t = await getTranslations("AuctionsBanner");
  const response = await fetch(
    "http://localhost:3001/auctions?status=active&_page=1&_per_page=8",
    { cache: "no-store" },
  );
  const { data, items } = await response.json();
  // console.log(items);
  return (
    <>
      <AuctionBanner
        bannerTitle={t("title")}
        title={data.title}
        assetsCount={items}
        assetsCountLabel={t("assetsCountLabel")}
        icon={<Image src={building} alt="Gavel icon" width={18} height={18} />}
      />
      <Display page={params.page || "1"} view={params.view || "grid"} />
    </>
  );
}
