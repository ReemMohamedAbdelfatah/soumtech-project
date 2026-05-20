import React from "react";

type Props = { children?: React.ReactNode };

export default function AuctionFilters({ children }: Props) {
  return <div data-component="AuctionFilters">{children}</div>;
}
