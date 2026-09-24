'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, checked, ...props }, ref) => {
    const inputId = id || 'custom-checkbox';

    return (
      <label
        htmlFor={inputId}
        className={cn('inline-flex items-center gap-2.5 cursor-pointer select-none text-xs text-[#111111]', className)}
      >
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            id={inputId}
            ref={ref}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <div className="h-4 w-4 rounded-[4px] border border-[#cbd5e1] bg-white transition-all peer-checked:bg-[#10669D] peer-checked:border-[#10669D] peer-focus-visible:ring-2 peer-focus-visible:ring-[#10669D]/20" />
          <Check className="absolute h-3 w-3 text-white stroke-[3] opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none" />
        </div>
        {label && <span className="leading-snug">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
