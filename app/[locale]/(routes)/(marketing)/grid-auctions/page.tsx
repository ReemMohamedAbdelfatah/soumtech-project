import Display from "@/components/reusable_components/AuctionTable/Display";

type Props = {
  searchParams: Promise<{
    page?: string;
    view?: "grid" | "list" | "map";
  }>;
};

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <Display
      page={params.page || "1"}
      view={params.view || "grid"}
    />
  );
}