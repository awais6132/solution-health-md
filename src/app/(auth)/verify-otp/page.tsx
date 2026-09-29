'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { validateVerifyOtp, VerifyOtpInput } from '@/schemas/auth';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
  AuthFooterLink,
} from '@/components/auth';
import { OtpInput } from '@/components/ui';

function VerifyOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || 'your email';

  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | undefined>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendTimer, setResendTimer] = useState(59);
  const [resendSuccess, setResendSuccess] = useState(false);

  // Countdown timer for resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleOtpChange = (val: string) => {
    setOtp(val);
    if (error) setError(undefined);
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setResendTimer(59);
    setResendSuccess(true);
    setTimeout(() => setResendSuccess(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateVerifyOtp({ otp });

    if (!validation.success && validation.errors) {
      setError(validation.errors.otp);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('OTP verified successfully!');
      router.push(ROUTES.RESET_PASSWORD);
    }, 800);
  };

  const formattedTimer = `00:${resendTimer < 10 ? `0${resendTimer}` : resendTimer}`;

  return (
    <AuthCard
      size="lg"
      variant="white"
      className="w-full max-w-[500px] sm:max-w-[520px] lg:max-w-[540px] xl:max-w-[560px] flex flex-col justify-between"
    >
      {/* 1. Header with brand logo & context subtitle */}
      <AuthHeader
        title="OTP Code Send To:"
        subtitle={
          <span>
            We have sent an OTP code to your <span className="font-semibold text-slate-800">{emailParam}</span> Please verify.
          </span>
        }
        subtitleClassName="whitespace-normal sm:whitespace-nowrap"
        align="left"
        logoAlign="center"
        className="mb-3"
        showLogo={true}
      />

      {/* 2. OTP Form */}
      <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between mt-2">
        <div className="space-y-4">
          <OtpInput
            length={6}
            value={otp}
            onChange={handleOtpChange}
            error={error}
            disabled={isSubmitting}
          />

          {/* Resend notification / timer */}
          <div className="flex flex-col items-center justify-center text-xs space-y-1">
            {resendSuccess && (
              <p className="text-[#4a9b44] font-medium text-xs">
                A new verification code has been sent!
              </p>
            )}
            <div className="text-slate-500 flex items-center gap-1.5 font-sans">
              <span>Didn&apos;t receive the code?</span>
              {resendTimer > 0 ? (
                <span className="font-semibold text-slate-700">Resend in {formattedTimer}</span>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="font-semibold text-[#10669D] hover:underline cursor-pointer transition-colors"
                >
                  Resend Code
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 3. Action Buttons */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="success"
            isLoading={isSubmitting}
            disabled={isSubmitting || otp.length < 6}
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Verify
          </AuthButton>
        </div>
      </form>

      {/* 4. Footer navigation */}
      <AuthFooterLink
        text="Need to use a different address?"
        linkText="Change Email"
        href={ROUTES.FORGOT_PASSWORD}
        linkColorClassName="text-[#7cb342] hover:text-[#689f38] hover:underline font-semibold"
        className="mt-2"
      />
    </AuthCard>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div className="text-white text-center py-8">Loading...</div>}>
      <VerifyOtpForm />
    </Suspense>
  );
}
