import React from 'react';
import { Check } from 'lucide-react';
import { AppFeatureItem } from '@/types/app-showcase';

interface AppFeaturesProps {
  features: AppFeatureItem[];
  tagline: {
    line1: string;
    line2: string;
  };
  className?: string;
}

export const AppFeatures: React.FC<AppFeaturesProps> = ({
  features,
  tagline,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-start justify-center space-y-7 max-w-sm ${className}`}>
      {/* 1. Feature Checklist */}
      <ul className="flex flex-col space-y-3.5 sm:space-y-4">
        {features.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            {/* Green Circular Check Badge */}
            <div className="w-5 h-5 rounded-full bg-[#8DB92E] flex items-center justify-center shrink-0 shadow-xs">
              <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
            </div>
            <span
              className="text-[15px] sm:text-base font-semibold text-[#1E293B] tracking-tight"
              style={{ fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif' }}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* 2. Cursive Script Tagline with Custom Hand-drawn Brush Underline */}
      <div className="pt-3">
        <div
          className="text-2xl sm:text-[28px] font-bold italic text-[#4B9B44] leading-tight"
          style={{ fontFamily: 'var(--font-caveat), cursive, sans-serif' }}
        >
          <span className="block">{tagline.line1}</span>
          <span className="block relative inline-block">
            {tagline.line2}
            {/* Hand-drawn Green Underline Stroke */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-[#4B9B44] overflow-hidden"
              viewBox="0 0 160 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 7C45 4 115 3 158 8"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
