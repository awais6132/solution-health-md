'use client';

import React from 'react';
import Image from 'next/image';
import {
  TreatmentMosaicGridProps,
  TreatmentMosaicConfig,
  MosaicCardItem,
} from '@/types/fever-page';
import { defaultFeverMosaicConfig } from '@/constants/fever-page';

/**
 * 1. Exact SVG Match: Green Shield with white circle and medical plus (+)
 */
const ShieldPlusIcon = () => (
  <svg
    className="w-10 h-10 shrink-0"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6 7C6 5.34315 7.34315 4 9 4H27C28.6569 4 30 5.34315 30 7V17C30 24.5 24.5 30.5 18 33C11.5 30.5 6 24.5 6 17V7Z"
      fill="#4B9B44"
    />
    <circle cx="18" cy="17" r="7.5" fill="#FFFFFF" />
    <path
      d="M18 12.5V21.5M13.5 17H22.5"
      stroke="#4B9B44"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * 2. Exact SVG Match: Green Virus / Spore cell with internal organelles
 */
const VirusSporeIcon = () => (
  <svg
    className="w-10 h-10 shrink-0"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="18" cy="18" r="10.5" fill="#4B9B44" />
    <circle cx="18" cy="4.5" r="2.8" fill="#4B9B44" />
    <circle cx="18" cy="31.5" r="2.8" fill="#4B9B44" />
    <circle cx="4.5" cy="18" r="2.8" fill="#4B9B44" />
    <circle cx="31.5" cy="18" r="2.8" fill="#4B9B44" />
    <circle cx="8.5" cy="8.5" r="2.8" fill="#4B9B44" />
    <circle cx="27.5" cy="8.5" r="2.8" fill="#4B9B44" />
    <circle cx="8.5" cy="27.5" r="2.8" fill="#4B9B44" />
    <circle cx="27.5" cy="27.5" r="2.8" fill="#4B9B44" />
    <rect
      x="13.5"
      y="11.5"
      width="4.5"
      height="7.5"
      rx="2.2"
      transform="rotate(-25 13.5 11.5)"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      fill="none"
    />
    <rect
      x="18"
      y="17"
      width="4.5"
      height="7.5"
      rx="2.2"
      transform="rotate(50 18 17)"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      fill="none"
    />
    <circle cx="13" cy="22" r="1.5" fill="#FFFFFF" />
    <circle cx="23.5" cy="13.5" r="1.2" fill="#FFFFFF" />
    <circle cx="18" cy="23.5" r="1" fill="#FFFFFF" />
  </svg>
);

/**
 * 3. Exact SVG Match: Green hand supporting circular timer checkmark
 */
const HandClockCheckIcon = () => (
  <svg
    className="w-10 h-10 shrink-0"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M23 9C26.5 10.5 28.5 14 28.5 18C28.5 23 24.5 27 19.5 27C14.5 27 10.5 23 10.5 18C10.5 13.8 13.2 10.2 17 9.2"
      stroke="#4B9B44"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M13.5 9H17.5V5"
      stroke="#4B9B44"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 18L18.5 20.5L23.5 15.5"
      stroke="#4B9B44"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 25L9.5 22.5L14 25.5C15.8 26.8 18.2 26.8 20 25.8L25.5 22.5C27 21.6 29 22.4 29 24.2C29 24.8 28.6 25.4 28 25.8L21 30.2C18.8 31.6 15.8 31.2 13.5 29.8L7.5 27C6.6 26.5 6 25.8 6 25Z"
      fill="#4B9B44"
    />
  </svg>
);

const renderCardIcon = (iconName: MosaicCardItem['iconName']) => {
  switch (iconName) {
    case 'shield-plus':
      return <ShieldPlusIcon />;
    case 'virus':
      return <VirusSporeIcon />;
    case 'clock-hand':
      return <HandClockCheckIcon />;
    default:
      return <ShieldPlusIcon />;
  }
};

export const TreatmentMosaicGrid: React.FC<TreatmentMosaicGridProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: TreatmentMosaicConfig = {
    ...defaultFeverMosaicConfig,
    ...config,
    items: config?.items || defaultFeverMosaicConfig.items,
  };
  const items = activeConfig.items;

  // Split into Row 1 and Row 2
  const row1 = items.slice(0, 3);
  const row2 = items.slice(3, 6);

  return (
    <section
      id="fever-treatment-mosaic"
      aria-label="Online Fever Treatment Assessment"
      className={`w-full bg-white py-12 md:py-16 ${className}`}
    >
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        {(activeConfig.eyebrow || activeConfig.headline) && (
          <div className="flex flex-col gap-1.5 text-left mb-6 sm:mb-8">
            {activeConfig.eyebrow && (
              <span className="text-xs sm:text-[13px] font-bold text-[#0E6C9B] uppercase tracking-wider">
                {activeConfig.eyebrow}
              </span>
            )}
            {activeConfig.headline && (
              <h2
                className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeConfig.headline}
              </h2>
            )}
          </div>
        )}

        {/* 3x2 Checkerboard Mosaic Grid (Flush, Zero Gap, Sharp Edges matching Design) */}
        <div className="w-full overflow-hidden">
          {/* ROW 1: [Image] [Card] [Image] */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {row1.map((item, index) => {
              if (item.type === 'image') {
                return (
                  <div
                    key={item.id || `r1-${index}`}
                    className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] overflow-hidden bg-slate-50"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                      priority={index === 0}
                    />
                  </div>
                );
              }

              return (
                <div
                  key={item.id || `r1-${index}`}
                  className="w-full h-auto min-h-[280px] sm:min-h-[300px] md:h-[320px] lg:h-[340px] bg-white p-7 sm:p-8 lg:p-10 flex flex-col items-start justify-start text-left"
                >
                  <div className="mb-5 sm:mb-6">
                    {renderCardIcon(item.iconName)}
                  </div>
                  <h3
                    className="text-[19px] sm:text-[20px] lg:text-[22px] font-bold text-slate-900 leading-snug mb-3 tracking-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* ROW 2: [Card] [Image] [Card] */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {row2.map((item, index) => {
              if (item.type === 'image') {
                return (
                  <div
                    key={item.id || `r2-${index}`}
                    className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] overflow-hidden bg-slate-50"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                );
              }

              return (
                <div
                  key={item.id || `r2-${index}`}
                  className="w-full h-auto min-h-[280px] sm:min-h-[300px] md:h-[320px] lg:h-[340px] bg-white p-7 sm:p-8 lg:p-10 flex flex-col items-start justify-start text-left"
                >
                  <div className="mb-5 sm:mb-6">
                    {renderCardIcon(item.iconName)}
                  </div>
                  <h3
                    className="text-[19px] sm:text-[20px] lg:text-[22px] font-bold text-slate-900 leading-snug mb-3 tracking-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentMosaicGrid;
