import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropertyInfo from "../PropertyDetails/PropertyInfo";
import ImageGallery from "../PropertyDetails/ImageGallery";
import PriceDisplay from "../PropertyDetails/PriceDisplay";
import AuctionStats from "../PropertyDetails/AuctionStats";
import BiddersTable, { Bidder } from "../PropertyDetails/BiddersTable";
import DetailsTable, { PropertyAttribute } from "../PropertyDetails/DetailsTable";
import PropertyDetailsScrollPanel from "../PropertyDetails/PropertyDetailsScrollPanel";
import RegisteredUsersTable, {
  RegisteredUser,
} from "../ComingAuctionDetails/RegisteredUsersTable";
import AuctionEndedStatus from "./AuctionEndedStatus";

export interface EndedAuctionDetailsProps {
  name: string;
  location: string;
  images: string[];
  logoUrl?: string;
  companyName?: string;
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
    registeredCount: number;
  };
  bidders: Bidder[];
  registeredUsers: RegisteredUser[];
  description: string;
  attributes: PropertyAttribute[];
}

export default async function EndedAuctionDetails({
  name,
  location,
  images,
  logoUrl,
  companyName,
  price,
  stats,
  bidders,
  registeredUsers,
  description,
  attributes,
}: EndedAuctionDetailsProps) {
  const locale = await getLocale();
  const actions = await getTranslations("PropertyActions");
  const ended = await getTranslations("EndedAuctionDetails");

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
      <Card className="gap-5 px-5">
        <PropertyInfo name={name} location={location} />

        <ImageGallery
          images={images}
          alt={name}
          logoUrl={logoUrl}
          companyName={companyName}
          showRegistrationAction={false}
          dimImage
        />

        <AuctionEndedStatus />

        <div className="h-px bg-border" />
        <PriceDisplay {...price} />
        <div className="h-px bg-border" />
        <AuctionStats
          entryDeposit={stats.entryDeposit}
          bidIncrement={stats.bidIncrement}
          numberOfBids={stats.numberOfBids}
        />

        <div className="grid grid-cols-2 gap-5">
          <Button className="h-auto rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {actions("profile")}
          </Button>
          <Button className="h-auto rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {actions("location")}
          </Button>
        </div>
      </Card>

      <PropertyDetailsScrollPanel
        contentDirection={locale === "ar" ? "rtl" : "ltr"}
      >
        <BiddersTable bidders={bidders} />
        <RegisteredUsersTable
          users={registeredUsers}
          totalCount={stats.registeredCount}
          title={ended("registeredUsers")}
        />
        <DetailsTable description={description} attributes={attributes} />
      </PropertyDetailsScrollPanel>
    </div>
  );
}
