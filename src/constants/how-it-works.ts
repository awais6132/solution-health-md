import { HowItWorksSectionConfig } from '@/types/how-it-works';

export const defaultHowItWorksConfig: HowItWorksSectionConfig = {
  headline: 'How It Works',
  subheadline: 'Care on your terms. Safe, simple, and convenient.',
  steps: [
    {
      id: 'choose-your-care',
      stepNumber: 1,
      title: 'Choose Your Care',
      description: 'Select the service that fits your needs.',
      theme: 'blue',
      borderColor: '#0F6396',
      textColor: '#0F6396',
    },
    {
      id: 'complete-your-intake',
      stepNumber: 2,
      title: 'Complete Your Intake',
      description: 'Share your health history securely online.',
      theme: 'green',
      borderColor: '#4B9B44',
      textColor: '#4B9B44',
    },
    {
      id: 'meet-with-a-provider',
      stepNumber: 3,
      title: 'Meet With a Provider',
      description: 'Connect by video or message, based on your care needs.',
      theme: 'blue',
      borderColor: '#0F6396',
      textColor: '#0F6396',
    },
    {
      id: 'get-your-treatment-plan',
      stepNumber: 4,
      title: 'Get Your Treatment Plan',
      description: 'Receive your personalized plan, prescriptions (when appropriate), and next steps.',
      theme: 'green',
      borderColor: '#8DB92E',
      textColor: '#4B9B44',
    },
  ],
};
