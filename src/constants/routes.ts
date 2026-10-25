/**
 * Centralized Route Constants (Single Source of Truth)
 * Eliminates hardcoded route strings and prevents broken link bugs
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  FIND_MY_CARE: '/find-my-care',
  INTAKE: '/find-my-care',
  WEIGHT_LOSS: '/services/weight-loss',
  WEIGHT_MANAGEMENT: '/services/weight-loss',
  URGENT_CARE: '/services/urgent-care',
  FEVER: '/services/fever',
  DERMATOLOGY: '/services/dermatology',
  MENTAL_HEALTH: '/services/mental-health',
  MENS_HEALTH: '/services/mens-health',
  PEPTIDES: '/services/peptides',
  PEPTIDES_LONGEVITY: '/services/peptides',
  HOW_IT_WORKS: '/#how-it-works',
  PRICING: '/pricing',
  CHECKOUT: '/checkout',
  PAYMENT: '/checkout',
  PRODUCTS: '/products',
  ALL_PRODUCTS: '/products',
  BLOGS: '/blogs',
  ABOUT: '/#about',
  FAQS: '/#faqs',
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
