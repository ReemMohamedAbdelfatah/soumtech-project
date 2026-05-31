export type AuctionCardMetric = {
  label: string;
  value: string | number;
  icon?: string; // optional icon name for UI mapping
};

export type Auction = {
  id: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  status?: "active" | "upcoming" | "ended";
  location?: string;
  companyName?: string;
  currentBid?: string;
  startingBid?: string;
  endDate?: string;
  remainingTime?: string;
  lotNumber?: string | number;
  bidsCount?: number;
  viewsCount?: number;
  metrics?: AuctionCardMetric[];
};

const MOCK_AUCTIONS: Auction[] = [
  {
    id: "1",
    title: "Antique Persian Rug",
    imageSrc: "/images/auctions/rug-1.jpg",
    imageAlt: "Persian rug",
    href: "/auctions/1",
    status: "active",
    location: "Cairo, Egypt",
    companyName: "SoumTech Auctions",
    currentBid: "EGP 12,500",
    startingBid: "EGP 10,000",
    endDate: "2026-06-10",
    remainingTime: "3d 4h",
    lotNumber: "A-1001",
    bidsCount: 24,
    viewsCount: 420,
  },
  {
    id: "2",
    title: "Vintage Rolex Submariner",
    imageSrc: "/images/auctions/watch-1.jpg",
    imageAlt: "Rolex watch",
    href: "/auctions/2",
    status: "upcoming",
    location: "Alexandria, Egypt",
    companyName: "Harbour Auctions",
    currentBid: "EGP 0",
    startingBid: "EGP 80,000",
    endDate: "2026-06-20",
    remainingTime: "Coming soon",
    lotNumber: "A-1002",
    bidsCount: 0,
    viewsCount: 88,
  },
  {
    id: "3",
    title: "Modern Art Painting",
    imageSrc: "/images/auctions/art-1.jpg",
    imageAlt: "Modern painting",
    href: "/auctions/3",
    status: "ended",
    location: "Giza, Egypt",
    companyName: "Canvas & Co",
    currentBid: "EGP 35,200",
    startingBid: "EGP 25,000",
    endDate: "2026-05-10",
    remainingTime: "Ended",
    lotNumber: "A-1003",
    bidsCount: 12,
    viewsCount: 342,
  },
  {
    id: "4",
    title: "Lot of Vintage Coins",
    imageSrc: undefined,
    imageAlt: "coins",
    href: "/auctions/4",
    status: "active",
    location: "Cairo, Egypt",
    companyName: "Numis Auctions",
    currentBid: "EGP 4,500",
    startingBid: "EGP 2,000",
    endDate: "2026-06-05",
    remainingTime: "6d 12h",
    lotNumber: "A-1004",
    bidsCount: 7,
    viewsCount: 110,
  },
  {
    id: "5",
    title: "Estate Jewelry Set",
    imageSrc: "/images/auctions/jewelry-1.jpg",
    imageAlt: "jewelry",
    href: "/auctions/5",
    status: "active",
    location: "Luxor, Egypt",
    companyName: "Royal Lots",
    currentBid: "EGP 18,900",
    startingBid: "EGP 12,000",
    endDate: "2026-06-12",
    remainingTime: "1d 6h",
    lotNumber: "A-1005",
    bidsCount: 31,
    viewsCount: 560,
  },
];

export async function getAuctions(): Promise<Auction[]> {
  // simulate network latency
  await new Promise((r) => setTimeout(r, 60));
  return MOCK_AUCTIONS;
}

export async function getAuction(id: string): Promise<Auction | undefined> {
  await new Promise((r) => setTimeout(r, 40));
  return MOCK_AUCTIONS.find((a) => a.id === id);
}

export async function searchAuctions(q: string): Promise<Auction[]> {
  await new Promise((r) => setTimeout(r, 40));
  const term = q.trim().toLowerCase();
  if (!term) return MOCK_AUCTIONS;
  return MOCK_AUCTIONS.filter(
    (a) =>
      (a.title && a.title.toLowerCase().includes(term)) ||
      (a.location && a.location.toLowerCase().includes(term)) ||
      (a.companyName && a.companyName.toLowerCase().includes(term)),
  );
}

export default MOCK_AUCTIONS;
