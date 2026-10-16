import React from 'react';
import Image from 'next/image';
import { TrustFeatureItem } from '@/types/trust-features';
import {
  ShieldProviderIcon,
  HipaaLockIcon,
  PharmacyDeliveryIcon,
  VideoVisitsIcon,
} from './icons';

interface TrustFeatureItemProps {
  item: TrustFeatureItem;
}

export const TrustFeatureItemComponent: React.FC<TrustFeatureItemProps> = ({ item }) => {
  const { title, line1, line2, iconName, iconSrc, iconSvg } = item;

  // Render Icon (Priority: Custom SVG component > Custom Image path > Exact SVG matching iconName)
  const renderIcon = () => {
    if (iconSvg) {
      return (
        <div className="w-[46px] h-[46px] shrink-0 flex items-center justify-center">
          {iconSvg}
        </div>
      );
    }

    if (iconSrc) {
      return (
        <div className="relative w-[46px] h-[46px] shrink-0 flex items-center justify-center">
          <Image src={iconSrc} alt={title} fill className="object-contain" />
        </div>
      );
    }

    switch (iconName) {
      case 'shield':
        return <ShieldProviderIcon className="w-[46px] h-[46px] shrink-0 block" />;
      case 'lock':
      case 'security':
        return <HipaaLockIcon className="w-[46px] h-[46px] shrink-0 block" />;
      case 'prescription':
      case 'pill':
        return <PharmacyDeliveryIcon className="w-[46px] h-[46px] shrink-0 block" />;
      case 'video':
        return <VideoVisitsIcon className="w-[46px] h-[46px] shrink-0 block" />;
      default:
        return <ShieldProviderIcon className="w-[46px] h-[46px] shrink-0 block" />;
    }
  };

  return (
    <div className="flex items-center gap-3 shrink-0 select-none">
      {/* 46x46 SVG Icon Badge (Vertically and horizontally centered) */}
      <div className="w-[46px] h-[46px] shrink-0 flex items-center justify-center">
        {renderIcon()}
      </div>

      {/* Feature Title (1 or 2 lines flex column vertically centered with the icon) */}
      <div className="flex flex-col justify-center text-left leading-[1.28]">
        {line1 && line2 ? (
          <>
            <span className="font-semibold text-[13px] sm:text-[13.5px] text-[#0F172A] whitespace-nowrap">
              {line1}
            </span>
            <span className="font-semibold text-[13px] sm:text-[13.5px] text-[#0F172A] whitespace-nowrap">
              {line2}
            </span>
          </>
        ) : (
          <span className="font-semibold text-[13px] sm:text-[13.5px] text-[#0F172A] whitespace-nowrap">
            {line1 || title}
          </span>
        )}
      </div>
    </div>
  );
};

export default TrustFeatureItemComponent;
