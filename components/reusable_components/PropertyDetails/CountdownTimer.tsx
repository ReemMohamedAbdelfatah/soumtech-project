"use client";
import { useEffect, useState } from "react";
import {useTranslations} from "next-intl";


interface CountdownTimerProps {
  endTime: string | Date;
}
interface Timeleft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(endTime: string|Date): Timeleft {
  const difference = new Date(endTime).getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return{
    days: Math.floor(difference /(1000* 60* 60*24)),
    hours: Math.floor((difference / (1000* 60* 60)) % 24),
    minutes: Math.floor((difference / (1000* 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export default function CountdownTimer({endTime}: CountdownTimerProps) {
  const t = useTranslations("Countdown");
  // Start as null → server render and the FIRST client render both produce the
  // same placeholder (zeros below), so there's no hydration mismatch.
  // We do NOT compute new Date() here, because the server and client clocks differ.
  const [timeLeft, setTimeLeft] = useState<Timeleft | null>(null);

  useEffect(() => {
    // useEffect runs ONLY on the client, AFTER hydration → now it's safe to read
    // the current time. Set the first real value immediately, then tick every second.
    setTimeLeft(calculateTimeLeft(endTime));
    const intervalId = setInterval(()=> {
      setTimeLeft(calculateTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  // Until the effect runs (server render + first client render), show zeros.
  // `??` = "use timeLeft, but if it's null, use this placeholder instead".
  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="flex items-start justify-center gap-3">
      <TimeUnit value={display.days} label={t("days")} />
      <Separator />
      <TimeUnit value={display.hours} label={t("hours")} />
      <Separator />
      <TimeUnit value={display.minutes} label={t("minutes")} />
      <Separator />
      <TimeUnit value={display.seconds} label={t("seconds")} />
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  // Figma: number 36px / 700 navy, label 17px / 400 navy (#171D5B)
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl font-bold tabular-nums text-primary">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[17px] font-normal text-primary">{label}</span>
    </div>
  );
}

function Separator() {
  // Figma: 21px / 700 navy colon, aligned to the number row
  return <span className="pt-2 text-xl font-bold text-primary">:</span>;
}
