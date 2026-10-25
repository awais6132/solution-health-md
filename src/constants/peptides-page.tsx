import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { TrustFeatureItem } from '@/types/trust-features';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import {
  PeptidesWhatAreConfig,
  PeptidesProgramsGridConfig,
  PeptidesWhyChooseConfig,
  PeptidesLifestyleBannerConfig,
} from '@/types/peptides-page';

/**
 * 1. Hero Banner Configuration (Reusing ServicesHero)
 */
export const defaultPeptidesHeroConfig: ServicesHeroConfig = {
  badge: 'PEPTIDES & LONGEVITY',
  title: (
    <>
      <span className="text-[#0E6C9B] block">Optimize Today.</span>
      <span className="text-[#4B9B44] block">A Healthier Tomorrow.</span>
    </>
  ),
  description:
    'Science-backed peptides to help you look, feel, and perform at your best — with a personalized plan designed by licensed providers to support energy, recovery, and long-term wellness at every stage of life.',
  primaryCta: {
    label: 'Start Today →',
    href: ROUTES.FIND_MY_CARE,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/peptides-hero-banner.png',
  imageAlt: 'Optimize Today A Healthier Tomorrow Peptides and Longevity',
  imagePosition: 'right center',
  imageAlign: 'full',
  overlayGradient:
    'bg-gradient-to-r from-white via-white/80 via-35% to-transparent w-full md:w-[58%] lg:w-[48%]',
  floatingTagline: (
    <span className="inline-block text-left sm:text-center leading-[1.15]">
      <span className="block text-[#1D70B8]">More</span>
      <span className="block text-[#1D70B8]">Energy</span>
      <span className="block text-[#1D70B8]">A Healthier</span>
      <span className="block text-[#1D70B8]">You</span>
    </span>
  ),
};

/**
 * 2. Trust Highlights Bar (Reusing TrustFeatures)
 */
export const peptidesTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'free-consultation',
    title: 'Free Consultation',
    line1: 'Free Consultation',
    line2: '100% Confidential',
    iconName: 'lock',
  },
  {
    id: 'personalized-care',
    title: 'Personalized Care',
    line1: 'Personalized Care',
    line2: 'Treatment plan',
    iconName: 'shield',
  },
  {
    id: 'home-delivery',
    title: 'Fast & Discreet',
    line1: 'Fast & Discreet',
    line2: 'Home delivery',
    iconName: 'clock',
  },
  {
    id: 'certified-doctors',
    title: 'Real Board-Certified',
    line1: 'Real Board-Certified',
    line2: 'Doctors',
    iconName: 'video',
  },
  {
    id: 'ongoing-support',
    title: 'Ongoing Support',
    line1: 'Ongoing Support',
    line2: 'Every step of the way',
    iconName: 'check',
  },
];

/**
 * 3. How It Works (Reusing HowItWorksSection)
 */
export const defaultPeptidesHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Simple, discreet steps to start your peptide journey.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Take the Online Assessment',
      description:
        'Share health goals and medical history through our secure online intake form.',
      theme: 'blue',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Provider Reviews Your Information',
      description:
        'A licensed clinician evaluates your needs and determines the optimal peptide protocol.',
      theme: 'blue',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Get Your Treatment Plan',
      description:
        'Receive clinical-grade peptides prescribed and shipped directly to your door.',
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support',
      description:
        'Track your progress with check-ins and dosage adjustments whenever needed.',
      theme: 'blue',
      iconName: 'message',
    },
  ],
};

/**
 * 4. Testimonials (Reusing TestimonialsSection)
 */
export const defaultPeptidesTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are living healthier, happier lives.',
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
        '“The GLP-1 and peptide program completely shifted how I feel daily. My energy levels are up, and I have clarity I haven’t felt in months. Truly life-changing!”',
      patientName: 'Marcus T.',
      location: 'Patient for 6 mos',
      treatment: 'Peptides & Recovery',
      metricValue: '-35 lbs',
      metricLabel: 'and counting',
    },
    {
      id: 'review-2',
      rating: 5,
      verified: true,
      quote:
        '“Finding a doctor who actually listens and customizes a peptide program to my goals was so refreshing. My recovery after workouts is faster than ever.”',
      patientName: 'Sarah K.',
      location: 'Patient for 1 yr',
      treatment: 'Vitality Protocol',
      metricValue: '+45%',
      metricLabel: 'energy & stamina',
    },
    {
      id: 'review-3',
      rating: 5,
      verified: true,
      quote:
        '“The NAD+ and immune therapy have been a game-changer. Clean, and made the whole process easy from start to finish. I feel so much sharper and energized.”',
      patientName: 'David R.',
      location: 'Patient for 4 mos',
      treatment: 'Anti-Aging & Focus',
      metricValue: '100%',
      metricLabel: 'satisfaction',
    },
  ],
};

/**
 * 5. FAQ & Health Insights (Reusing FaqInsightsSection)
 */
export const defaultPeptidesFaqConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-1',
      question: 'Do I need a prescription to order peptides?',
      answer:
        'Yes. All peptide therapies at Solutions Health MD are clinical-grade medications that require a valid prescription. Our board-certified clinicians review your health profile to ensure safe and effective prescribing.',
    },
    {
      id: 'faq-2',
      question: 'How is peptide medication packaged and shipped?',
      answer:
        'Medications are shipped via temperature-controlled, discreet packaging directly from licensed US compounding pharmacies right to your doorstep.',
    },
    {
      id: 'faq-3',
      question: 'How does the initial doctor consultation work?',
      answer:
        'You start by completing our simple online medical questionnaire. A licensed medical provider will evaluate your symptoms, health goals, and medical history to customize your protocol.',
    },
    {
      id: 'faq-4',
      question: 'Is my medical information kept secure and confidential?',
      answer:
        'Absolutely. Solutions Health MD complies strictly with all federal HIPAA standards and utilizes 256-bit bank-grade encryption to ensure full confidentiality.',
    },
    {
      id: 'faq-5',
      question: 'How quickly will I notice improvements in my energy and recovery?',
      answer:
        'Most patients observe noticeable improvements in stamina, mental focus, and recovery within 2 to 4 weeks, with compounding cellular benefits continuing over several months.',
    },
    {
      id: 'faq-6',
      question: 'Can I combine peptide therapy with other health treatments?',
      answer:
        'Yes, peptides frequently complement wellness, weight management, and hormone optimization programs. Your provider will review any ongoing medications to ensure synergy.',
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
      title: 'A Guide to GLP-1 & Peptides in 2026',
      slug: 'guide-glp1-peptides-2026',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Physician analyzing peptide protocols in laboratory',
      category: 'Peptide Science',
      readTime: '5 min read',
    },
    {
      id: 'art-2',
      title: 'Hormone Health & Optimizing Longevity',
      slug: 'hormone-health-optimizing-longevity',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/hormone-health.jpg',
      alt: 'Patient discussing vitality and hormone health',
      category: 'Longevity',
      readTime: '4 min read',
    },
    {
      id: 'art-3',
      title: 'Women & Men’s Recovery Essentials',
      slug: 'recovery-essentials',
      href: ROUTES.BLOGS,
      imageUrl: '/assets/images/articles/urgent-care.jpg',
      alt: 'Medical team discussing health optimization',
      category: 'Performance',
      readTime: '6 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-1',
    title: 'Cellular Health & Mitochondrial Vitality Explained',
    slug: 'cellular-health-mitochondrial-vitality',
    href: ROUTES.BLOGS,
    imageUrl: '/assets/images/articles/dermatology.jpg',
    alt: 'Specialist applying aesthetic and clinical wellness protocol',
    category: 'Mitochondrial Health',
    readTime: '7 min read',
  },
};

/**
 * 6. Section 3: "What Are Peptides?" Configuration
 */
export const defaultPeptidesWhatAreConfig: PeptidesWhatAreConfig = {
  title: 'What Are Peptides?',
  description:
    'Peptides are naturally occurring compounds that help regulate key functions in the body. When used under medical supervision, certain peptides can support healing, recovery, metabolism, hormone balance, cognitive function, and healthy aging — helping you feel and perform your best.',
  items: [
    {
      id: 'support-energy',
      title: 'Support',
      subtitle: 'Energy & Vitality',
      iconName: 'lightning',
    },
    {
      id: 'enhance-recovery',
      title: 'Enhance',
      subtitle: 'Recovery &',
      subtitleLine2: 'Performance',
      iconName: 'grid',
    },
    {
      id: 'support-cognitive',
      title: 'Support',
      subtitle: 'Cognitive',
      subtitleLine2: 'Function',
      iconName: 'lightbulb',
    },
    {
      id: 'promote-aging',
      title: 'Promote',
      subtitle: 'Healthy Aging',
      iconName: 'plus',
    },
    {
      id: 'optimize-wellness',
      title: 'Optimize',
      subtitle: 'Overall Wellness',
      iconName: 'pulse',
    },
  ],
};

/**
 * 7. Section 4: "Our Peptides & Longevity Programs" Configuration
 */
export const defaultPeptidesProgramsConfig: PeptidesProgramsGridConfig = {
  headline: 'Our Peptides & Longevity Programs',
  subheadline:
    'Personalized protocols designed to help you reach your health and wellness goals.',
  programs: [
    {
      id: 'weight-management',
      title: 'Weight Management Peptides',
      description: 'Support healthy weight, metabolism, and body composition.',
      badge: 'MOST POPULAR',
      isPopular: true,
      imageSrc: '/assets/images/peptides-prog-weight-loss.jpg',
      imageAlt: 'Weight Management Peptides Vials in Laboratory',
      features: [
        'Semaglutide (Blend)',
        'Tirzepatide (Blend)',
        'Other supportive peptides',
        'Personalized dosing plan',
      ],
      ctaText: 'See If I Qualify →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'performance-recovery',
      title: 'Performance & Recovery Peptides',
      description: 'Enhance recovery, muscle growth, and physical performance.',
      imageSrc: '/assets/images/peptides-prog-performance.jpg',
      imageAlt: 'Performance & Recovery Peptides',
      features: [
        'BPC-157',
        'TB-500',
        'Growth Hormone Secretagogues (Ipamorelin, CJC-1295)',
        'Personalized protocols',
      ],
      ctaText: 'See If I Qualify →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'anti-aging-longevity',
      title: 'Anti-Aging & Longevity Peptides',
      description: 'Support healthy aging, cellular function, and overall vitality.',
      imageSrc: '/assets/images/peptides-prog-anti-aging.jpg',
      imageAlt: 'Anti-Aging & Longevity Peptides',
      features: [
        'NAD+',
        'Senolytic Peptides (when appropriate)',
        'Epithalon',
        'Other longevity protocols',
      ],
      ctaText: 'See If I Qualify →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'cognitive-focus',
      title: 'Cognitive & Focus Peptides',
      description: 'Support brain health, mental clarity, and focus.',
      imageSrc: '/assets/images/peptides-prog-cognitive.jpg',
      imageAlt: 'Cognitive & Focus Peptides',
      features: [
        'Semax',
        'Selank',
        'Dihexa (when appropriate)',
        'Other longevity protocols',
      ],
      ctaText: 'See If I Qualify →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
    {
      id: 'wellness-immune',
      title: 'Wellness & Immune Support Peptides',
      description: 'Support immune health, healing, and overall wellness.',
      imageSrc: '/assets/images/peptides-prog-immune.jpg',
      imageAlt: 'Wellness & Immune Support Peptides',
      features: [
        'Thymosin Alpha-1 (Ta1)',
        'KPV',
        'MOTS-C',
        'Other supportive peptides',
      ],
      ctaText: 'See If I Qualify →',
      ctaHref: ROUTES.FIND_MY_CARE,
    },
  ],
};

/**
 * 8. Section 5: "Why Choose Solutions Health MD?" Configuration
 */
export const defaultPeptidesWhyChooseConfig: PeptidesWhyChooseConfig = {
  headline: 'Why Choose Solutions Health MD?',
  subheadline:
    'A comprehensive, medically guided approach to peptides and longevity.',
  items: [
    {
      id: 'licensed-providers',
      title: 'Licensed',
      subtitle: 'U.S. Providers',
      iconName: 'doctor',
    },
    {
      id: 'personalized-plans',
      title: 'Personalized',
      subtitle: 'Treatment Plans',
      iconName: 'clipboard',
    },
    {
      id: 'evidence-protocols',
      title: 'Evidence-Based',
      subtitle: 'Protocols',
      iconName: 'chart',
    },
    {
      id: 'monitoring-adjustments',
      title: 'Ongoing Monitoring',
      subtitle: '& Adjustments',
      iconName: 'shield',
    },
    {
      id: 'home-delivery',
      title: 'Convenient',
      subtitle: 'Home Delivery',
      iconName: 'home',
    },
    {
      id: 'whole-person-care',
      title: 'Whole-Person Care',
      subtitle: 'Mind, Body & Spirit',
      iconName: 'heart',
    },
  ],
};

/**
 * 9. Section 7: "More Than Peptides. A Healthier You." Configuration
 */
export const defaultPeptidesLifestyleBannerConfig: PeptidesLifestyleBannerConfig = {
  headline: 'More Than Peptides. A Healthier You.',
  subheadline: 'Targeted support for how you want to feel, perform, and live.',
  imageSrc: '/assets/images/peptides-lifestyle-banner.png',
  imageAlt: 'More Than Peptides A Healthier You Wellness Lifestyle',
  floatingScript: 'Hope\nHealing\nPurpose',
  pillars: [
    {
      id: 'more-energy',
      line1: 'More',
      line2: 'Energy',
      iconName: 'lightning',
    },
    {
      id: 'better-recovery',
      line1: 'Better',
      line2: 'Recovery',
      iconName: 'recovery',
    },
    {
      id: 'mental-clarity',
      line1: 'Mental',
      line2: 'Clarity',
      iconName: 'lightbulb',
    },
    {
      id: 'better-sleep',
      line1: 'Better',
      line2: 'Sleep',
      iconName: 'moon',
    },
    {
      id: 'healthy-metabolism',
      line1: 'Healthy',
      line2: 'Metabolism',
      iconName: 'heart',
    },
    {
      id: 'healthy-aging',
      line1: 'Healthy',
      line2: 'Aging',
      iconName: 'person',
    },
    {
      id: 'peak-performance',
      line1: 'Peak',
      line2: 'Performance',
      iconName: 'sparkles',
    },
  ],
};




