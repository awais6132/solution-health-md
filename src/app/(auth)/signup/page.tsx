'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, Mail } from 'lucide-react';
import { siteConfig } from '@/constants/site';
import { ROUTES } from '@/constants/routes';
import { validateSignup, SignupInput } from '@/schemas/auth';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { PhoneInput } from '@/components/ui/phone-input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { SocialButton } from '@/components/ui/social-button';

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

    // Centralized Zod validation (Single Source of Truth)
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
    <div className="w-full max-w-[470px] px-2 sm:px-0">
      {/* Centered Glassmorphism Card with balanced top & bottom space */}
      <div className="w-full rounded-[20px] bg-white/85 backdrop-blur-xl border border-white/80 p-5 sm:p-5.5 shadow-xl shadow-slate-900/5 space-y-2.5 sm:space-y-3">
        {/* Solutions Health MD Logo Top Center */}
        <div className="flex justify-center">
          <Link href={ROUTES.HOME} className="inline-block transition-transform hover:scale-105">
            <Image
              src="/assets/images/logo.png"
              alt={siteConfig.name}
              width={180}
              height={52}
              priority
              quality={100}
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Header Title & Subtitle */}
        <div className="text-center space-y-0.5">
          <h1 className="text-lg sm:text-[21px] font-bold tracking-tight text-[#111111]">
            Create your Account
          </h1>
          <p className="text-[11px] sm:text-xs font-normal text-slate-600">
            Create an account to access features
          </p>
        </div>

        {/* Form Elements */}
        <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-2.5">
          {/* Row 1: First name & Last name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Input
              label="First name"
              id="first-name"
              placeholder="Enter your First name"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              leftIcon={<User className="h-3.5 w-3.5" />}
              error={errors.firstName}
              className="h-9 text-xs"
            />
            <Input
              label="Last name"
              id="last-name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              leftIcon={<User className="h-3.5 w-3.5" />}
              error={errors.lastName}
              className="h-9 text-xs"
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
              leftIcon={<Mail className="h-3.5 w-3.5" />}
              error={errors.email}
              className="h-9 text-xs"
            />
            <PhoneInput
              label="Phone Number"
              id="phone-number"
              countryCode="+001"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              error={errors.phone}
              className="h-9 text-xs"
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
              className="h-9 text-xs"
            />
            <PasswordInput
              label="Confirm Password"
              id="confirm-password"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              error={errors.confirmPassword}
              className="h-9 text-xs"
            />
          </div>

          {/* Terms & Privacy Checkbox */}
          <div className="pt-0.5">
            <Checkbox
              id="agree-terms"
              checked={formData.agreeTerms}
              onChange={(e) => handleChange('agreeTerms', e.target.checked)}
              label={
                <span className="text-[10.5px] text-slate-700">
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
              <p className="text-[11px] text-rose-500 mt-0.5 pl-5">{errors.agreeTerms}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-0.5">
            {/* Primary Sign Up Button (8px radius, #10669D) */}
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className="w-full h-9 sm:h-9.5 text-xs sm:text-sm font-semibold rounded-[8px] bg-[#10669D] hover:bg-[#0D5380] active:scale-[0.99] transition-transform shadow-xs"
            >
              {isSubmitting ? 'Creating account...' : 'Sign up'}
            </Button>

            {/* Social Google Signup Button (8px radius) */}
            <SocialButton provider="google" className="h-9 sm:h-9.5 text-xs">
              Signup with Google
            </SocialButton>
          </div>

          {/* Bottom Login Link */}
          <div className="text-center pt-0.5">
            <p className="text-[11px] sm:text-xs text-slate-700">
              Already have an account?{' '}
              <Link
                href={ROUTES.LOGIN}
                className="text-[#8DB92E] font-semibold hover:underline transition-colors"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
