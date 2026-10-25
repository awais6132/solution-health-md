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
      id="pricing"
      aria-label="Care Delivery Options"
      className={`w-full bg-white site-section px-0 scroll-mt-20 ${className}`}
    >
      <div className="w-full box-border site-container">
        {/* 2-Column Responsive Flex Row with exact gap and zero margins */}
        <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch">
          {items.map((item) => (
            <CareModelCard key={item.id} item={item} className="flex-1 w-full" />
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
