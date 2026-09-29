'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { validateResetPassword, ResetPasswordInput } from '@/schemas/auth';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
  AuthFooterLink,
} from '@/components/auth';
import {
  PasswordInput,
  Checkbox,
} from '@/components/ui';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ResetPasswordInput>({
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof ResetPasswordInput, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateResetPassword(formData);

    if (!validation.success && validation.errors) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Password reset successfully! Please sign in with your new password.');
      router.push(ROUTES.LOGIN);
    }, 800);
  };

  return (
    <AuthCard
      size="lg"
      variant="white"
      className="w-full max-w-[490px] xl:max-w-[526px] flex flex-col justify-between"
    >
      {/* 1. Brand Logo & Title */}
      <AuthHeader
        title="Create New Password"
        subtitle="Enter your password to unlock the screen"
        subtitleClassName="whitespace-normal sm:whitespace-nowrap"
        align="center"
        className="mb-0"
        showLogo={true}
      />

      {/* 2. Reset Password Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between pt-2">
        <div className="space-y-3">
          {/* Password Field */}
          <PasswordInput
            label="Password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
            className="h-9.5 text-xs bg-slate-50/80"
            disabled={isSubmitting}
            autoFocus
          />

          {/* Confirm Password Field */}
          <PasswordInput
            label="Confirm Password"
            id="confirm-password"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            error={errors.confirmPassword}
            className="h-9.5 text-xs bg-slate-50/80"
            disabled={isSubmitting}
          />

          {/* Terms & Conditions Checkbox */}
          <div className="pt-0.5">
            <Checkbox
              id="agree-terms"
              checked={formData.agreeTerms}
              onChange={(e) => handleChange('agreeTerms', e.target.checked)}
              label={
                <span className="text-[12px] font-normal text-slate-700 select-none">
                  You accept our Terms & Conditions
                </span>
              }
            />
            {errors.agreeTerms && (
              <p className="text-xs text-rose-500 mt-1">{errors.agreeTerms}</p>
            )}
          </div>
        </div>

        {/* 3. Submit Action Button */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Reset Password
          </AuthButton>
        </div>
      </form>

      {/* 4. Footer Link */}
      <AuthFooterLink
        text="Not now? Return"
        linkText="Sign in"
        href={ROUTES.LOGIN}
        linkColorClassName="text-[#7cb342] hover:text-[#689f38] hover:underline font-semibold"
        className="mt-2"
      />
    </AuthCard>
  );
}
