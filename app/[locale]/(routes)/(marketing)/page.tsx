import ThemeToggle from "@/features/theme/components/theme-toggle";
// import { getTranslations } from "next-intl/server";
//Sections
import HeroBanner from "@/components/shared/HeroBanner";
import CompanyLogosSection from "@/components/shared/CompanyLogosSection";
import AuctionTabFilter from "@/features/auctions/components/AuctionFilterTab";
import PropertyDetailsCard from "./PropertyDetailsCard";

export default async function Home() {
  // const t = await getTranslations("Home");

  return (
    <div className="px-3 md:px-20 py-3 md:py-5">
      <HeroBanner />
      <CompanyLogosSection />
      <ThemeToggle />

      {/* in this component it will accept auction grid as children , current tab from search params from url */}
      
      <AuctionTabFilter currentTab='active' >
        hello
      </AuctionTabFilter>

      <PropertyDetailsCard />
     
    </div>

  );
}
