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
      className={`group relative flex flex-col justify-between overflow-hidden border border-white/5 transition-all duration-300 w-full p-6 sm:p-8 lg:p-9.5 ${className}`}
      style={{
        maxWidth: '665.77px',
        minHeight: '523.23px',
        borderRadius: '27.11px',
        backgroundColor: '#0000008C',
        boxShadow: '0px 1.13px 2.26px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* 1. Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: '27.11px' }}>
          <Image
            src={backgroundImage}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover ${bgPosition} transition-transform duration-700 group-hover:scale-105`}
          />
          {/* Exact #0000008C Dark Overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#0000008C',
            }}
          />
          {/* Subtle horizontal gradient to ensure text readability on all screen sizes */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
      )}

      {/* 2. Foreground Graphic/Artwork if provided */}
      {foregroundImage && (
        <div className="absolute right-0 bottom-0 top-0 w-[46%] sm:w-[50%] max-w-[330px] pointer-events-none z-[5] flex items-end justify-end overflow-hidden">
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

      {/* 3. Content Layer */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6 sm:space-y-8 w-full max-w-[591.22px]">
        <div className="flex flex-col space-y-5 sm:space-y-6">
          {/* Header (Badge + Title + Subtitle) */}
          <CareModelHeader badge={badge} title={title} subtitle={subtitle} />

          {/* Features Checklist */}
          <CareModelFeatures features={features} checkmarkColor={checkmarkColor} />
        </div>

        {/* CTA Button using Global Button component */}
        <CareModelCta cta={cta} />
      </div>

      {/* Optional decorative accent note on image if available */}
      {accentNote && (
        <div className="hidden xl:block absolute right-8 top-12 z-10 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity">
          <span className="text-xl font-serif italic text-emerald-300/80 transform -rotate-6 block">
            {accentNote}
          </span>
        </div>
      )}
    </div>
  );
};
