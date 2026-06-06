//Reusable layout Component for forms (Abanob)
//Next
import Image from "next/image";
//IMAGES
import InfathLogo from "@/public/Images/Logos/Infath-logo.png";
import REGALogo from "@/public/Images/Logos/REGA-Logo.png";
import Bgwallpaper from "@/public/bg-wallpaper.png";
//Logo
import Logo from "@/components/reusable_components/Logo";
// -------------------------------------

type Props = {
  children: React.ReactNode;
  borderRadius?: number;
  className?: string;
};
//--------------------------------------
export default function FormLayout({
  children,
  borderRadius,
  className,
}: Props) {
  return (
    <div
      className={`w-full h-auto min-h-screen relative flex justify-center items-center overflow-hidden py-3 px-5 ${className}`}
      style={{
        borderRadius: borderRadius || 0,
      }}
    >
      {/* Background */}
      <Image
        src={Bgwallpaper}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-[rgba(10,20,60,0.34)] " />

      {/* middle section */}
      <section className="relative z-10 w-full max-w-md min-h-screen flex flex-col py-3">
    {/* Logo */}
  <div className="flex justify-center ">
    <Logo variant="white" sizeClass="w-[150px]" />
  </div>
 {/* Form Content */}
  <main className="flex-1 flex items-center justify-center my-5">
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl px-5 py-7">
      {children}
    </div>
  </main>
 {/* Bottom Logos */}
  <div dir="ltr" className="flex items-center justify-center gap-10">
    <Image src={InfathLogo} alt="InfathLogo" />
    <Image src={REGALogo} alt="REGALogo" />
  </div>

</section>
    </div>
  );
}
