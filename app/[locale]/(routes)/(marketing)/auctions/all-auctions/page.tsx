import AuctionBanner from "@/components/reusable_components/card/AuctionBanner";
import AuctionGrid from "@/components/reusable_components/card/AuctionGrid";
import ThemeToggle from "@/features/theme/components/theme-toggle";


export default function AuctionsPage() {
  // Target target dates: 6 days, 14 hours, 12 minutes in the future for active countdown simulation
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 6);
  targetDate.setHours(targetDate.getHours() + 14);
  targetDate.setMinutes(targetDate.getMinutes() + 12);

  const mockAuctions = [
    {
      id: 1,
      title: "فيلا الاخلاص",
      imageSrc: "/image3.png", // Main Jenan Taiba / active banner image
      logoSrc: "/image1.png",  // Fortune Realty logo badge
      status: "active" as const,
      endDate: targetDate.toISOString(),
      detailsUrl: "#",
      location: "شارع الاخلاص - الدمام",
      area: "325.22 م²",
      priceInfo: {
        label: "سعر السوم الحالي",
        amount: "500,000,000",
        subText: "20",
      },
      numberOfBids: 71,
    },
    {
      id: 2,
      title: "فيلا الاخلاص",
      imageSrc: "/image3.png", // Main Jenan Taiba / active banner image
      logoSrc: "/image1.png",  // Fortune Realty logo badge
      status: "active" as const,
      endDate: targetDate.toISOString(),
      detailsUrl: "#",
      location: "شارع الاخلاص - الدمام",
      area: "325.22 م²",
      priceInfo: {
        label: "سعر السوم الحالي",
        amount: "500,000,000",
        subText: "20",
      },
    },

    {
      id: 3,
      title: "عمارة سكنية في الاندلس",
      imageSrc: "/image3.png",
      logoSrc: "/image1.png",
      assetsCount: 71,
      status: "active" as const,
      endDate: new Date().toISOString(),
      auctionDate: new Date().toISOString(),
      detailsUrl: "#",
    },
    {
      id: 4,
      title: "مزاد الاسراء",
      imageSrc: "/image2.jpg",
      logoSrc: "/image1.png",
      assetsCount: 71,
      status: "closed" as const,
      endDate: new Date().toISOString(),
      detailsUrl: "#",
      location: "شارع حراء - جدة",
      area: "850.00 م²",
    },
    {
      id: 5,
      title: "مزاد الاسراء",
      imageSrc: "/image2.jpg", // Second main image (Alnakheel / closed banner)
      logoSrc: "/image1.png",  // Fortune Realty logo badge
      status: "closed" as const,
      endDate: new Date().toISOString(),
      detailsUrl: "#",
      location: "حي النخيل - الرياض",
      area: "450.00 م²",
      priceInfo: {
        label: "سعر السوم الحالي",
        amount: "1,200,000",
        subText: "2,666",
      },
      numberOfBids: 7,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9fc] dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Premium Header */}
      <header className="border-b border-gray-200/50 dark:border-gray-800/50 bg-white/75 dark:bg-[#0f1422]/75 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-[1352px] mx-auto rounded-b-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-[1352px] mx-auto px-4 py-12 flex flex-col gap-8">
        {/* Title and Banner */}
        <AuctionBanner />

        {/* Dynamic Responsive Auction Grid */}
        <AuctionGrid auctions={mockAuctions} />
      </main>
    </div>
  );
}
