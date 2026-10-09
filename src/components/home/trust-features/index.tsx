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
      className={`w-full bg-[#F8F9FF] border-y-[1.13px] border-[#F1F5F9] py-6 sm:py-8 lg:py-[36px] box-border ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        {/* Mobile & Tablet: Modern 2-col/responsive grid of cards; Desktop: Exact horizontal flex row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row items-stretch lg:items-center justify-between gap-3 sm:gap-4 lg:gap-0 w-full">
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
