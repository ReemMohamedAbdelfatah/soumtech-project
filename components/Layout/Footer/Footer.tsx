// Next
import Link from "next/link";
// i18n
import { getTranslations } from "next-intl/server";
// Components
import Logo from "@/components/reusable_components/Logo";
import TextUnderLine from "./TextUnderLine";
import SocialButton from "./SocialButton";
//icon
import { MapPin, Phone, Mail, type LucideIcon } from "lucide-react";
//----------------------------

//types
type FooterItem = {
  title: string;
  href?: string;
  icon?: LucideIcon;
};

// -----------------------------
export default async function Footer() {
  const t = await getTranslations("Footer");

  const currentYear = new Date().getFullYear();

  const quickLinks: FooterItem[] = [
    {
      title: t("Menu.TermsAndConditions"),
      href: "/terms",
    },
    {
      title: t("Menu.License"),
      href: "/license",
    },
    {
      title: t("Menu.Contact"),
      href: "/contact",
    },
  ];

  const sectionLinks: FooterItem[] = [
    {
      title: t("Sections.SupportLibrary"),
      href: "/support",
    },
    {
      title: t("Sections.FAQ"),
      href: "/faq",
    },
  ];

  const contactInfo: FooterItem[] = [
    {
      title: t("Contact.Location"),
      icon: MapPin,
    },
    {
      title: "+966 570 212 216",
      icon: Phone,
    },
    {
      title: " info@soum.tech",
      icon: Mail,
    },
  ];
  return (
    <footer className="px-4 md:px-20 py-5 ">
      <div className="flex justify-between flex-col md:flex-row">
        {/* 1st column */}
        <div className=" flex flex-col mb-5">
          <Logo sizeClass={"w-[100px] md:w-[120px]"} followTheme />

          <p className="text-[1rem] text-muted-foreground mt-4 max-w-sm transition-colors">
            {t("Main.Description")}
          </p>

          <div className="flex gap-4 mt-4">
            <SocialButton />
          </div>
        </div>

        {/* 2nd column */}
        <div className=" flex flex-col mb-5 ">
          <TextUnderLine
            text={t("Menu.Title")}
            fontSize="text-xl md:text-2xl"
            className="font-bold mb-1 md:mb-5"
          />

          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href!} className="w-fit mt-3 ">
              <p className="text-lg text-muted-foreground hover:text-secondary transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        {/* 3rd column */}
        <div className=" flex flex-col mb-5">
          <TextUnderLine
            text={t("Sections.Title")}
            fontSize="text-xl md:text-2xl"
            className="font-bold mb-1 md:mb-5"
          />

          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href!} className="w-fit mt-3 ">
              <p className="text-lg text-muted-foreground hover:text-secondary transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        {/* 4th column */}
        <div className="flex flex-col mb-5">
          <TextUnderLine
            text={t("Contact.Title")}
            fontSize="text-xl md:text-2xl"
            className="font-bold mb-1 md:mb-2"
          />

          {contactInfo.map(({ title, icon: Icon }) => (
            <div key={title} className="flex items-center gap-2 mt-3">
              {Icon && <Icon size={25} className="text-muted-foreground" />}
              <p className="text-lg text-muted-foreground">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* bottom */}
      <div className=" w-full border-t border-muted-foreground pt-5">
        <p className="text-[1rem] text-muted-foreground">
          {t("bottom.Description")}
          {currentYear}
        </p>
      </div>
    </footer>
  );
}
