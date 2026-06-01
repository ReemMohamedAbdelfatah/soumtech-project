"use client";
//Next
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
//Images
import logoWhite from "@/public/Images/Logo.png";
import logoDark from "@/public/Images/Logo dark.png";
//--------------------------
interface LogoProps {
  sizeClass?: string; 
  variant?: "default" | "white";
  followTheme?: boolean;
}
//--------------------------
export default function Logo({
  sizeClass = "w-[120px] sm:w-[160px] md:w-[200px]",
  variant = "default",
  followTheme = false,
}: LogoProps) {
  const { resolvedTheme } = useTheme();

  const logoSrc = followTheme
    ? resolvedTheme === "dark"
      ? logoWhite
      : logoDark
    : variant === "white"
      ? logoWhite
      : logoDark;

  return (
    <Link href="/">
      <Image
        src={logoSrc}
        alt="Logo"
        className={`cursor-pointer h-auto ${sizeClass}`}
      />
    </Link>
  );
}