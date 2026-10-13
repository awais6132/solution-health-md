import React from 'react';
import { HeroBadgeConfig } from '@/types/hero';

interface HeroBadgeProps {
  badge: HeroBadgeConfig;
  accentColor?: string;
}

export function HeroBadge({ badge, accentColor = '#4B9B44' }: HeroBadgeProps) {
  if (!badge.text) return null;

  return (
    <div
      style={{
        backgroundColor: `${accentColor}15`,
        borderColor: `${accentColor}40`,
      }}
      className="inline-flex items-center gap-2 select-none px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border shadow-2xs transition-all duration-500"
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span
          style={{ backgroundColor: accentColor }}
          className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
        />
        <span
          style={{ backgroundColor: accentColor }}
          className="relative inline-flex rounded-full h-2 w-2"
        />
      </span>
      <span
        style={{
          color: accentColor,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '16px',
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          transition: 'color 0.5s ease',
        }}
        className="shrink-0 font-bold"
      >
        {badge.text}
      </span>
    </div>
  );
}

export default HeroBadge;
