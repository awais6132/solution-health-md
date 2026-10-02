import * as Yup from 'yup';

/**
 * ============================================================================
 * Centralized Field Validation Rules (Single Source of Truth)
 * ============================================================================
 * Har field ka standard validation rule ek hi jagah define hai.
 * Kal ko rule ya error message change karna ho, to sirf yahan update karna hoga.
 */
export const authValidationRules = {
  firstName: Yup.string()
    .trim()
    .required('First name is required')
    .max(50, 'First name must not exceed 50 characters'),

  lastName: Yup.string()
    .trim()
    .required('Last name is required')
    .max(50, 'Last name must not exceed 50 characters'),

  email: Yup.string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required'),

  phone: Yup.string()
    .trim()
    .required('Phone number is required'),

  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: (passwordField = 'password') =>
    Yup.string()
      .oneOf([Yup.ref(passwordField)], 'Passwords must match')
      .required('Confirm password is required'),

  agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms and privacy policy'),

  rememberMe: Yup.boolean().optional().default(false),

  otp: Yup.string()
    .trim()
    .required('Verification code is required')
    .length(6, 'Please enter the complete 6-digit verification code')
    .matches(/^\d{6}$/, 'Verification code must contain only numbers'),
};

/**
 * ============================================================================
 * Auth Module Schemas (Composed from Reusable Rules)
 * ============================================================================
 */

// 1. Signup Schema
export const signupValidationSchema = Yup.object({
  firstName: authValidationRules.firstName,
  lastName: authValidationRules.lastName,
  email: authValidationRules.email,
  phone: authValidationRules.phone,
  password: authValidationRules.password,
  confirmPassword: authValidationRules.confirmPassword('password'),
  agreeTerms: authValidationRules.agreeTerms,
});

// 2. Login Schema
export const loginValidationSchema = Yup.object({
  email: authValidationRules.email,
  password: authValidationRules.password,
  rememberMe: authValidationRules.rememberMe,
});

// 3. Forgot Password / Send OTP Schema
export const forgotPasswordValidationSchema = Yup.object({
  email: authValidationRules.email,
});

// 4. Reset Password Schema
export const resetPasswordValidationSchema = Yup.object({
  password: authValidationRules.password,
  confirmPassword: authValidationRules.confirmPassword('password'),
  agreeTerms: authValidationRules.agreeTerms,
});

// 5. Verify OTP Schema
export const verifyOtpValidationSchema = Yup.object({
  otp: authValidationRules.otp,
});

// Aliases for backwards compatibility
export const signupSchema = signupValidationSchema;
export const loginSchema = loginValidationSchema;
export const sendOtpSchema = forgotPasswordValidationSchema;
export const resetPasswordSchema = resetPasswordValidationSchema;
export const verifyOtpSchema = verifyOtpValidationSchema;

/**
 * ============================================================================
 * Type Definitions inferred from Schemas
 * ============================================================================
 */
export type SignupInput = Yup.InferType<typeof signupValidationSchema>;
export type LoginInput = Yup.InferType<typeof loginValidationSchema>;
export type SendOtpInput = Yup.InferType<typeof forgotPasswordValidationSchema>;
export type ResetPasswordInput = Yup.InferType<typeof resetPasswordValidationSchema>;
export type VerifyOtpInput = Yup.InferType<typeof verifyOtpValidationSchema>;
