import AuctionCardDetails from "./AuctionCardDetails";

// Map state management and interactions
export default function PropertyMapContainer() {
  return <div className=" flex flex-col lg:flex-row items-center justify-center gap-4 p-2">
    <img src="/dummy/map.png" alt="Map Placeholder" className="w-100 lg:w-2/3 h-[1000px] object-cover rounded-[22px]" />
    <div className="w-100 lg:w-1/3 bg-white rounded-[22px] shadow-lg">
      <AuctionCardDetails></AuctionCardDetails>
    </div>
  </div>
    ;
}
