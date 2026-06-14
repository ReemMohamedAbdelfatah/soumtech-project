import { getTranslations } from "next-intl/server";
import PropertyDetails from "@/components/reusable_components/PropertyDetails/PropertyDetails";

interface CurrentAuctionDetailsPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function CurrentAuctionDetailsPage({
  params,
}: CurrentAuctionDetailsPageProps) {
  // id is available for a future getProperty(id) fetch; mock data for now.
  const { id } = await params;
  void id;

  const t = await getTranslations("propertyDetails");

  // Mock data matching the Figma reference. Swap for a real fetch later.
  const property = {
    name: "فيلا حي الروضة",
    location: "( الرياض )",
    userPosition: 1 as const,
    images: [
      "/property-details-carousel/1.jpeg",
      "/property-details-carousel/2.jpeg",
    ],
    logoUrl: "/infathLogo.png",
    companyName: "إنفاذ",
    contactNumber: "+966501759844",
    endTime: "2026-07-21T14:12:00",
    price: {
      auctionCurrentPrice: 4623240,
      meterPrice: 200,
      totalPrice: 2049,
      brokerageTax: 75.5,
      brokerageFees: 2.5,
    },
    stats: {
      entryDeposit: 450,
      bidIncrement: 30,
      numberOfBids: 22,
    },
    bidders: [
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 12 يوماً" },
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 9 أيام" },
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 9 أيام" },
    ],
    description:
      "فيلا فاخرة في حي الزهور، الرياض. تصميم عصري ومرافق متطورة، حديقة خلابة ومسبح خاص. مؤجرة بقيمة 40 ألف ريال سنوياً، وانتهاء عقد الإيجار في تاريخ 14 نوفمبر 2023م. فرصة للاستثمار في فيلا فاخرة وتحقيق عائد استثماري. احجز الآن قبل انتهاء العقد.",
    attributes: [
      { label: t("propertyType"), value: "فيلا سكنية جديدة" },
      { label: t("saleType"), value: t("forSale") },
      { label: t("city"), value: "الرياض" },
      { label: t("neighborhood"), value: "حي النسيم الغربي" },
      { label: t("northNeighbor"), value: "فيلا رقم 8 بطول 320 م" },
      { label: t("southNeighbor"), value: "فيلا رقم 8 بطول 320 م" },
      { label: t("eastNeighbor"), value: "رصيف حديقة بطول 320 م" },
      { label: t("westNeighbor"), value: "فيلا رقم 2 بطول 653 م" },
      { label: t("area"), value: "3420 متر مربع" },
      { label: t("deedNumber"), value: "320 443 543 563" },
      { label: t("garage"), value: t("notAvailable") },
      { label: t("airConditioner"), value: t("notAvailable") },
      { label: t("bathroomsCount"), value: "4" },
      { label: t("streetName"), value: "شارع الإخلاص" },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8">
      <PropertyDetails {...property} />
    </main>
  );
}
