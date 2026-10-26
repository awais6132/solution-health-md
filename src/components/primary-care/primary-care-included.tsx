import React from 'react';
import {
  PrimaryCareIncludedConfig,
  PrimaryCareIncludedFeature,
} from '@/types/primary-care-page';
import { defaultPrimaryCareIncludedConfig } from '@/constants/primary-care-page';

export interface PrimaryCareIncludedProps {
  config?: Partial<PrimaryCareIncludedConfig>;
  className?: string;
}

export function PrimaryCareIncluded({
  config,
  className = '',
}: PrimaryCareIncludedProps) {
  const activeConfig: PrimaryCareIncludedConfig = {
    ...defaultPrimaryCareIncludedConfig,
    ...config,
  };

  const renderIcon = (item: PrimaryCareIncludedFeature) => {
    switch (item.iconName) {
      case 'calendar':
        return (
          // Calendar Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        );
      case 'shield':
        return (
          // Shield / Preventive Care Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        );
      case 'pill':
        return (
          // Prescription Pill Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
          </svg>
        );
      case 'activity':
        return (
          // Chronic Condition Activity / Pulse Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        );
      case 'clipboard':
        return (
          // Annual Wellness Exam Clipboard Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
            <path d="M9 12h6" />
            <path d="M9 16h6" />
          </svg>
        );
      case 'message':
        return (
          // Direct Doctor Messaging Chat Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 'video':
        return (
          // Virtual Visits Video Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <polygon points="23 7 16 12 23 17 23 7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
          </svg>
        );
      case 'flask':
      default:
        return (
          // Discounted Labs Flask Icon
          <svg viewBox="0 0 24 24" fill="none" stroke="#3B8A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M10 2v7.31L4.19 19A2 2 0 0 0 6 22h12a2 2 0 0 0 1.81-3L14 9.31V2" />
            <line x1="8.5" y1="2" x2="15.5" y2="2" />
            <line x1="6" y1="18" x2="18" y2="18" />
          </svg>
        );
    }
  };

  return (
    <section
      aria-label="What is Included in All Plans"
      className={`w-full bg-[#F4F9FD] py-14 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="site-container">
        {/* Header */}
        <div className="flex flex-col items-start text-left mb-10 sm:mb-12 max-w-[750px] gap-2">
          <h2
            className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0E4A72] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#526E86] font-normal leading-relaxed">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 8 Feature Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5 items-stretch">
          {activeConfig.features.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start text-center p-3.5 sm:p-4 rounded-2xl bg-white border border-[#DCEAF6]/80 shadow-2xs hover:shadow-sm hover:border-[#4B9B44]/40 transition-all duration-200 group min-h-[125px]"
            >
              {/* Green Light Circle with Icon */}
              <div className="w-11 h-11 rounded-full bg-[#EBF5ED] flex items-center justify-center shrink-0 mb-2.5 group-hover:scale-105 transition-transform duration-200">
                {renderIcon(item)}
              </div>

              {/* Title */}
              <h4 className="text-[11.5px] sm:text-[12px] font-bold text-[#0E4A72] tracking-tight leading-tight text-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrimaryCareIncluded;
