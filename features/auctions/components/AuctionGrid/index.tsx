import React from "react";

type Props = { children?: React.ReactNode };

export default function AuctionGrid({ children }: Props) {
  return <section data-component="AuctionGrid">{children}</section>;
}
