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
  const { title, iconName, iconSrc, iconSvg } = item;

  // Render Icon (Priority: Custom SVG component > Custom Image path > Exact SVG matching iconName)
  const renderIcon = () => {
    if (iconSvg) {
      return <div className="shrink-0">{iconSvg}</div>;
    }

    if (iconSrc) {
      return (
        <div className="relative w-[46px] h-[46px] shrink-0">
          <Image src={iconSrc} alt={title} fill className="object-contain" />
        </div>
      );
    }

    switch (iconName) {
      case 'shield':
        return <ShieldProviderIcon className="w-[46px] h-[46px] shrink-0" />;
      case 'lock':
      case 'security':
        return <HipaaLockIcon className="w-[46px] h-[46px] shrink-0" />;
      case 'prescription':
      case 'pill':
        return <PharmacyDeliveryIcon className="w-[46px] h-[46px] shrink-0" />;
      case 'video':
        return <VideoVisitsIcon className="w-[46px] h-[46px] shrink-0" />;
      default:
        return <ShieldProviderIcon className="w-[46px] h-[46px] shrink-0" />;
    }
  };

  return (
    <div className="group flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all duration-300 lg:p-0 lg:bg-transparent lg:border-none lg:shadow-none lg:shrink-0 cursor-default">
      {/* 46x46 SVG Icon Badge */}
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
        {renderIcon()}
      </div>

      {/* Feature Title (13px Semi-Bold) */}
      <span className="font-semibold text-[13.5px] sm:text-[13px] leading-[19px] tracking-[0px] text-[#0F172A] max-w-[220px] lg:max-w-[190px]">
        {title}
      </span>
    </div>
  );
};

export default TrustFeatureItemComponent;
