import React from 'react';
import { PrimaryCareApproachConfig, PrimaryCareApproachItem } from '@/types/primary-care-page';
import { defaultPrimaryCareApproachConfig } from '@/constants/primary-care-page';

export interface PrimaryCareApproachProps {
  config?: Partial<PrimaryCareApproachConfig>;
  className?: string;
}

export function PrimaryCareApproach({
  config,
  className = '',
}: PrimaryCareApproachProps) {
  const activeConfig: PrimaryCareApproachConfig = {
    ...defaultPrimaryCareApproachConfig,
    ...config,
  };

  const renderIcon = (item: PrimaryCareApproachItem) => {
    switch (item.iconName) {
      case 'clock':
        return (
          // Extended Time / Clock Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'user':
        return (
          // Personalized / User Stethoscope Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
          </svg>
        );
      case 'target':
        return (
          // Proactive / Target Crosshair Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="22" y1="12" x2="18" y2="12" />
            <line x1="6" y1="12" x2="2" y2="12" />
            <line x1="12" y1="6" x2="12" y2="2" />
            <line x1="12" y1="22" x2="12" y2="18" />
          </svg>
        );
      case 'heart':
      default:
        return (
          // Whole-Person Care / Heart In Hands Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
    }
  };

  return (
    <section
      aria-label="A Different Approach to Primary Care"
      className={`w-full bg-[#F4F9FD] py-14 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 w-full">
          {/* Left Column: Headline & Detailed Paragraph */}
          <div className="flex flex-col items-start text-left w-full lg:w-[42%] shrink-0 gap-4">
            <h2
              className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {activeConfig.headline}
            </h2>
            <p className="text-sm sm:text-[14.5px] text-[#4A607A] leading-relaxed font-normal">
              {activeConfig.description}
            </p>
          </div>

          {/* Right Column: 4 Cards Grid */}
          <div className="w-full lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {activeConfig.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-start text-center p-5 rounded-2xl bg-white border border-[#DCEAF6]/80 shadow-xs hover:shadow-md transition-all duration-200 group min-h-[175px]"
              >
                {/* Green Outline Circle Badge */}
                <div className="w-12 h-12 rounded-full bg-[#EBF5ED] border border-[#D1EBD6] flex items-center justify-center shrink-0 mb-3.5 group-hover:scale-105 transition-transform duration-200">
                  {renderIcon(item)}
                </div>

                {/* Card Title */}
                <h3 className="text-[13.5px] sm:text-[14px] font-bold text-[#0E4A72] tracking-tight leading-snug mb-1.5">
                  {item.title}
                </h3>

                {/* Subtitle / Description */}
                <p className="text-[11.5px] text-[#526E86] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrimaryCareApproach;
