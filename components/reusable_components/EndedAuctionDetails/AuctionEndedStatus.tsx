import { getTranslations } from "next-intl/server";

export default async function AuctionEndedStatus() {
  const t = await getTranslations("EndedAuctionDetails");

  return (
    <div
      role="status"
      className="flex min-h-14 items-center justify-center rounded-full bg-[#E94F1D] px-6 text-lg font-medium text-white"
    >
      {t("ended")}
    </div>
  );
}
