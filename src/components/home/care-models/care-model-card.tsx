import React from 'react';
import Image from 'next/image';
import { CareModelItem } from '@/types/care-models';
import { CareModelHeader } from './care-model-header';
import { CareModelFeatures } from './care-model-features';
import { CareModelCta } from './care-model-cta';

interface CareModelCardProps {
  item: CareModelItem;
  className?: string;
}

export const CareModelCard: React.FC<CareModelCardProps> = ({ item, className = '' }) => {
  const { badge, title, subtitle, features, checkmarkColor, cta, backgroundImage, bgPosition = 'object-center', foregroundImage, accentNote } = item;

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] min-h-[520px] w-full p-6 sm:p-8 lg:p-10 border border-white/10 shadow-sm ${className}`}
    >
      {/* 1. Background Image with Single Balanced Dark Gradient Overlay */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[28px]">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover ${bgPosition} transition-transform duration-700 group-hover:scale-105`}
          />
          {/* Clean Balanced Gradient Overlay for readability without washing out photo */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        </div>
      )}

      {/* 2. Foreground Graphic/Artwork if provided */}
      {foregroundImage && (
        <div className="absolute right-0 bottom-0 top-0 w-[45%] pointer-events-none z-[5] flex items-end justify-end overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src={foregroundImage}
              alt=""
              fill
              className="object-contain object-bottom-right transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      )}

      {/* 3. Content Layer (Zero Margins, pure flex gap) */}
      <div className="relative z-10 flex flex-col justify-between h-full gap-8 w-full">
        <div className="flex flex-col gap-6">
          {/* Header (Badge + Title + Subtitle) */}
          <CareModelHeader badge={badge} title={title} subtitle={subtitle} />

          {/* Features Checklist */}
          <CareModelFeatures features={features} checkmarkColor={checkmarkColor} />
        </div>

        {/* CTA Button */}
        <CareModelCta cta={cta} />
      </div>
    </div>
  );
};
