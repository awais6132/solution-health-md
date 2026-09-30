'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { ROUTES } from '@/constants/routes';
import { resetPasswordValidationSchema } from '@/schemas/auth';
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

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Reset Password values:', values);
      setTimeout(() => {
        setSubmitting(false);
        alert('Password reset successfully! Please sign in with your new password.');
        router.push(ROUTES.LOGIN);
      }, 800);
    },
  });

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
      <form onSubmit={formik.handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between pt-2">
        <div className="space-y-3">
          {/* Password Field */}
          <PasswordInput
            label="Password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
            className="h-9.5 text-xs bg-slate-50/80"
            disabled={formik.isSubmitting}
            autoFocus
          />

          {/* Confirm Password Field */}
          <PasswordInput
            label="Confirm Password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : undefined}
            className="h-9.5 text-xs bg-slate-50/80"
            disabled={formik.isSubmitting}
          />

          {/* Terms & Conditions Checkbox */}
          <div className="pt-0.5">
            <Checkbox
              id="agree-terms"
              name="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={
                <span className="text-[12px] font-normal text-slate-700 select-none">
                  You accept our Terms & Conditions
                </span>
              }
            />
            {formik.touched.agreeTerms && formik.errors.agreeTerms && (
              <p className="text-xs text-rose-500 mt-1">{formik.errors.agreeTerms}</p>
            )}
          </div>
        </div>

        {/* 3. Submit Action Button */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={formik.isSubmitting}
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
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
