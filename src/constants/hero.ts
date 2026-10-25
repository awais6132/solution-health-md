import { HeroSectionConfig } from '@/types/hero';
import { ROUTES } from './routes';

export const heroConfig: HeroSectionConfig = {
  badge: {
    text: 'NATIONWIDE TELEHEALTH CARE',
  },
  headline: {
    primaryText: 'Expert Healthcare.',
    highlightText: 'Wherever life takes you.',
  },
  description:
    'Personalized healthcare from licensed providers, with convenient virtual access nationwide.',
  primaryCta: {
    label: 'Find A Care',
    href: ROUTES.SERVICES,
    variant: 'primary',
  },
  secondaryCta: {
    label: 'How It Works',
    href: ROUTES.HOW_IT_WORKS,
    variant: 'outline',
  },
  bannerImage: {
    src: '/assets/images/hero-doctors-banner.png',
    alt: 'Healthcare providers and doctors offering virtual and on-demand care',
  },
  slides: [
    {
      id: 'telehealth',
      serviceName: 'Telehealth Care',
      accentColor: '#4B9B44',
      secondaryColor: '#8DB92E',
      badge: {
        text: 'NATIONWIDE TELEHEALTH CARE',
      },
      headline: {
        primaryText: 'Expert Healthcare.',
        highlightText: 'Wherever life takes you.',
      },
      description:
        'Personalized healthcare from licensed providers, with convenient virtual access nationwide.',
      primaryCta: {
        label: 'Find A Care',
        href: ROUTES.SERVICES,
        variant: 'primary',
      },
      secondaryCta: {
        label: 'How It Works',
        href: ROUTES.HOW_IT_WORKS,
        variant: 'outline',
      },
      bannerImage: {
        src: '/assets/images/hero-doctors-banner.png',
        alt: 'Healthcare providers and doctors offering virtual and on-demand care',
      },
    },
    {
      id: 'primary-care',
      serviceName: 'Primary Care',
      accentColor: '#10669D',
      secondaryColor: '#0E6C9B',
      badge: {
        text: 'DIRECT PRIMARY CARE',
      },
      headline: {
        primaryText: 'Compassionate Care.',
        highlightText: 'Dedicated to your daily health.',
      },
      description:
        'Compassionate, accessible primary care relationships, with dedicated clinical support nationwide.',
      primaryCta: {
        label: 'Explore Primary Care',
        href: `${ROUTES.SERVICES}#direct-primary-care`,
        variant: 'primary',
      },
      secondaryCta: {
        label: 'Learn More',
        href: ROUTES.ABOUT,
        variant: 'outline',
      },
      bannerImage: {
        src: '/assets/images/Direct Primary Care.jpg',
        alt: 'Direct Primary Care doctor consultation',
      },
    },
    {
      id: 'weight-loss',
      serviceName: 'Weight Loss',
      accentColor: '#2E7D32',
      secondaryColor: '#4B9B44',
      badge: {
        text: 'METABOLIC & WEIGHT HEALTH',
      },
      headline: {
        primaryText: 'Sustainable Weight.',
        highlightText: 'Guided for lasting results.',
      },
      description:
        'Physician-supervised medical weight management, with personalized plans for real results.',
      primaryCta: {
        label: 'Start Your Journey',
        href: ROUTES.WEIGHT_LOSS,
        variant: 'primary',
      },
      secondaryCta: {
        label: 'How It Works',
        href: ROUTES.HOW_IT_WORKS,
        variant: 'outline',
      },
      bannerImage: {
        src: '/assets/images/weight loss.jpg',
        alt: 'Clinical weight loss and wellness consultation',
      },
    },
    {
      id: 'mental-health',
      serviceName: 'Mental Health',
      accentColor: '#0D9488',
      secondaryColor: '#14B8A6',
      badge: {
        text: 'HOLISTIC COUNSELING & THERAPY',
      },
      headline: {
        primaryText: 'Mind & Mental Health.',
        highlightText: 'Healing with trusted care.',
      },
      description:
        'Confidential, evidence-based mental health counseling, with licensed clinicians nationwide.',
      primaryCta: {
        label: 'Connect for Counseling',
        href: `${ROUTES.SERVICES}#mental-health`,
        variant: 'primary',
      },
      secondaryCta: {
        label: 'View Specialties',
        href: `${ROUTES.SERVICES}#mental-health`,
        variant: 'outline',
      },
      bannerImage: {
        src: '/assets/images/mental Health.jpg',
        alt: 'Mental health and emotional counseling therapy',
      },
    },
    {
      id: 'faith-based',
      serviceName: 'Faith-Based Care',
      accentColor: '#0F6AA0',
      secondaryColor: '#4B9B44',
      badge: {
        text: 'FAITH-CENTERED CARE',
      },
      headline: {
        primaryText: 'Whole Person Care.',
        highlightText: 'Healing mind, body, and spirit.',
      },
      description:
        'Biblical Christian counseling and wellness, with complimentary prayer support nationwide.',
      primaryCta: {
        label: 'Explore Faith Care',
        href: `${ROUTES.SERVICES}#prayer-support`,
        variant: 'primary',
      },
      secondaryCta: {
        label: 'Prayer Support',
        href: `${ROUTES.SERVICES}#prayer-support`,
        variant: 'outline',
      },
      bannerImage: {
        src: '/assets/images/prayer & Support.jpg',
        alt: 'Faith-based Christian counseling and prayer support',
      },
    },
  ],
  trustBar: {
    enabled: false,
    items: [
      {
        id: 'board-certified',
        title: 'Board Certified in all 50 States',
        iconName: 'award',
      },
      {
        id: 'hipaa-compliant',
        title: 'Secure & HIPAA Compliant',
        iconName: 'shield',
      },
      {
        id: 'prescriptions',
        title: 'Prescriptions to Local Pharmacy or Home Delivery',
        iconName: 'pill',
      },
      {
        id: 'telehealth',
        title: 'Video or Message Visits',
        iconName: 'video',
      },
    ],
  },
};
