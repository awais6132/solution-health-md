import React from 'react';
import Link from 'next/link';
import {
  Wind,
  Thermometer,
  Eye,
  Activity,
  Sparkles,
  Droplet,
  Zap,
  ShieldAlert,
  Heart,
  Pill,
  Smile,
  EyeOff,
} from 'lucide-react';
import {
  ConditionsWeTreatGridProps,
  ConditionsWeTreatConfig,
  ConditionBadgeItem,
} from '@/types/urgent-care-page';
import { defaultConditionsWeTreatConfig } from '@/constants/urgent-care-page';

export const ConditionsWeTreatGrid: React.FC<ConditionsWeTreatGridProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: ConditionsWeTreatConfig = {
    ...defaultConditionsWeTreatConfig,
    ...config,
    conditions: config?.conditions || defaultConditionsWeTreatConfig.conditions,
  };

  // Helper to render the appropriate Lucide icon
  const renderConditionIcon = (iconName: ConditionBadgeItem['iconName']) => {
    const iconProps = { className: 'w-4 h-4 sm:w-4.5 sm:h-4.5', strokeWidth: 2 };
    switch (iconName) {
      case 'wind':
        return <Wind {...iconProps} />;
      case 'thermometer':
        return <Thermometer {...iconProps} />;
      case 'eye':
        return <Eye {...iconProps} />;
      case 'activity':
        return <Activity {...iconProps} />;
      case 'sparkles':
        return <Sparkles {...iconProps} />;
      case 'droplet':
        return <Droplet {...iconProps} />;
      case 'zap':
        return <Zap {...iconProps} />;
      case 'shield-alert':
        return <ShieldAlert {...iconProps} />;
      case 'heart':
        return <Heart {...iconProps} />;
      case 'pill':
        return <Pill {...iconProps} />;
      case 'smile':
        return <Smile {...iconProps} />;
      case 'eye-off':
        return <EyeOff {...iconProps} />;
      default:
        return <Activity {...iconProps} />;
    }
  };

  // Theme color styles for icon circle
  const getThemeColorClass = (colorTheme: ConditionBadgeItem['colorTheme'] = 'blue') => {
    switch (colorTheme) {
      case 'teal':
        return 'bg-[#F0FDFA] text-[#0D9488] border-[#CCFBF1]';
      case 'amber':
        return 'bg-[#FFFBEB] text-[#D97706] border-[#FEF3C7]';
      case 'rose':
        return 'bg-[#FFF1F2] text-[#E11D48] border-[#FFE4E6]';
      case 'green':
        return 'bg-[#ECFDF5] text-[#16A34A] border-[#D1FAE5]';
      case 'purple':
        return 'bg-[#FAF5FF] text-[#9333EA] border-[#F3E8FF]';
      case 'blue':
      default:
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]';
    }
  };

  return (
    <section
      id="conditions-we-treat"
      aria-label="Conditions We Treat Online"
      className={`w-full bg-[#F8F9FA]/60 site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-6 sm:gap-8">
        {/* Section Header: Eyebrow + Main Title + Subheadline */}
        <div className="flex flex-col gap-1.5 text-left">
          {activeConfig.eyebrow && (
            <span className="text-xs sm:text-[13px] font-bold text-[#0E6C9B] uppercase tracking-wider">
              {activeConfig.eyebrow}
            </span>
          )}
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

        {/* 6-Column Responsive Cards Grid (2 rows of 6 cards on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4 w-full">
          {activeConfig.conditions.map((item) => (
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
                {renderConditionIcon(item.iconName)}
              </div>

              {/* Condition Title */}
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

export default ConditionsWeTreatGrid;
