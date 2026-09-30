'use client';

import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import { ROUTES } from '@/constants/routes';
import { signupValidationSchema } from '@/schemas/auth';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
  AuthFooterLink,
} from '@/components/auth';
import {
  Input,
  PasswordInput,
  PhoneInput,
  Checkbox,
  UserAvatarIcon,
  EmailIcon,
} from '@/components/ui';

export default function SignUpPage() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Signup Form values:', values);
      setSubmitting(false);
    },
  });

  return (
    <AuthCard
      size="lg"
      variant="white"
      className="w-full max-w-[490px] xl:max-w-[526px] flex flex-col justify-between"
    >
      {/* 1. Header (Logo, Title, Subtitle) */}
      <AuthHeader
        title="Create your Account"
        subtitle="Create an account to access features"
        align="center"
        className="mb-0"
        showLogo={true}
      />

      {/* 2. Signup Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Row 1: First name & Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Input
              label="First name"
              id="first-name"
              name="firstName"
              placeholder="Enter your First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              leftIcon={<UserAvatarIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
              error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : undefined}
              className="h-9 text-xs bg-slate-50/80"
            />
            <Input
              label="Last name"
              id="last-name"
              name="lastName"
              placeholder="Enter your last name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              leftIcon={<UserAvatarIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
              error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : undefined}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
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
              className="h-9 text-xs bg-slate-50/80"
            />
            <PhoneInput
              label="Phone Number"
              id="phone-number"
              name="phone"
              countryCode="+001"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Row 3: Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <PasswordInput
              label="Password"
              id="password"
              name="password"
              placeholder="••••••••"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && formik.errors.password ? formik.errors.password : undefined}
              className="h-9 text-xs bg-slate-50/80"
            />
            <PasswordInput
              label="Confirm Password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : undefined}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Terms & Privacy Checkbox */}
          <div className="pt-0.5">
            <Checkbox
              id="agree-terms"
              name="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label={
                <span className="text-[11px] leading-[15px] font-normal tracking-normal text-slate-600">
                  Creating an account means you&apos;re okay with our{' '}
                  <Link
                    href={ROUTES.TERMS}
                    className="text-[#0F6AA0] font-medium hover:underline"
                  >
                    Terms of Services
                  </Link>{' '}
                  and{' '}
                  <Link
                    href={ROUTES.PRIVACY}
                    className="text-[#0F6AA0] font-medium hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              }
            />
            {formik.touched.agreeTerms && formik.errors.agreeTerms && (
              <p className="text-xs text-rose-500 mt-0.5">{formik.errors.agreeTerms}</p>
            )}
          </div>
        </div>

        {/* Action Buttons & Footer */}
        <div className="space-y-2 pt-1.5">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={formik.isSubmitting}
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Sign up
          </AuthButton>

          <AuthButton
            variant="google"
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Signup with Google
          </AuthButton>

          {/* Footer Link */}
          <AuthFooterLink
            text="Already have an account?"
            linkText="Login"
            href={ROUTES.LOGIN}
            linkColorClassName="text-[#7cb342] hover:text-[#689f38] hover:underline font-semibold"
            className="mt-1.5"
          />
        </div>
      </form>
    </AuthCard>
  );
}
