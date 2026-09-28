import React from 'react';
import { cn } from '@/lib/utils';

export interface AuthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Size width presets: 'sm' (max-w-sm), 'md' (max-w-md, default), 'lg' (max-w-[589px] / 2-col signup) */
  size?: 'sm' | 'md' | 'lg';
  /** Card background style: 'transparent' (seamless with page) or 'white' (elevated white card like signup) */
  variant?: 'transparent' | 'white';
  /** Card horizontal positioning on desktop: 'left' (default, left-aligned) or 'center' */
  align?: 'left' | 'center';
}

export function AuthCard({
  children,
  size = 'md',
  variant = 'transparent',
  align = 'left',
  className,
  ...props
}: AuthCardProps) {
  const sizeStyles = {
    sm: 'max-w-[380px]',
    md: 'max-w-[430px]',
    lg: 'w-full max-w-[490px] xl:max-w-[526px]',
  };

  const variantStyles = {
    transparent: 'bg-transparent',
    white: 'bg-[#f4f7f4]/95 backdrop-blur-md rounded-[24px] p-5 sm:p-6 lg:p-[28px] shadow-2xl shadow-slate-900/15 border border-white/80',
  };

  const alignStyles = {
    left: 'mx-auto lg:mx-0',
    center: 'mx-auto',
  };

  return (
    <div
      className={cn(
        'w-full flex flex-col',
        sizeStyles[size],
        variantStyles[variant],
        alignStyles[align],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
