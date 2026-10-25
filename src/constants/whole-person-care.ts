import { WholePersonCareConfig } from '@/types/whole-person-care';
import { ROUTES } from './routes';

export const defaultWholePersonCareConfig: WholePersonCareConfig = {
  headline: {
    line1: 'Care designed around',
    line2: 'the whole you.',
  },
  description:
    'Personalized care focused on helping you feel better, function better, and stay healthier.',
  tagline: {
    line1: 'A Healthier Tomorrow',
    line2: 'Is Within Reach.',
  },
  backgroundImage: '/assets/images/serene.jpg',
  pillars: [
    {
      id: 'healthy-weight',
      title: 'Healthy Weight',
      icon: 'scale',
      iconColor: '#16A34A',
      href: `${ROUTES.SERVICES}#weight-loss`,
    },
    {
      id: 'energy-vitality',
      title: 'Energy & Vitality',
      icon: 'zap',
      iconColor: '#D97706',
      href: `${ROUTES.SERVICES}#peptides-longevity`,
    },
    {
      id: 'hormone-health',
      title: 'Hormone Health',
      icon: 'dna',
      iconColor: '#0D9488',
      href: `${ROUTES.SERVICES}#womens-health`,
    },
    {
      id: 'mental-wellbeing',
      title: 'Mental Wellbeing',
      icon: 'lightbulb',
      iconColor: '#7C3AED',
      href: `${ROUTES.SERVICES}#mental-health`,
    },
    {
      id: 'preventive-health',
      title: 'Preventive Health',
      icon: 'shield',
      iconColor: '#2563EB',
      href: `${ROUTES.SERVICES}#direct-primary-care`,
    },
    {
      id: 'healthy-aging',
      title: 'Healthy Aging',
      icon: 'sparkles',
      iconColor: '#059669',
      href: `${ROUTES.SERVICES}#peptides-longevity`,
    },
  ],
};
