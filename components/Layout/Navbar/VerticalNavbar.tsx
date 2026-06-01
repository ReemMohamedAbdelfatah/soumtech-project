"use client";
//Next
import Link from "next/link";
//Logo
import Logo from "@/components/reusable_components/Logo";
//types
import { INavbarData } from "./index";
//Shadcn
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
//icons
import { TextAlignJustify, X, CircleUser } from "lucide-react";
//------------------------------
//types
type Props = {
  navbarData: INavbarData;}
//------------------------------
export default function VerticalNavbar({ navbarData }: Props) {
  return (
    <Drawer direction="top">
      {/* Trigger */}
      <DrawerTrigger className="flex items-center justify-between w-full p-3 ">
        <Logo sizeClass={"w-[70px] md:w-[120px]"} followTheme />
        <TextAlignJustify color="#171D5B" />
      </DrawerTrigger>
      {/* br line */}
      <div className="w-full mt-1 mb-4 h-px bg-[#5757577c]" />
      <DrawerContent className="p-4 flex flex-col justify-between">
        <VisuallyHidden>
          <DrawerTitle>Navigation Menu</DrawerTitle>
        </VisuallyHidden>

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <Logo sizeClass={"w-[70px] md:w-[120px]"} followTheme />

          <DrawerClose asChild>
            <X color="#171D5B" />
          </DrawerClose>
        </div>
        {/* br line */}
        <div className="w-full my-4 h-px bg-[#5757577c]" />
        {/* LINKS  */}
        <div className="flex flex-col gap-3 mt-2 ">
          {navbarData.links.map((link) => (
            <DrawerClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-black/70 text-lg  font-cairo"
              >
                {link.title}
              </Link>
            </DrawerClose>
          ))}
        </div>

        {/* br line */}
        <div className="w-full my-4 h-px bg-[#5757577c]" />
        {/*  Login Button */}
        <DrawerClose asChild>
          <Link
             href={navbarData.login.href}
            className="flex items-center gap-1 text-lg  text-black"
          >
            <CircleUser />
          {navbarData.login.title}
          </Link>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
