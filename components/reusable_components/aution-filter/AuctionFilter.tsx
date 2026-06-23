import Link from "next/link";
import FilterCards from "./FilterCards";
import { getTranslations } from "next-intl/server";

type Props = {
  status: string;
  page: number;
  mypage?: string
};

export default async function AuctionFilter({ status, page, mypage="" }: Props) {
  const { data } = await fetch(
    `http://localhost:3001/auctions?status=${status}&_page=${page}&_per_page=8`,
    { cache: "no-store" },
  ).then((r) => r.json());

  const tabs = [
    { label: "Active", value: "active" },
    { label: "Upcoming", value: "upcoming" },
    { label: "Ended", value: "ended" },
  ];
  const t = await getTranslations("auctionFilter");
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mt-[22.5px] mb-10">
        <div className="flex bg-white shadow-md rounded-full p-1 border gap-1">
          {tabs.map((tab) => {
            const isActive = status === tab.value;

            return (
              <Link
                key={tab.value}
                href={`/${mypage}?status=${tab.value}&page=1`}
                className={`
                rounded-full text-xl font-medium transition-all px-7.5 md:px-21.5 py-2 md:py-4  
                
                ${
                  isActive
                    ? "bg-[#DC5224] text-white!  shadow"
                    : "text-gray-700 dark:text-black! hover:bg-gray-100"
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
