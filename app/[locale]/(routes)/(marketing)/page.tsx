import ThemeToggle from "@/features/theme/components/theme-toggle";

import AuctionFilter from "@/components/reusable_components/aution-filter/AuctionFilter";
import HeroBanner from "@/components/shared/HeroBanner";
import CompanyLogosSection from "@/components/shared/CompanyLogosSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    status?: string;
  }>;
}) {
  const params = await searchParams;
  return (
    <div className="px-3 md:px-20 py-3 md:py-5">
      <HeroBanner />
      <CompanyLogosSection />
      <ThemeToggle />
      <AuctionFilter
        status={params.status ?? "active"}
        page={Number(params.page ?? 1)}
      />
    </div>
  );
}
