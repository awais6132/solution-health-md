import {
  ServicesHeroConfig,
  ServicesGridConfig,
  SimpleProcessConfig,
} from '@/types/services-page';
import { ROUTES } from './routes';

export const defaultServicesHeroConfig: ServicesHeroConfig = {
  badge: 'OUR SERVICES',
  title: 'Our Services',
  description:
    'Comprehensive healthcare tailored to your unique needs. Virtual, in-person, and faith-based care designed around the whole you.',
  primaryCta: {
    label: 'Find My Care',
    href: ROUTES.SIGNUP,
  },
  secondaryCta: {
    label: 'How It Works',
    href: '#how-it-works',
  },
  imageSrc: '/assets/images/services-hero-banner.png',
  imageAlt: 'Our Services Healthcare Clinician with Clipboard',
};

export const defaultServicesGridConfig: ServicesGridConfig = {
  headline: 'We provide best healthcare Services',
  subheadline:
    'Get personalized online care from our top-notch providers, tailored to your unique health needs. Connect with licensed experts anytime, receive trusted medical guidance, and enjoy convenient, discreet treatment designed around you',
  viewAllLink: {
    label: 'View All',
    href: '#all-services',
  },
  services: [
    {
      id: 'weight-loss',
      title: 'Weight Loss',
      badge: 'GLP-1',
      description:
        'Personalized medical weight loss protocols featuring Semaglutide and Tirzepatide, ongoing dietary guidance, and metabolic health monitoring.',
      imageSrc: '/assets/images/weight loss.jpg',
      imageAlt: 'Personalized Weight Loss Nutrition Consultation',
      href: ROUTES.WEIGHT_LOSS,
    },
    {
      id: 'mens-health',
      title: "Men's Health",
      badge: 'TRT',
      description:
        'Evidence-based testosterone replacement therapy, vitality optimization, cardiovascular screening, and discrete telehealth consultations.',
      imageSrc: "/assets/images/Men's Health.jpg",
      imageAlt: "Men's Health Fitness and Vitality",
      href: ROUTES.MENS_HEALTH,
    },
    {
      id: 'womens-health',
      title: "Women's Health",
      badge: 'HRT',
      description:
        'Targeted hormone optimization, menopause support, thyroid care, fertility guidance, and comprehensive preventive wellness for women.',
      imageSrc: "/assets/images/women's Health.jpg",
      imageAlt: "Women's Wellness and Vitality",
      href: `${ROUTES.SIGNUP}?service=womens-health`,
    },
    {
      id: 'peptides-longevity',
      title: 'Peptides & Longevity',
      badge: 'Cellular Wellness',
      description:
        'Cutting-edge peptide therapies focused on cellular rejuvenation, tissue repair, cognitive enhancement, and metabolic longevity.',
      imageSrc: '/assets/images/Peptides & Longevity.jpg',
      imageAlt: 'Peptides and Cellular Longevity Laboratory',
      href: ROUTES.PEPTIDES,
    },
    {
      id: 'direct-primary-care',
      title: 'Direct Primary Care',
      badge: 'Membership',
      description:
        'Unlimited access to your dedicated personal physician without insurance hassles, hidden co-pays, or rushed appointments.',
      imageSrc: '/assets/images/Direct Primary Care.jpg',
      imageAlt: 'Direct Primary Care Patient Consultation',
      href: `${ROUTES.SIGNUP}?service=direct-primary-care`,
    },
    {
      id: 'urgent-care',
      title: 'Urgent Care',
      badge: 'On-Demand',
      description:
        'Immediate same-day medical attention for non-emergency acute illnesses, seasonal infections, minor injuries, and prescription refills.',
      imageSrc: '/assets/images/Urgent care.jpg',
      imageAlt: 'Urgent Medical Attention and Treatment',
      href: ROUTES.URGENT_CARE,
    },
    {
      id: 'dermatology',
      title: 'Dermatology',
      badge: 'Skin, Hair & Nails',
      description:
        'Expert virtual and in-person dermatological evaluations for acne, eczema, hair thinning, rashes, and prescription topical therapies.',
      imageSrc: '/assets/images/Dermatology.jpg',
      imageAlt: 'Dermatology and Skin Health Care',
      href: ROUTES.DERMATOLOGY,
    },
    {
      id: 'mental-health',
      title: 'Mental Health',
      badge: 'Biblical Christian Support',
      description:
        'Compassionate counseling, anxiety and depression management, and faith-integrated emotional support honoring your spiritual values.',
      imageSrc: '/assets/images/mental Health.jpg',
      imageAlt: 'Compassionate Mental Health and Emotional Counseling',
      href: ROUTES.MENTAL_HEALTH,
    },
    {
      id: 'prayer-support',
      title: 'Prayer & Support',
      badge: 'Spiritual Care',
      description:
        'Always free dedicated pastoral and spiritual care sessions, offering intercessory prayer, comfort, and encouragement in your healing journey.',
      imageSrc: '/assets/images/prayer & Support.jpg',
      imageAlt: 'Spiritual Care Prayer and Encouragement',
      href: `${ROUTES.SIGNUP}?service=prayer-support`,
    },
    {
      id: 'not-sure',
      title: "I'm Not Sure",
      badge: 'Help Me Choose',
      description:
        'Uncertain which care option best fits your medical needs? Connect with our clinical triage team for a personalized recommendation.',
      imageSrc: "/assets/images/i'm not sure.jpg",
      imageAlt: 'Clinical Triage Guidance and Consultation',
      href: `${ROUTES.SIGNUP}?service=help-me-choose`,
    },
  ],
};

export const defaultSimpleProcessConfig: SimpleProcessConfig = {
  headline: 'Using Solutions Health MD is Simple',
  description:
    "Medication is essential for overall well-being. Whether you're dealing with specific concerns or looking to enhance your health wellness, there are a variety of treatment options available.",
  cta: {
    label: 'Explore Services →',
    href: '#all-services',
  },
  backgroundImage: '/assets/images/using-solutions-bg.jpg',
  steps: [
    {
      id: 'pick-symptom',
      stepNumber: 1,
      title: 'Pick Your Symptom Or Medication',
      description: 'Tell us about your health, medical history and symptoms.',
      iconName: 'molecule',
    },
    {
      id: 'complete-form',
      stepNumber: 2,
      title: 'Complete The Form',
      description:
        'Your personalized treatment plan will be sent to the pharmacy of your choice within a couple of hours.',
      iconName: 'form',
    },
    {
      id: 'select-delivery',
      stepNumber: 3,
      title: 'Select Pick Up Or Door Delivery',
      description: 'Pick up your medication at your pharmacy or lab. Yes its that simple!',
      iconName: 'delivery',
    },
  ],
};
