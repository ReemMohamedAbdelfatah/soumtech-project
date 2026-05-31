import { useTranslations } from 'next-intl';
import React from 'react';

interface AuctionDateTimeProps {
  date: string;
  time: string;
  dateLabel?: string;
  timeLabel?: string;
  className?: string;
}

export default function AuctionDateTime({
  date,
  time,
  dateLabel,
  timeLabel ,
  className = '',
}: AuctionDateTimeProps) {
  const t = useTranslations("auctionCard");
  return (
    <div
      dir="rtl"
      className={`w-full border border-[#EAEAEA] rounded-[6.54px] py-2 px-4 flex justify-between items-center text-center ${className}`}
    >
      <div className="flex flex-col items-center flex-1">
        <span className="text-[#171D5B]  text-[13px] font-regular mb-1">
          {dateLabel ??  t("auctionOpenDate")}
        </span>
        <span className="text-[#171D5B] text-[12px] font-bold">
          {date}
        </span>
      </div>
      <div className="h-4 w-px bg-[#EAEAEA]" />
      <div className="flex flex-col items-center flex-1">
        <span className="text-[#171D5B]  text-[13px] font-regular mb-1">
          {timeLabel?? t("auctionOpenTime")}
        </span>
        <span className="text-[#171D5B] font-bold text-[12px]">
          {time}
        </span>
      </div>
    </div>
  );
}
