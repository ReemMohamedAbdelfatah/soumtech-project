'use client'

import { data, gridData } from '@/components/reusable_components/AuctionTable/data'
import AuctionTable from '@/components/reusable_components/AuctionTable/AuctionTable'
import AuctionPagination from '@/components/reusable_components/AuctionTable/pagination'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import PropertyMapContainer from '@/features/auctions/components/cardDetails/PropertyMapContainer';
import HorizontalAuctionGrid from '../card/HorizontalCard/HorizontalAuctionGrid';




export default function Display({page}: {page: string})  {
  const [cardFormat, setCardFormat] = useState<'grid' | 'list' | 'map'>('grid');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCardFormat('grid');
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageSize = 21;
  const activeDataLength = cardFormat === 'grid' ? gridData.length : data.length;
  const totalPages = Math.ceil(activeDataLength / pageSize);
  const startIndex = (Number(page || 1) - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);
  const currentGridData = gridData.slice(startIndex, endIndex);
  const t = useTranslations('grid');

  return <div className="flex w-[95%] mx-auto flex-col gap-7 items-center">
     <div className='w-full flex justify-between'>
        <div className="flex gap-2 sm:gap-[10px] font-medium text-[12px] sm:text-[14px] md:text-[16px]">
          <Button
            onClick={() => setCardFormat('list')}
            className={`hidden lg:flex rounded-[12px] w-[90px] sm:w-[120px] h-[50px] gap-[3px] sm:gap-[5px] md:gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'list'
              ? 'bg-[#171D5B] text-white hover:bg-[#171D5B]/90'
              : 'bg-[#F5F5F5] text-black hover:bg-[#EAEAEA]'
              }`}
          >
            <Image
              src={
                cardFormat === 'list'
                  ? '/icons/ListBulletsWhite.svg'
                  : '/icons/ListBulletsBlack.svg'
              }
              alt="list"
              width={24}
              height={24}
              className="w-3 h-3 sm:w-6 sm:h-6"
            />
            <span>{t('list')}</span>
          </Button>
  
          <Button
            onClick={() => setCardFormat('grid')}
            className={`flex rounded-[12px] w-[90px] sm:w-[120px] h-[50px] gap-[3px] sm:gap-[5px] md:gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'grid'
              ? 'bg-[#171D5B] text-white hover:bg-[#171D5B]/90'
              : 'bg-[#F5F5F5] text-black hover:bg-[#EAEAEA]'
              }`}
          >
            <Image
              src={
                cardFormat === 'grid'
                  ? '/icons/GridWhite.svg'
                  : '/icons/GridBlack.svg'
              }
              alt="grid"
              width={24}
              height={24}
              className="w-3 h-3 sm:w-6 sm:h-6"
            />
            <span>{t('card')}</span>
          </Button>
  
          <Button
            onClick={() => setCardFormat('map')}
            className={`hidden lg:flex rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'map'
              ? 'bg-[#171D5B] text-white hover:bg-[#171D5B]/90'
              : 'bg-[#F5F5F5] text-black hover:bg-[#EAEAEA]'
              }`}
          >
            <Image
              src={
                cardFormat === 'map'
                  ? '/icons/MapWhite.svg'
                  : '/icons/MapBlack.svg'
              }
              alt="map"
              width={24}
              height={24}
              className="w-3 h-3 sm:w-6 sm:h-6"
            />
            <span>{t('map')}</span>
          </Button>
        </div>
          {/* PDF & Excel download buttons */}
          <div className="flex gap-[10px] sm:gap-[19px] items-center">
            {/* PDF icon (red) */}
            <button
              type="button"
              aria-label="Download PDF"
              className="relative cursor-pointer transition-opacity hover:opacity-80"
            >
              <svg className="w-auto h-[35px] sm:h-[40px] md:h-[50px]" viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Page body */}
                <path d="M0 4C0 1.79 1.79 0 4 0H25L38.25 13V47.15C38.25 49.36 36.46 51.15 34.25 51.15H4C1.79 51.15 0 49.36 0 47.15V4Z" fill="#E5252A"/>
                {/* Folded corner */}
                <path d="M25 0L38.25 13H29C26.79 13 25 11.21 25 9V0Z" fill="#FFFFFF" fillOpacity="0.3"/>
                {/* "PDF" text */}
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">PDF</text>
              </svg>
            </button>

            {/* Excel icon (green) */}
            <button
              type="button"
              aria-label="Download Excel"
              className="relative cursor-pointer transition-opacity hover:opacity-80"
            >
              <svg className="w-auto h-[35px] sm:h-[40px] md:h-[50px]" viewBox="0 0 39 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Page body */}
                <path d="M0 4C0 1.79 1.79 0 4 0H25L38.25 13V47.15C38.25 49.36 36.46 51.15 34.25 51.15H4C1.79 51.15 0 49.36 0 47.15V4Z" fill="#00733B"/>
                {/* Folded corner */}
                <path d="M25 0L38.25 13H29C26.79 13 25 11.21 25 9V0Z" fill="#FFFFFF" fillOpacity="0.3"/>
                {/* "XLS" text */}
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="Arial, sans-serif">XLS</text>
              </svg>
            </button>
          </div>
        </div>
        <div className='w-full'>
        {(() => {
          switch (cardFormat) {
            case 'list':
              return <AuctionTable status="upcoming" currentData={currentData} />
            case 'grid':
              return <HorizontalAuctionGrid auctions={currentGridData} />
            case 'map':
              return <PropertyMapContainer />
          }
        })()}

        {totalPages > 1 &&
          (cardFormat !== "map" && <AuctionPagination totalPages={totalPages} currentPage={page || '1'} />)
        }
        </div>
  </div>
}