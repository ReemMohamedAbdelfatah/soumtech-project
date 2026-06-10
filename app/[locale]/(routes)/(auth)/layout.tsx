import { getTranslations } from "next-intl/server";

import VerticalNavbar from "@/components/Layout/Navbar/VerticalNavbar";
import FormLayout from "@/components/reusable_components/FormLayout";

import { createNavbarData } from "@/src/data/navbar-data";
import Logo from "@/components/reusable_components/Logo";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getTranslations("NavbarLinks");

  const navbarData = createNavbarData(t);

  return (
    <>
      <div className="absolute top-0 left-0 z-50 w-full flex md:hidden justify-between items-center px-3 py-3">
        <Logo sizeClass="w-[70px]" variant="white" />

        <VerticalNavbar
          navbarData={navbarData}
          iconClassName="white"
          variant="white"
        />
      </div>

      <FormLayout className="pt-13" LogoSize="w-[100px] md:w-[170px]">
        <div className="w-full md:w-md lg:w-lg xl:w-100 h-auto bg-background rounded-xl px-5 py-7">
          {children}
        </div>
      </FormLayout>
    </>
  );
}
