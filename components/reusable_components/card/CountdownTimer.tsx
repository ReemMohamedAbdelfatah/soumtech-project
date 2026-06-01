'use client';

import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string | Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const t = useTranslations("auctionCard");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return {
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0'),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.seconds, label: t("second") },
    { value: timeLeft.minutes, label: t("minute") },
    { value: timeLeft.hours, label: t("hour") },
    { value: timeLeft.days, label: t("day") },
  ];

  return (
    <div
      dir="rtl"
      className="border
              border-[#EAEAEA]
              rounded-[6.54px]
              bg-white
              px-3
              flex justify-between
              items-center"
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#171D5B] font-bold text-[20px]">
              {unit.value}
            </span>
            <span className="text-[#171D5B] text-[12px] font-light mb-1">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="text-[#171D5B] font-bold text-[12px] select-none">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}


