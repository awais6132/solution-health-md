'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

export interface OtpInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
}

export function OtpInput({
  length = 6,
  value = '',
  onChange,
  error,
  disabled = false,
  className,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Keep array of digits synced with string value
  const digits = Array.from({ length }, (_, i) => value[i] || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const rawVal = e.target.value;
    const char = rawVal.slice(-1); // Take latest typed char

    if (char && !/^\d+$/.test(char)) return; // Only allow digits

    const newDigits = [...digits];
    newDigits[index] = char;
    const newValue = newDigits.join('');
    onChange(newValue);

    // Auto focus next input if digit entered
    if (char && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        // Current is empty, focus previous and clear it
        inputRefs.current[index - 1]?.focus();
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (!pastedData) return;

    // Filter only numbers
    const cleanNumbers = pastedData.replace(/\D/g, '').slice(0, length);
    onChange(cleanNumbers);

    // Focus on the last filled box or next empty
    const targetIdx = Math.min(cleanNumbers.length, length - 1);
    inputRefs.current[targetIdx]?.focus();
  };

  return (
    <div className={cn('w-full flex flex-col items-center', className)}>
      <div className="flex items-center justify-between gap-2 sm:gap-3 w-full">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digits[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            disabled={disabled}
            aria-label={`OTP Digit ${index + 1}`}
            className={cn(
              'w-11 h-13 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-semibold text-slate-800 bg-white border border-slate-200/90 rounded-xl shadow-xs transition-all duration-200 focus:outline-none focus:border-[#4a9b44] focus:ring-4 focus:ring-[#4a9b44]/15 disabled:opacity-50',
              error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/15' : ''
            )}
          />
        ))}
      </div>
      {error && <p className="text-xs text-rose-500 mt-2 text-left w-full">{error}</p>}
    </div>
  );
}
