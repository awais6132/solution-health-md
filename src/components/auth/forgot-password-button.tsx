import React from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/lib/utils';

export interface ForgotPasswordButtonProps {
  /** Text to display, defaults to "Forgot Password?" */
  text?: string;
  /** Destination url, defaults to ROUTES.FORGOT_PASSWORD ('/forgot-password') */
  href?: string;
  /** Optional click handler if triggering a modal or custom action */
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Additional custom class names */
  className?: string;
}

export function ForgotPasswordButton({
  text = 'Forgot Password?',
  href = ROUTES.FORGOT_PASSWORD,
  onClick,
  className,
}: ForgotPasswordButtonProps) {
  const baseClasses = cn(
    'text-[12px] font-medium text-[#0F6AA0] hover:text-[#0b5480] hover:underline transition-colors select-none inline-flex items-center cursor-pointer',
    className
  );

  if (onClick && !href) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={baseClasses}
      >
        {text}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={baseClasses}
    >
      {text}
    </Link>
  );
}
