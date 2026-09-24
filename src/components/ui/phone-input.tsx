'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  countryCode?: string;
  error?: string;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, label = 'Phone Number', countryCode = '+001', error, id, ...props }, ref) => {
    const inputId = id || 'phone-number';

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-[#111111] tracking-tight"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <div className="absolute left-3 flex items-center gap-1.5 pl-0.5 pointer-events-none text-[#111111]">
            {/* US Flag SVG Icon */}
            <svg
              className="h-3.5 w-5 rounded-xs shadow-xs"
              viewBox="0 0 640 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fillRule="evenodd">
                <path fill="#bd3d44" d="M0 0h640v480H0z" />
                <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203.1h640M0 277h640M0 350.8h640M0 424.6h640" />
                <path fill="#192f5d" d="M0 0h295.4v258.5H0z" />
                <marker id="a" markerHeight="30" markerWidth="30">
                  <path fill="#fff" d="m14 0 9 27-23-17h28L5 27z" />
                </marker>
                <path
                  fill="#fff"
                  d="M20 20h255.4v218.5H20z"
                  opacity="0.1"
                />
              </g>
            </svg>
            <span className="text-xs font-medium text-slate-700">{countryCode}</span>
          </div>
          <input
            id={inputId}
            type="tel"
            ref={ref}
            className={cn(
              'w-full h-11 pl-20 pr-3.5 bg-[#F5F8FF] border border-[#E5E9F2] rounded-[8px] text-sm text-[#111111] placeholder:text-[#B4B9C4] transition-all duration-200 focus:outline-none focus:border-[#10669D] focus:ring-2 focus:ring-[#10669D]/15 focus:bg-white',
              error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/15' : '',
              className
            )}
            placeholder="000 000 0000"
            {...props}
          />
        </div>
        {error && <p className="text-xs text-rose-500 mt-1">{error}</p>}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
