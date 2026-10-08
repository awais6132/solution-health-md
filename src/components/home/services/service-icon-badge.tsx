import React from 'react';
import Image from 'next/image';
import {
  FlaskConical,
  Stethoscope,
  Zap,
  Moon,
  Lightbulb,
  Heart,
  Compass,
  Activity,
} from 'lucide-react';
import { ServiceItem } from '@/types/services';

interface ServiceIconBadgeProps {
  item: ServiceItem;
}

export const ServiceIconBadge: React.FC<ServiceIconBadgeProps> = ({ item }) => {
  const { iconSvg, iconSrc, iconName, iconColor = 'text-cyan-600', badgeBg = 'bg-white' } = item;

  // If no icon is provided (e.g. Card 1 in some designs), return null
  if (!iconSvg && !iconSrc && !iconName) {
    return null;
  }

  const renderIcon = () => {
    if (iconSvg) {
      return <div className={`shrink-0 ${iconColor}`}>{iconSvg}</div>;
    }

    if (iconSrc) {
      return (
        <div className="relative w-4 h-4 shrink-0">
          <Image src={iconSrc} alt="" fill className="object-contain" />
        </div>
      );
    }

    const iconClasses = `w-4 h-4 shrink-0 ${iconColor}`;

    switch (iconName) {
      case 'male':
        return (
          <span className={`text-[15px] font-bold leading-none ${iconColor}`}>
            ♂
          </span>
        );
      case 'female':
        return (
          <span className={`text-[15px] font-bold leading-none ${iconColor}`}>
            ♀
          </span>
        );
      case 'flask':
        return <FlaskConical className={iconClasses} strokeWidth={2.2} />;
      case 'stethoscope':
        return <Stethoscope className={iconClasses} strokeWidth={2.2} />;
      case 'zap':
        return <Zap className={iconClasses} strokeWidth={2.2} />;
      case 'moon':
        return <Moon className={iconClasses} strokeWidth={2.2} />;
      case 'lightbulb':
        return <Lightbulb className={iconClasses} strokeWidth={2.2} />;
      case 'heart':
        return <Heart className={iconClasses} strokeWidth={2.2} />;
      case 'compass':
        return <Compass className={iconClasses} strokeWidth={2.2} />;
      default:
        return <Activity className={iconClasses} strokeWidth={2.2} />;
    }
  };

  return (
    <div
      className={`absolute bottom-3 left-3 w-8 h-8 rounded-full ${badgeBg} shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center shrink-0 z-10 transition-transform duration-300 group-hover:scale-110`}
    >
      {renderIcon()}
    </div>
  );
};
