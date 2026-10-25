import React from 'react';
import { ServicesHeroConfig } from '@/types/services-page';
import {
  ClinicalProgramsGridConfig,
  MembershipPlansConfig,
} from '@/types/pricing-page';
import { ROUTES } from './routes';

/* ─────────────────────────────────────────────
   1. Hero Banner  (reuses ServicesHero)
───────────────────────────────────────────── */
export const defaultPricingHeroConfig: ServicesHeroConfig = {
  badge: 'PRICING',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Pricing &amp; Membership</span>
    </>
  ),
  description:
    'Discover a wealth of insightful materials meticulously crafted to provide you with a comprehensive understanding of all the latest trends.',
  primaryCta: {
    label: 'Find My Care →',
    href: ROUTES.SIGNUP,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#membership-plans',
  },
  imageSrc: '/assets/images/nurse portrait.jpg',
  imageAlt: 'Pricing & Membership — Solutions Health MD Clinician',
  imagePosition: '60% center',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/85 via-30% to-transparent w-full md:w-[52%] lg:w-[46%]',
};

/* ─────────────────────────────────────────────
   2. Clinical Programs & Formulations
───────────────────────────────────────────── */
export const defaultClinicalProgramsConfig: ClinicalProgramsGridConfig = {
  eyebrow: 'PRICING',
  headline: 'Clinical Programs & Formulations',
  tabs: [
    { id: 'all', label: 'All Programs' },
    { id: 'weight-loss', label: 'Weight Loss (GLP-1)' },
    { id: 'mens-health', label: "Men's Health (TRT)" },
    { id: 'womens-health', label: "Women's Health (HRT)" },
    { id: 'peptides', label: 'Peptides & Longevity' },
    { id: 'direct-primary', label: 'Direct Primary Care' },
    { id: 'urgent-care', label: 'Urgent Care' },
    { id: 'dermatology', label: 'Dermatology' },
  ],
  cards: [
    {
      id: 'semaglutide-b12',
      serviceCategory: 'weight-loss',
      categoryBadge: 'COMPOUNDED GLP-1',
      qualityBadge: 'Doctor Recommended',
      qualityBadgeColor: 'blue',
      title: 'Semaglutide + B12',
      description:
        'Personalized dual-action weight loss injection with metabolic support and appetite control for sustainable results.',
      monthlyPrice: 249,
      oneTimePrice: 349,
      priceLabel: '/mo per dose',
      deliveryBadge: 'FREE PHARMACY DELIVERY',
      features: [
        'Pharmacy-grade Semaglutide pen',
        'Ongoing dietary support included',
        'One-on-one physician guidance',
      ],
      href: `${ROUTES.SIGNUP}?service=weight-loss&plan=semaglutide-b12`,
      recommended: false,
    },
    {
      id: 'trt-optimization',
      serviceCategory: 'mens-health',
      categoryBadge: 'HORMONE PROTOCOL',
      qualityBadge: 'Doctor Recommended',
      qualityBadgeColor: 'blue',
      title: 'TRT Optimization',
      description:
        'Optimize testosterone levels for energy, vitality, and performance with a physician-curated hormone protocol.',
      monthlyPrice: 179,
      oneTimePrice: 249,
      priceLabel: '/mo per dose',
      features: [
        'Lab-tested testosterone vials',
        'Bi-weekly clinical check-ins',
        'Discrete mail-order pharmacy',
        'Therapeutic monitoring included',
      ],
      href: `${ROUTES.SIGNUP}?service=mens-health&plan=trt-optimization`,
      recommended: true,
    },
    {
      id: 'nad-peptide-kit',
      serviceCategory: 'peptides',
      categoryBadge: 'CELLULAR LONGEVITY',
      qualityBadge: 'Performance Bullseye',
      qualityBadgeColor: 'orange',
      title: 'NAD+ Peptide Kit',
      description:
        'Clinically formulated peptide kit targeting cellular energy, anti-aging, and cognitive performance enhancement.',
      monthlyPrice: 199,
      oneTimePrice: 279,
      priceLabel: '/mo per dose',
      features: [
        'Lab-verified NAD+ — 1000mg',
        'Physician-designed anti-aging protocol',
        'Digital health optimization guide',
      ],
      href: `${ROUTES.SIGNUP}?service=peptides&plan=nad-peptide-kit`,
      recommended: false,
    },
    {
      id: 'tretinoin-complex',
      serviceCategory: 'dermatology',
      categoryBadge: 'PRESCRIPTION SKINCARE',
      qualityBadge: 'Clinical Strength',
      qualityBadgeColor: 'purple',
      title: 'Tretinoin Complex',
      description:
        'Prescription-grade topical formula for acne, fine lines, hyperpigmentation, and overall skin renewal.',
      monthlyPrice: 79,
      oneTimePrice: 119,
      priceLabel: '/mo per dose',
      features: [
        'At-home skin assessment included',
        'Rx Tretinoin (Retin-A) compounded',
        'Physician-monitored skin response',
      ],
      href: `${ROUTES.SIGNUP}?service=dermatology&plan=tretinoin-complex`,
      recommended: false,
    },
    {
      id: 'tirzepatide-kit',
      serviceCategory: 'weight-loss',
      categoryBadge: 'COMPOUNDED GLP-1',
      qualityBadge: 'Doctor Recommended',
      qualityBadgeColor: 'blue',
      title: 'Tirzepatide Program',
      description:
        'Dual GIP & GLP-1 agonist for superior metabolic control. Clinically proven for significant weight loss results.',
      monthlyPrice: 299,
      oneTimePrice: 399,
      priceLabel: '/mo per dose',
      deliveryBadge: 'FREE PHARMACY DELIVERY',
      features: [
        'Compounded Tirzepatide pen',
        'Monthly physician follow-up',
        'Nutrition & lifestyle coaching',
      ],
      href: `${ROUTES.SIGNUP}?service=weight-loss&plan=tirzepatide`,
      recommended: true,
    },
    {
      id: 'hrt-womens',
      serviceCategory: 'womens-health',
      categoryBadge: 'HORMONE PROTOCOL',
      qualityBadge: 'Doctor Recommended',
      qualityBadgeColor: 'blue',
      title: 'HRT Balance Program',
      description:
        'Bioidentical hormone replacement to ease menopause, regulate mood, and restore vitality for women at any stage.',
      monthlyPrice: 159,
      oneTimePrice: 219,
      priceLabel: '/mo per dose',
      features: [
        'Comprehensive hormone panel labs',
        'Personalized bioidentical HRT',
        'Monthly telehealth check-ins',
      ],
      href: `${ROUTES.SIGNUP}?service=womens-health&plan=hrt-balance`,
      recommended: false,
    },
    {
      id: 'dpc-membership',
      serviceCategory: 'direct-primary',
      categoryBadge: 'DIRECT PRIMARY CARE',
      qualityBadge: 'Membership',
      qualityBadgeColor: 'green',
      title: 'Direct Primary Care',
      description:
        'Unlimited access to a dedicated physician — no insurance, no co-pays, no rushed visits. Your doctor, always.',
      monthlyPrice: 89,
      oneTimePrice: 999,
      priceLabel: '/mo unlimited',
      features: [
        'Unlimited physician visits',
        'Same-day telehealth access',
        'In-house lab tests included',
      ],
      href: `${ROUTES.SIGNUP}?service=direct-primary-care`,
      recommended: false,
    },
    {
      id: 'urgent-care-visit',
      serviceCategory: 'urgent-care',
      categoryBadge: 'ON-DEMAND CARE',
      qualityBadge: 'Same-Day Access',
      qualityBadgeColor: 'green',
      title: 'Urgent Care Visit',
      description:
        'Immediate telehealth consultation for acute illness, infections, and minor injuries — available 7 days a week.',
      monthlyPrice: 59,
      oneTimePrice: 75,
      priceLabel: '/per visit',
      features: [
        'Same-day physician consultation',
        'Rx sent to your pharmacy',
        'No appointment needed',
      ],
      href: `${ROUTES.SIGNUP}?service=urgent-care`,
      recommended: false,
    },
  ],
};

/* ─────────────────────────────────────────────
   3. Membership Plans
───────────────────────────────────────────── */
export const defaultMembershipPlansConfig: MembershipPlansConfig = {
  eyebrow: 'PRICING',
  headline: 'Membership that Fits Your Needs',
  plans: [
    {
      id: 'membership-3mo',
      title: '3 Months Membership',
      description:
        'People who need closer monitoring and more support in managing below sugar level.',
      features: [
        'Access to a custom monitoring protocol dashboard',
        'Immediate alerts via app, pharmacy, or care team',
        'Expert medication recommendations as needed',
        'One-on-one virtual guidance sessions',
        'No chat support',
      ],
      monthlyPrice: 70,
      oneTimePrice: 210,
      priceNote: '3 months membership',
      href: `${ROUTES.SIGNUP}?plan=membership-3mo`,
      highlighted: false,
    },
    {
      id: 'membership-6mo',
      title: '6 Months Membership',
      description:
        'A complete solution for long-term management issues with expert supervision.',
      features: [
        'Full 6-month clinical review by Licensed Plan',
        '24/7 consultation as needed',
        'Access to dedicated lab reviews & recommendations including nutrition guidance',
        'Exclusive partnership with pharmacy benefit',
      ],
      monthlyPrice: 70,
      oneTimePrice: 420,
      priceNote: '6 months membership',
      href: `${ROUTES.SIGNUP}?plan=membership-6mo`,
      highlighted: true,
    },
    {
      id: 'membership-1yr',
      title: '1 Year Membership',
      description:
        'A complete solution for long-term diabetes management with expert support.',
      features: [
        'Full 12-month type 2 financial Plan',
        '24/7 consultation as needed',
        'Access to dedicated lab reviews & recommendations including nutrition guidance',
        'One-on-one virtual physician appointments',
      ],
      monthlyPrice: 70,
      oneTimePrice: 840,
      priceNote: '1 year membership',
      href: `${ROUTES.SIGNUP}?plan=membership-1yr`,
      highlighted: false,
    },
  ],
};
