'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { validateLogin, LoginInput } from '@/schemas/auth';
import {
  AuthCard,
  AuthHeader,
  AuthButton,
  AuthFooterLink,
  ForgotPasswordButton,
} from '@/components/auth';
import {
  Input,
  PasswordInput,
  Checkbox,
  EmailIcon,
} from '@/components/ui';

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginInput>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof LoginInput, value: string | boolean) => {
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

    const validation = validateLogin(formData);

    if (!validation.success && validation.errors) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert('Logged in successfully!');
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
        title="Welcome Back"
        subtitle="Please enter your details to sign in"
        align="center"
        className="mb-0"
        showLogo={true}
      />

      {/* 2. Login Form */}
      <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col justify-between pt-1">
        <div className="space-y-3">
          {/* Email Field */}
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            leftIcon={<EmailIcon className="w-[22px] h-[22px] rounded-[22.8px] opacity-100 shrink-0" />}
            error={errors.email}
            className="h-9.5 text-xs bg-slate-50/80"
          />

          {/* Password Field */}
          <PasswordInput
            label="Password"
            id="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            error={errors.password}
            className="h-9.5 text-xs bg-slate-50/80"
          />

          {/* Remember Me & Forgot Password Row */}
          <div className="flex items-center justify-between pt-0.5">
            <Checkbox
              id="remember-me"
              checked={formData.rememberMe}
              onChange={(e) => handleChange('rememberMe', e.target.checked)}
              label={
                <span className="text-[12px] font-medium text-slate-700 select-none">
                  Remember me
                </span>
              }
            />
            <ForgotPasswordButton />
          </div>
        </div>

        {/* Action Buttons & Footer */}
        <div className="space-y-2 pt-2">
          <AuthButton
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Log In
          </AuthButton>

          <AuthButton
            variant="google"
            className="h-9.5 text-[13.5px] font-semibold rounded-[8px]"
          >
            Log in with Google
          </AuthButton>

          {/* Footer Link */}
          <AuthFooterLink
            text="Don't have an account?"
            linkText="Sign up"
            href={ROUTES.SIGNUP}
            linkColorClassName="text-[#7cb342] hover:text-[#689f38] hover:underline font-semibold"
            className="mt-1.5"
          />
        </div>
      </form>
    </AuthCard>
  );
}
