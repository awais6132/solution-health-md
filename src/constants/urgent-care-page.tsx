import React from 'react';
import { ROUTES } from './routes';
import { ServicesHeroConfig } from '@/types/services-page';
import { HowItWorksSectionConfig } from '@/types/how-it-works';
import { TestimonialsConfig } from '@/types/testimonials';
import { FaqInsightsConfig } from '@/types/faq-insights';
import {
  UrgentCarePricingTabsConfig,
  ConditionsWeTreatConfig,
  QualityCareScheduleConfig,
  CommonPrescriptionsConfig,
  UrgentCareTriageConfig,
} from '@/types/urgent-care-page';

/**
 * 1. Hero Banner Configuration (Reuses ServicesHero Component)
 * Exact match to Figma design
 */
export const defaultUrgentCareHeroConfig: ServicesHeroConfig = {
  badge: 'URGENT CARE',
  title: (
    <>
      <span className="text-[#0E6C9B] block md:whitespace-nowrap">Fast Convinient Care</span>
      <span className="text-[#4B9B44] block md:whitespace-nowrap">When you Need it.</span>
    </>
  ),
  description:
    'Skip and long wait room times and get the care you deserve. Consult with a licensed provider online for common illnesses and non-emergency medical conditions.',
  primaryCta: {
    label: 'Get Started Now →',
    href: `${ROUTES.SIGNUP}?service=urgent-care`,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/urgent-care-hero-banner.jpg',
  imageAlt: 'Fast Convenient Urgent Care',
  imagePosition: 'right center',
  imageAlign: 'full',
};

/**
 * 2. Urgent Care Tabbed / Filtered Conditions & Pricing Grid (New Component)
 * Exact match to Figma design
 */
export const defaultUrgentCarePricingTabsConfig: UrgentCarePricingTabsConfig = {
  eyebrow: 'WHAT WE TREAT',
  headline: 'Urgent Care',
  tabs: [
    { id: 'common-illnesses', label: 'Common Illnesses' },
    { id: 'skin-issues', label: 'Skin Issues' },
    { id: 'eye-ear', label: 'Eye & Ear' },
    { id: 'mens-health', label: "Men's Health" },
    { id: 'womens-health', label: "Women's Health" },
    { id: 'infections', label: 'Infections' },
    { id: 'all', label: 'All Conditions' },
  ],
  conditions: [
    // Common Illnesses
    { id: 'fever', name: 'Fever', priceRange: '$39 - $49', category: 'common-illnesses', href: ROUTES.FEVER },
    { id: 'weakness', name: 'Weakness', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=weakness` },
    { id: 'flu', name: 'Flu', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=flu` },
    { id: 'allergies', name: 'Allergies', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=allergies` },
    { id: 'uti', name: 'UTI', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=uti` },
    { id: 'headache', name: 'Headache', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=headache` },
    { id: 'gerd', name: 'GERD', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=gerd` },
    { id: 'others-1', name: 'Others Diseases', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=general` },
    { id: 'cough-cold', name: 'Cough & Cold', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=cough-cold` },
    { id: 'sinus-infection', name: 'Sinus Infection', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=sinus` },
    { id: 'stomach-upset', name: 'Stomach Upset', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=stomach-upset` },
    { id: 'sore-throat', name: 'Sore Throat', priceRange: '$39 - $49', category: 'common-illnesses', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=sore-throat` },

    // Skin Issues
    { id: 'skin-rash', name: 'Skin Rash', priceRange: '$39 - $49', category: 'skin-issues', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=skin-rash` },
    { id: 'eczema', name: 'Eczema Flare-up', priceRange: '$39 - $49', category: 'skin-issues', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=eczema` },
    { id: 'bug-bites', name: 'Bug Bites & Stings', priceRange: '$39 - $49', category: 'skin-issues', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=bug-bites` },
    { id: 'hives', name: 'Hives & Allergic Dermatitis', priceRange: '$39 - $49', category: 'skin-issues', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=hives` },

    // Eye & Ear
    { id: 'pink-eye', name: 'Pink Eye (Conjunctivitis)', priceRange: '$39 - $49', category: 'eye-ear', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=pink-eye` },
    { id: 'ear-infection', name: 'Ear Infection & Pain', priceRange: '$39 - $49', category: 'eye-ear', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=ear-infection` },
    { id: 'stye', name: 'Eye Stye', priceRange: '$39 - $49', category: 'eye-ear', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=stye` },
    { id: 'swimmers-ear', name: "Swimmer's Ear", priceRange: '$39 - $49', category: 'eye-ear', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=swimmers-ear` },

    // Men's Health
    { id: 'mens-hair-loss', name: 'Acute Hair Loss', priceRange: '$39 - $49', category: 'mens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=mens-hair` },
    { id: 'ed-consult', name: 'ED Evaluation', priceRange: '$39 - $49', category: 'mens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=ed-consult` },
    { id: 'prostatitis', name: 'Mild Prostatitis', priceRange: '$39 - $49', category: 'mens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=prostatitis` },
    { id: 'jock-itch', name: 'Jock Itch', priceRange: '$39 - $49', category: 'mens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=jock-itch` },

    // Women's Health
    { id: 'yeast-infection', name: 'Yeast Infection', priceRange: '$39 - $49', category: 'womens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=yeast-infection` },
    { id: 'bacterial-vaginosis', name: 'Bacterial Vaginosis (BV)', priceRange: '$39 - $49', category: 'womens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=bv` },
    { id: 'uti-female', name: 'Urinary Tract Infection', priceRange: '$39 - $49', category: 'womens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=uti` },
    { id: 'menstrual-cramps', name: 'Acute Menstrual Cramps', priceRange: '$39 - $49', category: 'womens-health', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=cramps` },

    // Infections
    { id: 'strep-throat', name: 'Strep Throat', priceRange: '$39 - $49', category: 'infections', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=strep-throat` },
    { id: 'bronchitis', name: 'Acute Bronchitis', priceRange: '$39 - $49', category: 'infections', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=bronchitis` },
    { id: 'upper-respiratory', name: 'Upper Respiratory Infection', priceRange: '$39 - $49', category: 'infections', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=uri` },
    { id: 'cellulitis', name: 'Mild Skin Infection (Cellulitis)', priceRange: '$39 - $49', category: 'infections', href: `${ROUTES.SIGNUP}?service=urgent-care&condition=cellulitis` },
  ],
};

/**
 * 3. Conditions We Treat (12 Icon Badges in 6 Columns)
 * Exact match to Figma design
 */
export const defaultConditionsWeTreatConfig: ConditionsWeTreatConfig = {
  eyebrow: 'WHAT WE DO',
  headline: 'Conditions We Treat',
  subheadline: 'Consult with a doctor online for following conditions including:',
  conditions: [
    {
      id: 'allergy-sinus',
      title: 'Allergy & Sinus',
      iconName: 'wind',
      colorTheme: 'teal',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=allergies`,
    },
    {
      id: 'cough-cold-flu',
      title: 'Cough / Cold / Flu',
      iconName: 'thermometer',
      colorTheme: 'amber',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=flu`,
    },
    {
      id: 'eye-issues',
      title: 'Eye Issues / Pink Eye',
      iconName: 'eye',
      colorTheme: 'blue',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=pink-eye`,
    },
    {
      id: 'nausea-vomiting',
      title: 'Nausea / Vomiting',
      iconName: 'activity',
      colorTheme: 'purple',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=nausea`,
    },
    {
      id: 'rash-skin',
      title: 'Rash / Skin Issues',
      iconName: 'sparkles',
      colorTheme: 'rose',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=rash`,
    },
    {
      id: 'urinary-bladder',
      title: 'Urinary / Bladder',
      iconName: 'droplet',
      colorTheme: 'green',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=uti`,
    },
    {
      id: 'headache-migraine',
      title: 'Headache / Migraine',
      iconName: 'zap',
      colorTheme: 'amber',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=headache`,
    },
    {
      id: 'stomach-pain',
      title: 'Stomach Pain',
      iconName: 'shield-alert',
      colorTheme: 'rose',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=stomach-pain`,
    },
    {
      id: 'pediatric-health',
      title: 'Pediatric Health',
      iconName: 'heart',
      colorTheme: 'blue',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=pediatric`,
    },
    {
      id: 'yeast-infection',
      title: 'Yeast Infection',
      iconName: 'pill',
      colorTheme: 'purple',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=yeast-infection`,
    },
    {
      id: 'dental-infection',
      title: 'Dental Infection',
      iconName: 'smile',
      colorTheme: 'teal',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=dental`,
    },
    {
      id: 'pink-red-eye',
      title: 'Pink / Red Eye',
      iconName: 'eye-off',
      colorTheme: 'rose',
      href: `${ROUTES.SIGNUP}?service=urgent-care&condition=red-eye`,
    },
  ],
};

/**
 * 4. Quality Care, On your Schedule (Split Doctor Banner)
 * Exact match to Figma design
 */
export const defaultQualityCareScheduleConfig: QualityCareScheduleConfig = {
  headline: 'Quality Care, On your Schedule',
  description:
    'Our licensed healthcare providers are available 7 days a week, 365 days a year. Connect with a doctor in minutes via video or phone and get the care and prescriptions if appropriate.',
  imageSrc: '/assets/images/urgent-care-doctor-schedule.png',
  imageAlt: 'Doctor providing telemedicine video consultation on laptop',
  features: [
    {
      id: 'quick-easy',
      title: 'Quick & Easy',
      iconName: 'clock',
      colorTheme: 'blue',
    },
    {
      id: 'no-appointment',
      title: 'No Appointment Needed',
      iconName: 'calendar',
      colorTheme: 'purple',
    },
    {
      id: '50-states',
      title: '50 States Covered',
      iconName: 'shield',
      colorTheme: 'teal',
    },
    {
      id: 'affordable-care',
      title: 'Affordable Care',
      iconName: 'dollar',
      colorTheme: 'green',
    },
  ],
};

/**
 * 5. How It Works Configuration (Reuses HowItWorksSection Component)
 * Exact 4 steps from Figma design
 */
export const defaultUrgentCareHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Urgent care made simple. Get started in just a few minutes.',
  steps: [
    {
      id: 'step-1',
      stepNumber: 1,
      title: 'Take the Online Assessment',
      description:
        'Share your symptoms, photos, and medical history. It only takes a few minutes.',
      theme: 'green',
      iconName: 'file-text',
    },
    {
      id: 'step-2',
      stepNumber: 2,
      title: 'Provider Reviews Your Information',
      description:
        'A licensed provider will review your assessment and may request additional photos or details.',
      theme: 'blue',
      iconName: 'user',
    },
    {
      id: 'step-3',
      stepNumber: 3,
      title: 'Get Your Treatment Plan',
      description:
        "If appropriate, you'll receive a personalized treatment plan, including prescriptions sent to your local pharmacy.",
      theme: 'blue',
      iconName: 'clipboard',
    },
    {
      id: 'step-4',
      stepNumber: 4,
      title: 'Ongoing Support',
      description:
        'Track your progress and message your provider with questions along the way.',
      theme: 'green',
      iconName: 'message',
    },
  ],
};

/**
 * 6. Common Prescriptions If Appropriate (7 Pill Badges)
 * Exact match to Figma design
 */
export const defaultCommonPrescriptionsConfig: CommonPrescriptionsConfig = {
  headline: 'Common Prescriptions(If Appropriate)',
  subheadline:
    'Our doctors can send prescriptions to your local pharmacy including:',
  prescriptions: [
    {
      id: 'rx-antibiotics',
      title: 'Antibiotics',
      iconName: 'pill',
      colorTheme: 'teal',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=antibiotics`,
    },
    {
      id: 'rx-anti-histamines',
      title: 'Anti-Histamines',
      iconName: 'wind',
      colorTheme: 'blue',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=antihistamines`,
    },
    {
      id: 'rx-anti-nausea',
      title: 'Anti-Nausea',
      iconName: 'activity',
      colorTheme: 'purple',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=antinausea`,
    },
    {
      id: 'rx-inhalers',
      title: 'Inhalers',
      iconName: 'inhaler',
      colorTheme: 'cyan',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=inhalers`,
    },
    {
      id: 'rx-eye-drops',
      title: 'Eye Drops',
      iconName: 'droplet',
      colorTheme: 'green',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=eyedrops`,
    },
    {
      id: 'rx-topical-creams',
      title: 'Topical Creams',
      iconName: 'sparkles',
      colorTheme: 'rose',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=topicals`,
    },
    {
      id: 'rx-cold-meds',
      title: 'Common Cold Meds',
      iconName: 'thermometer',
      colorTheme: 'amber',
      href: `${ROUTES.SIGNUP}?service=urgent-care&med=coldmeds`,
    },
  ],
};

/**
 * 7. When to Use Urgent Care vs 911 ER (Comparison Cards)
 * Exact match to Figma design
 */
export const defaultUrgentCareTriageConfig: UrgentCareTriageConfig = {
  cards: [
    {
      id: 'when-to-use-urgent-care',
      title: 'When to Use Urgent Care',
      type: 'urgent-care',
      items: [
        'Non-life threatening illnesses & minor fever',
        'Mild to moderate pain',
        'Common colds, flu, and cough',
        'Mild stomach and digestive issues',
      ],
    },
    {
      id: 'when-to-call-911',
      title:
        'For Life-Threatening Emergencies - Please call 911 or Go to the Nearest ER',
      type: 'emergency',
      items: [
        'Severe chest pain or difficulty breathing',
        'Severe bleeding or head injury / trauma',
        'Loss of consciousness or stroke signs',
        'Any life-threatening condition',
      ],
    },
  ],
};

/**
 * 8. Testimonials Configuration (Reuses TestimonialsSection Component)
 */
export const defaultUrgentCareTestimonialsConfig: TestimonialsConfig = {
  headline: 'Real people. Real results.',
  description: 'See how our patients are living healthier, happier lives.',
  viewAllLink: {
    label: 'View all stories',
    href: '#testimonials',
  },
  testimonials: [
    {
      id: 'urgent-care-1',
      rating: 5,
      verified: true,
      quote:
        '“I was down with a terrible flu on a Sunday morning. Within 15 minutes I spoke to a doctor and picked up my prescription an hour later.”',
      patientName: 'David K.',
      location: 'Atlanta, GA',
      treatment: 'Flu & Sinus Care',
      metricValue: '15 Min',
      metricLabel: 'Response Time',
    },
    {
      id: 'urgent-care-2',
      rating: 5,
      verified: true,
      quote:
        '“Saved me a 4-hour wait at the local clinic with my toddler. The physician was compassionate, thorough, and called in eye drops right away.”',
      patientName: 'Rachel M.',
      location: 'Austin, TX',
      treatment: 'Pediatric Eye Care',
      metricValue: '100%',
      metricLabel: 'Satisfaction',
    },
    {
      id: 'urgent-care-3',
      rating: 5,
      verified: true,
      quote:
        '“Transparent pricing and no hidden facility fees. Fast, professional care when you are feeling awful and cannot leave the house.”',
      patientName: 'Michael S.',
      location: 'Chicago, IL',
      treatment: 'Bronchitis Care',
      metricValue: '$49',
      metricLabel: 'Flat Fee',
    },
  ],
};

/**
 * 9. Frequently Asked Questions & Health Insights (Reuses FaqInsightsSection Component)
 */
export const defaultUrgentCareFaqInsightsConfig: FaqInsightsConfig = {
  faqHeadline: 'Frequently Asked Questions',
  faqItems: [
    {
      id: 'faq-urgent-1',
      question: 'What conditions can be treated via online urgent care?',
      answer:
        'Our licensed medical providers diagnose and treat non-emergency conditions including cold, flu, sinusitis, UTIs, allergies, minor rashes, eye infections, mild stomach upset, and headaches.',
    },
    {
      id: 'faq-urgent-2',
      question: 'How quickly can I speak with a licensed clinician?',
      answer:
        'Our telemedicine team connects patients with US-licensed clinicians within 15 minutes on average, 7 days a week, 365 days a year.',
    },
    {
      id: 'faq-urgent-3',
      question: 'Can urgent care providers send prescriptions to my pharmacy?',
      answer:
        'Yes. When medically appropriate, our providers immediately submit electronic prescriptions to any licensed pharmacy of your choice nationwide.',
    },
    {
      id: 'faq-urgent-4',
      question: 'Are telehealth visits covered by insurance or HSA/FSA?',
      answer:
        'We offer transparent flat-rate pricing with zero hidden facility fees. You can pay with HSA/FSA cards or receive an itemized superbill for insurance reimbursement.',
    },
    {
      id: 'faq-urgent-5',
      question: 'What if my symptoms are too severe for urgent care?',
      answer:
        'If you experience chest pain, difficulty breathing, severe trauma, or signs of stroke, please call 911 or go to the nearest emergency room immediately.',
    },
    {
      id: 'faq-urgent-6',
      question: 'Do I need an appointment in advance?',
      answer:
        'No appointment is needed. Our online urgent care is completely on-demand, allowing you to start an intake consultation whenever you need it.',
    },
  ],
  insightsHeadline: 'Health Insights & Resources',
  insightsViewAllLink: {
    label: 'Explore All Articles →',
    href: ROUTES.SERVICES,
  },
  articles: [
    {
      id: 'insight-1',
      title: 'When to Choose Telehealth vs Emergency Room',
      slug: 'telehealth-vs-er',
      href: `${ROUTES.SERVICES}#urgent-care`,
      imageUrl: '/assets/images/articles/glp1-guide.jpg',
      alt: 'Doctor consulting patient virtually',
      category: 'Urgent Care',
      readTime: '3 min read',
    },
    {
      id: 'insight-2',
      title: 'Managing Seasonal Cold & Flu Symptoms at Home',
      slug: 'managing-cold-flu-at-home',
      href: `${ROUTES.SERVICES}#urgent-care`,
      imageUrl: '/assets/images/articles/weight-science.jpg',
      alt: 'Home recovery and wellness',
      category: 'Illness Recovery',
      readTime: '4 min read',
    },
    {
      id: 'insight-3',
      title: 'Understanding Prescription Antibiotic Guidelines',
      slug: 'antibiotic-guidelines',
      href: `${ROUTES.SERVICES}#urgent-care`,
      imageUrl: '/assets/images/articles/longevity-nad.jpg',
      alt: 'Prescription medicine guide',
      category: 'Clinical Safety',
      readTime: '5 min read',
    },
  ],
  featuredArticle: {
    id: 'feat-urgent-1',
    title: 'Telemedicine Triage: Knowing When to Seek Emergency vs Urgent Care',
    slug: 'telemedicine-triage-guide',
    href: `${ROUTES.SERVICES}#urgent-care`,
    imageUrl: '/assets/images/articles/dermatology-featured.jpg',
    alt: 'Healthcare provider reviewing urgent triage checklist',
    category: 'Urgent Care Guide',
    readTime: '6 min read',
  },
};
