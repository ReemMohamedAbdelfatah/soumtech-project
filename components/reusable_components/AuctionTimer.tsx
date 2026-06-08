import { AuctionTableData } from "./AuctionTableRow";
import { useTranslations } from "next-intl";

interface AuctionTableRowProps {
  data:AuctionTableData
  status: 'upcoming' | 'live' | 'over'
}

export default function AuctionTimer({ data,status }: AuctionTableRowProps) {
 const t = useTranslations("AuctionTimer");
 switch(status){
  case "live":
    return <div className="flex  justify-between  items-center  gap-[12px] xl:gap-[20px]   h-[45px] w-full border border-border rounded-[6.54px] px-[12px] py-[6px]">
        {/* Seconds */}
        <div className="flex flex-col items-center gap-[2px]">
          <span className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">{data.timer?.seconds}</span>
          <span className="text-[9px] xl:text-[10px] font-normal text-muted-foreground leading-[14px]">{t("second")}</span>
        </div>
        {/* Separator */}
        <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">:</div>
        </div>
        {/* Minutes */}
        <div className="flex flex-col items-center gap-[2px]">
          <span className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">{data.timer?.minutes}</span>
          <span className="text-[9px] xl:text-[10px] font-normal text-muted-foreground leading-[14px]">{t("minute")}</span>
        </div>
        {/* Separator */}
        <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">:</div>
        </div>
        {/* Hours */}
        <div className="flex flex-col items-center gap-[2px]">
          <span className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">{data.timer?.hours}</span>
          <span className="text-[9px] xl:text-[10px] font-normal text-muted-foreground leading-[14px]">{t("hour")}</span>
        </div>
        {/* Separator */}
        <div className="flex flex-col items-center justify-center h-full">
        <div className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">:</div>
        </div>
        {/* Days */}
        <div className="flex flex-col items-center gap-[2px]">
          <span className="text-[15px] xl:text-[19.63px] font-bold text-primary leading-[100%]">{data.timer?.days}</span>
          <span className="text-[10px] xl:text-[11.78px] font-light text-muted-foreground leading-[14px]">{t("day")}</span>
        </div>
      </div>
      case "upcoming": return <div className="flex    items-center  gap-[12px] xl:gap-[45px]  h-[45px] w-full border border-border rounded-[6.54px] px-[12px] py-[6px] ">
          <div className="flex flex-col justify-center gap-[2px]">
            <span className="text-[10px] xl:text-[11px] font-normal text-primary leading-[100%]">{t("auctionOpenDate")}</span>
            <span className="text-[10px] xl:text-[11px] font-bold text-primary ">{data.startDate}</span>
          </div>
          <div className="w-[25.00000000000002px] border-[0.68px] border-border rotate-90"></div>
          <div className="flex flex-col items-center gap-[2px]">
            <span className="text-[10px] xl:text-[11px] font-normal text-primary leading-[100%]">{t("auctionOpenTime")}</span>
            <span className="text-[10px] xl:text-[11px] font-bold text-primary " dir="ltr">{data.startTime}</span>
          </div>
        </div>
      case 'over': return  <div className="flex items-center justify-center  h-[45px] w-full bg-[#DC5224]  rounded-[1111px] ">
        <span className="text-[13px] xl:text-[16px] font-medium text-primary-foreground leading-[100%]">{t("auctionOver")}</span>
      </div>
      }

  ;
}