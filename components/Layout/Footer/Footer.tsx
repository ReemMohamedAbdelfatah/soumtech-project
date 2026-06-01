// Next
import Link from "next/link";
// i18n
import { getTranslations } from "next-intl/server";
// Components
import Logo from "@/components/reusable_components/Logo";
import TextUnderLine from "./TextUnderLine";
import SocialButton from "./SocialButton";
//----------------------------

//types
type FooterItem = {
  title: string;
  href?: string;
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
    },
    {
      title: t("Contact.Phone"),
    },
    {
      title: t("Contact.Mail"),
    },
  ];
  return (
    <footer className="px-4 md:px-15 py-5 self-end">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8">

        {/* 1st column */}
        <div className="col-span-1 sm:col-span-2 md:col-span-4 flex flex-col">
          <Logo sizeClass={"w-[100px] md:w-[120px]"} followTheme />

          <p className="text-[1rem] text-muted-foreground mt-4 max-w-sm transition-colors">
            {t("Main.Description")}
          </p>

          <div className="flex gap-4 mt-4">
            <SocialButton />
          </div>
        </div>

        {/* 2nd column */}
        <div className="col-span-1 md:col-span-3 flex flex-col mt-0 md:mt-4">
          <TextUnderLine
            text={t("Menu.Title")}
            fontSize="text-2xl"
            className="font-bold"
          />

          {quickLinks.map((item) => (
            <Link key={item.href} href={item.href!} className="w-fit my-1">
              <p className="text-[1.2rem] text-muted-foreground hover:text-secondary transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        {/* 3rd column */}
        <div className="col-span-1 md:col-span-3 flex flex-col mt-0 md:mt-4">
          <TextUnderLine
            text={t("Sections.Title")}
            fontSize="text-2xl"
            className="font-bold"
          />

          {sectionLinks.map((item) => (
            <Link key={item.href} href={item.href!} className="w-fit my-1">
              <p className="text-[1.2rem] text-muted-foreground hover:text-secondary transition-colors">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        {/* 4th column */}
        <div className="col-span-1 md:col-span-2 flex flex-col mt-0 md:mt-4 ">
          <TextUnderLine
            text={t("Contact.Title")}
            fontSize="text-2xl"
            className="font-bold"
          />

          {contactInfo.map((item) => (
            <p
              key={item.title}
              className="w-fit text-[1.2rem] text-muted-foreground my-1"
            >
              {item.title}
            </p>
          ))}
        </div>

      </div>

      {/* bottom */}
      <div className="mt-4 w-full border-t border-muted-foreground pt-5">
        <p className="text-[1rem] text-muted-foreground">
      {t("bottom.Description")}{currentYear}
        </p>
      </div>
    </footer>
  );
}