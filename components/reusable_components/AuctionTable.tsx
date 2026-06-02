import React from "react";
import AuctionTableRow from "./AuctionTableRow";
import { AuctionTableData } from "./AuctionTableRow"; 

interface AuctionTableProps {
  data: AuctionTableData[]
  status: 'upcoming' | 'live' | 'over'
}

const gridOver = "grid grid-cols-[auto_auto_auto_auto_auto_195px_130px] xl:grid-cols-[auto_auto_auto_auto_auto_275px_140px] gap-7 xl:gap-12"
const gridNotOver = "grid grid-cols-[130px_auto_auto_auto_auto_auto_195px_130px] xl:grid-cols-[150px_auto_auto_auto_auto_auto_275px_140px] gap-5 xl:gap-7"

export default function AuctionTable({data,status}:AuctionTableProps) : React.JSX.Element {
  const grid = status === 'over' ? gridOver : gridNotOver
  return (
    <>
      <div className={`hidden lg:grid  mx-auto w-[95%] rounded-[12px] border-b border-border  bg-muted text-muted-foreground text-[14px] font-medium leading-[18px] whitespace-nowrap ${grid}`}>
        {/* header */}
        {status!=="over" && <div className="flex items-center pr-[14px]">انضم للمزاد</div>}
        <div className={`h-[52px] flex items-center ${status==="over"?"pr-[14px]":""}`}>اسم العقار</div>
        <div className="flex items-center">سعر السوم الحالي</div>
        <div className="flex items-center">مساحة</div>
        <div className="flex items-center">عربون الدخول</div>
        <div className="flex items-center">عدد السومات</div>
        <div className="flex items-center"> المؤقت</div>
        <div className="flex items-center">تفاصيل المزاد</div>
      </div>
      {/* rows */}
     
        {data.map((item: AuctionTableData) => (
          <AuctionTableRow key={item.name} status={status} data={item} grid={grid}/>
        ))}


    </>
  )
}
