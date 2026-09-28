'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { validateSignup, SignupInput } from '@/schemas/auth';
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
  const [formData, setFormData] = useState<SignupInput>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof SignupInput, value: string | boolean) => {
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

    // Centralized Zod validation
    const validation = validateSignup(formData);

    if (!validation.success && validation.errors) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert('Account created successfully!');
      setIsSubmitting(false);
    }, 800);
  };

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
      <form onSubmit={handleSubmit} className="space-y-2.5 flex-1 flex flex-col justify-between">
        <div className="space-y-2.5">
          {/* Row 1: First name & Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Input
              label="First name"
              id="first-name"
              placeholder="Enter your First name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              leftIcon={<UserAvatarIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
              error={errors.firstName}
              className="h-9 text-xs bg-slate-50/80"
            />
            <Input
              label="Last name"
              id="last-name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              leftIcon={<UserAvatarIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
              error={errors.lastName}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Input
              label="Email"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              leftIcon={<EmailIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
              error={errors.email}
              className="h-9 text-xs bg-slate-50/80"
            />
            <PhoneInput
              label="Phone Number"
              id="phone-number"
              countryCode="+001"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Row 3: Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <PasswordInput
              label="Password"
              id="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              error={errors.password}
              className="h-9 text-xs bg-slate-50/80"
            />
            <PasswordInput
              label="Confirm Password"
              id="confirm-password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
              className="h-9 text-xs bg-slate-50/80"
            />
          </div>

          {/* Terms & Privacy Checkbox */}
          <div className="pt-0.5">
            <Checkbox
              id="agree-terms"
              checked={formData.agreeTerms}
              onChange={(e) => handleChange('agreeTerms', e.target.checked)}
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
            {errors.agreeTerms && (
              <p className="text-xs text-rose-500 mt-0.5">{errors.agreeTerms}</p>
            )}
          </div>
        </div>

        {/* Action Buttons & Footer */}
        <div className="space-y-2 pt-1.5">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
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
