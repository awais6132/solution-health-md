import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';

/**
 * 1. Hero Banner Configuration (Reusing ServicesHero)
 */
export const defaultMentalHealthHeroConfig: ServicesHeroConfig = {
  badge: 'MENTAL HEALTH',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Faith-Based Support</span>
      <span className="text-[#4B9B44] block">for a Stronger You.</span>
    </>
  ),
  description:
    "Experience compassionate, professional counseling based on a Christian worldview, providing practical guidance for life's challenges.",
  primaryCta: {
    label: 'See If I Qualify →',
    href: ROUTES.FIND_MY_CARE,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/mental-health-hero-banner.jpg',
  imageAlt: 'Faith-Based Support for a Stronger You Mental Health',
  imagePosition: 'right center',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white/85 via-white/45 via-35% to-transparent w-full md:w-[56%] lg:w-[48%]',
  floatingTagline: (
    <span className="inline-block text-left sm:text-center leading-[1.15]">
      <span className="block text-[#1D70B8]">Renew Your Mind.</span>
      <span className="block text-[#1D70B8]">Find Hope.</span>
      <span className="block text-[#1D70B8]">Live With Purpose.</span>
    </span>
  ),
};

/**
 * 2. Trust Highlights Bar (Reusing TrustFeatures)
 */
export const mentalHealthTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'faith-based-care',
    title: 'Faith-Based Care',
    line1: 'Faith-Based Care',
    line2: 'Rooted in Christian values',
    iconName: 'shield',
  },
  {
    id: 'licensed-clinicians',
    title: 'Licensed Clinicians',
    line1: 'Licensed Clinicians',
    line2: 'Professional expertise',
    iconName: 'video',
  },
  {
    id: 'confidential-visits',
    title: 'Confidential Visits',
    line1: 'Confidential Visits',
    line2: '100% HIPAA secure',
    iconName: 'lock',
  },
  {
    id: 'personalized-care',
    title: 'Personalized Care',
    line1: 'Personalized Care',
    line2: 'Tailored to your journey',
    iconName: 'check',
  },
  {
    id: 'holistic-wellness',
    title: 'Holistic Wellness',
    line1: 'Holistic Wellness',
    line2: 'Mind, body & soul',
    iconName: 'clock',
  },
];

/**
 * 3. How It Works (Reusing HowItWorksSection)
 */
export const defaultMentalHealthHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Simple, compassionate online faith-based counseling in 4 easy steps.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Take the Online Assessment',
      description:
        'Complete a brief confidential questionnaire about your emotional and spiritual wellness goals.',
      theme: 'blue',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Provide Intake Information',
      description:
        "Share what you're navigating and your preferences for faith-integrated counseling support.",
      theme: 'green',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Get Your Care Plan',
      description:
        'Connect with a licensed Christian clinician who designs a personalized path for renewal.',
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support',
      description:
        'Engage in virtual video visits, secure messaging, and continuous pastoral encouragement.',
      theme: 'green',
      iconName: 'message',
    },
  ],
};

/**
 * 4. Real People Real Results (Reusing TestimonialsSection)
 */
export const defaultMentalHealthTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are finding peace, healing, and purpose.',
  viewAllLink: {
    label: 'Explore More Stories →',
    href: `${ROUTES.SERVICES}#reviews`,
  },
  testimonials: [
    {
      id: '1',
      rating: 5,
      verified: true,
      quote:
        '“Integrating Scripture with cognitive therapy gave me the tools to overcome severe panic attacks. I feel anchored in God’s promises again.”',
      patientName: 'Hannah L.',
      location: 'Dallas, TX',
      treatment: 'Anxiety & Faith Care',
      metricValue: '-85%',
      metricLabel: 'Anxiety Reduction',
    },
    {
      id: '2',
      rating: 5,
      verified: true,
      quote:
        '“Our marriage was at a breaking point. Our counselor guided us through forgiveness with Biblical grace and practical communication exercises.”',
      patientName: 'David & Sarah M.',
      location: 'Nashville, TN',
      treatment: 'Couples Counseling',
      metricValue: '+95%',
      metricLabel: 'Relationship Renewal',
    },
    {
      id: '3',
      rating: 5,
      verified: true,
      quote:
        '“Finding a counselor who prays with me and truly understands my Christian faith made all the difference in navigating deep grief.”',
      patientName: 'Rebecca T.',
      location: 'Atlanta, GA',
      treatment: 'Grief & Faith Therapy',
      metricValue: '100%',
      metricLabel: 'Patient Satisfaction',
    },
  ],
};

/**
 * 5. Frequently Asked Questions & Health Insights (Reusing FaqInsightsSection)
 */
export const defaultMentalHealthFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'How is faith integrated into counseling sessions?',
      answer:
        'Our licensed clinicians blend evidence-based psychological modalities (such as CBT) with biblical principles, scripture, and optional prayer, respecting your personal spiritual journey.',
    },
    {
      id: 'faq-2',
      question: 'Are counselors fully licensed in my state?',
      answer:
        'Yes. All our therapists, counselors, and psychiatric providers hold valid state licenses and verified clinical credentials alongside specialized training in faith-integrated care.',
    },
    {
      id: 'faq-3',
      question: 'How do virtual counseling appointments work?',
      answer:
        'Sessions take place through our secure, HIPAA-compliant telehealth video portal from the privacy and comfort of your home on your phone, tablet, or computer.',
    },
    {
      id: 'faq-4',
      question: 'Can clinicians prescribe medication if clinically appropriate?',
      answer:
        'Yes. Our licensed psychiatric nurse practitioners and physicians evaluate medical needs and prescribe psychotropic medications when clinically indicated.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'Explore All Treatments →',
    href: ROUTES.SERVICES,
  },
  articles: [
    {
      id: 'art-1',
      title: 'Mental Health in a Busy World: Biblical Insights',
      slug: 'mental-health-busy-world',
      href: `${ROUTES.SERVICES}#mental-health`,
      imageUrl: '/assets/images/articles/mental-health.jpg',
      alt: 'Mental health in a busy world',
      category: 'Mental Wellness',
      readTime: '5 min read',
    },
    {
      id: 'art-2',
      title: 'The Science of Gratitude and Spiritual Renewal',
      slug: 'science-gratitude-renewal',
      href: `${ROUTES.SERVICES}#mental-health`,
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'Gratitude and spiritual renewal',
      category: 'Spiritual Health',
      readTime: '4 min read',
    },
    {
      id: 'art-3',
      title: 'Navigating Anxiety with Faith and Clinical Tools',
      slug: 'navigating-anxiety-faith',
      href: `${ROUTES.SERVICES}#mental-health`,
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Anxiety and clinical tools',
      category: 'Clinical Guidance',
      readTime: '6 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-1',
    title: 'Faith-Based Mental Health: A Comprehensive Clinical Guide',
    slug: 'faith-based-mental-health-guide',
    href: `${ROUTES.SERVICES}#mental-health`,
    imageUrl: '/assets/images/mental Health.jpg',
    alt: 'Faith-based mental health guide',
    category: 'Featured Guide',
    readTime: '7 min read',
    description:
      'Discover how clinical evidence and timeless biblical wisdom combine to foster lasting emotional healing, mental resilience, and spiritual peace.',
  },
};
