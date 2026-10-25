import React from 'react';
import Link from 'next/link';
import {
  Pill,
  Wind,
  Activity,
  Droplet,
  Sparkles,
  Thermometer,
} from 'lucide-react';
import {
  CommonPrescriptionsSectionProps,
  CommonPrescriptionsConfig,
  PrescriptionBadgeItem,
} from '@/types/urgent-care-page';
import { defaultCommonPrescriptionsConfig } from '@/constants/urgent-care-page';

export const CommonPrescriptionsSection: React.FC<CommonPrescriptionsSectionProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: CommonPrescriptionsConfig = {
    ...defaultCommonPrescriptionsConfig,
    ...config,
    prescriptions:
      config?.prescriptions || defaultCommonPrescriptionsConfig.prescriptions,
  };

  // Helper to render prescription category icon
  const renderPrescriptionIcon = (iconName: PrescriptionBadgeItem['iconName']) => {
    const iconProps = { className: 'w-4 h-4 sm:w-4.5 sm:h-4.5', strokeWidth: 2 };
    switch (iconName) {
      case 'pill':
        return <Pill {...iconProps} />;
      case 'wind':
        return <Wind {...iconProps} />;
      case 'activity':
        return <Activity {...iconProps} />;
      case 'inhaler':
        return (
          <svg
            className="w-4 h-4 sm:w-4.5 sm:h-4.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Medical inhaler silhouette */}
            <path d="M7 16h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2Z" />
            <path d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            <path d="M5 13h14" />
            <circle cx="16" cy="19" r="2" />
            <path d="M18 19h3" />
          </svg>
        );
      case 'droplet':
        return <Droplet {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'thermometer':
        return <Thermometer {...iconProps} />;
      default:
        return <Pill {...iconProps} />;
    }
  };

  // Theme color styles for icon circle
  const getThemeColorClass = (colorTheme: PrescriptionBadgeItem['colorTheme'] = 'teal') => {
    switch (colorTheme) {
      case 'blue':
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]';
      case 'purple':
        return 'bg-[#FAF5FF] text-[#9333EA] border-[#F3E8FF]';
      case 'cyan':
        return 'bg-[#ECFEFF] text-[#0891B2] border-[#CFFAFE]';
      case 'green':
        return 'bg-[#ECFDF5] text-[#16A34A] border-[#D1FAE5]';
      case 'rose':
        return 'bg-[#FFF1F2] text-[#E11D48] border-[#FFE4E6]';
      case 'amber':
        return 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]';
      case 'teal':
      default:
        return 'bg-[#F0FDFA] text-[#0D9488] border-[#CCFBF1]';
    }
  };

  return (
    <section
      id="common-prescriptions"
      aria-label="Common Prescriptions If Appropriate"
      className={`w-full bg-[#F8F9FA]/60 site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Header: Headline + Subheadline */}
        <div className="flex flex-col gap-1.5 text-left">
          <h2
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {activeConfig.headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            {activeConfig.subheadline}
          </p>
        </div>

        {/* 7-Pill Cards Responsive Grid (2 cols mobile, 4 tablet, 7 desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-3.5 w-full">
          {activeConfig.prescriptions.map((item) => (
            <Link
              key={item.id}
              href={item.href || '#'}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-4.5 border border-slate-200/80 hover:border-[#0E6C9B]/40 hover:shadow-xs transition-all duration-200 flex flex-col items-center justify-center text-center gap-2.5"
            >
              {/* Colored Circular Icon Badge */}
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-108 ${getThemeColorClass(
                  item.colorTheme
                )}`}
              >
                {renderPrescriptionIcon(item.iconName)}
              </div>

              {/* Prescription Category Title */}
              <span
                className="text-xs sm:text-[13px] font-semibold text-slate-800 group-hover:text-[#0E6C9B] transition-colors leading-tight line-clamp-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonPrescriptionsSection;
