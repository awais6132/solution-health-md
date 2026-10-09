import React from 'react';
import { HeroTrustItem } from '@/types/hero';
import { Award, ShieldCheck, Pill, Video, Clock, CheckCircle2 } from 'lucide-react';

interface HeroTrustBarProps {
  items: HeroTrustItem[];
}

function TrustIcon({ name }: { name: HeroTrustItem['iconName'] }) {
  const iconClasses = 'h-4 w-4 shrink-0 text-cyan-600';

  switch (name) {
    case 'award':
      return <Award className={iconClasses} />;
    case 'shield':
      return <ShieldCheck className={iconClasses} />;
    case 'pill':
      return <Pill className={iconClasses} />;
    case 'video':
      return <Video className={iconClasses} />;
    case 'clock':
      return <Clock className={iconClasses} />;
    default:
      return <CheckCircle2 className={iconClasses} />;
  }
}

export function HeroTrustBar({ items }: HeroTrustBarProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full border-y border-slate-200/90 bg-white py-3.5 sm:py-4 shadow-2xs box-border">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] box-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center gap-2.5 justify-start ${
                index !== 0 ? 'md:border-l md:border-slate-200/80 md:pl-6 lg:pl-8' : ''
              }`}
            >
              <TrustIcon name={item.iconName} />
              <span className="text-xs sm:text-xs font-medium text-slate-700 leading-tight">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
