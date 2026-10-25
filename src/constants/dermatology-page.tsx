import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { WholePersonCareConfig } from '@/types/whole-person-care';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import {
  DermatologyConditionItem,
  DermatologyExperienceConfig,
} from '@/types/dermatology-page';

/**
 * 1. Hero Banner Configuration
 */
export const defaultDermatologyHeroConfig: ServicesHeroConfig = {
  badge: 'DERMATOLOGY',
  isDermatology: true,
  title: (
    <>
      <span className="text-[#0E6C9B] block">Healthy, Confident Skin</span>
      <span className="text-[#0E6C9B] block">From Anywhere.</span>
    </>
  ),
  description:
    'Get expert dermatology care from licensed providers for a wide range of everyday and chronic skin conditions — all from the comfort of home. Convenient, discreet and personal to you.',
  primaryCta: {
    label: 'See If I Qualify →',
    href: ROUTES.FIND_MY_CARE,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/dermatology-hero-banner.png',
  imageAlt: 'Healthy Confident Skin From Anywhere Dermatology Care',
  imagePosition: 'right center',
  imageAlign: 'full',
  checklistItems: [
    'Licensed Dermatology Providers',
    'Convenient Online Visits',
    'Personalized Treatment Plans',
    'Medications (If Appropriate)',
  ],
};

/**
 * 2. Trust Highlights Bar
 */
export const dermatologyTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'convenient-care',
    title: 'Convenient & Affordable',
    line1: 'Convenient & Affordable',
    line2: 'All from home',
    iconName: 'video',
  },
  {
    id: 'adult-teen',
    title: 'Adult & Teen',
    line1: 'Adult & Teen',
    line2: 'Care for all ages',
    iconName: 'shield',
  },
  {
    id: 'personalized-care',
    title: 'Personalized Care',
    line1: 'Personalized Care',
    line2: 'Built for you',
    iconName: 'lock',
  },
  {
    id: 'prescriptions',
    title: 'Prescriptions',
    line1: 'Prescriptions',
    line2: 'Direct to your pharmacy',
    iconName: 'prescription',
  },
];

/**
 * 3. Conditions We Treat (12 Photo Cards)
 */
export const dermatologyConditions: DermatologyConditionItem[] = [
  {
    id: 'acne',
    name: 'Acne',
    subtitle: 'Facial & Body Acne',
    imageSrc: '/assets/images/conditions/acne.jpg',
    imageAlt: 'Acne blemish condition',
  },
  {
    id: 'eczema',
    name: 'Eczema',
    subtitle: 'Atopic Dermatitis',
    imageSrc: '/assets/images/conditions/eczema.jpg',
    imageAlt: 'Eczema dermatitis condition',
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    subtitle: 'Plaque Psoriasis',
    imageSrc: '/assets/images/conditions/psoriasis.jpg',
    imageAlt: 'Psoriasis skin condition',
  },
  {
    id: 'rosacea',
    name: 'Rosacea',
    subtitle: 'Facial Redness & Bumps',
    imageSrc: '/assets/images/conditions/rosacea.jpg',
    imageAlt: 'Rosacea condition',
  },
  {
    id: 'skin-infections',
    name: 'Skin Infections',
    subtitle: 'Bacterial & Viral',
    imageSrc: '/assets/images/conditions/skin-infections.jpg',
    imageAlt: 'Skin infection condition',
  },
  {
    id: 'rashes',
    name: 'Rashes',
    subtitle: 'Contact Dermatitis',
    imageSrc: '/assets/images/conditions/rashes.jpg',
    imageAlt: 'Skin rash condition',
  },
  {
    id: 'hair-loss',
    name: 'Hair Loss',
    subtitle: 'Thinning & Scalp Health',
    imageSrc: '/assets/images/conditions/hair-loss.jpg',
    imageAlt: 'Hair thinning condition',
  },
  {
    id: 'moles-checks',
    name: 'Moles & Sun Spots',
    subtitle: 'Evaluation & Checks',
    imageSrc: '/assets/images/conditions/moles-checks.jpg',
    imageAlt: 'Mole dermoscopy check',
  },
  {
    id: 'fungal-infections',
    name: 'Fungal Infections',
    subtitle: 'Ringworm & Tinea',
    imageSrc: '/assets/images/conditions/skin-infections.jpg',
    imageAlt: 'Fungal infection condition',
  },
  {
    id: 'anti-aging',
    name: 'Anti-Aging',
    subtitle: 'Fine Lines & Texture',
    imageSrc: '/assets/images/dermatology-personalized-care.jpg',
    imageAlt: 'Anti-aging skincare',
  },
  {
    id: 'melasma',
    name: 'Melasma',
    subtitle: 'Hyperpigmentation',
    imageSrc: '/assets/images/conditions/acne.jpg',
    imageAlt: 'Melasma hyperpigmentation',
  },
  {
    id: 'dry-skin',
    name: 'Dry & Sensitive',
    subtitle: 'Barrier Repair',
    imageSrc: '/assets/images/dermatology-hero-banner.jpg',
    imageAlt: 'Dry skin condition',
  },
];

/**
 * 4. Experience Split Banner
 */
export const dermatologyExperienceConfig: DermatologyExperienceConfig = {
  leftCard: {
    headline: 'Personalized Care for Healthier Skin',
    subheadline:
      'Our licensed dermatology providers will review your medical history, assess your condition, and create a customized treatment plan — including prescriptions (if appropriate) sent to your local pharmacy.',
    imageSrc: '/assets/images/dermatology-personalized-woman.png',
    imageAlt: 'Personalized Care for Healthier Skin',
  },
  rightCard: {
    title: 'A Complete Dermatology Experience',
    badges: [
      { id: '1', title: 'Expert Evaluation & Diagnosis', iconName: 'heart' },
      { id: '2', title: 'Personalized Treatment Plans', iconName: 'customized' },
      { id: '3', title: 'Prescriptions (If Appropriate)', iconName: 'flask' },
      { id: '4', title: 'Ongoing Support', iconName: 'support' },
      { id: '5', title: 'Convenient & Discreet Care', iconName: 'convenient' },
    ],
  },
};

/**
 * 5. How It Works (4 Steps)
 */
export const defaultDermatologyHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Simple, streamlined online dermatology care in 4 easy steps.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Take the Online Assessment',
      description: 'Answer questions about your skin symptoms, goals, and medical history in minutes.',
      theme: 'blue',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Provide Photos & Information',
      description: 'Upload clear photos of your affected skin areas securely through our HIPAA-compliant portal.',
      theme: 'green',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Get Your Treatment Plan',
      description: 'A licensed provider diagnoses your condition and prescribes targeted medications.',
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support',
      description: 'Message your care team anytime with follow-ups, adjustments, and refill requests.',
      theme: 'green',
      iconName: 'message',
    },
  ],
};

/**
 * 6. Whole-Person Care Banner
 */
export const defaultDermatologyWholePersonConfig: WholePersonCareConfig = {
  headline: {
    line1: 'More Than Clearer Skin.',
    line2: 'A Healthier You.',
  },
  description:
    'Healthy skin touches every part of your well-being — from your daily confidence to your mental health and peace of mind.',
  tagline: {
    line1: 'Clear Skin',
    line2: 'Brighter Days',
  },
  backgroundImage: '/assets/images/dermatology-whole-person-care.jpg',
  pillars: [
    {
      id: 'glowing-skin',
      title: 'Glowing Healthier Skin',
      icon: 'sparkles',
      iconColor: '#059669',
    },
    {
      id: 'confidence',
      title: 'Boosted Confidence',
      icon: 'zap',
      iconColor: '#D97706',
    },
    {
      id: 'quality-of-life',
      title: 'Improved Quality of Life',
      icon: 'scale',
      iconColor: '#16A34A',
    },
    {
      id: 'mental-wellness',
      title: 'Psychological Wellness',
      icon: 'lightbulb',
      iconColor: '#7C3AED',
    },
    {
      id: 'preventative',
      title: 'Preventative Protection',
      icon: 'shield',
      iconColor: '#2563EB',
    },
    {
      id: 'overall-health',
      title: 'Overall Health',
      icon: 'dna',
      iconColor: '#0D9488',
    },
  ],
};

/**
 * 7. Testimonials Section
 */
export const defaultDermatologyTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are living healthier, happier lives.',
  viewAllLink: {
    label: 'View More Stories →',
    href: `${ROUTES.SERVICES}#reviews`,
  },
  testimonials: [
    {
      id: '1',
      rating: 5,
      verified: true,
      quote:
        '“The adult cystic acne program was a game changer for me! My skin started clearing up in 3 weeks without harsh side effects.”',
      patientName: 'Elena R.',
      location: 'Miami, FL',
      treatment: 'Acne Defense Protocol',
      metricValue: '-85%',
      metricLabel: 'Breakouts in 4 Weeks',
    },
    {
      id: '2',
      rating: 5,
      verified: true,
      quote:
        '“Finally a doctor that actually listens! My severe eczema on my hands was under control within days of receiving my custom prescription.”',
      patientName: 'Sarah K.',
      location: 'Denver, CO',
      treatment: 'Eczema Relief Plan',
      metricValue: '+95%',
      metricLabel: 'Itch Relief in 3 Days',
    },
    {
      id: '3',
      rating: 5,
      verified: true,
      quote:
        '“The HIPAA photo review made it so easy. No taking time off work, and my rosacea topical medication arrived directly at my door.”',
      patientName: 'Daniel M.',
      location: 'Dallas, TX',
      treatment: 'Rosacea Triple Cream',
      metricValue: '100%',
      metricLabel: 'Patient Satisfaction',
    },
  ],
};

/**
 * 8. FAQ & Health Insights
 */
export const defaultDermatologyFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'Do I need an existing prescription?',
      answer:
        'No. Our US-licensed clinicians review your photos and medical assessment to write new prescriptions if clinically appropriate.',
    },
    {
      id: 'faq-2',
      question: 'How discreet is the packaging?',
      answer:
        'All medications are delivered in plain, discreet, tamper-evident packages directly to your doorstep with no external condition markings.',
    },
    {
      id: 'faq-3',
      question: 'How fast can I get a consultation?',
      answer:
        'Most online assessments are reviewed by a board-certified dermatologist within 24 hours, often on the very same day.',
    },
    {
      id: 'faq-4',
      question: 'Is my medical data and photo submission secure?',
      answer:
        'Yes. We adhere to 100% HIPAA-compliant 256-bit SSL encryption standards. Your photos and personal health records remain private.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'Explore All Treatments →',
    href: ROUTES.SERVICES,
  },
  articles: [
    {
      id: 'glp-1-medications-guide-2026',
      title: 'A Guide to GLP-1 Medications in 2026',
      slug: 'glp-1-medications-guide-2026',
      href: `${ROUTES.SERVICES}#weight-loss`,
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Doctor discussing GLP-1 treatment plan',
      category: 'Weight Management',
      readTime: '4 min read',
    },
    {
      id: 'hormone-health-signs-imbalance',
      title: 'Hormone Health: Signs & Solutions for Skin',
      slug: 'hormone-health-signs-imbalance',
      href: `${ROUTES.SERVICES}#womens-health`,
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'Patient reviewing hormone health metrics',
      category: 'Endocrinology',
      readTime: '5 min read',
    },
    {
      id: 'mental-health-busy-world',
      title: 'Mind-Skin Connection: Stress & Acne',
      slug: 'mental-health-busy-world',
      href: `${ROUTES.SERVICES}#mental-health`,
      imageUrl: '/assets/images/articles/mental-health.jpg',
      alt: 'Doctors consulting with patient on mental health',
      category: 'Mental Wellness',
      readTime: '3 min read',
    },
  ],
  featuredArticle: {
    id: 'dermatology-featured-treatment',
    title: 'Clinical Dermatology Treatments: What to Expect in 2026',
    slug: 'clinical-dermatology-treatments-2026',
    href: `${ROUTES.SERVICES}#dermatology`,
    imageUrl: '/assets/images/Dermatology.jpg',
    alt: 'Advanced clinical dermatology consultation',
    category: 'Dermatology Care',
    readTime: '7 min read',
    description:
      'Explore modern, evidence-backed topical and systemic protocols designed to restore clear skin and promote long-term barrier health.',
  },
};
