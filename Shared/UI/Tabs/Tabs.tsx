import React from "react";

type Props = { children?: React.ReactNode };

export default function Tabs({ children }: Props) {
  return <div role="tablist">{children}</div>;
}
