import { AuctionTableData } from "./AuctionTableRow";
import { getLocale } from "next-intl/server";
//i18n
import { getTranslations } from "next-intl/server";
import AuctionTableRow from "@/components/reusable_components/AuctionTable/AuctionTableRow";
import AuctionPagination from "@/components/reusable_components/AuctionTable/pagination";
interface AuctionTableProps {
  status: "upcoming" | "live" | "over";
  currentData: AuctionTableData[];
}

const gridOver =
  "grid grid-cols-[auto_auto_auto_auto_auto_195px_130px] xl:grid-cols-[auto_auto_auto_auto_auto_275px_140px] gap-7 xl:gap-12";
const gridNotOver =
  "grid grid-cols-[130px_auto_auto_auto_auto_auto_195px_130px] xl:grid-cols-[150px_auto_auto_auto_auto_auto_275px_140px] gap-4 xl:gap-6";

export default async function AuctionTable({
  status,
  currentData,
}: AuctionTableProps) {
  const t = await getTranslations("AuctionTable");
  const locale = await getLocale();
  const isAr = locale === "ar";
  const grid = status === "over" ? gridOver : gridNotOver;

  return (
    <div className="w-full">
      <div
        className={`hidden lg:grid   w-full rounded-[12px] border-b border-border  bg-muted text-muted-foreground text-[14px] font-medium leading-[18px] whitespace-nowrap ${grid}`}
      >
        {/* header */}
        {status !== "over" && (
          <div
            className={`flex items-center ${isAr ? "pr-[14px]" : "pl-[14px]"}`}
          >
            {t("joinAuction")}
          </div>
        )}
        <div
          className={`h-[52px] flex items-center ${status === "over" ? (isAr ? "pr-[14px]" : "pl-[14px]") : ""}`}
        >
          {t("propertyName")}
        </div>
        <div className="flex items-center">{t("currentBid")}</div>
        <div className="flex items-center">{t("area")}</div>
        <div className="flex items-center">{t("deposit")}</div>
        <div className="flex items-center">{t("bidsCount")}</div>
        <div className="flex items-center"> {t("timer")}</div>
        <div className="flex items-center">{t("auctionDetails")}</div>
      </div>
      {/* rows */}

      {currentData.map((item: AuctionTableData, index: number) => (
        <AuctionTableRow
          key={`${item.name}-${index}`}
          status={status}
          data={item}
          grid={grid}
        />
      ))}
    </div>
  );
}
