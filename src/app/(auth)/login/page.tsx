'use client';

import React from 'react';
import { useFormik } from 'formik';
import { ROUTES } from '@/constants/routes';
import { loginValidationSchema } from '@/schemas/auth';
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
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log('Login Form values:', values);
      setTimeout(() => {
        alert('Logged in successfully!');
        setSubmitting(false);
      }, 800);
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
        title="Welcome Back"
        subtitle="Please enter your details to sign in"
        align="center"
        className="mb-0"
        showLogo={true}
      />

      {/* 2. Login Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-3 flex-1 flex flex-col justify-between pt-1">
        <div className="space-y-3">
          {/* Email Field */}
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
          />

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
          />

          {/* Remember Me & Forgot Password Row */}
          <div className="flex items-center justify-between pt-0.5">
            <Checkbox
              id="remember-me"
              name="rememberMe"
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
            isLoading={formik.isSubmitting}
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
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
