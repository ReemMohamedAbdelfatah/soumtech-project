"use client";

// Next
import Link from "next/link";
import { useTheme } from "next-themes";

// Logo
import Logo from "@/components/reusable_components/Logo";

// Types
import { INavbarData } from "@/src/types/types";

// Shadcn
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";

import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Icons
import { TextAlignJustify, X, CircleUser } from "lucide-react";

//----------------------------------
type Props = {
  navbarData: INavbarData;
  className?: string;
  iconClassName?: string;
  followTheme?: boolean;
  inverseTheme?: boolean;
  variant?: "white" | "primary";
};
//----------------------------------

export default function VerticalNavbar({
  navbarData,
  className,
  iconClassName,
  followTheme = false,
  inverseTheme = false,
  variant = "primary",
}: Props) {
  const { resolvedTheme } = useTheme();

  let iconColor = "";

  if (followTheme) {
    iconColor = resolvedTheme === "dark" ? "text-white" : "text-primary";
  } else if (inverseTheme) {
    iconColor = resolvedTheme === "dark" ? "text-primary" : "text-white";
  } else {
    iconColor = variant === "white" ? "text-white" : "text-primary";
  }
  return (
    <div className={className}>
      <Drawer direction="top">
        {/* Trigger */}
        <DrawerTrigger className="flex items-center ">
          <TextAlignJustify className={`${iconColor} ${iconClassName ?? ""}`} />
        </DrawerTrigger>

        {/* Content */}
        <DrawerContent className="flex flex-col justify-between p-4">
          <VisuallyHidden>
            <DrawerTitle>Navigation Menu</DrawerTitle>
          </VisuallyHidden>

          {/* Header */}
          <div className="flex items-center justify-between">
            <Logo sizeClass="w-[70px] md:w-[120px]" followTheme />

            <DrawerClose asChild>
              <button type="button">
                <X className={iconColor} />
              </button>
            </DrawerClose>
          </div>

          {/* Line */}
          <div className="my-4 h-px w-full bg-[#5757577c]" />

          {/* Links */}
          <div className="mt-2 flex flex-col gap-3">
            {navbarData.links.map((link) => (
              <DrawerClose asChild key={link.href}>
                <Link href={link.href} className="font-cairo text-lg">
                  {link.title}
                </Link>
              </DrawerClose>
            ))}
          </div>

          {/* Line */}
          <div className="my-4 h-px w-full bg-[#5757577c]" />

          {/* Login */}
          <DrawerClose asChild>
            <Link
              href={navbarData.login.href}
              className="flex items-center gap-1 text-lg"
            >
              <CircleUser />
              {navbarData.login.title}
            </Link>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
