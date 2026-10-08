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
    href: ROUTES.SIGNUP,
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
        title: 'Prescriptions & Local Pharmacy Coordination',
        iconName: 'pill',
      },
      {
        id: 'telehealth',
        title: 'Video or Telehealth Visits',
        iconName: 'video',
      },
    ],
  },
};
