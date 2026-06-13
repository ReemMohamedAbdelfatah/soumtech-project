// Reusable layout Component for forms

import Image from "next/image";

// Images
import InfathLogo from "@/public/Images/Logos/Infath-logo.png";
import REGALogo from "@/public/Images/Logos/REGA-Logo.png";
import Bgwallpaper from "@/public/bg-wallpaper.png";

// Components
import Logo from "@/components/reusable_components/Logo";

// -------------------------------------

type Props = {
  children: React.ReactNode;
  borderRadius?: number;
  width?: string;
  height?: string;
  logoSize?: string;
  className?: string;
};

// -------------------------------------

export default function FormLayout({
  children,
  borderRadius = 0,
  width = "w-full",
  height = "h-full",
  logoSize = "w-[150px]",
  className = "",
}: Props) {
  return (
    <div
      className={`
        ${width}
        ${height}
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        py-2
        bg-[url('/bg-wallpaper.png')]
        bg-cover
        bg-center
        bg-no-repeat
        ${className}
      `}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,20,60,0.35)]" />

      {/* Content */}
      <section className="relative z-10 w-full flex flex-col">
        {/* Main Logo */}
        <div className="flex justify-center pt-0 md:pt-5">
          <Logo variant="white" sizeClass={logoSize} />
        </div>

        {/* Form */}
        <main className="flex justify-center my-4 md:my-6">{children}</main>

        {/* Bottom Logos */}
        <div
          dir="ltr"
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            md:gap-6
            px-5
          "
        >
          <Image
            src={InfathLogo}
            alt="Infath Logo"
            className="max-h-18 object-contain "
          />

          <Image
            src={REGALogo}
            alt="REGA Logo"
            className="max-h-18 object-contain "
          />
        </div>
      </section>
    </div>
  );
}
