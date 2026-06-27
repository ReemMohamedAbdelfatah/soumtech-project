export interface LocalizedText {
  en: string;
  ar: string;
}

export interface PriceInfo {
  amount: string;
  subText: LocalizedText;
}

export interface Premise {
  uuid: string;
  id: number;
  title: LocalizedText;
  imageSrc: string;
  logoSrc: string;
  assetsCount: number;
  status: "active" | "ended" | "upcoming";
  location: LocalizedText;
  premiseStartDate: string;
  premiseFinishDate: string;
  detailsUrl: string;
  area: string;
  priceInfo: PriceInfo;
}

export interface Auction {
  uuid: string;
  id: number;
  auctionName: LocalizedText;
  auctionImage: string;
  auctionLogo: string;
  status: "active" | "ended" | "upcoming";
  location: LocalizedText;
  area: string;
  auctionStartDate: string;
  auctionFinishDate: string;
  premisesAmount: number;
  premises: Premise[];
}

export interface AuctionsResponse {
  auctions: Auction[];
}
