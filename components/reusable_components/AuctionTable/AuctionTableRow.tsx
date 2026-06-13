import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import AuctionTimer from "./Timer";
import { useTranslations, useLocale } from "next-intl";

export interface AuctionTableData {
  imageUrl: string,
  name: string,
  location: string,
  totalPrice:number,
  pricePerM: number,
  area: number,
  depositAmount: number,
  AvailableCount: number,
  startDate?: string,
  startTime?: string,
  timer?:{
    hours:number,
    minutes:number,
    seconds:number,
    days:number
  },
}
interface AuctionTableRowProps {
  status: 'upcoming' | 'live' | 'over',
  data:AuctionTableData
  grid: string
}
export default function AuctionTableRow({data,grid,status}:AuctionTableRowProps) : React.JSX.Element {
  const t = useTranslations("AuctionTable");
  const locale = useLocale();
  const isAr = locale === "ar";
  

  return( <div className={`hidden lg:grid w-full    whitespace-nowrap rounded-[12px] border-b border-border ${grid}`}>
      {status!=="over" && <div className={`flex items-center ${isAr ? 'pr-[9px]' : 'pl-[9px]'}`}>
            <Button className={`h-[40px] w-full rounded-[8px] flex justify-center items-center bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer`}>
              <div className="flex items-center gap-[8px] text-[12px] xl:text-[14px] font-medium">
                <Plus className="w-[11px] h-[16px]" />
                <span>{t("joinAuction")}</span>
              </div>
            </Button>
        </div>}
      <div className={`h-[72px] flex items-center gap-[3px] w-full ${status === "over" ? (isAr ? "pr-[9px]" : "pl-[9px]") : ""}`}>
        <Avatar>
          <AvatarImage src={data.imageUrl} />
            <Skeleton className="h-full w-full rounded-full" />
        </Avatar>
        <div className="flex flex-col items-start gap-[2px] w-full">
          <span className="text-[13px] xl:text-[16px] font-normal text-foreground leading-[20px]">{data.name}</span>
          <span className="text-[11px] xl:text-[12px] font-normal text-muted-foreground leading-[18px]">{data.location}</span>
        </div>
      </div>
      <div className="flex flex-col  justify-center gap-[2px] w-full">
            <span className="text-[13px] xl:text-[16px] font-bold text-[#DC5224] leading-[20px]">{data.totalPrice.toLocaleString()} {t("sar")}</span>
            <span className="text-[12px] xl:text-[14px] font-normal text-foreground leading-[20px]">{data.pricePerM.toLocaleString()} {t("sarPerMeter")}</span>
      </div>
      <div className="flex items-center w-full">
            <span className="text-[13px] xl:text-[16px] font-medium text-foreground leading-[100%]">{data.area} {t("m2")}</span>
      </div>
      <div className="flex items-center w-full">
             <span className="text-[13px] xl:text-[16px] font-medium text-foreground leading-[100%]">{data.depositAmount.toLocaleString()} {t("sar")}</span>       
      </div>
      <div className="flex items-center  ">
            <span className="text-[13px] xl:text-[16px] font-medium  leading-[100%]">
              <span className={`text-muted-foreground ${isAr ? 'pl-[2px]' : 'pr-[2px]'}`}> {t("bidder")}</span> 
              <span className="text-primary ">({data.AvailableCount})</span>
              </span>       
      </div>
      <div className="flex items-center w-full">
        <AuctionTimer data={data} status={status}/>
      </div>
      <div className={`flex items-center ${isAr ? 'pl-[9px]' : 'pr-[9px]'}`}>
            <Button variant='secondary' className="h-[40px] w-full rounded-[8px] flex justify-center items-center bg-secondary text-secondary-foreground hover:bg-secondary/90 cursor-pointer">
                <span className="text-primary-foreground font-medium text-[12px] xl:text-[14px] ">{t("auctionDetailsBtn")}</span>
            </Button>
      </div>
      </div>
  )
}
