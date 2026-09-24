import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'highlight' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-[#10669D] hover:bg-[#0D5380] active:bg-[#0B456B] text-white focus:ring-[#10669D] shadow-xs',
      secondary:
        'bg-[#4a9b44] hover:bg-[#3c7f37] text-white focus:ring-[#4a9b44] shadow-xs',
      accent:
        'bg-[#f9ac2c] hover:bg-[#df9419] text-slate-900 font-semibold focus:ring-[#f9ac2c] shadow-xs',
      highlight:
        'bg-[#8DB92E] hover:bg-[#7ba327] text-slate-900 font-semibold focus:ring-[#8DB92E] shadow-xs',
      outline:
        'border border-[#E5E9F2] bg-white hover:bg-[#F8FAFC] text-[#111111] focus:ring-[#10669D]',
      ghost:
        'bg-transparent hover:bg-slate-100 text-[#111111] focus:ring-[#10669D]',
      danger:
        'bg-rose-600 hover:bg-rose-700 text-white focus:ring-rose-500 shadow-xs',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
      md: 'text-sm px-4 py-2.5 h-11 gap-2',
      lg: 'text-base px-6 py-3 h-12 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
