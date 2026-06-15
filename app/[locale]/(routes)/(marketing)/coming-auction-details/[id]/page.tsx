import { getTranslations } from "next-intl/server";
import ComingAuctionDetails from "@/components/reusable_components/ComingAuctionDetails/ComingAuctionDetails";

interface ComingAuctionDetailsPageProps {
  params: Promise<{ id: string; locale: string }>;
}

export default async function ComingAuctionDetailsPage({
  params,
}: ComingAuctionDetailsPageProps) {
  const { id } = await params;
  void id;

  const t = await getTranslations("propertyDetails");
  const registeredUsers = Array.from({ length: 8 }, (_, index) => ({
    name: "omar abdulrhman",
    identityNumber: `10307641${String(69 + index).padStart(2, "0")}`,
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
    opensAt: "2026-07-21T13:45:00+03:00",
    stats: {
      entryDeposit: 450,
      bidIncrement: 30,
      registeredCount: 53,
    },
    registeredUsers,
    description:
      "فيلا فاخرة في حي الزهور، الرياض. تصميم عصري ومرافق متطورة، حديقة خلابة ومسبح خاص. مؤجرة بقيمة 40 ألف ريال سنوياً، وانتهاء عقد الإيجار في تاريخ 14 نوفمبر 2023م. فرصة للاستثمار في فيلا فاخرة وتحقيق عائد استثماري، احجز الآن قبل انتهاء العقد.",
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
      <ComingAuctionDetails {...property} />
    </main>
  );
}
