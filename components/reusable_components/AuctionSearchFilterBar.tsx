import AuctionTabFilter, {
  type AuctionFilterStatus,
} from "@/components/shared/AuctionTabFilter";
import { cn } from "@/lib/utils";

type AuctionSearchFilterBarProps = {
  activeStatus?: AuctionFilterStatus;
  counts?: Partial<Record<AuctionFilterStatus, number>>;
  className?: string;
};

export default function AuctionSearchFilterBar({
  activeStatus = "active",
  counts,
  className,
}: AuctionSearchFilterBarProps) {
  return (
    <div className={cn("mb-6 flex w-full justify-center", className)}>
      <AuctionTabFilter activeStatus={activeStatus} counts={counts} />
    </div>
  );
}
