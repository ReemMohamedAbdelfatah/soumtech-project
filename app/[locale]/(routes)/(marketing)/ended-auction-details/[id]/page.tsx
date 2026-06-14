import { getTranslations } from "next-intl/server";
import EndedAuctionDetails from "@/components/reusable_components/EndedAuctionDetails/EndedAuctionDetails";

interface EndedAuctionDetailsPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function EndedAuctionDetailsPage({
  params,
}: EndedAuctionDetailsPageProps) {
  const { id } = await params;
  void id;

  const t = await getTranslations("propertyDetails");
  const registeredUsers = Array.from({ length: 8 }, () => ({
    name: "omar abdulrhman",
    identityNumber: "1030764169",
    phone: "+966303245323",
    hasBalance: true,
  }));

  const property = {
    name: "فيلا حي الروضة",
    location: "( الرياض )",
    images: [
      "/property-details-carousel/1.jpeg",
      "/property-details-carousel/2.jpeg",
    ],
    logoUrl: "/infathLogo.png",
    companyName: "إنفاذ",
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
      registeredCount: 53,
    },
    bidders: [
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 12 يوماً" },
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 9 أيام" },
      { name: "عبدالله محمد حسن", bidPrice: "34,239.20 ر.س", time: "منذ 9 أيام" },
    ],
    registeredUsers,
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
      <EndedAuctionDetails {...property} />
    </main>
  );
}
