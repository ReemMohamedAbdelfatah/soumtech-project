import React from "react";

type Props = { src?: string; alt?: string };

export default function ProviderLogo({ src, alt }: Props) {
  return <img src={src} alt={alt} />;
}
