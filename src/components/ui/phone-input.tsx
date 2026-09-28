'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { PhoneFlagIcon } from './icons';

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
            className="block text-[14px] leading-[20px] font-medium tracking-normal text-[#111111]"
          >
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none text-[#111111]">
            <PhoneFlagIcon className="w-[40px] h-[24px] rounded-[22.8px] opacity-100 shrink-0" />
            {countryCode && <span className="text-xs font-medium text-slate-700">{countryCode}</span>}
          </div>
          <input
            id={inputId}
            type="tel"
            ref={ref}
            className={cn(
              'w-full h-11 pl-[92px] pr-3.5 bg-[#F5F8FF] border border-[#E5E9F2] rounded-[8px] text-sm text-[#111111] placeholder:text-[#B4B9C4] transition-all duration-200 focus:outline-none focus:border-[#10669D] focus:ring-2 focus:ring-[#10669D]/15 focus:bg-white',
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
