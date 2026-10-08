import React from 'react';
import Link from 'next/link';
import { Scale, Zap, Activity, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { WellnessPillarItem, PillarIconType } from '@/types/whole-person-care';

interface PillarCardProps {
  pillar: WellnessPillarItem;
  className?: string;
}

function PillarIcon({ type, color }: { type: PillarIconType; color: string }) {
  const iconProps = {
    className: 'w-5 h-5',
    style: { color },
    strokeWidth: 2.2,
  };

  switch (type) {
    case 'scale':
      return <Scale {...iconProps} />;
    case 'zap':
      return <Zap {...iconProps} />;
    case 'dna':
      return <Activity {...iconProps} />;
    case 'lightbulb':
      return <Lightbulb {...iconProps} />;
    case 'shield':
      return <ShieldCheck {...iconProps} />;
    case 'sparkles':
      return <Sparkles {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, className = '' }) => {
  const CardContent = (
    <div
      className={`group relative flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-[22px] sm:rounded-[26px] transition-all duration-300 backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.22)] hover:-translate-y-1 select-none min-h-[140px] sm:min-h-[160px] w-full ${className}`}
    >
      {/* 1. White Circular Icon Badge */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 shrink-0">
        <PillarIcon type={pillar.icon} color={pillar.iconColor} />
      </div>

      {/* 2. Pillar Title */}
      <h3
        className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-snug drop-shadow-xs"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
      >
        {pillar.title}
      </h3>
    </div>
  );

  if (pillar.href) {
    return (
      <Link href={pillar.href} className="block w-full focus:outline-none">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
};
