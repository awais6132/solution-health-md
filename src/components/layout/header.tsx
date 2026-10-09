'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, mainNavItems } from '@/constants/site';
import { ROUTES } from '@/constants/routes';
import { UserProfileMenu } from './user-profile-menu';
import {
  Menu,
  X,
  User,
  Calendar,
  CreditCard,
  FileText,
  LogOut,
  Stethoscope,
  HelpCircle,
  Sparkles,
  DollarSign,
  Info,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { HeaderCartIcon } from '@/components/ui';
import { cn } from '@/lib/utils';

export interface HeaderProps {
  className?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  ctaText?: string;
  ctaHref?: string;
}

const navDetails: Record<
  string,
  { icon: React.ReactNode; bg: string; text: string; badge?: string }
> = {
  'Our Services': {
    icon: <Stethoscope className="w-5 h-5 text-[#0E6C9B]" />,
    bg: 'bg-sky-50',
    text: 'Browse specialized treatments',
    badge: 'Popular',
  },
  'How It Works': {
    icon: <Sparkles className="w-5 h-5 text-[#4B9B44]" />,
    bg: 'bg-emerald-50',
    text: 'Simple 4-step care process',
  },
  Pricing: {
    icon: <DollarSign className="w-5 h-5 text-amber-600" />,
    bg: 'bg-amber-50',
    text: 'Transparent, no-surprise plans',
  },
  About: {
    icon: <Info className="w-5 h-5 text-indigo-600" />,
    bg: 'bg-indigo-50',
    text: 'Our mission & medical team',
  },
  FAQs: {
    icon: <HelpCircle className="w-5 h-5 text-teal-600" />,
    bg: 'bg-teal-50',
    text: 'Answers to common questions',
  },
};

const quickAccountLinks = [
  {
    title: 'My Profile',
    href: '/dashboard/profile',
    icon: <User className="w-4 h-4 text-[#0E6C9B]" />,
    bg: 'bg-sky-50 text-sky-900 border-sky-100',
  },
  {
    title: 'Appointments',
    href: '/dashboard/appointments',
    icon: <Calendar className="w-4 h-4 text-emerald-600" />,
    bg: 'bg-emerald-50 text-emerald-900 border-emerald-100',
  },
  {
    title: 'Subscriptions',
    href: '/dashboard/subscriptions',
    icon: <CreditCard className="w-4 h-4 text-violet-600" />,
    bg: 'bg-violet-50 text-violet-900 border-violet-100',
  },
  {
    title: 'My Invoices',
    href: '/dashboard/invoices',
    icon: <FileText className="w-4 h-4 text-amber-600" />,
    bg: 'bg-amber-50 text-amber-900 border-amber-100',
  },
];

export function Header({
  className,
  userName = 'Hello Umair!',
  userEmail = 'User@gmail.com',
  userAvatar = '/assets/images/user-avatar.jpg',
  ctaText = 'Find My Care',
  ctaHref = ROUTES.SIGNUP,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-2xs box-border',
          className
        )}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[50px] flex h-[72px] sm:h-[80px] lg:h-[90.375px] items-center justify-between box-border">
          {/* 1. Brand Logo */}
          <Link
            href={ROUTES.HOME}
            className="flex items-center gap-2 transition-transform hover:opacity-90 shrink-0"
            aria-label="Home"
          >
            <Image
              src="/assets/images/logo.png"
              alt={siteConfig.name}
              width={159}
              height={56}
              priority
              quality={100}
              className="w-[128px] sm:w-[145px] lg:w-[159px] h-auto object-contain shrink-0"
            />
          </Link>

          {/* 2. Desktop Navigation Links (Visible on lg+) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '13px',
                  lineHeight: '20px',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                }}
                className="text-slate-700 hover:text-[#4b9b44] transition-colors py-1.5 px-1 select-none align-middle font-medium"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* 3. Right Header Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            {/* Cart Icon Button */}
            <Link
              href="/cart"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#0F6396] hover:bg-[#0F6396]/10 active:scale-95 transition-all cursor-pointer"
              title="View Cart"
              aria-label="View Cart"
            >
              <HeaderCartIcon className="w-[18px] h-[18px] sm:w-[19px] sm:h-[19px] text-[#0F6396]" />
            </Link>

            {/* Desktop / Tablet Green Pill CTA Button */}
            <Link href={ctaHref} className="hidden md:inline-flex shrink-0">
              <button
                type="button"
                style={{
                  height: '41.08px',
                  borderRadius: '11295.75px',
                  paddingTop: '9.04px',
                  paddingBottom: '9.04px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  gap: '6.78px',
                  fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '22.59px',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                }}
                className="inline-flex items-center justify-center text-white btn-animated-gradient-success active:scale-[0.98] shadow-xs cursor-pointer select-none group whitespace-nowrap"
              >
                <span>{ctaText}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </button>
            </Link>

            {/* User Profile Dropdown Pill (sm+) */}
            <div className="hidden sm:block shrink-0">
              <UserProfileMenu
                userName={userName}
                userEmail={userEmail}
                userAvatar={userAvatar}
              />
            </div>

            {/* Mobile Hamburger Toggle Button (< lg) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#4b9b44]/30 transition-all cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="h-6 w-6 text-slate-800" />
            </button>
          </div>
        </div>
      </header>

      {/* High-End Mobile & Tablet Slide-Over Sheet */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Blur Overlay with Smooth Fade */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-In Side Panel */}
          <div className="relative z-50 w-full max-w-[360px] sm:max-w-[400px] h-full bg-white flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 overflow-hidden">
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-white/80 backdrop-blur-md">
              <Link
                href={ROUTES.HOME}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/assets/images/logo.png"
                  alt={siteConfig.name}
                  width={130}
                  height={45}
                  className="w-[125px] h-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body Content */}
            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
              {/* 1. Premium Gradient User Profile Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0E6C9B] via-[#0F6396] to-[#0A4B72] p-4 text-white shadow-lg shadow-sky-900/15">
                {/* Decorative background circle */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

                <div className="relative z-10 flex items-center gap-3.5">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/90 shadow-md bg-slate-200">
                      <Image
                        src={userAvatar}
                        alt={userName}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    {/* Active Status Ring */}
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full ring-2 ring-emerald-400/40" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[15px] font-bold text-white truncate">
                        {userName}
                      </span>
                      <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                    </div>
                    <div className="text-xs text-white/80 truncate mt-0.5">
                      {userEmail}
                    </div>
                  </div>
                </div>

                {/* Quick patient badge */}
                <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/90">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Patient Portal Active
                  </span>
                  <Link
                    href="/dashboard/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:underline font-semibold flex items-center gap-0.5"
                  >
                    View <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* 2. Main Navigation Links with Rich Icon Badges */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                  Menu
                </div>
                <div className="space-y-1.5">
                  {mainNavItems.map((item) => {
                    const detail = navDetails[item.title];
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={cn(
                              'w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105',
                              detail?.bg || 'bg-slate-100'
                            )}
                          >
                            {detail?.icon || <Sparkles className="w-5 h-5 text-slate-600" />}
                          </div>
                          <div className="flex flex-col min-w-0 text-left">
                            <div className="flex items-center gap-2">
                              <span className="text-[14.5px] font-semibold text-slate-800 group-hover:text-[#4B9B44] transition-colors truncate">
                                {item.title}
                              </span>
                              {detail?.badge && (
                                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide bg-sky-100 text-[#0E6C9B] rounded-md">
                                  {detail.badge}
                                </span>
                              )}
                            </div>
                            {detail?.text && (
                              <span className="text-xs text-slate-400 truncate">
                                {detail.text}
                              </span>
                            )}
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#4B9B44] group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* 3. Quick Account Grid (2x2) */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
                  Account Shortcuts
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {quickAccountLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-200 hover:shadow-xs active:scale-[0.98]',
                        item.bg
                      )}
                    >
                      <div className="p-1 rounded-lg bg-white/80 shadow-2xs shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold truncate">
                        {item.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Bottom Sticky Action Area */}
            <div className="border-t border-slate-100 p-5 bg-slate-50/70 space-y-3 shrink-0">
              {/* Green Action CTA Button */}
              <Link
                href={ctaHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full"
              >
                <button
                  type="button"
                  className="w-full py-3.5 px-6 text-[15px] font-bold text-white rounded-full btn-animated-gradient-success shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>{ctaText}</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>

              {/* Sign Out Link */}
              <div className="flex items-center justify-center">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-red-600 transition-colors py-1"
                >
                  <LogOut className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sign out of account</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
