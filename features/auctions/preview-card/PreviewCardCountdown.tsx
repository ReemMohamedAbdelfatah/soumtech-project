"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface PreviewCardCountdownProps {
  auctionStartDate: string;
  auctionFinishDate: string;
  status: "active" | "upcoming" | "ended";
}

export default function PreviewCardCountdown({
  auctionStartDate,
  auctionFinishDate,
  status,
}: PreviewCardCountdownProps) {
  const t = useTranslations("previewCard");
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const start = new Date(auctionStartDate).getTime();
      const end = new Date(auctionFinishDate).getTime();

      if (now < start) {
        const difference = start - now;

        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });

        return;
      }

      if (status === "ended") {
        setTimeLeft(null);
        return;
      }

      const difference = end - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [auctionStartDate, auctionFinishDate, status]);

  if (status === "upcoming") {
    return (
      <div className="flex justify-between items-center gap-0.5 px-7.25 py-[7.5px] border-2 border-sidebar-border/.5 rounded-[6.54px] text-ring [&_div>span:first-child]:text-[11px] [&_div>span:first-child]:font-normal [&_div>span:last-child]:font-bold [&_div]:flex [&_div]:flex-col [&_div]:items-center">
        <div>
          <span>{t("auctionStartDate")}</span>
          <span>{new Date(auctionStartDate).toLocaleDateString()}</span>
        </div>

        <div>
          <span>{t("auctionStartTime")}</span>
          <span>{new Date(auctionStartDate).toLocaleTimeString()}</span>
        </div>

        {/* <span className="text-sm text-ring">
          متبقي {timeLeft?.days} يوم و {timeLeft?.hours} ساعة و{" "}
          {timeLeft?.minutes} دقيقة
        </span> */}
      </div>
    );
  }

  if (status === "ended") {
    return (
      <Button className="h-auto text-[13px] py-[14.5px] px-11.5 font-medium bg-destructive w-full">
        {t("auctionEndedBtn")}
      </Button>
    );
  }

  return (
    <div className="flex justify-between items-center gap-0.5 px-7.25 py-[4.75px] border-2 border-sidebar-border/.5 rounded-[6.54px] text-ring [&_div>span:first-child]:text-[19.63px] [&_div>span:first-child]:font-bold [&_div]:flex [&_div]:flex-col">
      <div>
        <span>{String(timeLeft?.seconds ?? 0).padStart(2, "0")}</span>
        <span>{t("counter.second")}</span>
      </div>
      <div className="font-bold text-[19.75px]">:</div>
      <div>
        <span>{String(timeLeft?.minutes ?? 0).padStart(2, "0")}</span>
        <span>{t("counter.minute")}</span>
      </div>
      <div className="font-bold text-[19.75px]">:</div>
      <div>
        <span>{String(timeLeft?.hours ?? 0).padStart(2, "0")}</span>
        <span>{t("counter.hour")}</span>
      </div>
      <div className="font-bold text-[19.75px]">:</div>
      <div>
        <span>{String(timeLeft?.days ?? 0).padStart(2, "0")}</span>
        <span>{t("counter.day")}</span>
      </div>
    </div>
  );
}
