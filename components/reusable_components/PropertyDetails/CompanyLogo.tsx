import React from "react";

export interface CompanyLogoProps {
  logoUrl: string;
  companyName: string;
}

export default function CompanyLogo({
  logoUrl,
  companyName,
}: CompanyLogoProps) {
  return (
    <div className="flex items-center justify-start">
      <img
        src={logoUrl}
        alt={companyName}
        className="h-16 w-16 object-contain"
      />
    </div>
  );
}
