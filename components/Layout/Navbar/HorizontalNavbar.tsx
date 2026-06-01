//Next
import Link from "next/link";
//Logo
import Logo from "@/components/reusable_components/Logo";
//types
import { INavbarData } from "./index";
//Icons
import { CircleUser } from "lucide-react";
//Components
import ActiveLinkIndicator from "./ActiveLinkIndicator";
//-----------------------------
type Props = {
  navbarData: INavbarData;
  locale: string;
};

//----------------------------
export default function HorizontalNavbar({
  navbarData,
  locale,
}: Props) {

  return (
    <div className="flex flex-col">
      <nav className="flex bg-primary items-center w-full h-22 justify-between px-15">
        <Logo variant="white" sizeClass="w-[100px]" />

        <div className="flex items-center gap-10">
          {navbarData.links.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[1.3rem] text-white!`}
              >
                {link.title}
                <ActiveLinkIndicator href={link.href} locale={locale} />
              </Link>
            );
          })}
        </div>

        <Link
          href={navbarData.login.href}
          className="text-white! flex items-center no-underline text-[1.3rem] gap-1"
        >
          <CircleUser className="size-6 text-white" />
          {navbarData.login.title}
        </Link>
      </nav>
    </div>
  );
}