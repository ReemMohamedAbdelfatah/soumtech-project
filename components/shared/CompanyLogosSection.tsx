// "شركات المزادات" companies/partners display (Abanob)
//Next
import Image from "next/image";
//i18n
import { getTranslations } from "next-intl/server";
//Logos
import DarAlQias from "@/public/Images/CompanysLogos/Dar-ALQias.png";
import FortineRealty from "@/public/Images/CompanysLogos/Fortune-Realty.png";
import Mazaya from "@/public/Images/CompanysLogos/Mazaya.png";
import TagElSham from "@/public/Images/CompanysLogos/Tag-ElSahm.png";
import hawyiaAuctions from "@/public/Images/CompanysLogos/Hawyia.png";

//------------------------
const companies = [
  { src: DarAlQias, alt: "دار القياس" },
  { src: TagElSham, alt: "تاج السهم" },
  { src: Mazaya, alt: "مزايا" },
  { src: hawyiaAuctions, alt: "هوية للمزادات" },
  { src: FortineRealty, alt: "Fortune Realty" },
];
//------------------------
export default async function CompanyLogosSection() {
    const t = await getTranslations("CompanyLogosSection");
  return (
    <section className="w-full ">
      {/* Title */}
      <h3 className="text-center text-xl md:text-3xl font-bold py-4 md:py-8">{t("Title")}</h3>
      {/* Logos Section */}
      <div className="flex flex-wrap items-center justify-center gap-3  md:gap-8">
         {companies.map((company, index) => (
          <Image
            key={index}
            src={company.src}
            alt={company.alt}
            className="size-5/18 md:size-2/12 object-contain grayscale hover:grayscale-0 transition-all ease-in-out"
          />
        ))}
      </div>
    </section>
  );
}
