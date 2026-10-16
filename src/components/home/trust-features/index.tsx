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
      style={{ minHeight: '120.56px' }}
      className={`w-full bg-[#F8F9FF] border-y-[1.13px] border-[#F1F5F9] min-h-[120.56px] flex items-center overflow-hidden px-0 box-border ${className}`}
    >
      <div className="marquee-container group w-full overflow-hidden flex select-none">
        {/* Track 1 */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center shrink-0">
          <div className="flex items-center gap-[60px] pr-[60px]">
            {items.map((item, index) => (
              <TrustFeatureItemComponent key={`track1-a-${item.id}-${index}`} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-[60px] pr-[60px]">
            {items.map((item, index) => (
              <TrustFeatureItemComponent key={`track1-b-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Track 2 (seamless continuation) */}
        <div className="animate-marquee group-hover:[animation-play-state:paused] flex items-center shrink-0" aria-hidden="true">
          <div className="flex items-center gap-[60px] pr-[60px]">
            {items.map((item, index) => (
              <TrustFeatureItemComponent key={`track2-a-${item.id}-${index}`} item={item} />
            ))}
          </div>
          <div className="flex items-center gap-[60px] pr-[60px]">
            {items.map((item, index) => (
              <TrustFeatureItemComponent key={`track2-b-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
export * from './trust-feature-item';
export * from './icons';
