import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import { PeptidesLifestyleBannerConfig } from '@/types/peptides-page';

/**
 * 1. Hero Banner Configuration (Reusing ServicesHero)
 */
export const defaultWomensHealthHeroConfig: ServicesHeroConfig = {
  badge: "WOMEN'S HEALTH",
  badgeColor: 'blue',
  title: (
    <>
      <span className="text-[#0E4A72] block">Balance Today.</span>
      <span className="text-[#4B9B44] block">A Brighter Tomorrow.</span>
    </>
  ),
  description:
    'Personalized hormone & wellness support with licensed providers. Hormone Replacement Therapy (HRT) formulated for your body at every stage of life.',
  primaryCta: {
    label: 'See If I Qualify →',
    href: ROUTES.FIND_MY_CARE,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/womens-health-hero-raw.png',
  imageAlt: "Women's Health Balance Today A Brighter Tomorrow",
  imagePosition: 'right center',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/85 via-40% to-transparent w-full md:w-[60%] lg:w-[50%]',
  floatingTagline: (
    <span className="inline-block text-right leading-[1.15]">
      <span className="block text-[#1D70B8]">Hormone Balance.</span>
      <span className="block text-[#1D70B8]">More Energy</span>
      <span className="block text-[#1D70B8]">A healthier You</span>
    </span>
  ),
  checklistItems: [
    'Licensed U.S. Providers',
    'Personalized Treatment Plans',
    'Convenient Virtual Visits',
    'Ongoing Support',
  ],
};

/**
 * 2. Trust Highlights Bar (Reusing TrustFeatures)
 */
export const womensHealthTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'licensed-providers',
    title: '100% Board-Certified Providers',
    line1: '100% Board-Certified Providers',
    line2: 'In All 50 States',
    iconName: 'shield',
  },
  {
    id: 'personalized-care',
    title: 'Personalized Care',
    line1: 'Personalized Care',
    line2: 'Tailored to You',
    iconName: 'clock',
  },
  {
    id: 'confidential',
    title: 'Confidential',
    line1: 'Confidential',
    line2: '100% HIPAA Compliant',
    iconName: 'lock',
  },
  {
    id: 'direct-delivery',
    title: 'Affordable Care',
    line1: 'Affordable Care',
    line2: 'Direct to Your Door',
    iconName: 'check',
  },
  {
    id: 'exceptional-outcomes',
    title: 'Exceptional Outcomes',
    line1: 'Exceptional Outcomes',
    line2: 'Real Results That Last',
    iconName: 'check',
  },
];

/**
 * 3. Our Women's Health Services (3 Dedicated Cards)
 */
export const defaultWomensHealthServicesConfig = {
  headline: "Our Women's Health Services",
  subheadline:
    'Personalized treatment plans based on your symptoms, lab results, and goals.',
  services: [
    {
      id: 'hrt',
      title: 'Hormone Replacement Therapy (HRT)',
      description:
        'Personalized HRT to help balance your hormones, relieve symptoms, and support long-term health.',
      imageSrc: '/assets/images/womens-service-hrt.jpg',
      imageAlt: 'Hormone Replacement Therapy for Women',
      features: [
        'Biodentical hormone options',
        'Comprehensive lab testing',
        'Personalized treatment plans',
        'Ongoing monitoring & adjustments',
        'Support through perimenopause, menopause, and beyond',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'weight-management',
      title: 'Weight Management for Women',
      description:
        'Medical support to help you achieve a healthy weight, boost metabolism, and feel more energetic.',
      imageSrc: '/assets/images/womens-service-weight.jpg',
      imageAlt: 'Weight Management for Women',
      features: [
        'GLP-1s (if appropriate)',
        'Nutrition and lifestyle guidance',
        'Personalized treatment plans',
        'Ongoing support and monitoring',
        'Focus on long-term wellness',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'overall-wellness',
      title: "Overall Women's Wellness",
      description:
        'A whole-person approach to help you feel and perform better in every stage of life.',
      imageSrc: '/assets/images/womens-service-wellness.jpg',
      imageAlt: "Overall Women's Wellness",
      features: [
        'Energy and focus',
        'Mood and emotional well-being',
        'Sleep optimization',
        'Bone, heart, and metabolic health',
        'Preventive care and longevity support',
      ],
      ctaLabel: 'Get Started →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
  ],
};

/**
 * 4. How It Works: 4 Simple Steps (Reusing HowItWorksSection)
 */
export const defaultWomensHealthHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Four simple steps to get started with your care',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Take An Online Assessment',
      description:
        'Share your health history, symptoms, & goals in under 10 minutes.',
      theme: 'blue',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Get Match With A Licensed Provider',
      description:
        'A board-certified doctor will review your history and order any necessary lab tests.',
      theme: 'blue',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Telehealth Consultation',
      description:
        'Discuss your results via a virtual consultation to receive a custom plan.',
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Start Your Journey',
      description:
        'Receive your personalized treatment plan & ongoing support from your care team.',
      theme: 'blue',
      iconName: 'message',
    },
  ],
};

/**
 * 4. More Than Treatment. A Healthier, Happier You. (Reusing ServicesLifestyleBanner)
 */
export const defaultWomensHealthLifestyleBannerConfig: PeptidesLifestyleBannerConfig =
  {
    headline: 'More Than Treatment. A Healthier, Happier You.',
    subheadline:
      "We're here to help you feel your best every day. From energy to vitality, we've got you covered.",
    imageSrc: '/assets/images/peptides-lifestyle-banner.png',
    imageAlt: 'Healthier Today Brighter Tomorrow',
    floatingScript: 'Healthier Today\nBrighter Tomorrow',
    scriptColor: 'text-[#1D70B8]',
    pillars: [
      {
        id: 'energy',
        line1: 'More',
        line2: 'Energy',
        iconName: 'lightning',
      },
      {
        id: 'sleep',
        line1: 'Better',
        line2: 'Sleep',
        iconName: 'moon',
      },
      {
        id: 'mood',
        line1: 'Improved',
        line2: 'Mood',
        iconName: 'heart',
      },
      {
        id: 'weight',
        line1: 'Healthy',
        line2: 'Weight',
        iconName: 'recovery',
      },
      {
        id: 'clarity',
        line1: 'Mental',
        line2: 'Clarity',
        iconName: 'lightbulb',
      },
      {
        id: 'bones',
        line1: 'Stronger',
        line2: 'Bones',
        iconName: 'dumbbell',
      },
      {
        id: 'vitality',
        line1: 'Confident',
        line2: 'Vitality',
        iconName: 'sparkles',
      },
    ],
  };

/**
 * 5. Real people. Real results. (Reusing TestimonialsSection)
 */
export const defaultWomensHealthTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are thriving with our care.',
  viewAllLink: {
    label: 'All Customer Stories →',
    href: '#reviews',
  },
  testimonials: [
    {
      id: 'review-1',
      rating: 5,
      verified: true,
      quote:
        '“The HRT program completely changed my life. My energy is back, I\'m sleeping through the night, and I feel like myself again for the first time in years.”',
      patientName: 'Theresa B.',
      location: 'Age 49',
      treatment: 'HRT Patient',
      metricValue: '4 mos',
      metricLabel: 'patient',
    },
    {
      id: 'review-2',
      rating: 5,
      verified: true,
      quote:
        '“I had no idea how much of my fatigue was hormonal. The provider listened, ordered the right labs, and now I have my energy back. Truly grateful!”',
      patientName: 'Sarah K.',
      location: 'Age 42',
      treatment: 'HRT Patient',
      metricValue: '6 mos',
      metricLabel: 'patient',
    },
    {
      id: 'review-3',
      rating: 5,
      verified: true,
      quote:
        '“The GLP-1 and hormone combo has been a game-changer. Lost 28 lbs and finally feel in control of my body again. Best decision I\'ve made!”',
      patientName: 'Amy R.',
      location: 'Age 51',
      treatment: 'Weight & HRT',
      metricValue: '5 mos',
      metricLabel: 'patient',
    },
  ],
};

/**
 * 6. Frequently Asked Questions & Health Insights (Reusing FaqInsightsSection)
 */
export const defaultWomensHealthFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'Is hormone replacement therapy safe for me?',
      answer:
        'Hormone replacement therapy (HRT) is carefully tailored based on your individual medical history, comprehensive lab panels, and health goals. Our licensed providers conduct thorough evaluations to determine the safest and most effective protocol for you.',
    },
    {
      id: 'faq-2',
      question: 'How does the blood testing work?',
      answer:
        'We provide pre-consultation lab orders that can be completed at a nearby testing facility or via a convenient at-home kit. Your provider reviews your results in detail during your telehealth visit.',
    },
    {
      id: 'faq-3',
      question: 'How quickly will I start seeing results?',
      answer:
        'Most patients notice noticeable improvements in sleep, mood, and daytime energy within 2 to 4 weeks, with optimal hormonal balance and body composition improvements occurring over 3 to 6 months of consistent treatment.',
    },
    {
      id: 'faq-4',
      question: 'Are your treatments covered by insurance?',
      answer:
        'We offer transparent, cash-pay pricing without the restrictions or delays of insurance. You can often submit receipts for HSA/FSA reimbursement.',
    },
    {
      id: 'faq-5',
      question: 'How often do I have follow-up appointments?',
      answer:
        'Follow-ups occur typically every 6 to 12 weeks during the initial titration phase, and every 3 to 6 months once your dosage is optimized to ensure safe and lasting results.',
    },
    {
      id: 'faq-6',
      question: 'Can I cancel or change my plan anytime?',
      answer:
        'Yes, your care plan is flexible. You can adjust dosages, modify your protocol with your provider, or cancel anytime with zero hidden cancellation fees.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'View All Resources →',
    href: ROUTES.BLOGS,
  },
  articles: [
    {
      id: 'art-1',
      title: 'A Guide to HRT: What to Expect in 2024',
      slug: 'guide-to-hrt-2024',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'A Guide to HRT: What to Expect in 2024',
      category: "Women's Health",
      readTime: '4 min read',
    },
    {
      id: 'art-2',
      title: 'Hormones, Mood & Coping with Brain Fog in Women',
      slug: 'hormones-mood-brain-fog-women',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/mental-health.jpg',
      alt: 'Hormones, Mood & Coping with Brain Fog in Women',
      category: 'Hormone Care',
      readTime: '5 min read',
    },
    {
      id: 'art-3',
      title: "Women's Health at Every Stage",
      slug: 'womens-health-every-stage',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/dermatology-featured.jpg',
      alt: "Women's Health at Every Stage",
      category: 'Wellness',
      readTime: '6 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-1',
    title: 'A Guide to GLP-1 Medications in 2024',
    slug: 'guide-glp1-medications-2024',
    href: ROUTES.BLOGS,
    imageUrl: '/assets/images/articles/glp1-guide.jpg',
    alt: 'A Guide to GLP-1 Medications in 2024',
    category: 'Weight Management',
    readTime: '7 min read',
    description:
      'Explore everything you need to know about modern GLP-1 medications, metabolic wellness, and sustainable long-term health.',
  },
};
