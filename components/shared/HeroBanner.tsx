// Hero section with background image and title (Abanob)
//NEXT
import Image from "next/image";
//i18n
import { getTranslations } from "next-intl/server";
// Images and logos
import HeroImage from "@/public/bg-wallpaper.png";
import InfathLogo from "@/public/Images/Logos/Infath-logo.png";
import REGALogo from "@/public/Images/Logos/REGA-Logo.png";
//--------------------------------------------
export default async function HeroBanner() {
  const t = await getTranslations("HeroBanner");
  return (
    <div className="relative w-full h-80 md:h-120 overflow-hidden rounded-3xl">
      {/* Wallpaper */}
      <Image
        src={HeroImage}
        alt="hero"
        fill
        priority
        className="object-cover"
      />
      {/* Dark Overlay  */}
      <div className="absolute inset-0 bg-slate-850/40" />

      {/* Content */}
      <main className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-2 pb-3 md:pb-10">
        {/* Title */}
        <h1 className="text-white text-2xl md:text-5xl font-semibold tracking-wide ">
          {t("Title")}
        </h1>
        {/* Description */}
        <p className="text-white/90 text-sm md:text-2xl max-w-xl md:max-w-4xl pt-4 md:pt-10 ">
          {t("Description")}
        </p>
      </main>

      {/* Logos Container  */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10
             w-[70%] md:max-w-135
             h-20 sm:h-24 backdrop-blur-lg
             bg-white/5 rounded-t-3xl
             flex items-center justify-around
             px-2 sm:px-10 gap-5"
      >
        <Image
          src={REGALogo}
          alt="الهيئة العامة للعقار"
          className="object-contain "
        />
        <Image src={InfathLogo} alt="إنفاذ" className="object-contain " />
      </div>
    </div>
  );
}
