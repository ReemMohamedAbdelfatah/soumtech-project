"use client";
//Next
import { usePathname } from "next/navigation";
//---------------------
type Props = {
  href: string;
  locale: string;
};
//---------------------
export default function ActiveLinkIndicator({ href, locale }: Props) {
  const pathname = usePathname();

  const normalizedPath = pathname.replace(/^\/(ar|en)/, "") || "/";

  const isActive = normalizedPath === href;
  const isRTL = locale === "ar";

  return (
    <span
      className={`absolute -bottom-1 h-0.5 bg-yellow-400 transition-all duration-300 ${
        isRTL ? "right-0" : "left-0"
      } ${isActive ? "w-[40%]" : "w-0"}`}
    />
  );
}
