import { INavbarData } from "@/src/types/types";

export const createNavbarData = (
  t: (key: string) => string
): INavbarData => ({
  links: [
    { title: t("MainPage"), href: "/" },
    { title: t("AuctionsPage"), href: "/auctions" },
    { title: t("ContactUs"), href: "/contact" },
  ],
  login: {
    title: t("Login"),
    href: "/login",
  },
});