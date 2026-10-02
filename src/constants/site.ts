import { NavItem, SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Solutions Health MD',
  description: 'A modern healthcare and wellness application built with Next.js.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
};

export const mainNavItems: NavItem[] = [
  {
    title: 'Our Services',
    href: '#services',
  },
  {
    title: 'How It Works',
    href: '#how-it-works',
  },
  {
    title: 'Pricing',
    href: '#pricing',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'FAQs',
    href: '#faqs',
  },
];

export const userProfileMenuItems: NavItem[] = [
  {
    title: 'My Profile',
    href: '/dashboard/profile',
  },
  {
    title: 'My Appointments',
    href: '/dashboard/appointments',
  },
  {
    title: 'My Subscriptions',
    href: '/dashboard/subscriptions',
  },
  {
    title: 'My Invoices',
    href: '/dashboard/invoices',
  },
  {
    title: 'Sign Out',
    href: '/login',
  },
];
