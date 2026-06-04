import CountdownTimer from './CountdownTimer';
import AuctionButton from './AuctionButton';
import AuctionDateTime from './AuctionDateTime';
import { useTranslations } from 'next-intl';

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

  if (auctionDate) {
    return <AuctionDateTime date={auctionDate} time={auctionTime} />;
  }

  if (status === 'active') {
    return <CountdownTimer targetDate={endDate} />;
  }

  if (horizontal) {
    return (
      <>
        <div className="bg-[#DC5224] h-[48px] text-white font-medium py-2 px-3 rounded-[111px] text-center text-[14px] w-full mb-2">
          {t("auctionEnded")}
        </div>

        <CountdownTimer targetDate={endDate} />
      </>
    );
  }

  return <AuctionButton variant="closed" />;
}
