import React from 'react';
import { HeroBadgeConfig } from '@/types/hero';

interface HeroBadgeProps {
  badge: HeroBadgeConfig;
}

export function HeroBadge({ badge }: HeroBadgeProps) {
  if (!badge.text) return null;

  return (
    <div
      className="inline-flex items-center justify-center select-none"
      style={{
        backgroundColor: '#ECFDF5',
        borderRadius: '11295.75px',
        paddingTop: '4.52px',
        paddingBottom: '4.52px',
        paddingLeft: '13.56px',
        paddingRight: '13.56px',
        color: '#4B9B44',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '13.56px',
        lineHeight: '18.08px',
        letterSpacing: '1.36px',
        verticalAlign: 'middle',
        textTransform: 'uppercase',
      }}
    >
      {badge.text}
    </div>
  );
}
