import React from 'react';
import { defaultTrustFeatures } from '@/constants/trust-features';
import { TrustFeatureItem } from '@/types/trust-features';
import { TrustFeatureItemComponent } from './trust-feature-item';

export interface TrustFeaturesProps {
  /** Optional custom items to override defaults */
  items?: TrustFeatureItem[];
  /** Optional container class name */
  className?: string;
}

export const TrustFeatures: React.FC<TrustFeaturesProps> = ({
  items = defaultTrustFeatures,
  className = '',
}) => {
  if (!items || items.length === 0) return null;

  return (
    <section
      aria-label="Trust & Medical Service Highlights"
      className={`w-full bg-[#F8F9FF] border-y-[1.13px] border-[#F1F5F9] py-[36px] px-4 sm:px-6 lg:px-[36.15px] ${className}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
          {items.map((item) => (
            <TrustFeatureItemComponent key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
export * from './trust-feature-item';
export * from './icons';
