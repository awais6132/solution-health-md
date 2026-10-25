import React from 'react';
import { PeptidesWhyChooseConfig, PeptidesWhyChooseItem } from '@/types/peptides-page';
import { defaultPeptidesWhyChooseConfig } from '@/constants/peptides-page';

export interface PeptidesWhyChooseProps {
  config?: Partial<PeptidesWhyChooseConfig>;
  className?: string;
}

export function PeptidesWhyChoose({
  config,
  className = '',
}: PeptidesWhyChooseProps) {
  const activeConfig: PeptidesWhyChooseConfig = {
    ...defaultPeptidesWhyChooseConfig,
    ...config,
  };

  const renderIcon = (item: PeptidesWhyChooseItem) => {
    if (item.renderIcon) {
      return item.renderIcon();
    }

    switch (item.iconName) {
      case 'doctor':
        return (
          // Doctor / Provider with stethoscope
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
            <path d="M12 11v3a2 2 0 0 0 4 0v-3" />
          </svg>
        );
      case 'clipboard':
        return (
          // Personalized Checklist
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M9 12h6" />
            <path d="M9 16h6" />
          </svg>
        );
      case 'chart':
        return (
          // Evidence-Based Protocols Bar Chart
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect x="5" y="14" width="3.5" height="7" rx="1" />
            <rect x="10.25" y="9" width="3.5" height="12" rx="1" />
            <rect x="15.5" y="4" width="3.5" height="17" rx="1" />
          </svg>
        );
      case 'shield':
        return (
          // Ongoing Monitoring & Adjustments Shield
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'home':
        return (
          // Convenient Home Delivery House
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        );
      case 'heart':
      default:
        return (
          // Whole-Person Care Heart
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3B8A3E"
            strokeWidth="2"
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
      aria-label="Why Choose Solutions Health MD"
      className={`w-full bg-[#F2F8FD] py-12 sm:py-14 lg:py-16 ${className}`}
    >
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-8 sm:mb-10 max-w-[700px] gap-1.5">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-xs sm:text-sm lg:text-[14px] text-[#526E86] font-normal leading-relaxed">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 6 Circular Pillars Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4 lg:gap-3 items-start justify-items-center">
          {activeConfig.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group max-w-[150px] w-full"
            >
              {/* White Solid Circle Badge */}
              <div className="w-14 h-14 rounded-full bg-white shadow-xs flex items-center justify-center shrink-0 mb-3 group-hover:scale-105 transition-transform duration-200">
                {renderIcon(item)}
              </div>

              {/* Title */}
              <h4 className="text-[12px] sm:text-[13px] font-bold text-[#1E293B] tracking-tight leading-tight mb-0.5">
                {item.title}
              </h4>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-[11.5px] text-[#526E86] leading-tight text-center font-medium">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PeptidesWhyChoose;
