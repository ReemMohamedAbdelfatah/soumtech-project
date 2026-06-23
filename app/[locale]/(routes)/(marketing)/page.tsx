//next
import Link from "next/link";
//i18n
import { getTranslations } from "next-intl/server";
//components
import ThemeToggle from "@/features/theme/components/theme-toggle";
import AuctionFilter from "@/components/reusable_components/aution-filter/AuctionFilter";
import HeroBanner from "@/components/shared/HeroBanner";
import CompanyLogosSection from "@/components/shared/CompanyLogosSection";
import TextUnderLine from "@/components/reusable_components/TextUnderLine";
//------------
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    status?: string;
  }>;
}) {
  const BtnStyles = `md:px-16.5 md:py-5 rounded-full text-sm font-medium transition-all px-9.5 py-[12.5px]  border border-[#EEA820] mt-[40.5px] mb-16.75`;
  const t = await getTranslations("home");
  const params = await searchParams;
  return (
    <div className=" px-3 md:px-20 py-3 md:py-5 text-5xl ">
      <div className="max-w-338 mx-auto ">
      <HeroBanner />
      <CompanyLogosSection />
      <TextUnderLine
        text={t("Auction")}
        fontSize="text-2xl md:text-[40px] font-bold mt:2 md:mt-[46.5px]"
      />
      <AuctionFilter
        status={params.status ?? "active"}
        page={Number(params.page ?? 1)}
        
      />
      {/* Button for all auctions */}
      <div className="flex flex-col items-center">
    <Link 
        href={`/auctions`}
        className={`${BtnStyles}`} > 
        {t("allAuctions")}
      </Link>
      </div>
      </div>
    </div>
  );
}
