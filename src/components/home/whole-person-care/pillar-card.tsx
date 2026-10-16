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
  const cardClasses = `flex-1 flex flex-col items-center justify-center text-center gap-3 min-h-[150px] p-[22.59px] rounded-[18.08px] bg-white/20 hover:bg-white/30 border border-white/30 backdrop-blur-sm transition-colors ${className}`;

  const CardContent = (
    <>
      {/* 1. White Circular Icon Badge */}
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
        <PillarIcon type={pillar.icon} color={pillar.iconColor} />
      </div>

      {/* 2. Pillar Title */}
      <h3
        className="text-sm font-bold text-white text-center leading-snug"
        style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
      >
        {pillar.title}
      </h3>
    </>
  );

  if (pillar.href) {
    return (
      <Link href={pillar.href} className={cardClasses}>
        {CardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{CardContent}</div>;
};
