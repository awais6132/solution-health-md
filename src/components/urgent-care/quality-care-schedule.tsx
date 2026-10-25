import React from 'react';
import Image from 'next/image';
import { Clock, CalendarCheck, ShieldCheck, DollarSign } from 'lucide-react';
import {
  QualityCareScheduleProps,
  QualityCareScheduleConfig,
  QualityCareFeatureItem,
} from '@/types/urgent-care-page';
import { defaultQualityCareScheduleConfig } from '@/constants/urgent-care-page';

export const QualityCareSchedule: React.FC<QualityCareScheduleProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: QualityCareScheduleConfig = {
    ...defaultQualityCareScheduleConfig,
    ...config,
    features: config?.features || defaultQualityCareScheduleConfig.features,
  };

  // Helper to render the appropriate Lucide icon
  const renderFeatureIcon = (iconName: QualityCareFeatureItem['iconName']) => {
    const iconProps = { className: 'w-5 h-5', strokeWidth: 2 };
    switch (iconName) {
      case 'clock':
        return <Clock {...iconProps} />;
      case 'calendar':
        return <CalendarCheck {...iconProps} />;
      case 'shield':
        return <ShieldCheck {...iconProps} />;
      case 'dollar':
        return <DollarSign {...iconProps} />;
      default:
        return <Clock {...iconProps} />;
    }
  };

  // Theme color styles for feature icon circle
  const getThemeColorClass = (colorTheme: QualityCareFeatureItem['colorTheme'] = 'blue') => {
    switch (colorTheme) {
      case 'purple':
        return 'bg-[#FAF5FF] text-[#9333EA] border-[#F3E8FF]';
      case 'teal':
        return 'bg-[#F0FDFA] text-[#0D9488] border-[#CCFBF1]';
      case 'green':
        return 'bg-[#ECFDF5] text-[#16A34A] border-[#D1FAE5]';
      case 'blue':
      default:
        return 'bg-[#EFF6FF] text-[#2563EB] border-[#DBEAFE]';
    }
  };

  return (
    <section
      id="quality-care-schedule"
      aria-label="Quality Care, On your Schedule"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full">
        {/* Responsive 2-Column Split Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14 w-full">
          {/* Left Column: Doctor Virtual Consultation Photo */}
          <div className="w-full lg:w-[48%] relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-50">
            <Image
              src={activeConfig.imageSrc}
              alt={activeConfig.imageAlt || activeConfig.headline}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[center_top]"
            />
          </div>

          {/* Right Column: Title + Description + 4 Feature Badges */}
          <div className="w-full lg:w-[52%] flex flex-col gap-6 text-left">
            <div className="flex flex-col gap-3">
              <h2
                className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#0E6C9B] tracking-tight leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {activeConfig.headline}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                {activeConfig.description}
              </p>
            </div>

            {/* 4 Feature Badges Row (2 cols mobile, 4 cols desktop) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {activeConfig.features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border ${getThemeColorClass(
                      feature.colorTheme
                    )}`}
                  >
                    {renderFeatureIcon(feature.iconName)}
                  </div>
                  <span
                    className="text-xs sm:text-[13px] font-bold text-slate-800 leading-tight"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCareSchedule;
