import { getTranslations } from "next-intl/server";

interface AuctionStatsProps {
  entryDeposit: number;
  bidIncrement: number;
  numberOfBids: number;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

export default async function AuctionStats({
  entryDeposit,
  bidIncrement,
  numberOfBids,
}: AuctionStatsProps) {
  const t = await getTranslations("AuctionStats");

  // Figma order (RTL): عدد السومات | فرق السوم | عربون الدخول
  const stats = [
    { labelKey: "numberOfBids", value: numberOfBids, isCurrency: false },
    { labelKey: "bidIncrement", value: bidIncrement, isCurrency: true },
    { labelKey: "entryDeposit", value: entryDeposit, isCurrency: true },
  ];

  // Figma: single rounded container (r=12) with vertical dividers between cells.
  // Each cell stacks label (14px / 500 gray) above value (26px / 700 navy).
  return (
    <div className="flex divide-x divide-x-reverse divide-border rounded-xl px-6 py-5.5 ring-1 ring-foreground/10">
      {stats.map((stat) => (
        <div
          key={stat.labelKey}
          className="flex flex-1 flex-col items-center gap-3 text-center"
        >
          <span className="text-sm font-medium text-muted-foreground">
            {t(stat.labelKey)}
          </span>
          <span className="text-[26px] font-bold tabular-nums text-primary">
            {formatNumber(stat.value)}
            {stat.isCurrency && ` ${t("currency")}`}
          </span>
        </div>
      ))}
    </div>
  );
}
