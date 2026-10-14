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
      className={`w-full bg-white ${className}`}
    >
      <div className="w-full box-border">
        {/* 2-Column Responsive Flex Row without grid and without gap */}
        <div className="flex flex-col lg:flex-row w-full items-stretch">
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
