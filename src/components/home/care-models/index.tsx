import React from 'react';
import { CareModelCard } from './care-model-card';
import { defaultCareModels } from '@/constants/care-models';
import { CareModelsSectionProps } from '@/types/care-models';

export const CareModelsSection: React.FC<CareModelsSectionProps> = ({
  items = defaultCareModels,
  className = '',
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Care Delivery Options"
      className={`w-full bg-white pb-14 sm:pb-20 lg:pb-24 ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 lg:gap-8">
          {items.map((item) => (
            <CareModelCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareModelsSection;
export * from './care-model-card';
export * from './care-model-header';
export * from './care-model-features';
export * from './care-model-cta';
