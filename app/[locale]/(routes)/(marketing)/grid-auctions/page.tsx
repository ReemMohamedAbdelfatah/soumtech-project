import Display from "@/components/reusable_components/AuctionTable/Display"

export default async function GridAuction(props: any) {
  const searchParams = await props.searchParams;
  return <Display page={searchParams.page} />;
}
