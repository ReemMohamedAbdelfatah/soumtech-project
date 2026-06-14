
import { getTranslations } from "next-intl/server";


interface PriceDisplayProps {
  auctionCurrentPrice: number;
  meterPrice: number;
  totalPrice: number;
  brokerageTax: number;
  brokerageFees: number;
}

function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default async function PriceDisplay({
  auctionCurrentPrice,
  meterPrice,
  totalPrice,
  brokerageTax,
  brokerageFees,
}: PriceDisplayProps) {

  const t = await getTranslations("PriceDisplay");

  const breakdownItems = [
    { labelKey: "meterPrice", value: meterPrice },
    { labelKey: "total", value: totalPrice },
    { labelKey: "brokerageTax", value: brokerageTax },
    { labelKey: "brokerage", value: brokerageFees },
  ];

  return (
    <div className="flex items-center justify-between gap-12">
      {/* Current price (right side in RTL) — label 24px/500 navy, value 26px/700 gold */}
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-medium text-primary">
          {t("currentBidPrice")}
        </p>
        <p className="text-[26px] font-bold tabular-nums text-secondary">
          {formatPrice(auctionCurrentPrice)} {t("currency")}
        </p>
      </div>

      {/* Breakdown (left side) — label 18px/400 (#667085), value 18px/500 navy */}
      <div className="flex flex-col gap-4.5 text-lg">
        {breakdownItems.map((item) => (
          <div
            key={item.labelKey}
            className="flex items-center justify-between gap-12"
          >
            <span className="font-normal text-muted-foreground">
              {t(item.labelKey)}
            </span>
            <span className="font-medium tabular-nums text-primary">
              {formatPrice(item.value)} {t("currency")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
