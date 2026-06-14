import { getLocale, getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PropertyInfo from "./PropertyInfo";
import HighestBidderBadge from "./HighestBidderBadge";
import ImageGallery from "./ImageGallery";
import CountdownTimer from "./CountdownTimer";
import PriceDisplay from "./PriceDisplay";
import AuctionStats from "./AuctionStats";
import BidInput from "./BidInput";
import BiddersTable, { Bidder } from "./BiddersTable";
import DetailsTable, { PropertyAttribute } from "./DetailsTable";
import PropertyDetailsScrollPanel from "./PropertyDetailsScrollPanel";

export interface PropertyDetailsProps {
  name: string;
  location: string;
  userPosition?: 1 | 2 | 3 | null;
  images: string[];
  logoUrl?: string;
  companyName?: string;
  contactNumber?: string;
  endTime: string | Date;
  price: {
    auctionCurrentPrice: number;
    meterPrice: number;
    totalPrice: number;
    brokerageTax: number;
    brokerageFees: number;
  };
  stats: {
    entryDeposit: number;
    bidIncrement: number;
    numberOfBids: number;
  };
  bidders: Bidder[];
  description: string;
  attributes: PropertyAttribute[];
}

export default async function PropertyDetails({
  name,
  location,
  userPosition = null,
  images,
  logoUrl,
  companyName,
  contactNumber,
  endTime,
  price,
  stats,
  bidders,
  description,
  attributes,
}: PropertyDetailsProps) {
  const t = await getTranslations("PropertyActions");
  const locale = await getLocale();

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
      {/* Property / auction card (right side in RTL) */}
      <Card className="gap-5 px-5">
        <div className="flex items-center justify-between gap-3">
          <PropertyInfo name={name} location={location} />
          <HighestBidderBadge
            userPosition={userPosition}
            isHighestBidder={userPosition === 1}
          />
        </div>

        <ImageGallery
          images={images}
          alt={name}
          logoUrl={logoUrl}
          companyName={companyName}
          contactNumber={contactNumber}
        />

      

        <CountdownTimer endTime={endTime} />

        <div className="h-px bg-border" />

        <PriceDisplay
          auctionCurrentPrice={price.auctionCurrentPrice}
          meterPrice={price.meterPrice}
          totalPrice={price.totalPrice}
          brokerageTax={price.brokerageTax}
          brokerageFees={price.brokerageFees}
        />

        <div className="h-px bg-border" />

        <AuctionStats
          entryDeposit={stats.entryDeposit}
          bidIncrement={stats.bidIncrement}
          numberOfBids={stats.numberOfBids}
        />

        <BidInput
          startingAmount={price.auctionCurrentPrice + stats.bidIncrement}
          step={stats.bidIncrement}
          meterPrice={price.meterPrice}
          brokerageFees={price.brokerageFees}
          brokerageTax={price.brokerageTax}
          totalPrice={price.totalPrice}
        />
          {/* Profile / location — Figma: gold (#EEA820), white 18px text, r=6 */}
        <div className="flex gap-5">
          <Button className="h-auto flex-1 rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {t("profile")}
          </Button>
          <Button className="h-auto flex-1 rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {t("location")}
          </Button>
        </div>
      </Card>
      

      {/* Bidders + details (left side in RTL) */}
      <PropertyDetailsScrollPanel
        contentDirection={locale === "ar" ? "rtl" : "ltr"}
      >
        <BiddersTable bidders={bidders} />
        <DetailsTable description={description} attributes={attributes} />
      </PropertyDetailsScrollPanel>
    </div>
  );
}
