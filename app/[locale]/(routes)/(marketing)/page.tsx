import ThemeToggle from "@/features/theme/components/theme-toggle";
// import { getTranslations } from "next-intl/server";
//Sections
import HeroBanner from "@/components/shared/HeroBanner";
import CompanyLogosSection from "@/components/shared/CompanyLogosSection";
import AuctionTabFilter, { TabType } from "@/features/auctions/components/AuctionFilterTab";
import PropertyDetailsCard from "./PropertyDetailsCard";
import { Auction, mockAuctions} from "@/src/data/mockAuctions";
import VerticalAuctionGrid from "@/components/reusable_components/card/VerticalCard/VerticalAuctionGrid";
type AuctionsPageProps = {
  params: {
    locale: string;
  };
  searchParams: Promise<{
    status?: TabType;
  }>;
};
export default async function Home({
  searchParams,
}: AuctionsPageProps) {
  // const t = await getTranslations("Home");
 const { status = "active" } = await searchParams;
   const filteredAuctions = mockAuctions.filter(
    (auction: Auction) => auction.status === status,
  );
   return (
    <div className="px-3 md:px-20 py-3 md:py-5">
      <HeroBanner />
      <CompanyLogosSection />
      <ThemeToggle />

      {/* in this component it will accept auction grid as children , current tab from search params from url */}
      <AuctionTabFilter currentTab={status} >
    
        <VerticalAuctionGrid auctions={filteredAuctions} />
 
      </AuctionTabFilter>
        

      {/* <PropertyDetailsCard /> */}
     
    </div>

  );
}