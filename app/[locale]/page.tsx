import ThemeToggle from "@/features/theme/components/theme-toggle";
import { getTranslations } from "next-intl/server";
//Sections
import HeroBanner from "@/components/shared/HeroBanner";
import CompanyLogosSection from "@/components/shared/CompanyLogosSection";
//--------------------------------------------
export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <div className="px-3 md:px-15 py-3 md:py-5">
      <HeroBanner />
      <CompanyLogosSection />
      <ThemeToggle />
    </div>
  );
}
