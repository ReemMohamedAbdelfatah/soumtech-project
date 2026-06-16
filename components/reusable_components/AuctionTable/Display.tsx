//NEXT
import Link from "next/link";
//lucide
import {
  LayoutGrid,
 List,
  Map,
} from "lucide-react";
//i18n
import { getTranslations } from "next-intl/server";
import {
  data,
  gridData,
} from "@/components/reusable_components/AuctionTable/data";
//components
import AuctionTable from "@/components/reusable_components/AuctionTable/AuctionTable";
import AuctionPagination from "@/components/reusable_components/AuctionTable/pagination";
import PropertyMapContainer from "@/features/auctions/components/cardDetails/PropertyMapContainer";
import HorizontalAuctionGrid from "@/components/reusable_components/card/HorizontalCard/HorizontalAuctionGrid";
//types
type Props = {
  page: string;
  view: "grid" | "list" | "map";
};
//--------------------------------
export default async function Display({ page, view }: Props) {
  //Pagination
  const pageSize = 21;
  const activeDataLength = view === "grid" ? gridData.length : data.length;
  const totalPages = Math.ceil(activeDataLength / pageSize);
  const startIndex = (Number(page) - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  const currentGridData = gridData.slice(startIndex, endIndex);
  
  //i18n
const t = await getTranslations("grid");  

 const views = [
  {
    name: "list",
    label: t("list"),
 icon: List,  },
  {
    name: "grid",
    label: t("card"),
    icon: LayoutGrid,
  },
  {
    name: "map",
    label: t("map"),
    icon: Map,
  },
] as const;
  //---------------------------------
  return (
    <div className="flex w-full flex-col gap-7 items-center px-3 md:px-20">
      {/* Buttons container */}
        <div className="flex justify-start w-full gap-2">
          {views.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={`?page=1&view=${item.name}`}
                className={`
                  ${
                    item.name === "list"
                      ? "hidden"
                      : "lg:flex"
                  }
                  flex
                  items-center
                  justify-center
                  gap-2
                  h-11 sm:h-12
                  px-4 sm:px-6
                  rounded-xl
                  text-sm sm:text-base
                  font-medium                
                  ${
                    view === item.name
                      ? "bg-primary"
                      : "bg-muted hover:bg-muted/70"
                  }
                  ${item.name === "list" && "hidden lg:flex"}
                `}
              >
                <Icon
                  size={24}
                  className={
                    view === item.name
                      ? "text-white"
                      : "text-muted-foreground"
                  }
                />
                <span
                  className={
                    view === item.name
                      ? "text-white"
                      : "text-muted-foreground"
                  }
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      {/* ---------------------------------- */}
      <div className="w-full">
        {view === "list" && (
          <AuctionTable
            status="upcoming"
            currentData={currentData}
          />
        )}
        {view === "grid" && (
          <HorizontalAuctionGrid
            auctions={currentGridData}
          />
        )}
        {view === "map" && <PropertyMapContainer />}
        {totalPages > 1 && view !== "map" && (
          <AuctionPagination
            totalPages={totalPages}
            currentPage={page}
          />
        )}
      </div>
    </div>
  );
}