import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import {
  PeptidesProgramsGridConfig,
  PeptidesLifestyleBannerConfig,
} from '@/types/peptides-page';

/**
 * 1. Hero Banner Configuration (Reusing ServicesHero)
 */
export const defaultMensHealthHeroConfig: ServicesHeroConfig = {
  badge: "MEN'S HEALTH",
  badgeColor: 'blue',
  title: (
    <>
      <span className="text-[#0E4A72] block">More Energy.</span>
      <span className="text-[#4B9B44] block">Better Health.</span>
      <span className="text-[#0E4A72] block">A Stronger You.</span>
    </>
  ),
  description:
    'Comprehensive care designed for men — hormone optimization, weight management, longevity protocols, and direct primary care to help you feel, look, and perform at your best.',
  primaryCta: {
    label: 'See If I Qualify →',
    href: ROUTES.FIND_MY_CARE,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/mens-health-hero-banner.png',
  imageAlt: "Men's Health More Energy Better Health A Stronger You",
  imagePosition: 'right bottom',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/80 via-35% to-transparent w-full md:w-[54%] lg:w-[46%]',
  floatingTagline: undefined,
  checklistItems: [
    'Licensed Providers',
    'Personalized Treatment Plans',
    'Convenient Virtual Visits',
    'Ongoing Support',
  ],
};

/**
 * 2. Trust Highlights Bar (Reusing TrustFeatures)
 */
export const mensHealthTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'licensed-providers',
    title: 'Licensed U.S. Providers',
    line1: 'Licensed U.S. Providers',
    line2: 'In All 50 States',
    iconName: 'shield',
  },
  {
    id: 'safe-secure',
    title: 'Safe & Secure',
    line1: 'Safe & Secure',
    line2: 'Telehealth Platform',
    iconName: 'lock',
  },
  {
    id: 'convenient-visits',
    title: 'Convenient',
    line1: 'Convenient',
    line2: 'Virtual Doctor Visits',
    iconName: 'video',
  },
  {
    id: 'evidence-protocols',
    title: 'Evidence-Based',
    line1: 'Evidence-Based',
    line2: 'Clinical Protocols',
    iconName: 'check',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    line1: 'Ongoing Support',
    line2: 'Every step of the way',
    iconName: 'clock',
  },
];

/**
 * 3. Our Men's Health Services (Reusing PeptidesProgramsGrid / ServicesProgramsGrid)
 */
export const defaultMensHealthServicesConfig: PeptidesProgramsGridConfig = {
  headline: "Our Men's Health Services",
  subheadline:
    'Evidence-based care customized to your body, your goals, and your life.',
  bgColor: 'bg-white',
  defaultCtaText: 'Learn More →',
  programs: [
    {
      id: 'hormone-optimization',
      title: 'Hormone Optimization',
      subtitle: '(TRT/HRT)',
      description:
        'Support energy, libido, mood, and muscle mass with bioidentical hormone replacement therapy.',
      badge: 'MOST POPULAR',
      isPopular: true,
      imageSrc: '/assets/images/mens-card1.jpg',
      imageAlt: 'Hormone Optimization for Men',
      features: [
        'Testosterone Replacement (TRT)',
        'Bioidentical Hormone Therapy',
        'Comprehensive Lab Testing',
        'Ongoing Physician Monitoring',
      ],
      ctaText: 'Learn More →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'weight-management',
      title: 'Weight Management',
      description:
        'Clinically proven medical weight loss programs tailored to help you lose fat and preserve lean muscle.',
      imageSrc: '/assets/images/mens-card2.jpg',
      imageAlt: 'Medical Weight Loss and Management for Men',
      features: [
        'GLP-1 Medications (Semaglutide/Tirzepatide)',
        'Metabolic Health Optimization',
        'Personalized Nutrition Guidance',
      ],
      ctaText: 'Learn More →',
      ctaHref: ROUTES.WEIGHT_MANAGEMENT,
    },
    {
      id: 'peptides-longevity',
      title: 'Peptides & Longevity',
      description:
        'Advanced cellular support to accelerate recovery, enhance cognitive focus, and promote healthy aging.',
      imageSrc: '/assets/images/mens-card3.jpg',
      imageAlt: 'Peptides and Longevity Programs for Men',
      features: [
        'BPC-157 & Healing Peptides',
        'Growth Hormone Secretagogues',
        'Mitochondrial & Cellular Support',
      ],
      ctaText: 'Learn More →',
      ctaHref: ROUTES.PEPTIDES,
    },
    {
      id: 'direct-primary-care',
      title: 'Direct Primary Care',
      subtitle: '(DPC)',
      description:
        'Direct access to your dedicated physician with unhurried visits and transparent membership pricing.',
      imageSrc: '/assets/images/mens-card4.jpg',
      imageAlt: 'Direct Primary Care for Men',
      features: [
        'Same-Day & Next-Day Virtual Visits',
        'Comprehensive Preventive Screenings',
        'Chronic Condition Management',
      ],
      ctaText: 'Learn More →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'mental-health',
      title: 'Mental Health',
      description:
        'Confidential care for stress, anxiety, focus, and overall emotional and cognitive well-being.',
      imageSrc: '/assets/images/mens-card5.jpg',
      imageAlt: 'Mental Health and Cognitive Support for Men',
      features: [
        'Anxiety & Stress Protocols',
        'Cognitive Focus & Sleep Optimization',
        'Non-Judgmental Confidential Care',
      ],
      ctaText: 'Learn More →',
      ctaHref: ROUTES.MENTAL_HEALTH,
    },
  ],
};

/**
 * 4. How It Works (Reusing HowItWorksSection)
 */
export const defaultMensHealthHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Four simple steps to take charge of your health from home.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Complete Medical Intake',
      description:
        'Share your health goals, medical history, and symptoms through our confidential online portal.',
      theme: 'blue',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Clinical Lab Evaluation',
      description:
        'Review comprehensive blood panels and biomarker assessments with your licensed clinician.',
      theme: 'blue',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Personalized Treatment Plan',
      description:
        'Receive prescription protocols formulated specifically for your biology and goals.',
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Discreet Delivery & Ongoing Care',
      description:
        'Medications shipped discreetly to your door with continuous physician follow-ups.',
      theme: 'blue',
      iconName: 'message',
    },
  ],
};

/**
 * 5. Why Choose Solutions Health MD? (Reusing PeptidesLifestyleBanner / ServicesLifestyleBanner)
 */
export const defaultMensHealthWhyChooseConfig: PeptidesLifestyleBannerConfig = {
  headline: 'Why Choose Solutions Health MD?',
  subheadline: "More than treatment — we're your partner in lifelong health.",
  imageSrc: '/assets/images/mens-health-why-choose-banner.png',
  imageAlt: 'Why Choose Solutions Health MD Mens Health',
  floatingScript: 'Hope\nHealing\nPurpose',
  scriptColor: 'text-[#1D70B8]',
  pillars: [
    {
      id: 'more-energy',
      line1: 'More Energy',
      line2: '& Vitality',
      iconName: 'lightning',
    },
    {
      id: 'build-muscle',
      line1: 'Build & Maintain',
      line2: 'Muscle',
      iconName: 'dumbbell',
    },
    {
      id: 'better-health',
      line1: 'Better',
      line2: 'Health',
      iconName: 'shield',
    },
    {
      id: 'improved-focus',
      line1: 'Improved',
      line2: 'Focus',
      iconName: 'lightbulb',
    },
    {
      id: 'healthy-aging',
      line1: 'Healthy',
      line2: 'Aging',
      iconName: 'leaf',
    },
    {
      id: 'medical-guidance',
      line1: 'Medical',
      line2: 'Guidance',
      iconName: 'doctor',
    },
  ],
};

/**
 * 6. Testimonials (Reusing TestimonialsSection)
 */
export const defaultMensHealthTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real men. Real transformations.',
  description:
    'Discover how personalized protocols helped men reclaim their drive, energy, and strength.',
  viewAllLink: {
    label: 'View More Reviews →',
    href: '#reviews',
  },
  testimonials: [
    {
      id: 'review-1',
      rating: 5,
      verified: true,
      quote:
        '“Starting TRT was a turning point. My energy levels are back to where they were in my twenties, workouts feel productive again, and mental fog is completely gone.”',
      patientName: 'Marcus T.',
      location: 'Patient for 8 mos',
      treatment: 'Hormone Optimization (TRT)',
      metricValue: '+85%',
      metricLabel: 'energy boost',
    },
    {
      id: 'review-2',
      rating: 5,
      verified: true,
      quote:
        '“Down 32 lbs and feeling better than ever. The medical guidance from Solutions Health MD made all the difference — safe, steady, and sustainable.”',
      patientName: 'Dave R.',
      location: 'Patient for 6 mos',
      treatment: 'Medical Weight Loss',
      metricValue: '-32 lbs',
      metricLabel: 'total fat loss',
    },
    {
      id: 'review-3',
      rating: 5,
      verified: true,
      quote:
        '“Having a doctor who actually listens and proactively manages my biomarkers has changed how I approach my health and longevity.”',
      patientName: 'Brian K.',
      location: 'Patient for 1 yr',
      treatment: 'Peptides & Primary Care',
      metricValue: '100%',
      metricLabel: 'satisfaction',
    },
  ],
};

/**
 * 7. FAQ & Health Insights (Reusing FaqInsightsSection)
 */
export const defaultMensHealthFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'Do I need blood work before starting testosterone or hormone therapy?',
      answer:
        'Yes. Safety and precision are paramount. We require a comprehensive clinical blood panel to measure your baseline total and free testosterone, estradiol, PSA, CBC, and metabolic markers before prescribing any hormone therapy.',
    },
    {
      id: 'faq-2',
      question: 'How does telehealth work for men’s health care?',
      answer:
        'Our process is completely virtual and secure. You complete an online intake, submit or complete local lab work, and meet with a board-certified physician via video or phone to review results and customize your plan.',
    },
    {
      id: 'faq-3',
      question: 'Are medications shipped discreetly to my door?',
      answer:
        'Yes. All prescriptions are compounded and fulfilled by accredited US compounding pharmacies and delivered right to your doorstep in discreet, temperature-controlled packaging.',
    },
    {
      id: 'faq-4',
      question: 'Can I combine TRT with weight loss or peptide therapies?',
      answer:
        'Yes, many patients achieve synergistic benefits combining hormone balance with GLP-1 weight management or recovery peptides. Your clinician will evaluate interactions and customize a safe protocol.',
    },
    {
      id: 'faq-5',
      question: 'How frequently will my clinician follow up on my protocol?',
      answer:
        'We monitor you continuously. Routine check-ins and lab re-evaluations occur every 90 days or sooner if dosage adjustments or symptom checks are indicated.',
    },
    {
      id: 'faq-6',
      question: 'Is my personal and medical information private?',
      answer:
        'Completely. We adhere to rigorous HIPAA standards and utilize end-to-end 256-bit encryption across all digital records and communications.',
    },
  ],
  insightsHeadline: 'Men’s Health Insights & Articles',
  insightsViewAllLink: {
    label: 'Explore All Articles →',
    href: ROUTES.BLOGS,
  },
  articles: [
    {
      id: 'art-1',
      title: 'Understanding Testosterone & Healthy Vitality After 35',
      slug: 'understanding-testosterone-after-35',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Doctor discussing hormone health with patient',
      category: 'Hormone Health',
      readTime: '5 min read',
    },
    {
      id: 'art-2',
      title: 'Preserving Lean Muscle During Medical Weight Loss',
      slug: 'preserving-muscle-medical-weight-loss',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'Patient exercising and maintaining strength',
      category: 'Fitness & Weight',
      readTime: '4 min read',
    },
    {
      id: 'art-3',
      title: 'The Longevity Playbook: Peptides & Cellular Recovery',
      slug: 'longevity-playbook-peptides',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/urgent-care.jpg',
      alt: 'Medical laboratory research team',
      category: 'Longevity',
      readTime: '6 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-1',
    title: 'The Modern Executive: Combining DPC & Preventive Diagnostics',
    slug: 'modern-executive-dpc-preventive-diagnostics',
    href: ROUTES.BLOGS,
    imageUrl: '/assets/images/articles/dermatology.jpg',
    alt: 'Healthcare provider discussing preventive care',
    category: 'Preventive Care',
    readTime: '7 min read',
  },
};
