// src/fonts/index.ts
import localFont from "next/font/local";

export const dinNext = localFont({
  src: [
    {
      path: "./DINNext-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./DINNext-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./DINNext-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./DINNext-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./DINNext-Arabic-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./DINNext-Arabic-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-din-next",
  display: "swap",
});
