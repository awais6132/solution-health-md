import React from 'react';
import { cn } from '@/lib/utils';

export interface AuthDividerProps {
  text?: string;
  className?: string;
}

export function AuthDivider({ text = 'Or', className }: AuthDividerProps) {
  return (
    <div className={cn('relative my-5 flex items-center justify-center', className)}>
      <div className="w-full border-t border-slate-200" />
      <span className="absolute bg-[#f0f5fa] px-3 text-xs font-medium text-slate-500 uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
}
