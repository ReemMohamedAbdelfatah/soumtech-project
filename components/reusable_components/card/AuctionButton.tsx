'use client';

import React from 'react';
import { useTranslations } from "next-intl";


interface AuctionButtonProps {
  onClick?: () => void;
  href?: string;
  label?: string;
  variant?: 'primary' | 'closed';
}

export default function AuctionButton({
  onClick,
  href,
  label,
  variant = 'primary',
}: AuctionButtonProps) {

  const t = useTranslations("auctionCard");

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  // Closed Action Button
  if (variant === 'closed') {
    return (
      <span
        className="w-full h-[63px] flex items-center justify-center bg-[#dc5224] text-white text-center rounded-[7px] text-[14px] font-medium shadow-sm select-none "
        role="alert"
      >
        {t("closed")}
      </span>
    );
  }

  // Action Button
  const buttonContent = (
    <span
      onClick={handleClick}
      className="bg-[#EEA820] hover:bg-[#d59013] text-white font-medium py-3 px-3 rounded-[6px] transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-[0.98] cursor-pointer text-center text-[14px] w-full min-w-0 inline-flex items-center justify-center select-none"
    >
      {label ?? t("auctionDetails")}
    </span>
  );

  if (href) {
    return (
      <a href={href} className="w-full ">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}


