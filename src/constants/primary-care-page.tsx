import React from 'react';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import {
  PrimaryCareApproachConfig,
  PrimaryCarePricingConfig,
  PrimaryCareIncludedConfig,
} from '@/types/primary-care-page';
import { ROUTES } from './routes';

/* ─────────────────────────────────────────────
   1. Hero Banner Configuration
───────────────────────────────────────────── */
export const defaultPrimaryCareHeroConfig: ServicesHeroConfig = {
  badge: 'PRIMARY CARE PLAN',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Personalized Primary Care</span>
      <span className="text-[#3B8A3E] block">for a Healthier You.</span>
    </>
  ),
  description:
    'Direct Primary Care gives you unlimited access to a dedicated provider, personalized wellness plans, and proactive support — without insurance barriers.',
  primaryCta: {
    label: 'See Plans Only >',
    href: '#plans',
  },
  secondaryCta: {
    label: 'Book a Call',
    href: ROUTES.FIND_MY_CARE,
  },
  imageSrc: '/assets/images/primary-care-hero-family.jpg',
  imageAlt: 'Personalized Primary Care for a Healthier You',
  imagePosition: 'center center',
  imageAlign: 'full',
  floatingTagline: 'Care for Every Stage of life',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/85 via-40% to-transparent w-full md:w-[60%] lg:w-[54%]',
};

/* ─────────────────────────────────────────────
   2. Trust Highlights Bar (5 Badges)
───────────────────────────────────────────── */
export const primaryCareTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'pc-trust-1',
    title: 'Dedicated Healthcare',
    line1: 'Dedicated',
    line2: 'Healthcare',
    iconName: 'prescription',
  },
  {
    id: 'pc-trust-2',
    title: 'No Hidden Fees',
    line1: 'No Hidden',
    line2: 'Fees',
    iconName: 'shield',
  },
  {
    id: 'pc-trust-3',
    title: 'Personalized Treatment Plans',
    line1: 'Personalized',
    line2: 'Treatment Plans',
    iconName: 'check',
  },
  {
    id: 'pc-trust-4',
    title: 'Exceptional Clinical Care',
    line1: 'Exceptional',
    line2: 'Clinical Care',
    iconName: 'pill',
  },
  {
    id: 'pc-trust-5',
    title: 'Access to Healthcare Anywhere',
    line1: 'Access to',
    line2: 'Healthcare Anywhere',
    iconName: 'clock',
  },
];

/* ─────────────────────────────────────────────
   3. A Different Approach to Primary Care
───────────────────────────────────────────── */
export const defaultPrimaryCareApproachConfig: PrimaryCareApproachConfig = {
  headline: 'A Different Approach to Primary Care',
  description:
    'We believe healthcare should be personal, accessible, and centered around you. Our Direct Primary Care program gives you unlimited access to a dedicated provider, personalized wellness plans, and proactive support — without insurance barriers and rushed visits.',
  items: [
    {
      id: 'more-time',
      title: 'More Time With You',
      description: 'Extended 30–60 min visits to address all your health concerns thoroughly.',
      iconName: 'clock',
    },
    {
      id: 'personalized',
      title: 'Personalized Care',
      description: 'Customized care plans tailored to your unique biology, goals, and lifestyle.',
      iconName: 'user',
    },
    {
      id: 'proactive',
      title: 'Proactive Approach',
      description: 'Focusing on preventative wellness, early detection, and optimal health.',
      iconName: 'target',
    },
    {
      id: 'whole-person',
      title: 'Whole-Person Care',
      description: 'Addressing physical, mental, and lifestyle factors for complete well-being.',
      iconName: 'heart',
    },
  ],
};

/* ─────────────────────────────────────────────
   4. Choose the Plan That Fits Your Life (4 Tiers)
───────────────────────────────────────────── */
export const defaultPrimaryCarePricingConfig: PrimaryCarePricingConfig = {
  headline: 'Choose the Plan That Fits Your Life',
  subheadline: 'Simple, transparent pricing. No insurance required.',
  tiers: [
    {
      id: 'individual-plan',
      title: 'Individual Plan',
      subtitle: 'For adults seeking personalized, accessible primary care.',
      price: 99,
      period: '/month',
      imageSrc: '/assets/images/primary-care-individual.jpg',
      imageAlt: 'Individual Primary Care Plan Member',
      features: [
        'Full DPC Membership benefits',
        'All general & follow-up visits',
        'Personalized Care Plan development',
        'Annual comprehensive health exam',
        'Prescription refills & care',
        'Direct doctor messaging with quick response',
      ],
      ctaText: 'Get Started >',
      ctaHref: `${ROUTES.SIGNUP}?plan=individual-dpc`,
      isPopular: false,
    },
    {
      id: 'executive-plan',
      title: 'Executive Plan',
      subtitle: 'Comprehensive executive-level healthcare with enhanced support.',
      price: 149,
      period: '/month',
      imageSrc: '/assets/images/primary-care-executive.jpg',
      imageAlt: 'Executive Primary Care Plan Member',
      features: [
        'Everything in Individual Plan',
        'Priority same-day/next-day access',
        'Advanced lab screening protocols',
        'Telehealth & in-clinic preference',
        'Performance & longevity protocol',
        'Personalized care coordinator',
      ],
      ctaText: 'Get Started >',
      ctaHref: `${ROUTES.SIGNUP}?plan=executive-dpc`,
      isPopular: true,
      badge: 'POPULAR CHOICE',
    },
    {
      id: 'couples-plan',
      title: 'Couples Plan',
      subtitle: 'Better health together for couples and partners.',
      price: 189,
      period: '/month',
      imageSrc: '/assets/images/primary-care-couples.jpg',
      imageAlt: 'Couples Primary Care Plan Members',
      features: [
        'Benefits for 2 individual members',
        'Joint wellness & preventative reviews',
        'Shared family portal access',
        'Coordinated appointment scheduling',
        'Discounted lab/imaging referrals',
        'Convenient single monthly payment',
      ],
      ctaText: 'Get Started >',
      ctaHref: `${ROUTES.SIGNUP}?plan=couples-dpc`,
      isPopular: false,
    },
    {
      id: 'children-plan',
      title: 'Children & Young Adults',
      subtitle: 'Ages 18 and under with enrolled adult.',
      price: 79,
      period: '/month',
      imageSrc: '/assets/images/primary-care-young-adult.jpg',
      imageAlt: 'Children and Young Adults Primary Care Member',
      features: [
        'Ages 18 & under',
        'Available with enrolled adult',
        'Well-child checkups & sick visits',
        'School & sports physical exams',
        'Vaccine guidance & minor illnesses',
        'Direct doctor messaging with parents',
      ],
      ctaText: 'Get Started >',
      ctaHref: `${ROUTES.SIGNUP}?plan=young-adult-dpc`,
      isPopular: false,
    },
  ],
};

/* ─────────────────────────────────────────────
   5. What's Included in All Plans? (8 Items)
───────────────────────────────────────────── */
export const defaultPrimaryCareIncludedConfig: PrimaryCareIncludedConfig = {
  headline: "What's Included in All Plans?",
  subheadline: 'Comprehensive primary care designed around you.',
  features: [
    { id: 'inc-1', title: 'Same-Day / Next-Day Visits', iconName: 'calendar' },
    { id: 'inc-2', title: 'Preventive Care', iconName: 'shield' },
    { id: 'inc-3', title: 'Prescription & Refill Mgmt', iconName: 'pill' },
    { id: 'inc-4', title: 'Chronic Condition Management', iconName: 'activity' },
    { id: 'inc-5', title: 'Annual Wellness Exam', iconName: 'clipboard' },
    { id: 'inc-6', title: 'Direct Doctor Messaging', iconName: 'message' },
    { id: 'inc-7', title: 'Virtual & In-Person Visits', iconName: 'video' },
    { id: 'inc-8', title: 'Discounted Labs', iconName: 'flask' },
  ],
};

/* ─────────────────────────────────────────────
   6. How It Works (4 Easy Steps)
───────────────────────────────────────────── */
export const defaultPrimaryCareHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Getting started with Direct Primary Care is simple and seamless.',
  steps: [
    {
      id: 'pc-step-1',
      stepNumber: 1,
      title: 'Choose Your Plan',
      description: 'Select the membership tier that fits your health needs and lifestyle.',
      theme: 'green',
      iconName: 'file-text',
    },
    {
      id: 'pc-step-2',
      stepNumber: 2,
      title: 'Meet Your Provider',
      description: 'Schedule your initial comprehensive consultation to review your health history and goals.',
      theme: 'blue',
      iconName: 'user',
    },
    {
      id: 'pc-step-3',
      stepNumber: 3,
      title: 'Get Your Personalized Plan',
      description: 'Receive a customized care plan tailored to support your long-term wellness.',
      theme: 'green',
      iconName: 'clipboard',
    },
    {
      id: 'pc-step-4',
      stepNumber: 4,
      title: 'Stay Supported',
      description: 'Enjoy unlimited visits, direct messaging, and proactive care year-round.',
      theme: 'blue',
      iconName: 'message',
    },
  ],
};

/* ─────────────────────────────────────────────
   7. Real people. Real results. (Testimonials)
───────────────────────────────────────────── */
export const defaultPrimaryCareTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are living healthier, happier lives.',
  viewAllLink: {
    label: 'View More Reviews →',
    href: '#reviews',
  },
  testimonials: [
    {
      id: 'rev-1',
      patientName: 'Marcus R.',
      location: 'Patient for 6 mos',
      treatment: 'Executive Member',
      metricValue: '-38 lbs',
      metricLabel: 'and BP normalized',
      rating: 5,
      verified: true,
      quote:
        '“The direct access to my physician changed everything. No more waiting weeks for an appointment. When I needed guidance, my doctor was literally a text away.”',
    },
    {
      id: 'rev-2',
      patientName: 'Sarah M.',
      location: 'Patient for 1 yr',
      treatment: 'Family Member',
      metricValue: '+65%',
      metricLabel: 'energy & vitality',
      rating: 5,
      verified: true,
      quote:
        '“Having a doctor that takes 45 minutes to listen and look at the whole picture is something I have never experienced before. Solutions Health MD has been a blessing.”',
    },
    {
      id: 'rev-3',
      patientName: 'David K.',
      location: 'Patient for 8 mos',
      treatment: 'Couples Plan Member',
      metricValue: '100%',
      metricLabel: 'satisfaction',
      rating: 5,
      verified: true,
      quote:
        '“My wife and I joined the Couples Plan. Having our preventative labs, prescriptions, and visits managed in one simple membership saved us thousands.”',
    },
  ],
};

/* ─────────────────────────────────────────────
   8. Frequently Asked Questions & Health Insights
───────────────────────────────────────────── */
export const defaultPrimaryCareFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'What is Direct Primary Care (DPC)?',
      answer:
        'Direct Primary Care is an innovative healthcare model where patients pay a straightforward monthly membership fee directly to their doctor. In return, you receive unlimited visits, direct messaging, extended appointment times, and highly personalized care without insurance interference or co-pays.',
    },
    {
      id: 'faq-2',
      question: 'Do I still need health insurance?',
      answer:
        'While our DPC membership covers all of your day-to-day primary care, preventative visits, and routine clinical needs, we recommend having catastrophic health insurance or a high-deductible health plan (HDHP) for unexpected emergencies, surgeries, or major hospitalizations.',
    },
    {
      id: 'faq-3',
      question: 'How do virtual and in-person visits work?',
      answer:
        'You can easily book same-day or next-day appointments through your patient portal. Depending on your preference and clinical need, you can meet with your doctor via secure high-definition telehealth or visit our clinic in person.',
    },
    {
      id: 'faq-4',
      question: 'Are labs and prescription medications included?',
      answer:
        'Routine in-office tests are included in your membership. For external specialized lab panels and prescriptions, we offer heavily discounted wholesale pricing that is often up to 80% cheaper than traditional insurance co-pays.',
    },
    {
      id: 'faq-5',
      question: 'Can I cancel my membership at any time?',
      answer:
        'Yes, our memberships are month-to-month with no long-term contracts. You can cancel at any time with a 30-day notice, though most of our patients choose to remain long-term for continuous preventative health management.',
    },
    {
      id: 'faq-6',
      question: 'How do I get started?',
      answer:
        'Simply select your plan above, complete our quick 2-minute online intake, and schedule your initial comprehensive wellness consultation with your dedicated physician.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'Explore All Articles →',
    href: ROUTES.BLOGS,
  },
  articles: [
    {
      id: 'art-1',
      title: 'A Guide to Direct Primary Care: Healthcare Built Around You',
      slug: 'guide-direct-primary-care',
      category: 'PRIMARY CARE',
      readTime: '4 min read',
      imageUrl: '/assets/images/fever-consultation.jpg',
      alt: 'Doctor consulting patient',
      href: ROUTES.BLOGS,
    },
    {
      id: 'art-2',
      title: 'Hormone Health & Energy: Strategies for Lasting Vitality',
      slug: 'hormone-health-energy',
      category: 'WELLNESS',
      readTime: '6 min read',
      imageUrl: '/assets/images/urgent-care-doctor-schedule.jpg',
      alt: 'Doctor reviewing medical schedule',
      href: ROUTES.BLOGS,
    },
    {
      id: 'art-3',
      title: 'The Vital Role of Preventative Care in Lifelong Longevity',
      slug: 'preventative-care-longevity',
      category: 'LONGEVITY',
      readTime: '5 min read',
      imageUrl: '/assets/images/telemedicine.png',
      alt: 'Telemedicine care',
      href: ROUTES.BLOGS,
    },
  ],
  featuredArticle: {
    id: 'feat-pc-1',
    title: 'The Future of Preventative Medicine & Direct Primary Care',
    slug: 'future-of-preventative-medicine',
    category: 'WELLNESS INSIGHTS',
    readTime: '6 min read',
    imageUrl: '/assets/images/urgent-care-doctor-schedule.jpg',
    alt: 'Healthcare provider discussing wellness plan',
    href: ROUTES.BLOGS,
    description:
      'Learn how direct access to dedicated clinicians is transforming personal health outcomes across the country.',
  },
};

/* ─────────────────────────────────────────────
   9. Lifestyle Mountain Banner
───────────────────────────────────────────── */
export const defaultPrimaryCareLifestyleBannerConfig = {
  headline: 'More Than Primary Care. A Healthier You.',
  subheadline: 'Proactive, personalized care designed around you.',
  floatingScript: 'Healthier Today\nBrighter Tomorrow',
  scriptColor: 'text-[#0E6C9B]',
  imageSrc: '/assets/images/peptides-lifestyle-banner.png',
  imageAlt: 'More Than Primary Care. A Healthier You.',
  pillars: [
    { id: 'lp-1', line1: 'Unlimited', line2: 'Visits', iconName: 'sparkles' },
    { id: 'lp-2', line1: 'No Insurance', line2: 'Barriers', iconName: 'shield' },
    { id: 'lp-3', line1: 'Same-Day', line2: 'Access', iconName: 'lightning' },
    { id: 'lp-4', line1: 'Direct Doctor', line2: 'Access', iconName: 'doctor' },
    { id: 'lp-5', line1: 'Holistic', line2: 'Wellness', iconName: 'heart' },
    { id: 'lp-6', line1: 'Personalized', line2: 'Care Plan', iconName: 'recovery' },
  ],
};
