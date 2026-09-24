import { NavItem, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Solutions Health MD',
  description: 'A modern healthcare and wellness application built with Next.js.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const mainNavItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'Getting Started',
    href: '#get-started',
  },
];
