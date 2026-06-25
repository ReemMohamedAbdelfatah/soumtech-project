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

interface PreviewCardProps {
  type: "premise" | "auction";
  auctionImage: string;
  auctionLogo: string;
  area: string;
  auctionName: { en: string; ar: string };
  auctionStartDate: Date;
  auctionFinishDate: Date;
  status: "active" | "upcoming" | "ended";
  locale: "en" | "ar";
}

export default function PreviewCard({
  locale,
  type = "auction",
  auctionImage,
  auctionLogo,
  area,
  auctionName,
  auctionStartDate,
  auctionFinishDate,
  status,
}: PreviewCardProps) {
  return (
    <Card className="p-2.5">
      <PreviewCardImage src={auctionImage} imageCation={type === "auction"} />
      <CardHeader className="flex  justify-between gap-2.5 pt-2.5 px-0">
        <div className="flex flex-col gap-1.5 flex-1/2">
          <CardTitle>
            {auctionName[locale].slice(0, 22)}
            {auctionName[locale].length > 23 && "..."}
          </CardTitle>
          <CardDescription>{area}</CardDescription>
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
        <div className="flex flex-col items-center flex-1/2">
          <span className="font-bold text-[16.76px] text-ring">عدد الأصول</span>
          <span className="font-bold text-[18.76px] text-secondary">5</span>
        </div>
        <Button className="h-auto flex-1/2 text-[13px] py-[14.5px] px-11.5 font-medium bg-secondary">
          تفاضيل المزاد
        </Button>
      </CardFooter>
    </Card>
  );
}
