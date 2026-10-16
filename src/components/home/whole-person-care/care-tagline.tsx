import React from 'react';
import { WholePersonCareConfig } from '@/types/whole-person-care';

interface CareTaglineProps {
  tagline: WholePersonCareConfig['tagline'];
  className?: string;
}

export const CareTagline: React.FC<CareTaglineProps> = ({ tagline, className = '' }) => {
  return (
    <div className={`flex flex-col items-start lg:items-end justify-center ${className}`}>
      <div
        className="text-3xl sm:text-4xl font-bold italic text-white/95 leading-tight flex flex-col gap-1"
        style={{ fontFamily: 'var(--font-caveat), cursive, sans-serif' }}
      >
        <span>{tagline.line1}</span>
        <span>{tagline.line2}</span>
      </div>
    </div>
  );
};

