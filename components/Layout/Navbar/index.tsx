// i18n
import { getTranslations } from "next-intl/server";

// Components
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";

// Data
import { createNavbarData } from "@/src/data/navbar-data";
import Logo from "@/components/reusable_components/Logo";

type Props = {
  locale: string;
};

export default async function Navbar({ locale }: Props) {
  const t = await getTranslations("NavbarLinks");

  const navbarData = createNavbarData(t);

  return (
    <>
      {/* Mobile */}
      <div className="block md:hidden">
      <div className=" flex  w-full  justify-between items-center px-3 py-3">
        <Logo sizeClass="w-[70px]" followTheme />
        <VerticalNavbar navbarData={navbarData} followTheme />
      </div>
{/* Line */}
        <div className="mt-1 mb-4 h-px w-full bg-[#5757577c]" />
      </div>
      {/* Disctop */}
      <div className="hidden md:block">
        <HorizontalNavbar navbarData={navbarData} locale={locale} />
      </div>
    </>
  );
}
