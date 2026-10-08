import { FaithBasedCareConfig } from '@/types/faith-based-care';
import { ROUTES } from './routes';

export const defaultFaithBasedCareConfig: FaithBasedCareConfig = {
  eyebrow: 'FAITH-BASED CARE',
  headline: {
    part1: 'Care for the whole person.',
    part2: 'Mind. Body. Spirit.',
  },
  description:
    'We believe true health includes more than the physical. For those who desire faith-centered support, we offer Biblical Christian-based counseling as well as complimentary prayer support.',
  cta: {
    label: 'Learn More About Our Faith-Based Care',
    href: `${ROUTES.SERVICES || '/services'}/prayer-support`,
  },
  backgroundImage: '/assets/images/image (2).png',
  cards: [
    {
      id: 'mental-health-support',
      icon: 'book',
      iconBg: '#EEF2FF',
      iconColor: '#4F46E5',
      title: 'Mental Health Support',
      subtitle: '(Biblical Christian-Based Counseling)',
      subtitleColor: '#4F46E5',
      description:
        'Faith-centered mental health support from qualified counseling professionals, integrating Biblical principles with compassionate care.',
      actions: [
        {
          label: 'Explore Christian Counseling',
          href: `${ROUTES.SERVICES || '/services'}/mental-health`,
          variant: 'secondary',
        },
      ],
    },
    {
      id: 'prayer-and-support',
      icon: 'heart',
      iconBg: '#FFFBEB',
      iconColor: '#D97706',
      title: 'Prayer & Support',
      subtitle: '(Always Free)',
      subtitleColor: '#16A34A',
      description:
        'Need prayer? Connect with someone for prayer or submit a prayer request. There is never a charge for this service.',
      actions: [
        {
          label: 'Connect for Prayer',
          href: `${ROUTES.SERVICES || '/services'}/prayer-support`,
          variant: 'secondary',
        },
        {
          label: 'Submit a Prayer Request',
          href: `${ROUTES.SERVICES || '/services'}/prayer-support/request`,
          variant: 'outline',
        },
      ],
    },
  ],
};
