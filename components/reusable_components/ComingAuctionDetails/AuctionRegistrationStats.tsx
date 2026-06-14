import { getTranslations } from "next-intl/server";

export interface AuctionRegistrationStatsProps {
  entryDeposit: number;
  bidIncrement: number;
  registeredCount: number;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default async function AuctionRegistrationStats({
  entryDeposit,
  bidIncrement,
  registeredCount,
}: AuctionRegistrationStatsProps) {
  const t = await getTranslations("ComingAuctionDetails");
  const stats = [
    { label: t("entryDeposit"), value: entryDeposit, currency: true },
    { label: t("bidIncrement"), value: bidIncrement, currency: true },
    { label: t("registeredCount"), value: registeredCount, currency: false },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-x-reverse divide-border rounded-md border border-border py-4 text-center">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-2 px-2">
          <span className="text-xs text-muted-foreground">{stat.label}</span>
          <span className="text-xl font-bold tabular-nums text-primary">
            {formatNumber(stat.value)}
            {stat.currency && ` ${t("currency")}`}
          </span>
        </div>
      ))}
    </div>
  );
}
