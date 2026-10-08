import { AppShowcaseConfig } from '@/types/app-showcase';

export const defaultAppShowcaseConfig: AppShowcaseConfig = {
  headline: 'Your health, in your hands.',
  description:
    'Our secure patient portal and mobile app make it easy to manage your care, anytime, anywhere.',
  badges: [
    {
      id: 'apple',
      subLabel: 'DOWNLOAD ON THE',
      label: 'App Store',
      href: 'https://www.apple.com/app-store/',
    },
    {
      id: 'google',
      subLabel: 'GET IT ON',
      label: 'Google Play',
      href: 'https://play.google.com/store',
    },
  ],
  mockup: {
    userName: 'Alexander M.',
    refillTitle: 'Next Refill Dispatch',
    refillDays: 'In 8 Days',
    refillMedication: 'Semaglutide 1.0mg Titration Kit',
    doctorTitle: 'Dr. Jensen approved lab results',
    doctorQuote: '“Biomarkers look exceptional, let’s keep...”',
    actionLabel: 'Message Doctor',
  },
  features: [
    { id: '1', text: 'Book appointments' },
    { id: '2', text: 'Message your provider' },
    { id: '3', text: 'View prescriptions' },
    { id: '4', text: 'Track lab results' },
    { id: '5', text: 'Manage your care plan' },
    { id: '6', text: 'On the go, anywhere' },
  ],
  tagline: {
    line1: 'Your Health Journey',
    line2: 'In One Place.',
  },
};
