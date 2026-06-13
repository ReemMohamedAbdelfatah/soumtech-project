import { TabType } from "@/features/auctions/components/AuctionFilterTab";

 export interface Auction {
  id: number;
  title: string;
  imageSrc: string;
  logoSrc: string;
  status: TabType;
  endDate: string;
  detailsUrl: string;
  location?: string;
  area?: string;
  assetsCount?: number;
  auctionDate?: string;
  numberOfBids?: number;
  priceInfo?: {
    label: string;
    amount: string;
    subText: string;
  };
}
 
 const targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now
const soonDate = new Date(Date.now() + 6 * 60 * 60 * 1000); // 6 hours from now
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

export const mockAuctions: Auction[] = [
  {
    id: 6,
    title: "قصر الريان",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    status: "active" as const,
    endDate: targetDate.toISOString(),
    detailsUrl: "#",
    location: "حي الملك فهد - الرياض",
    area: "1200.00 م²",
    priceInfo: {
      label: "سعر السوم الحالي",
      amount: "3,500,000",
      subText: "2,916",
    },
    numberOfBids: 34,
  },
  {
    id: 7,
    title: "أرض سكنية في النرجس",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    assetsCount: 1,
    status: "upcoming" as const,
    endDate: soonDate.toISOString(),
    auctionDate: soonDate.toISOString(),
    detailsUrl: "#",
    location: "حي النرجس - الرياض",
    area: "600.00 م²",
    priceInfo: {
      label: "سعر البداية",
      amount: "1,800,000",
      subText: "3,000",
    },
    numberOfBids: 5,
  },
  {
    id: 8,
    title: "مزاد العقارات التجارية",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    assetsCount: 12,
    status: "upcoming" as const,
    endDate: nextWeek.toISOString(),
    auctionDate: nextWeek.toISOString(),
    detailsUrl: "#",
  },
  {
    id: 9,
    title: "شقة الياسمين",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    status: "ended" as const,
    endDate: new Date().toISOString(),
    detailsUrl: "#",
    location: "شارع التحلية - جدة",
    area: "210.50 م²",
    priceInfo: {
      label: "سعر الرسو",
      amount: "780,000",
      subText: "3,706",
    },
    numberOfBids: 19,
  },
  {
    id: 10,
    title: "برج المنار التجاري",
    imageSrc: "/image2.jng",
    logoSrc: "/image1.png",
    status: "ended" as const,
    endDate: new Date().toISOString(),
    detailsUrl: "#",
    location: "طريق الملك عبدالعزيز - جدة",
    area: "4500.00 م²",
    priceInfo: {
      label: "سعر الرسو",
      amount: "22,000,000",
      subText: "4,888",
    },
    numberOfBids: 103,
  },
  {
    id: 11,
    title: "مزاد حي السفارات",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    assetsCount: 8,
    status: "upcoming" as const,
    endDate: targetDate.toISOString(),
    auctionDate: targetDate.toISOString(),
    detailsUrl: "#",
    location: "حي السفارات - الرياض",
    area: "920.00 م²",
    priceInfo: {
      label: "سعر السوم الحالي",
      amount: "6,200,000",
      subText: "6,739",
    },
    numberOfBids: 47,
  },
  {
    id: 12,
    title: "فيلا الواحة",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    status: "active" as const,
    endDate: soonDate.toISOString(),
    detailsUrl: "#",
    location: "حي الواحة - الدمام",
    area: "512.75 م²",
    priceInfo: {
      label: "سعر السوم الحالي",
      amount: "2,100,000",
      subText: "4,095",
    },
    numberOfBids: 28,
  },
  {
    id: 13,
    title: "مجمع تجاري الفيصلية",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    assetsCount: 3,
    status: "ended" as const,
    endDate: new Date().toISOString(),
    detailsUrl: "#",
    location: "حي الفيصلية - مكة المكرمة",
    area: "1800.00 م²",
  },
  {
    id: 14,
    title: "أرض تجارية المدينة",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    status: "active" as const,
    endDate: nextWeek.toISOString(),
    detailsUrl: "#",
    location: "طريق السلام - المدينة المنورة",
    area: "3200.00 م²",
    priceInfo: {
      label: "سعر السوم الحالي",
      amount: "9,750,000",
      subText: "3,046",
    },
    numberOfBids: 62,
  },
  {
    id: 15,
    title: "مزاد الوحدات السكنية",
    imageSrc: "/image2.jpg",
    logoSrc: "/image1.png",
    assetsCount: 24,
    status: "upcoming" as const,
    endDate: targetDate.toISOString(),
    auctionDate: targetDate.toISOString(),
    detailsUrl: "#",
  },
];