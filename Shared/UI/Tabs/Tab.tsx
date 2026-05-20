import React from "react";

type Props = { title: string };

export default function Tab({ title }: Props) {
  return <button role="tab">{title}</button>;
}
