interface AuctionDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function AuctionDetailsPage({
  params,
}: AuctionDetailsPageProps) {
  const { id } = await params;
  return <div>Single Auction Page: {id}</div>;
}
