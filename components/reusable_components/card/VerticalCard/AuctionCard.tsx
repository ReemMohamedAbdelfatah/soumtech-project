


import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import AuctionButton from "../shared/AuctionButton";
import AuctionImage from "../shared/AuctionImage";
import AuctionStatus from "../shared/AuctionStatus";
import AuctionHeader from "../shared/AuctionHeader";
import AuctionPrice from "../shared/AuctionPrice";
import styles from "./AuctionCard.module.css";

export interface AuctionCardProps {
  title: string;
  imageSrc: string;
  logoSrc: string;
  assetsCount?: number;
  status: 'active' | 'closed';
  endDate: string | Date;
  detailsUrl?: string;
  location?: string;
  area?: string;
  auctionDate?: string;
  auctionTime?: string;
  priceInfo?: {
    amount: string;
    subText?: string;
  };
}

export default function AuctionCard({
  title,
  imageSrc,
  logoSrc,
  assetsCount,
  status = 'active',
  endDate,
  detailsUrl = '#',
  location,
  area,
  auctionDate,
  auctionTime,
  priceInfo,
}: AuctionCardProps) {
  const t = useTranslations("auctionCard");

  return (
    <Card className={styles.cardContainer}>
      <div className={styles.innerWrapper}>
        <CardHeader className={styles.headerContainer}>
          <AuctionImage
            imageSrc={imageSrc}
            title={title}
            location={location}
            className={styles.imageWrapper}
          />
          <AuctionHeader
            title={title}
            area={area}
            logoSrc={logoSrc}
            align="start"
          />
        </CardHeader>

        <CardContent className={styles.statusContainer}>
          <AuctionStatus
            auctionDate={auctionDate}
            auctionTime={auctionTime}
            status={status}
            endDate={endDate}
          />
        </CardContent>

        <CardFooter className={styles.footerContainer}>
          {priceInfo ? (
            <div className={styles.priceColumn}>
              <AuctionPrice amount={priceInfo.amount} subText={priceInfo.subText} />
            </div>
          ) : assetsCount !== undefined ? (
            <div className={styles.footerInfoColumn}>
              <span className={styles.assetsLabel}>{t("assetsCount")}</span>
              <span className={styles.assetsValue}>{assetsCount}</span>
            </div>
          ) : (
            <div className={styles.priceColumn} />
          )}

          <div className={styles.buttonColumn}>
            <AuctionButton href={detailsUrl} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
