'use client';

import React from 'react';

interface AuctionButtonProps {
  onClick?: () => void;
  href?: string;
  label?: string;
  variant?: 'primary' | 'closed';
}

export default function AuctionButton({
  onClick,
  href,
  label = 'تفاصيل المزاد',
  variant = 'primary',
}: AuctionButtonProps) {
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
        className="w-full h-[63px] flex items-center justify-center bg-[#d85226] text-white text-center rounded-xl font-bold text-base shadow-sm select-none mt-4"
        role="alert"
      >
        تم اغلاق المزاد
      </span>
    );
  }

  // Action Button
  const buttonContent = (
    <span
      onClick={handleClick}
      className="bg-[#e9a11d] hover:bg-[#d59013] text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-[0.98] cursor-pointer text-center text-sm w-full min-w-0 inline-flex items-center justify-center select-none"
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} className="w-full flex">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}


