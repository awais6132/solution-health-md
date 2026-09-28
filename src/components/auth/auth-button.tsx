import React from 'react';
import { cn } from '@/lib/utils';
import { SocialButton } from '@/components/ui/social-button';

export interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant:
   * - 'primary': Deep Medical Blue (#10669D) -> Used for Log In, Sign Up, Recovery Email
   * - 'success': Health Green (#4a9b44) -> Used for Verify OTP, Welcome/Account confirmation
   * - 'google': Google OAuth button with official Google Icon
   * - 'outline': White button with slate border
   */
  variant?: 'primary' | 'success' | 'google' | 'outline';
  isLoading?: boolean;
}

export const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ className, variant = 'primary', isLoading = false, children, disabled, ...props }, ref) => {
    // If variant is google, render the specialized SocialButton
    if (variant === 'google') {
      return (
        <SocialButton
          ref={ref}
          disabled={disabled || isLoading}
          className={className}
          {...props}
        >
          {children || 'Signup with Google'}
        </SocialButton>
      );
    }

    const baseStyles =
      'w-full h-11 inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none cursor-pointer shadow-xs text-sm sm:text-base';

    const variants = {
      primary:
        'bg-[#10669D] hover:bg-[#0D5380] active:bg-[#0B456B] text-white focus:ring-[#10669D]',
      success:
        'bg-[#4a9b44] hover:bg-[#3c7f37] active:bg-[#32692e] text-white focus:ring-[#4a9b44]',
      outline:
        'border border-[#E5E9F2] bg-white hover:bg-[#F8FAFC] text-[#111111] focus:ring-slate-300',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Processing...</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

AuthButton.displayName = 'AuthButton';
