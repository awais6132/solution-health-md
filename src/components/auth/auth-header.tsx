import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface AuthHeaderProps {
  /** Page title / heading (e.g. "OTP Verification", "Log in", "Create your Account") */
  title: string;
  /** Subheading / helper text description */
  subtitle?: React.ReactNode;
  /** Alignment: 'center' (default for Login/Signup/Forgot) or 'left' (for OTP) */
  align?: 'left' | 'center';
  /** Optional icon badge rendered above the title (e.g. Green Checkmark on Welcome screen) */
  icon?: React.ReactNode;
  /** Whether to show the top Solutions Health MD logo (default: true) */
  showLogo?: boolean;
  /** Custom class for title styling (e.g. text-[#10669D] for welcome title) */
  titleClassName?: string;
  /** Custom class for subtitle */
  subtitleClassName?: string;
  /** Additional container styling */
  className?: string;
  /** Heading HTML tag to render: 'h1' | 'h2' | 'h3' (default: 'h2') */
  as?: 'h1' | 'h2' | 'h3';
}

export function AuthHeader({
  title,
  subtitle,
  align = 'center',
  icon,
  showLogo = true,
  titleClassName,
  subtitleClassName,
  className,
  as: HeadingTag = 'h2',
}: AuthHeaderProps) {
  const isLeft = align === 'left';

  return (
    <div
      className={cn(
        'w-full flex flex-col',
        isLeft ? 'items-start text-left' : 'items-center text-center',
        className
      )}
    >
      {/* 1. Brand Logo */}
      {showLogo && (
        <div className={cn('mb-3 sm:mb-3.5', isLeft ? 'self-start' : 'self-center')}>
          <Image
            src="/assets/images/logo.png"
            alt="Solutions Health MD"
            width={240}
            height={64}
            priority
            quality={100}
            className="h-10 sm:h-11 w-auto object-contain select-none"
          />
        </div>
      )}

      {/* 2. Optional Icon Badge (e.g. Success Checkmark) */}
      {icon && <div className="mb-2">{icon}</div>}

      {/* 3. Heading */}
      <HeadingTag
        className={cn(
          'text-[26px] sm:text-[28px] font-semibold text-[#111111] tracking-normal leading-[34px] text-center font-sans',
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {/* 4. Subtitle */}
      {subtitle && (
        <p
          className={cn(
            'mt-1 pb-3 text-[14px] font-normal tracking-normal leading-[20px] text-[#000000] font-sans',
            isLeft ? 'max-w-md text-left' : 'max-w-sm text-center',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
