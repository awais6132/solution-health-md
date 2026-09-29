/**
 * Centralized Route Constants (Single Source of Truth)
 * Eliminates hardcoded route strings and prevents broken link bugs
 */
export const ROUTES = {
  HOME: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_PASSWORD: '/reset-password',
  WELCOME: '/welcome',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  ABOUT: '/about',
  FEATURES: '#features',
  GET_STARTED: '#get-started',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
