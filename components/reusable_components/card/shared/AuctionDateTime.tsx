'use client';

import { useTranslations, useLocale } from 'next-intl';
import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface AuctionDateTimeProps {
  date?: string | Date;
  time?: string;
  dateLabel?: string;
  timeLabel?: string;
  className?: string;
}

export default function AuctionDateTime({
  date,
  time,
  dateLabel,
  timeLabel,
  className = '',
}: AuctionDateTimeProps) {
  const t = useTranslations("auctionCard");
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setMounted(true);
    // Set the initial current date/time on mount client-side to prevent hydration mismatch
    setCurrentDateTime(new Date());
  }, []);

  const mergedDateObj = React.useMemo(() => {
    // If no date is passed, use the current date/time (now)
    if (!date) {
      return currentDateTime;
    }
    
    let baseDate = date;

    // Handle DD/MM/YYYY format conversion to YYYY-MM-DD for reliable parsing
    if (typeof date === 'string' && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) {
      const parts = date.split('/');
      baseDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }

    const parsed = new Date(baseDate);
    if (isNaN(parsed.getTime())) return currentDateTime;

    if (time) {
      try {
        const timeClean = time.trim().toLowerCase();
        const match = timeClean.match(/^(\d{1,2}):(\d{2})\s*(am|pm)?$/);
        if (match) {
          let hours = parseInt(match[1], 10);
          const minutes = parseInt(match[2], 10);
          const ampm = match[3];
          if (ampm === 'pm' && hours < 12) hours += 12;
          if (ampm === 'am' && hours === 12) hours = 0;
          parsed.setHours(hours, minutes, 0, 0);
        }
      } catch (e) {
        // Fallback to base parsed date
      }
    }

    return parsed;
  }, [date, time, currentDateTime]);

  const formattedDate = mounted && mergedDateObj
    ? mergedDateObj.toLocaleDateString(locale, { year: 'numeric', month: 'numeric', day: 'numeric' })
    : (typeof date === 'string' ? date : '-');

  const formattedTime = mounted && mergedDateObj
    ? mergedDateObj.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit', hour12: true })
    : (time || '-');

  return (
    <div
      className={`w-full border border-[#EAEAEA] rounded-[6.54px] flex flex-row justify-between items-center text-center bg-white dark:bg-white h-[50px] px-4 ${className}`}
    >
      <div className="flex flex-col items-center flex-1">
        <Label className="text-[#171D5B] text-[13px] font-normal mb-1 select-none">
          {dateLabel ?? t("auctionOpenDate")}
        </Label>
        <span className="text-[#171D5B] text-[12px] font-bold">
          {formattedDate}
        </span>
      </div>
      
      {/* استخدام Separator من shadcn للتنظيم الرأسي */}
      <Separator orientation="vertical" className="h-5 bg-[#EAEAEA]" />

      <div className="flex flex-col items-center flex-1">
        <Label className="text-[#171D5B] text-[13px] font-normal mb-1 select-none">
          {timeLabel ?? t("auctionOpenTime")}
        </Label>
        <span className="text-[#171D5B] font-bold text-[12px]">
          {formattedTime}
        </span>
      </div>
    </div>
  );
}
