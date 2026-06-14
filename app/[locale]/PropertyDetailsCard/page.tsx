import { redirect } from "next/navigation";

interface LegacyPropertyDetailsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LegacyPropertyDetailsPage({
  params,
}: LegacyPropertyDetailsPageProps) {
  const { locale } = await params;

  redirect(`/${locale}/current-auction-details/1`);
}
