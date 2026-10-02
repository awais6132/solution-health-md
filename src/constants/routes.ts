/**
 * Centralized Route Constants (Single Source of Truth)
 * Eliminates hardcoded route strings and prevents broken link bugs
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '#services',
  HOW_IT_WORKS: '#how-it-works',
  PRICING: '#pricing',
  ABOUT: '#about',
  FAQS: '#faqs',
  SIGNUP: '/signup',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  RESET_PASSWORD: '/reset-password',
  WELCOME: '/welcome',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  MEDICAL_RECORDS: '/dashboard/medical-records',
  APPOINTMENTS: '/dashboard/appointments',
  BILLING: '/dashboard/billing',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
