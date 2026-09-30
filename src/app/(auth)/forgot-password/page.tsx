'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { ROUTES } from '@/constants/routes';
import { forgotPasswordValidationSchema } from '@/schemas/auth';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
  AuthFooterLink,
} from '@/components/auth';
import {
  Input,
  EmailIcon,
} from '@/components/ui';

export default function ForgotPasswordPage() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Forgot Password values:', values);
      setTimeout(() => {
        setSubmitting(false);
        // Navigate to OTP Verification screen with email param
        router.push(`${ROUTES.VERIFY_OTP}?email=${encodeURIComponent(values.email)}`);
      }, 600);
    },
  });

  return (
    <AuthCard
      size="lg"
      variant="white"
      className="w-full max-w-[490px] xl:max-w-[526px] flex flex-col justify-between"
    >
      {/* 1. Header (Brand Logo, Title, Description) */}
      <AuthHeader
        title="Forgot Password"
        subtitle="Enter your email address to receive a 6-digit verification code"
        subtitleClassName="whitespace-normal sm:whitespace-nowrap"
        align="center"
        className="mb-0"
        showLogo={true}
      />

      {/* 2. OTP Send Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-3.5 flex-1 flex flex-col justify-between pt-2">
        <div className="space-y-3">
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            leftIcon={<EmailIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
            error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
            className="h-9.5 text-xs bg-slate-50/80"
            disabled={formik.isSubmitting}
            autoFocus
          />
        </div>

        {/* 3. Action Button */}
        <div className="pt-2">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={formik.isSubmitting}
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Send Recovery Email
          </AuthButton>
        </div>
      </form>

      {/* 4. Footer Link: Return to Sign In */}
      <AuthFooterLink
        text="Remember your password?"
        linkText="Sign in"
        href={ROUTES.LOGIN}
        linkColorClassName="text-[#7cb342] hover:text-[#689f38] hover:underline font-semibold"
        className="mt-2"
      />
    </AuthCard>
  );
}
