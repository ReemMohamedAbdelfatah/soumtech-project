import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PreviewCardImage from "./PreviewCardImage";
import Image from "next/image";
import PreviewCardCountdown from "./PreviewCardCountdown";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import { RulerDimensionLine } from "lucide-react";
import { Auction } from "@/interfaces/auctions";

interface PreviewCardProps extends Auction {
  auctionImage: string;
  auctionLogo: string;
  area: string;
  auctionName: { en: string; ar: string };
  auctionStartDate: string;
  auctionFinishDate: string;
  status: "active" | "upcoming" | "ended";
  premisesAmount: number;
  location: { en: string; ar: string };
  locale: "en" | "ar";
}

export default async function PreviewCardAuction({
  locale,
  auctionImage,
  auctionLogo,
  area,
  auctionName,
  auctionStartDate,
  auctionFinishDate,
  status,
  premisesAmount,
  location,
}: PreviewCardProps) {
  const t = await getTranslations("previewCard");
  return (
    <Card className="p-2.5">
      <PreviewCardImage
        src={auctionImage}
        imageCaption={true}
        location={location[locale]}
      />
      <CardHeader className="flex  justify-between gap-2.5 pt-2.5 px-0">
        <div className="flex flex-col gap-1.5 flex-1/2">
          <CardTitle>
            {auctionName[locale].slice(0, 20)}
            {auctionName[locale].length > 23 && "..."}
          </CardTitle>
          <CardDescription className="flex items-center gap-2">
            <RulerDimensionLine className="w-5 h-5 text-secondary" />
            <span className="text-sm">
              {area} {t("area")}
            </span>
          </CardDescription>
        </div>

        <Image
          src={auctionLogo}
          alt="Auction Logo"
          width={400}
          height={300}
          className="w-27.75 h-full object-cover rounded-[10px] max-h-8.75 flex-1/2"
        />
      </CardHeader>
      <CardContent className="pt-2.75 px-0">
        <PreviewCardCountdown
          status={status}
          auctionStartDate={auctionStartDate}
          auctionFinishDate={auctionFinishDate}
        />
      </CardContent>
      <CardFooter className="flex justify-between gap-2 px-0 bg-white border-none">
        <div
          className={`flex flex-col items-center flex-1/2 ${locale === "en" ? "gap-1" : "gap-0"}`}
        >
          <span
            className={`font-bold ${locale === "en" ? "text-[12px]" : "text-[16.76px]"} text-ring`}
          >
            {t("premisesAmount")}
          </span>
          <span className="font-bold text-[18.76px] text-secondary">
            {premisesAmount}
          </span>
        </div>
        <Button className="h-auto flex-1/2 text-[13px] py-[14.5px] px-11.5 font-medium bg-secondary">
          {t("auctionData")}
        </Button>
      </CardFooter>
    </Card>
  );
}
