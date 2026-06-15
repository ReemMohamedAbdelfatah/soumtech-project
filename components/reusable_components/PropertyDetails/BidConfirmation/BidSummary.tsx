import BidAmountRow from "./BidAmountRow";

export interface BidSummaryProps {
  title: string;
  currency: string;
  rows: Array<{
    label: string;
    value: number;
    maximumFractionDigits?: number;
  }>;
}

export default function BidSummary({
  title,
  currency,
  rows,
}: BidSummaryProps) {
  return (
    <section className="space-y-4" aria-labelledby="bid-summary-title">
      <h3
        id="bid-summary-title"
        className="text-center text-base font-semibold text-muted-foreground"
      >
        {title}
      </h3>

      <dl className="space-y-3">
        {rows.map((row) => (
          <BidAmountRow key={row.label} currency={currency} {...row} />
        ))}
      </dl>
    </section>
  );
}
