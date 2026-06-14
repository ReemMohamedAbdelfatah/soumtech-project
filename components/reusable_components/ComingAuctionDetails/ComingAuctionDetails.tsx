import { getLocale, getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AuctionRegistrationStats from "./AuctionRegistrationStats";
import AuctionOpeningSchedule from "./AuctionOpeningSchedule";
import RegisteredUsersTable, { RegisteredUser } from "./RegisteredUsersTable";
import PropertyInfo from "../PropertyDetails/PropertyInfo";
import ImageGallery from "../PropertyDetails/ImageGallery";
import CountdownTimer from "../PropertyDetails/CountdownTimer";
import DetailsTable, { PropertyAttribute } from "../PropertyDetails/DetailsTable";
import PropertyDetailsScrollPanel from "../PropertyDetails/PropertyDetailsScrollPanel";

export interface ComingAuctionDetailsProps {
  name: string;
  location: string;
  images: string[];
  logoUrl?: string;
  companyName?: string;
  opensAt: string | Date;
  stats: {
    entryDeposit: number;
    bidIncrement: number;
    registeredCount: number;
  };
  registeredUsers: RegisteredUser[];
  description: string;
  attributes: PropertyAttribute[];
}

export default async function ComingAuctionDetails({
  name,
  location,
  images,
  logoUrl,
  companyName,
  opensAt,
  stats,
  registeredUsers,
  description,
  attributes,
}: ComingAuctionDetailsProps) {
  const locale = await getLocale();
  const t = await getTranslations("PropertyActions");

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
      <Card className="gap-5 px-5">
        <PropertyInfo name={name} location={location} />

        <ImageGallery
          images={images}
          alt={name}
          logoUrl={logoUrl}
          companyName={companyName}
        />

        <AuctionOpeningSchedule opensAt={opensAt} />
        <CountdownTimer endTime={opensAt} />
        <AuctionRegistrationStats
          entryDeposit={stats.entryDeposit}
          bidIncrement={stats.bidIncrement}
          registeredCount={stats.registeredCount}
        />

        <div className="grid grid-cols-2 gap-5">
          <Button className="h-auto rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {t("profile")}
          </Button>
          <Button className="h-auto rounded-md bg-secondary py-3.5 text-lg font-medium text-white hover:bg-secondary/90">
            {t("location")}
          </Button>
        </div>
      </Card>

      <PropertyDetailsScrollPanel
        contentDirection={locale === "ar" ? "rtl" : "ltr"}
      >
        <RegisteredUsersTable
          users={registeredUsers}
          totalCount={stats.registeredCount}
        />
        <DetailsTable description={description} attributes={attributes} />
      </PropertyDetailsScrollPanel>
    </div>
  );
}
