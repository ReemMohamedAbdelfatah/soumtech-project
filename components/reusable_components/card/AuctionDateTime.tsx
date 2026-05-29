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
  dateLabel = 'تاريخ فتح المزاد',
  timeLabel = 'وقت فتح المزاد',
  className = '',
}: AuctionDateTimeProps) {
  return (
    <div
      dir="rtl"
      className={`w-full border border-gray-200/80 bg-white/50 backdrop-blur-sm rounded-xl py-3 px-4 flex justify-between items-center text-center ${className}`}
    >
      <div className="flex flex-col items-center flex-1">
        <span className="text-[#0f1b4c] opacity-80 text-xs font-bold mb-1">
          {dateLabel}
        </span>
        <span className="text-[#0f1b4c] font-black text-sm md:text-base">
          {date}
        </span>
      </div>
      <div className="h-8 w-px bg-gray-200/85" />
      <div className="flex flex-col items-center flex-1">
        <span className="text-[#0f1b4c] opacity-80 text-xs font-bold mb-1">
          {timeLabel}
        </span>
        <span className="text-[#0f1b4c] font-black text-sm md:text-base">
          {time}
        </span>
      </div>
    </div>
  );
}
