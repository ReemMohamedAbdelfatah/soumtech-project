import ThemeToggle from "@/features/theme/components/theme-toggle";
import AuctionGrid from "@/components/reusable_components/card/AuctionGrid";
import TryPage from "./(routes)/try/page";
import Image from "next/image";
import AuctionBanner from "@/components/reusable_components/card/AuctionBanner";

export default async function Home() {


  return (
    <div className="min-h-screen bg-[#f7f9fc] dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Premium Header */}
      <header className="border-b border-gray-200/50 dark:border-gray-800/50 bg-white/75 dark:bg-[#0f1422]/75 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-[1352px] mx-auto rounded-b-2xl shadow-sm">
        <h1 className="text-2xl font-black text-[#0f1b4c] dark:text-white tracking-tight">
          المنصة الوطنية للمزادات <span className="text-[#e9a11d]">سومتك</span>
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>
      <div className="hidden">
        <TryPage />
      </div>
    </div>
  );
}


