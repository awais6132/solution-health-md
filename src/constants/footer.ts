import { FooterConfig } from '@/types/footer';
import { ROUTES } from './routes';

export const footerConfig: FooterConfig = {
  preFooter: {
    enabled: true,
    title: 'A healthier tomorrow is closer than you think.',
    description: 'Expert care. Real people. Personalized for you.',
    backgroundImage: '/assets/images/pre-footer-banner.jpg',
    primaryButton: {
      label: 'Find My Care',
      href: ROUTES.SIGNUP,
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
        { label: 'Urgent Care', href: `${ROUTES.SERVICES}#urgent-care` },
        { label: "Men's Health", href: `${ROUTES.SERVICES}#mens-health` },
        { label: "Women's Health", href: `${ROUTES.SERVICES}#womens-health` },
        { label: 'Mental Health', href: `${ROUTES.SERVICES}#mental-health` },
        { label: 'Weight Management', href: `${ROUTES.SERVICES}#weight-loss` },
        { label: 'Chronic Care', href: `${ROUTES.SERVICES}#chronic-care` },
        { label: 'Dermatology', href: `${ROUTES.SERVICES}#dermatology` },
        { label: 'Primary Care', href: `${ROUTES.SERVICES}#primary-care` },
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
