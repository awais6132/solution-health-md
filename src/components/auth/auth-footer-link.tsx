import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface AuthFooterLinkProps {
  /** Leading text (e.g. "Don't have an account?" or "Forget it. Send me back to") */
  text: string;
  /** Action link text (e.g. "Sign up", "Sign in", "Resend") */
  linkText: string;
  /** Destination url or '#' for button action */
  href?: string;
  /** Optional onClick handler (useful for "Resend" OTP timer trigger) */
  onClick?: () => void;
  /** Custom action link color (default: health green) */
  linkColorClassName?: string;
  className?: string;
}

export function AuthFooterLink({
  text,
  linkText,
  href,
  onClick,
  linkColorClassName = 'text-[#4a9b44] hover:text-[#3c7f37] hover:underline font-semibold',
  className,
}: AuthFooterLinkProps) {
  return (
    <div
      className={cn(
        'mt-6 text-center text-[14px] leading-[20px] font-normal tracking-[-0.02em] text-slate-600 font-sans',
        className
      )}
    >
      <span>{text} </span>
      {href ? (
        <Link href={href} className={cn('transition-colors', linkColorClassName)}>
          {linkText}
        </Link>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={cn('transition-colors cursor-pointer', linkColorClassName)}
        >
          {linkText}
        </button>
      )}
    </div>
  );
}
