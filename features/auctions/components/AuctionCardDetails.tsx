import PropertyDetails from "./PropertyDetailView";
import HorizontalAuctionCard from "@/components/reusable_components/card/HorizontalAuctionCard";


export default function AuctionCardDetails() {
  return (
    <div className="max-w-sm mx-auto p-4">
      {/* Upper section — reuse existing AuctionCard */}

      <HorizontalAuctionCard
        title="قطعة أرض رقم 1"
        imageSrc="/image3.png"
        logoSrc="/image3.png"
        status="active"
        endDate="2025-11-14T00:00:00"
        location="حريملاء"
        area="325.22 م²"
        auctionDate="14 نوفمبر 2023"
        auctionTime="10:00 ص"
        assetsCount={71}
        detailsUrl="/auctions/1"
        priceInfo={{
          amount: "500,000,000",
          subText: "20",
        }}
      />

      {/* Lower section — new PropertyDetails component */}
      <PropertyDetails
        propertyType="فيلا سكنية جديدة"
        city="الرياض"
        neighborhood="حي النسيم الغربي"
        northNeighbor="فيلا رقم 8 بطول 320 م"
        southNeighbor="فيلا رقم 8 بطول 320 م"
        eastNeighbor="فيلا رقم 8 بطول 320 م"
        westNeighbor="رصيف حديقة بطول 320 م"
        streetName="شارع الإخلاص"
        deedNumber="322343543563"
      />
    </div>
  );
}
