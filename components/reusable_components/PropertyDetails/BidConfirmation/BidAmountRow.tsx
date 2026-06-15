export interface BidAmountRowProps {
  label: string;
  value: number;
  currency: string;
  maximumFractionDigits?: number;
}

export default function BidAmountRow({
  label,
  value,
  currency,
  maximumFractionDigits = 2,
}: BidAmountRowProps) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    maximumFractionDigits,
  }).format(value);

  return (
    <div className="flex items-center justify-between gap-6 text-sm">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold tabular-nums text-primary">
        <span dir="ltr">{formattedValue}</span> {currency}
      </dd>
    </div>
  );
}
