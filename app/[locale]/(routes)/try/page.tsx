import AuctionTable from "@/components/reusable_components/AuctionTable";
import { AuctionTableData } from "@/components/reusable_components/AuctionTableRow";
  

type status = 'live' | 'upcoming' | 'over'

const data : AuctionTableData[] = [
  {
    imageUrl: 'https://example.com/img1.png',
    name: 'عمارة النور',
    location: 'الرياض',
    totalPrice: 500000000,
    pricePerM: 300,
    area: 325.22,
    depositAmount: 2500,
    AvailableCount: 12,
    startDate: '19/2/2023',
    startTime: '01:45 pm',
    timer: { hours: 0, minutes: 0, seconds: 0, days: 0 }
  },
  {
    imageUrl: 'https://example.com/img2.png',
    name: 'فندق الريان',
    location: 'جدة',
    totalPrice: 750000000,
    pricePerM: 350,
    area: 210.5,
    depositAmount: 3000,
    AvailableCount: 8,
    startDate: '25/3/2023',
    startTime: '10:00 am',
    timer: { hours: 0, minutes: 0, seconds: 0, days: 0 }
  },
  {
    imageUrl: 'https://example.com/img3.png',
    name: 'برج الحمراء',
    location: 'الدمام',
    totalPrice: 600000000,
    pricePerM: 280,
    area: 215.0,
    depositAmount: 2800,
    AvailableCount: 0,
    startDate: '10/1/2023',
    startTime: '03:30 pm',
    timer: { hours: 0, minutes: 0, seconds: 0, days: 0 }
  }
];
export default function TryPage() {
  return <>

  <div className="m-auto w-full">
        <AuctionTable data={data} status={"upcoming"}/>
  </div>
  </>;
}
