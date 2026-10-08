import { TrustFeatureItem } from '@/types/trust-features';

export const defaultTrustFeatures: TrustFeatureItem[] = [
  {
    id: 'licensed-providers',
    title: 'Licensed Providers in All 50 States',
    iconName: 'shield',
    bgColor: 'bg-[#eff6ff]', // soft blue
    iconColor: 'text-[#2563eb]',
  },
  {
    id: 'hipaa-compliant',
    title: 'Secure & HIPAA Compliant',
    iconName: 'lock',
    bgColor: 'bg-[#ecfeff]', // soft cyan
    iconColor: 'text-[#0891b2]',
  },
  {
    id: 'prescriptions',
    title: 'Prescriptions to Local Pharmacy or Home Delivery',
    iconName: 'prescription',
    bgColor: 'bg-[#f0fdf4]', // soft emerald/green
    iconColor: 'text-[#16a34a]',
  },
  {
    id: 'video-visits',
    title: 'Video or Message Visits',
    iconName: 'video',
    bgColor: 'bg-[#f0fdfa]', // soft teal
    iconColor: 'text-[#0d9488]',
  },
];
