import React from 'react';
import { WholePersonCareConfig } from '@/types/whole-person-care';

interface CareTaglineProps {
  tagline: WholePersonCareConfig['tagline'];
  className?: string;
}

export const CareTagline: React.FC<CareTaglineProps> = ({ tagline, className = '' }) => {
  return (
    <div className={`flex flex-col items-start lg:items-end text-left lg:text-right justify-center ${className}`}>
      <div
        className="text-3xl sm:text-4xl lg:text-[42px] font-bold italic text-white/95 leading-[1.18] drop-shadow-sm select-none"
        style={{ fontFamily: 'var(--font-caveat), cursive, sans-serif' }}
      >
        <span className="block">{tagline.line1}</span>
        <span className="block mt-0.5">{tagline.line2}</span>
      </div>
    </div>
  );
};
