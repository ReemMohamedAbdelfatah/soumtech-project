export interface AuctionCardProps {
  title: string;
  imageSrc: string;
  logoSrc: string;
  assetsCount?: number;
  status: "active" | "upcoming" | "ended";
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
