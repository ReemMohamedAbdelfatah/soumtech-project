'use client';

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
    { value: timeLeft.days, label: 'يوم' },
    { value: timeLeft.hours, label: 'ساعة' },
    { value: timeLeft.minutes, label: 'دقيقة' },
    { value: timeLeft.seconds, label: 'ثانية' },
  ];

  return (
    <div
      dir="rtl"
      className="w-full border border-gray-200/80 bg-white/50 backdrop-blur-sm rounded-xl py-3 px-4 flex justify-between items-center"
    >
      {timeUnits.map((unit, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center flex-1">
            <span className="text-[#0f1b4c] font-extrabold text-2xl tracking-tight md:text-3xl">
              {unit.value}
            </span>
            <span className="text-[#6b7280] text-xs font-semibold mt-1">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <div className="text-gray-300 font-bold text-xl px-1 select-none">:</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}


