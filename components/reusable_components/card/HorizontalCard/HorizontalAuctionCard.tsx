import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import AuctionButton from '../shared/AuctionButton';
import AuctionHeader from '../shared/AuctionHeader';
import AuctionImage from '../shared/AuctionImage';
import AuctionPrice from '../shared/AuctionPrice';
import AuctionStatus from '../shared/AuctionStatus';
import styles from './HorizontalAuctionCard.module.css';

export interface HorizontalAuctionCardProps {
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
  numberOfBids?: number;
  tight?:boolean; 
}

export default function HorizontalAuctionCard({
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
  numberOfBids,
  tight = false,
}: HorizontalAuctionCardProps) {
  const t = useTranslations("auctionCard");

  return (
    <Card className={styles.cardContainer}>
      <AuctionImage
        imageSrc="/image4.png"
        title={title}
        location={location}
        transparentLocationBg
        className={styles.imageWrapper}
        style={{ width: tight ? "25%":undefined}}
      />

      {/* Left Section: Details */}
      <div className={styles.detailsWrapper}>

        <CardHeader className={styles.headerContainer}>
          {/* Title & Subtitle/Area */}
          <div className={styles.titleColumn}>
            <AuctionHeader
              title={title}
              area={area}
              showLogo={false}
              align="start"
            />
          </div>

          {/* Info on the Right (First in RTL) */}
          {priceInfo ? (
            <div className={styles.priceColumn}>
              <AuctionPrice amount={priceInfo.amount} subText={priceInfo.subText} />
            </div>
          ) : null}
        </CardHeader>

        {/* Interactive Status Section (Countdown / Date & Time / Closed State Banner) */}
        <CardContent className="p-0 shrink-0 mb-auto">
          <AuctionStatus
            auctionDate={auctionDate}
            auctionTime={auctionTime}
            status={status}
            endDate={endDate}
            horizontal
          />
        </CardContent>

        {/* Footer Area: Details Button & Asset Count / Price Info */}
        <CardFooter className={styles.footerContainer}>
          {assetsCount !== undefined ? (
            <div className={styles.footerInfoColumn}>
              <span className={styles.assetsLabel}>
                {t("assetsCount")}
              </span>

              <span className={styles.assetsValue}>
                {assetsCount}
              </span>
            </div>
          ) : numberOfBids !== undefined ? (
            <div className={styles.footerInfoColumn}>
              <span className={styles.bidsLabel}>
                <i className="fa-solid fa-gavel text-[10px] sm:text-[13px] shrink-0"></i>


                {t("numberOfBids")}
              </span>

              <span className={styles.bidsValue}>
                {numberOfBids}
                <span className={styles.bidderLabel}>
                  {" "}
                  {t("bidder")}
                </span>
              </span>
            </div>
          ) : (
            <div className={styles.footerInfoColumn} />
          )}

          {/* Details Button*/}
          <div className={styles.footerButtonColumn}>
            <AuctionButton href={detailsUrl} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
