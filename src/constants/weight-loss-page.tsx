import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import {
  WeightLossProductsConfig,
  WeightLossEligibilityConfig,
} from '@/types/weight-loss-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { ShieldCheck, Stethoscope, FileSpreadsheet, Truck, HeartHandshake } from 'lucide-react';

/**
 * 1. Hero Banner Configuration (Reuses ServicesHero Component)
 */
export const defaultWeightLossHeroConfig: ServicesHeroConfig = {
  badge: 'MEDICAL SOLUTIONS',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Lose weight with a</span>
      <span className="text-[#4B9B44] block">plan built around you</span>
    </>
  ),
  description:
    'Evidence based treatment. Personalized support and real results, so you can feel better, have more energy and live the life you want.',
  primaryCta: {
    label: 'See if Qualify →',
    href: `${ROUTES.SIGNUP}?service=weight-loss`,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/weight-loss-hero-banner.png',
  imageAlt: 'Lose weight with a plan built around you',
  imagePosition: 'right center',
  imageAlign: 'full',
  floatingTagline: (
    <span className="inline-block text-center leading-[1.05]">
      <span className="block text-[#0E6C9B]">A Healthier</span>
      <span className="block text-[#0E6C9B]">you is Possible</span>
    </span>
  ),
};

/**
 * 2. 5 Trust Highlights (Reuses TrustFeatures Component)
 */
export const weightLossTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'licensed-providers',
    title: 'Licensed Providers In All 50 States',
    line1: 'Licensed Providers In',
    line2: 'All 50 States',
    iconSvg: (
      <div className="w-[44px] h-[44px] rounded-full bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
        <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
      </div>
    ),
  },
  {
    id: 'safe-treatment',
    title: 'Safe & Evidence based Treatment',
    line1: 'Safe & Evidence based',
    line2: 'Treatment',
    iconSvg: (
      <div className="w-[44px] h-[44px] rounded-full bg-[#ECFEFF] flex items-center justify-center text-[#0891B2]">
        <Stethoscope className="w-5 h-5" strokeWidth={2.2} />
      </div>
    ),
  },
  {
    id: 'personalized-plans',
    title: 'Personalized plans',
    line1: 'Personalized',
    line2: 'plans',
    iconSvg: (
      <div className="w-[44px] h-[44px] rounded-full bg-[#ECFDF5] flex items-center justify-center text-[#059669]">
        <FileSpreadsheet className="w-5 h-5" strokeWidth={2.2} />
      </div>
    ),
  },
  {
    id: 'home-delivery',
    title: 'Home delivery to your Door',
    line1: 'Home delivery to',
    line2: 'your Door',
    iconSvg: (
      <div className="w-[44px] h-[44px] rounded-full bg-[#F0FDFA] flex items-center justify-center text-[#0D9488]">
        <Truck className="w-5 h-5" strokeWidth={2.2} />
      </div>
    ),
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing support Every step of the way',
    line1: 'Ongoing support',
    line2: 'Every step of the way',
    iconSvg: (
      <div className="w-[44px] h-[44px] rounded-full bg-[#FEF2F2] flex items-center justify-center text-[#DC2626]">
        <HeartHandshake className="w-5 h-5" strokeWidth={2.2} />
      </div>
    ),
  },
];

/**
 * 3. Medication & Pricing Options Grid (New Component)
 */
export const defaultWeightLossProductsConfig: WeightLossProductsConfig = {
  headline: 'Choose the Weight Loss Option that Fits you',
  subheadline:
    'Our licensed providers will help determine which medication and plan is right for you',
  viewAllLink: {
    label: 'View All Products →',
    href: `${ROUTES.SIGNUP}?service=weight-loss`,
  },
  products: [
    {
      id: 'tirzepatide-b12',
      name: 'Tirzepatide + B12',
      badge: 'Best Seller',
      imageSrc: '/assets/images/weight-loss-vial.jpg',
      rating: 4.9,
      reviewCount: 152,
      features: [
        'Helps reduce appetite',
        'Support fat loss',
        'Includes B12 for energy',
        'Once weekly injection',
        'Clinically proven results',
      ],
      startingPrice: 65.0,
      originalPrice: 99.99,
      deliveryBadge: 'Free 2-day delivery',
      href: `${ROUTES.SIGNUP}?service=tirzepatide-b12`,
    },
    {
      id: 'semaglutide-b12',
      name: 'Semaglutide + B12',
      badge: 'Best Seller',
      imageSrc: '/assets/images/weight-loss-vial.jpg',
      rating: 4.9,
      reviewCount: 152,
      features: [
        'Helps reduce appetite',
        'Support fat loss',
        'Includes B12 for energy',
        'Once weekly injection',
        'Clinically proven results',
      ],
      startingPrice: 65.0,
      originalPrice: 99.99,
      deliveryBadge: 'Free 2-day delivery',
      href: `${ROUTES.SIGNUP}?service=semaglutide-b12`,
    },
    {
      id: 'tirzepatide-microdose',
      name: 'Tirzepatide Microdose',
      badge: 'Best Seller',
      imageSrc: '/assets/images/weight-loss-vial.jpg',
      rating: 4.9,
      reviewCount: 152,
      features: [
        'Helps reduce appetite',
        'Support fat loss',
        'Includes B12 for energy',
        'Once weekly injection',
        'Clinically proven results',
      ],
      startingPrice: 65.0,
      originalPrice: 99.99,
      deliveryBadge: 'Free 2-day delivery',
      href: `${ROUTES.SIGNUP}?service=tirzepatide-microdose`,
    },
    {
      id: 'semaglutide-microdose',
      name: 'Semaglutide Microdose',
      badge: 'Best Seller',
      imageSrc: '/assets/images/weight-loss-vial.jpg',
      rating: 4.9,
      reviewCount: 152,
      features: [
        'Helps reduce appetite',
        'Support fat loss',
        'Includes B12 for energy',
        'Once weekly injection',
        'Clinically proven results',
      ],
      startingPrice: 65.0,
      originalPrice: 99.99,
      deliveryBadge: 'Free 2-day delivery',
      href: `${ROUTES.SIGNUP}?service=semaglutide-microdose`,
    },
  ],
};

/**
 * 4. Whole-Person Care Override
 */
export const weightLossWholePersonConfig = {
  headline: {
    line1: 'More than Weight loss.',
    line2: 'A healthier you',
  },
  description:
    'Sustainable results come from treating the whole person, not just the number on the scale.',
  tagline: {
    line1: 'A Healthier Tomorrow',
    line2: 'Is Within Reach.',
  },
};

/**
 * 5. Eligibility & Clinical Guidelines (Bottom 3 Info Cards)
 */
export const defaultWeightLossEligibilityConfig: WeightLossEligibilityConfig = {
  cards: [
    {
      id: 'eligibility-criteria',
      title: 'Is Medical Weight Loss Right for you?',
      type: 'checklist',
      items: [
        'BMI of 27 or higher (or 25+ with a related condition)',
        'Struggling with weight despite diet and exercise',
        'Looking for a safe, medically supervised solution',
        'Ready to make a long-term lifestyle change',
      ],
    },
    {
      id: 'conditions-addressed',
      title: 'Common condition we help Address',
      type: 'checklist',
      items: [
        'BMI of 27 or higher (or 25+ with a related condition)',
        'Struggling with weight despite diet and exercise',
        'Looking for a safe, medically supervised solution',
        'Ready to make a long-term lifestyle change',
      ],
    },
    {
      id: 'safe-legitimate-trusted',
      title: 'Safe, Legitimate, Trusted',
      type: 'description',
      description:
        'Our providers follow evidence-based guidelines and only prescribe medications when appropriate for your health and safety.',
    },
  ],
};
