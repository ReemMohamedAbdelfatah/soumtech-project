// export type AuctionCardMetric = {
//   label: string;
//   value: string | number;
//   icon?: string; // optional icon name for UI mapping
// };

// export type Auction = {
//   id: string;
//   title?: string;
//   imageSrc?: string;
//   imageAlt?: string;
//   href?: string;
//   status?: "active" | "upcoming" | "ended";
//   location?: string;
//   companyName?: string;
//   currentBid?: string;
//   startingBid?: string;
//   endDate?: string;
//   remainingTime?: string;
//   lotNumber?: string | number;
//   bidsCount?: number;
//   viewsCount?: number;
//   metrics?: AuctionCardMetric[];
// };

// const MOCK_AUCTIONS: Auction[] = [
//   // ── ACTIVE (6) ──────────────────────────────────────────────────
//   {
//     id: "1",
//     title: "Antique Persian Rug",
//     imageSrc: "/images/auctions/rug-1.jpg",
//     imageAlt: "Persian rug",
//     href: "/auctions/1",
//     status: "active",
//     location: "Cairo, Egypt",
//     companyName: "SoumTech Auctions",
//     currentBid: "EGP 12,500",
//     startingBid: "EGP 10,000",
//     endDate: "2026-06-10",
//     remainingTime: "3d 4h",
//     lotNumber: "A-1001",
//     bidsCount: 24,
//     viewsCount: 420,
//   },
//   {
//     id: "4",
//     title: "Lot of Vintage Coins",
//     imageSrc: undefined,
//     imageAlt: "coins",
//     href: "/auctions/4",
//     status: "active",
//     location: "Cairo, Egypt",
//     companyName: "Numis Auctions",
//     currentBid: "EGP 4,500",
//     startingBid: "EGP 2,000",
//     endDate: "2026-06-05",
//     remainingTime: "6d 12h",
//     lotNumber: "A-1004",
//     bidsCount: 7,
//     viewsCount: 110,
//   },
//   {
//     id: "5",
//     title: "Estate Jewelry Set",
//     imageSrc: "/images/auctions/jewelry-1.jpg",
//     imageAlt: "jewelry",
//     href: "/auctions/5",
//     status: "active",
//     location: "Luxor, Egypt",
//     companyName: "Royal Lots",
//     currentBid: "EGP 18,900",
//     startingBid: "EGP 12,000",
//     endDate: "2026-06-12",
//     remainingTime: "1d 6h",
//     lotNumber: "A-1005",
//     bidsCount: 31,
//     viewsCount: 560,
//   },
//   {
//     id: "6",
//     title: "Ottoman Silver Dagger",
//     imageSrc: "/images/auctions/dagger-1.jpg",
//     imageAlt: "Ottoman silver dagger",
//     href: "/auctions/6",
//     status: "active",
//     location: "Alexandria, Egypt",
//     companyName: "Heritage Auctions",
//     currentBid: "EGP 9,200",
//     startingBid: "EGP 7,500",
//     endDate: "2026-06-11",
//     remainingTime: "4d 2h",
//     lotNumber: "A-1006",
//     bidsCount: 15,
//     viewsCount: 230,
//   },
//   {
//     id: "7",
//     title: "Pharaonic Ushabti Figurine",
//     imageSrc: "/images/auctions/ushabti-1.jpg",
//     imageAlt: "Pharaonic ushabti figurine",
//     href: "/auctions/7",
//     status: "active",
//     location: "Luxor, Egypt",
//     companyName: "Nile Antiquities",
//     currentBid: "EGP 22,000",
//     startingBid: "EGP 15,000",
//     endDate: "2026-06-13",
//     remainingTime: "2d 8h",
//     lotNumber: "A-1007",
//     bidsCount: 19,
//     viewsCount: 375,
//   },
//   {
//     id: "8",
//     title: "Handwoven Coptic Textile",
//     imageSrc: "/images/auctions/textile-1.jpg",
//     imageAlt: "Coptic textile",
//     href: "/auctions/8",
//     status: "active",
//     location: "Giza, Egypt",
//     companyName: "Canvas & Co",
//     currentBid: "EGP 6,800",
//     startingBid: "EGP 5,000",
//     endDate: "2026-06-09",
//     remainingTime: "5d 1h",
//     lotNumber: "A-1008",
//     bidsCount: 11,
//     viewsCount: 195,
//   },

//   // ── ENDED (6) ───────────────────────────────────────────────────
//   {
//     id: "3",
//     title: "Modern Art Painting",
//     imageSrc: "/images/auctions/art-1.jpg",
//     imageAlt: "Modern painting",
//     href: "/auctions/3",
//     status: "ended",
//     location: "Giza, Egypt",
//     companyName: "Canvas & Co",
//     currentBid: "EGP 35,200",
//     startingBid: "EGP 25,000",
//     endDate: "2026-05-10",
//     remainingTime: "Ended",
//     lotNumber: "A-1003",
//     bidsCount: 12,
//     viewsCount: 342,
//   },
//   {
//     id: "9",
//     title: "Rare Egyptian Postage Stamps Collection",
//     imageSrc: "/images/auctions/stamps-1.jpg",
//     imageAlt: "Egyptian postage stamps",
//     href: "/auctions/9",
//     status: "ended",
//     location: "Cairo, Egypt",
//     companyName: "SoumTech Auctions",
//     currentBid: "EGP 8,750",
//     startingBid: "EGP 5,000",
//     endDate: "2026-05-15",
//     remainingTime: "Ended",
//     lotNumber: "A-1009",
//     bidsCount: 18,
//     viewsCount: 290,
//   },
//   {
//     id: "10",
//     title: "19th Century Mamluk Brass Lamp",
//     imageSrc: "/images/auctions/lamp-1.jpg",
//     imageAlt: "Mamluk brass lamp",
//     href: "/auctions/10",
//     status: "ended",
//     location: "Alexandria, Egypt",
//     companyName: "Harbour Auctions",
//     currentBid: "EGP 14,400",
//     startingBid: "EGP 10,000",
//     endDate: "2026-05-20",
//     remainingTime: "Ended",
//     lotNumber: "A-1010",
//     bidsCount: 9,
//     viewsCount: 178,
//   },
//   {
//     id: "11",
//     title: "Signed First-Edition Arabic Novel",
//     imageSrc: "/images/auctions/book-1.jpg",
//     imageAlt: "First-edition Arabic novel",
//     href: "/auctions/11",
//     status: "ended",
//     location: "Cairo, Egypt",
//     companyName: "Numis Auctions",
//     currentBid: "EGP 3,100",
//     startingBid: "EGP 2,000",
//     endDate: "2026-05-25",
//     remainingTime: "Ended",
//     lotNumber: "A-1011",
//     bidsCount: 5,
//     viewsCount: 143,
//   },
//   {
//     id: "12",
//     title: "Antique Wooden Chess Set",
//     imageSrc: "/images/auctions/chess-1.jpg",
//     imageAlt: "Antique wooden chess set",
//     href: "/auctions/12",
//     status: "ended",
//     location: "Luxor, Egypt",
//     companyName: "Royal Lots",
//     currentBid: "EGP 7,600",
//     startingBid: "EGP 5,500",
//     endDate: "2026-05-28",
//     remainingTime: "Ended",
//     lotNumber: "A-1012",
//     bidsCount: 14,
//     viewsCount: 267,
//   },
//   {
//     id: "13",
//     title: "Hand-Painted Ceramic Vase",
//     imageSrc: "/images/auctions/vase-1.jpg",
//     imageAlt: "Hand-painted ceramic vase",
//     href: "/auctions/13",
//     status: "ended",
//     location: "Giza, Egypt",
//     companyName: "Heritage Auctions",
//     currentBid: "EGP 5,900",
//     startingBid: "EGP 4,000",
//     endDate: "2026-05-30",
//     remainingTime: "Ended",
//     lotNumber: "A-1013",
//     bidsCount: 8,
//     viewsCount: 201,
//   },

//   // ── UPCOMING (6) ────────────────────────────────────────────────
//   {
//     id: "2",
//     title: "Vintage Rolex Submariner",
//     imageSrc: "/images/auctions/watch-1.jpg",
//     imageAlt: "Rolex watch",
//     href: "/auctions/2",
//     status: "upcoming",
//     location: "Alexandria, Egypt",
//     companyName: "Harbour Auctions",
//     currentBid: "EGP 0",
//     startingBid: "EGP 80,000",
//     endDate: "2026-06-20",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1002",
//     bidsCount: 0,
//     viewsCount: 88,
//   },
//   {
//     id: "14",
//     title: "Rare Islamic Manuscript",
//     imageSrc: "/images/auctions/manuscript-1.jpg",
//     imageAlt: "Islamic manuscript",
//     href: "/auctions/14",
//     status: "upcoming",
//     location: "Cairo, Egypt",
//     companyName: "Nile Antiquities",
//     currentBid: "EGP 0",
//     startingBid: "EGP 120,000",
//     endDate: "2026-06-25",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1014",
//     bidsCount: 0,
//     viewsCount: 312,
//   },
//   {
//     id: "15",
//     title: "Vintage Leica Camera",
//     imageSrc: "/images/auctions/camera-1.jpg",
//     imageAlt: "Vintage Leica camera",
//     href: "/auctions/15",
//     status: "upcoming",
//     location: "Giza, Egypt",
//     companyName: "SoumTech Auctions",
//     currentBid: "EGP 0",
//     startingBid: "EGP 45,000",
//     endDate: "2026-06-22",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1015",
//     bidsCount: 0,
//     viewsCount: 154,
//   },
//   {
//     id: "16",
//     title: "Art Deco Diamond Brooch",
//     imageSrc: "/images/auctions/brooch-1.jpg",
//     imageAlt: "Art Deco diamond brooch",
//     href: "/auctions/16",
//     status: "upcoming",
//     location: "Alexandria, Egypt",
//     companyName: "Royal Lots",
//     currentBid: "EGP 0",
//     startingBid: "EGP 95,000",
//     endDate: "2026-06-28",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1016",
//     bidsCount: 0,
//     viewsCount: 207,
//   },
//   {
//     id: "17",
//     title: "Ancient Roman Bronze Coin Hoard",
//     imageSrc: "/images/auctions/coins-roman-1.jpg",
//     imageAlt: "Roman bronze coins",
//     href: "/auctions/17",
//     status: "upcoming",
//     location: "Luxor, Egypt",
//     companyName: "Heritage Auctions",
//     currentBid: "EGP 0",
//     startingBid: "EGP 30,000",
//     endDate: "2026-07-01",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1017",
//     bidsCount: 0,
//     viewsCount: 98,
//   },
//   {
//     id: "18",
//     title: "19th Century French Grandfather Clock",
//     imageSrc: "/images/auctions/clock-1.jpg",
//     imageAlt: "French grandfather clock",
//     href: "/auctions/18",
//     status: "upcoming",
//     location: "Cairo, Egypt",
//     companyName: "Canvas & Co",
//     currentBid: "EGP 0",
//     startingBid: "EGP 55,000",
//     endDate: "2026-07-05",
//     remainingTime: "Coming soon",
//     lotNumber: "A-1018",
//     bidsCount: 0,
//     viewsCount: 176,
//   },
// ];

// export async function getAuctions(): Promise<Auction[]> {
//   // simulate network latency
//   await new Promise((r) => setTimeout(r, 60));
//   return MOCK_AUCTIONS;
// }

// export async function getAuction(id: string): Promise<Auction | undefined> {
//   await new Promise((r) => setTimeout(r, 40));
//   return MOCK_AUCTIONS.find((a) => a.id === id);
// }

// export async function searchAuctions(q: string): Promise<Auction[]> {
//   await new Promise((r) => setTimeout(r, 40));
//   const term = q.trim().toLowerCase();
//   if (!term) return MOCK_AUCTIONS;
//   return MOCK_AUCTIONS.filter(
//     (a) =>
//       (a.title && a.title.toLowerCase().includes(term)) ||
//       (a.location && a.location.toLowerCase().includes(term)) ||
//       (a.companyName && a.companyName.toLowerCase().includes(term)),
//   );
// }

// export default MOCK_AUCTIONS;

export type AuctionStatus = "active" | "upcoming" | "ended";

export interface Auction {
  id: number;
  title: string;
  status: AuctionStatus;
}

const auctions: Auction[] = [
  {
    id: 1,
    title: "Auction 1",
    status: "active",
  },
  {
    id: 2,
    title: "Auction 2",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Auction 3",
    status: "ended",
  },
];
export default auctions;
