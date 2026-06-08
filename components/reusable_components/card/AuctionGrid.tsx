'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

import VerticalAuctionGrid from './VerticalCard/VerticalAuctionGrid';
import HorizontalAuctionGrid from './HorizontalCard/HorizontalAuctionGrid';
import { AuctionCardProps } from './VerticalCard/AuctionCard';
import PropertyMapContainer from '@/features/auctions/components/PropertyMapContainer';

interface AuctionGridProps {
  auctions: (AuctionCardProps & { id: string | number })[];
}

export default function AuctionGrid({ auctions }: AuctionGridProps) {
  const [cardFormat, setCardFormat] = React.useState<'grid' | 'list' | 'map'>('grid');
  const t = useTranslations('grid');

  return (
    <>
      <div className="flex gap-[10px] font-medium text-[16px] mb-4">
        <Button
          onClick={() => setCardFormat('list')}
          className={`flex rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'list'
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
          />
          <span>{t('list')}</span>
        </Button>

        <Button
          onClick={() => setCardFormat('grid')}
          className={`flex rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'grid'
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
          />
          <span>{t('card')}</span>
        </Button>

        <Button
          onClick={() => setCardFormat('map')}
          className={`flex rounded-[12px] w-[120px] h-[50px] gap-[10px] justify-center cursor-pointer transition-all ${cardFormat === 'map'
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
          />
          <span>{t('map')}</span>
        </Button>
      </div>

      {cardFormat === 'list' && (
        <HorizontalAuctionGrid auctions={auctions} />
      )}

      {cardFormat === 'grid' && (
        <VerticalAuctionGrid auctions={auctions} />
      )}

      {cardFormat === 'map' && (
        <div>
          <PropertyMapContainer />
        </div>
      )}
    </>
  );
}
