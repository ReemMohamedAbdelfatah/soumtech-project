import { getLocale, getTranslations } from "next-intl/server";

export interface AuctionOpeningScheduleProps {
  opensAt: string | Date;
}

export default async function AuctionOpeningSchedule({
  opensAt,
}: AuctionOpeningScheduleProps) {
  const locale = await getLocale();
  const t = await getTranslations("ComingAuctionDetails");
  const date = new Date(opensAt);

  const formattedDate = [
    String(date.getDate()).padStart(2, "0"),
    String(date.getMonth() + 1).padStart(2, "0"),
    date.getFullYear(),
  ].join("/");
  const formattedTime = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);

  return (
    <div className="grid grid-cols-2 divide-x divide-x-reverse divide-border rounded-md border border-border bg-card py-4 text-center">
      <div className="flex flex-col gap-2 px-3">
        <span className="text-lg font-semibold text-foreground">
          {t("openingDate")}
        </span>
        <span className="font-bold tabular-nums text-primary" dir="ltr">
          {formattedDate}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-3">
        <span className="text-lg font-semibold text-foreground">
          {t("openingTime")}
        </span>
        <span className="font-bold tabular-nums text-primary" dir="ltr">
          {formattedTime}
        </span>
      </div>
    </div>
  );
}
