import React from 'react';
import { HeroBadgeConfig } from '@/types/hero';

interface HeroBadgeProps {
  badge: HeroBadgeConfig;
}

export function HeroBadge({ badge }: HeroBadgeProps) {
  if (!badge.text) return null;

  return (
    <div className="inline-flex items-center gap-2 select-none px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#ECFDF5] border border-[#4B9B44]/30 shadow-2xs transition-all">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B9B44] opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B9B44]" />
      </span>
      <span
        style={{
          color: '#4B9B44',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
        }}
        className="shrink-0 font-bold"
      >
        {badge.text}
      </span>
    </div>
  );
}

export default HeroBadge;
