import CountdownTimer from './CountdownTimer';
import AuctionDateTime from './AuctionDateTime';
import { useTranslations } from 'next-intl';
import { Alert, AlertTitle } from "@/components/ui/alert";

interface AuctionStatusProps {
  auctionDate?: string;
  auctionTime?: string;
  status: 'active' | 'closed';
  endDate: string | Date;
  horizontal?: boolean;
}

export default function AuctionStatus({
  auctionDate,
  auctionTime,
  status,
  endDate,
  horizontal = false,
}: AuctionStatusProps) {
  const t = useTranslations("auctionCard");

  // 1. المزاد لم يبدأ بعد (قريباً)
  if (auctionDate) {
    return <AuctionDateTime date={auctionDate} time={auctionTime} />;
  }

  // 2. المزاد نشط حالياً
  if (status === 'active') {
    return <CountdownTimer targetDate={endDate} />;
  }

  // 3. المزاد مغلق/انتهى (أفقي)
  if (horizontal) {
    return (
      <Alert className="bg-[#DC5224] h-[50px] text-white font-medium py-2 px-3 rounded-[111px] text-center text-[14px] w-full flex items-center justify-center select-none border-none p-0">
        <AlertTitle className="leading-none">{t("auctionEnded")}</AlertTitle>
      </Alert>
    );
  }

  // 4. المزاد مغلق/انتهى (عمودي)
  return (
    <Alert
      className="w-full h-[50px] flex items-center justify-center bg-[#DC5224] text-white text-center rounded-[7px] text-[14px] font-medium shadow-sm select-none border-none p-0 mt-[-10px]"
    >
      <AlertTitle className="leading-none">{t("closed")}</AlertTitle>
    </Alert>
  );
}
