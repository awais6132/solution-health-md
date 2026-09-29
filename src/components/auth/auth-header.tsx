import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface AuthHeaderProps {
  /** Page title / heading (e.g. "OTP Code Send To:", "Log in", "Create your Account") */
  title: string;
  /** Subheading / helper text description */
  subtitle?: React.ReactNode;
  /** Alignment: 'left' or 'center' (controls heading, subtitle, and text alignment) */
  align?: 'left' | 'center';
  /** Logo Alignment: 'center' (default) or 'left' */
  logoAlign?: 'left' | 'center';
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
  logoAlign = 'center',
  icon,
  showLogo = true,
  titleClassName,
  subtitleClassName,
  className,
  as: HeadingTag = 'h2',
}: AuthHeaderProps) {
  const isLeft = align === 'left';
  const isLogoLeft = logoAlign === 'left';

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
        <div className={cn('mb-4 sm:mb-5', isLogoLeft ? 'self-start' : 'self-center')}>
          <Image
            src="/assets/images/logo.png"
            alt="Solutions Health MD"
            width={240}
            height={64}
            priority
            quality={100}
            className="h-10 sm:h-12 w-auto object-contain select-none"
          />
        </div>
      )}

      {/* 2. Optional Icon Badge (e.g. Success Checkmark) */}
      {icon && <div className="mb-2">{icon}</div>}

      {/* 3. Heading (Ternary Operator for Left vs Center Alignment) */}
      <HeadingTag
        className={cn(
          'text-[24px] sm:text-[28px] font-bold text-[#111111] tracking-tight leading-[32px] sm:leading-[36px] font-sans',
          isLeft ? 'text-left self-start w-full' : 'text-center self-center w-full',
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {/* 4. Subtitle / Text Area (Ternary Operator for Left vs Center Alignment) */}
      {subtitle && (
        <p
          className={cn(
            'mt-1.5 pb-2 text-[14px] font-normal tracking-normal leading-[20px] text-[#444444] font-sans',
            isLeft ? 'text-left self-start w-full' : 'text-center self-center w-full',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
