import { FooterConfig, PreFooterCtaConfig } from '@/types/footer';
import { ROUTES } from './routes';

/**
 * Route-specific PreFooter CTA configurations.
 * Each service page has its own dedicated background image, headline, CTA button, and cursive script.
 */
export const routePreFooterConfigs: Record<string, Partial<PreFooterCtaConfig>> = {
  [ROUTES.URGENT_CARE]: {
    enabled: true,
    title: 'Feel Better Today',
    description: 'Expert care. Real people. Personalized for you.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: 'Better Care\nBrighter Days',
    primaryButton: {
      label: 'See a Provider Now →',
      href: `${ROUTES.SIGNUP}?service=urgent-care`,
    },
    secondaryButton: undefined,
  },
  [ROUTES.DERMATOLOGY]: {
    enabled: true,
    title: 'Ready for Healthier, More Confident Skin?',
    description:
      'Get expert dermatology care from licensed providers — start your online visit today.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: 'Clear Skin\nBrighter You',
    primaryButton: {
      label: 'See If I Qualify →',
      href: ROUTES.FIND_MY_CARE,
    },
    secondaryButton: undefined,
  },
  [ROUTES.MENTAL_HEALTH]: {
    enabled: true,
    title: "You Don't Have to Face Life's Challenges Alone.",
    description:
      'Faith-based counseling to help you find hope, healing, and a brighter tomorrow.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: 'A Stronger Mind.\nA Brighter Tomorrow.',
    primaryButton: {
      label: 'See If I Qualify →',
      href: ROUTES.FIND_MY_CARE,
    },
    secondaryButton: undefined,
  },
  [ROUTES.PEPTIDES]: {
    enabled: true,
    title: "You Don't Have to Face Life's Challenges Alone.",
    description:
      'Faith-based counseling to help you find hope, healing, and a brighter tomorrow.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: 'A Stronger Mind.\nA Brighter Tomorrow.',
    primaryButton: {
      label: 'See If I Qualify →',
      href: ROUTES.FIND_MY_CARE,
    },
    secondaryButton: undefined,
  },
  [ROUTES.MENS_HEALTH]: {
    enabled: true,
    title: 'Your Health. Your Goals. Our Mission.',
    description: 'Take the first step toward a stronger, healthier you.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: 'Better Health\nStarts Here.',
    primaryButton: {
      label: 'Get Started →',
      href: ROUTES.FIND_MY_CARE,
    },
    secondaryButton: undefined,
  },
  [ROUTES.PRIMARY_CARE]: {
    enabled: true,
    title: 'Ready to Experience a Higher Standard of Care?',
    description: 'Personalized. Proactive. Designed Around You.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: undefined,
    primaryButton: {
      label: 'See Plans & Pricing →',
      href: '#plans',
    },
    secondaryButton: undefined,
  },
  [ROUTES.WOMENS_HEALTH]: {
    enabled: true,
    title: 'Ready to Experience a Higher Standard of Care?',
    description: 'Take the first step toward feeling your best with personalized care.',
    backgroundImage: '/assets/images/urgent-care-prefooter-banner.png',
    floatingScript: undefined,
    primaryButton: {
      label: 'See Plans & Pricing →',
      href: ROUTES.PRICING,
    },
    secondaryButton: undefined,
  },
};

export const footerConfig: FooterConfig = {
  preFooter: {
    enabled: true,
    title: 'A healthier tomorrow is closer than you think.',
    description: 'Expert care. Real people. Personalized for you.',
    backgroundImage: '/assets/images/pre-footer-banner.jpg',
    primaryButton: {
      label: 'Find My Care',
      href: ROUTES.SERVICES,
    },
    secondaryButton: {
      label: 'How It Works',
      href: ROUTES.HOW_IT_WORKS,
    },
  },
  brand: {
    name: 'Solutions Health MD',
    logoSrc: '/assets/images/logo.png',
    description:
      'Empowering you with modern, accessible, and personalized virtual healthcare solutions wherever life takes you.',
    socials: [
      {
        name: 'Facebook',
        href: 'https://facebook.com',
        iconName: 'facebook',
      },
      {
        name: 'Instagram',
        href: 'https://instagram.com',
        iconName: 'instagram',
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        iconName: 'linkedin',
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        iconName: 'twitter',
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com',
        iconName: 'youtube',
      },
    ],
  },
  navigationSections: [
    {
      title: 'Care',
      links: [
        { label: 'Weight Management', href: ROUTES.WEIGHT_LOSS },
        { label: "Men's Health", href: ROUTES.MENS_HEALTH },
        { label: "Women's Health", href: ROUTES.WOMENS_HEALTH },
        { label: 'Peptides & Longevity', href: ROUTES.PEPTIDES },
        { label: 'Direct Primary Care', href: `${ROUTES.SERVICES}#direct-primary-care` },
        { label: 'Urgent Care', href: ROUTES.URGENT_CARE },
        { label: 'Fever Care', href: ROUTES.FEVER },
        { label: 'Dermatology', href: ROUTES.DERMATOLOGY },
        { label: 'Mental Health', href: ROUTES.MENTAL_HEALTH },
        { label: 'Prayer & Support', href: `${ROUTES.SERVICES}#prayer-support` },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: ROUTES.ABOUT },
        { label: 'How It Works', href: ROUTES.HOW_IT_WORKS },
        { label: 'Pricing Plans', href: ROUTES.PRICING },
        { label: 'Patient Testimonials', href: '#testimonials' },
        { label: 'Careers', href: '#careers', badge: 'Hiring' },
        { label: 'Contact Us', href: '#contact' },
      ],
    },
    {
      title: 'Support & Legal',
      links: [
        { label: 'Help Center', href: '#help' },
        { label: 'Frequently Asked Questions', href: ROUTES.FAQS },
        { label: 'Privacy Policy', href: ROUTES.PRIVACY },
        { label: 'Terms of Service', href: ROUTES.TERMS },
        { label: 'Accessibility', href: '#accessibility' },
        { label: 'Patient Bill of Rights', href: '#patient-rights' },
      ],
    },
  ],
  newsletter: {
    title: 'Join Our Newsletter',
    description:
      'Stay informed with trusted clinical tips, wellness guides, and exclusive platform updates delivered to your inbox.',
    placeholder: 'Enter your email address...',
    buttonText: 'Subscribe',
    disclaimer: 'We respect your privacy. Unsubscribe anytime with one click.',
  },
  bottomBar: {
    copyrightOwner: 'Solutions Health MD',
    startYear: 2024,
    tagline: 'Healthier. Where You Are.',
    legalLinks: [
      { label: 'Privacy Policy', href: ROUTES.PRIVACY },
      { label: 'Terms of Service', href: ROUTES.TERMS },
      { label: 'Cookie Settings', href: '#cookies' },
    ],
  },
};
