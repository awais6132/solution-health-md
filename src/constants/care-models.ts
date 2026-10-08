import { CareModelItem } from '@/types/care-models';
import { ROUTES } from './routes';

export const defaultCareModels: CareModelItem[] = [
  {
    id: 'on-demand-care',
    badge: {
      icon: 'zap',
      bgColor: '#2563EB',
    },
    title: 'On-Demand Care',
    subtitle: 'Get care when you need it.',
    features: [
      'Urgent & common illnesses',
      'Video or message visits',
      'Prescriptions (when appropriate)',
      'Local pharmacy or home delivery',
      'Fast, convenient, and secure',
    ],
    checkmarkColor: 'text-[#4ADE80]',
    cta: {
      label: 'Get Care Now',
      href: `${ROUTES.SERVICES || '/services'}/urgent-care`,
      variant: 'dark',
    },
    backgroundImage: '/assets/images/serene.jpg',
    bgPosition: 'object-left',
    foregroundImage: '/assets/images/Group 1.png',
  },
  {
    id: 'membership-ongoing-care',
    badge: {
      icon: 'refresh',
      bgColor: '#16A34A',
    },
    title: 'Membership & Ongoing Care',
    subtitle: 'A lasting relationship for a healthier you.',
    features: [
      'Direct Primary Care',
      'Preventive & routine care',
      'Chronic condition management',
      'Hormone optimization (TRT / HRT)',
      'Peptides & longevity',
      'Ongoing support & care coordination',
    ],
    checkmarkColor: 'text-[#F59E0B]',
    cta: {
      label: 'Explore Memberships',
      href: `${ROUTES.SERVICES || '/services'}/direct-primary-care`,
      variant: 'secondary',
    },
    backgroundImage: '/assets/images/nurse portrait.jpg',
  },
];
