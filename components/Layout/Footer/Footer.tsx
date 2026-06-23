// Next
import Link from "next/link";
// i18n
import { getTranslations } from "next-intl/server";
// Components
import Logo from "@/components/reusable_components/Logo";
import TextUnderLine from "../../reusable_components/TextUnderLine";
import SocialButton from "./SocialButton";
// icons
import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";

// ----------------------------
// Types
type FooterItem = {
  title: string;
  href?: string;
  icon?: LucideIcon;
};

// ----------------------------
export default async function Footer() {
  const t = await getTranslations("Footer");
  const currentYear = new Date().getFullYear();

  // 2nd column
  const quickLinks: FooterItem[] = [
    { title: t("Menu.TermsAndConditions"), href: "/terms" },
    { title: t("Menu.License"), href: "/license" },
    { title: t("Menu.Contact"), href: "/contact" },
  ];

  // 3nd column
  const sectionLinks: FooterItem[] = [
    { title: t("Sections.SupportLibrary"), href: "/support" },
    { title: t("Sections.FAQ"), href: "/faq" },
  ];

  // 4rd column
  const contactInfo: FooterItem[] = [
    { title: t("Contact.Location"), icon: MapPin },
    { title: "+966 570 212 216", icon: Phone, href: "tel:+966570212216" },
    { title: "info@soum.tech", icon: Mail, href: "mailto:info@soum.tech" },
  ];

  // array of columns except the 1st column
  const columns: { title: string; items: FooterItem[] }[] = [
    { title: t("Menu.Title"), items: quickLinks },
    { title: t("Sections.Title"), items: sectionLinks },
    { title: t("Contact.Title"), items: contactInfo },
  ];

  return (
    <footer className="py-5  px-3 md:px-20">
      <div className="max-w-338 mx-auto">
      <div className="flex flex-col lg:flex-row md:justify-between gap-5 lg:gap-40.25">
        {/* 1st column */}
        <div className="flex flex-col mb-5 lg:mb-0">
          <Logo sizeClass="w-[100px] md:w-[120px]" followTheme />
          <p className="text-[1rem] text-muted-foreground mt-4 max-w-sm transition-colors">
            {t("Main.Description")}
          </p>
          <div className="flex gap-4 mt-4">
            <SocialButton />
          </div>
        </div>
{/* --- Column generator --- */}
        {columns.map((col, idx) => (
          <FooterColumn key={idx} title={col.title} items={col.items} />
        ))}
      </div>
{/* ----------------- */}
      {/*--- Bottom Section ---*/}
      <div className="w-full border-t border-muted-foreground pt-5 mt-5">
        <p className="text-[1rem] text-muted-foreground text-center md:text-start">
          {t("bottom.Description")} {currentYear}
        </p>
      </div>
      </div>
    </footer>
  );
}

//! General column component 
function FooterColumn({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div className="flex flex-col mb-5 lg:mb-0">
      <TextUnderLine
        text={title}
        fontSize="text-xl md:text-2xl"
        className="font-bold mb-1 md:mb-5"
      />
      {items.map((item) => {
        if (item.href) {
          return (
            <Link key={item.href} href={item.href} className=" mt-3">
              <div className=" w-full flex items-center gap-2">
                {item.icon && <item.icon size={25} className="text-muted-foreground" />}
                <p className="text-lg text-muted-foreground hover:text-secondary transition-colors">
                  {item.title}
                </p>
              </div>
            </Link>
          );
        }
        return (
          <div key={item.title} className="w-full flex items-center gap-2 mt-3">
            {item.icon && <item.icon size={25} className="text-muted-foreground" />}
            <p className="text-lg text-muted-foreground">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}