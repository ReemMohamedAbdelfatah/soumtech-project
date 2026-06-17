import Link from "next/link";
import FilterCards from "./FilterCards";
import { getTranslations } from "next-intl/server";

type Props = {
  status: string;
  page: number;
};

export default async function AuctionFilter({ status, page }: Props) {
  const { data } = await fetch(
    `http://localhost:3001/auctions?status=${status}&_page=${page}&_per_page=10`,
    { cache: "no-store" },
  ).then((r) => r.json());

  const tabs = [
    { label: "Active", value: "active" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Ended", value: "ended" },
  ];
  const t = await getTranslations("auctionFilter");
  return (
    <div>
      <div className="flex justify-center mt-[22.5px] mb-10">
        <div className="flex bg-white shadow-md rounded-full p-1 border gap-1">
          {tabs.map((tab) => {
            const isActive = status === tab.value;

            return (
              <Link
                key={tab.value}
                href={`/?status=${tab.value}&page=1`}
                className={`
                md:px-21.5 md:py-6 rounded-full text-sm font-medium transition-all px-10 py-3
                
                ${
                  isActive
                    ? "bg-[#DC5224] text-white! shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }
              `}
              >
                {t(tab.value)}
              </Link>
            );
          })}
        </div>
      </div>
      <FilterCards data={data} />
    </div>
  );
}
