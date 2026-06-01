//i18n
import { getTranslations } from "next-intl/server";
//Components
import HorizontalNavbar from "./HorizontalNavbar";
import VerticalNavbar from "./VerticalNavbar";
//types
export interface ILink {
  title: string;
  href: string;
}

export interface INavbarData {
  links: ILink[];
  login: ILink;
  
}
type Props = {
  locale: string;
};
//-----------------------------
export default async function Navbar({locale}: Props) {
  const t = await getTranslations("NavbarLinks");

 const navbarData: INavbarData = {
  links: [
    { title: t("MainPage"), href: "/" },
    { title: t("AuctionsPage"), href: "/auctions" },
    { title: t("ContactUs"), href: "/contact" },
  ],
  login: {
    title: t("Login"),
    href: "/login",
  },
};

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <HorizontalNavbar navbarData={navbarData}  locale={locale} />
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <VerticalNavbar navbarData={navbarData} />
      </div>
    </>
  );
}
