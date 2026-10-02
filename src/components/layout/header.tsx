'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, mainNavItems } from '@/constants/site';
import { ROUTES } from '@/constants/routes';
import { UserProfileMenu } from './user-profile-menu';
import { Menu, X } from 'lucide-react';
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

export function Header({
  className,
  userName = 'Hello Umair!',
  userEmail = 'User@gmail.com',
  userAvatar = '/assets/images/user-avatar.jpg',
  ctaText = 'Find My Care',
  ctaHref = ROUTES.SIGNUP,
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-2xs',
        className
      )}
    >
      <div className="w-full max-w-[2000px] mx-auto flex h-[90.375px] items-center justify-between px-4 sm:px-8 lg:px-[80px]">
        {/* 1. Brand Logo */}
        <Link
          href={ROUTES.HOME}
          className="flex items-center gap-2 transition-transform hover:opacity-90 shrink-0"
        >
          <Image
            src="/assets/images/logo.png"
            alt={siteConfig.name}
            width={159}
            height={56}
            priority
            quality={100}
            style={{ width: '159px', height: '56.1px', opacity: 1 }}
            className="w-[159px] h-[56.1px] object-contain shrink-0"
          />
        </Link>

        {/* 2. Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
          {mainNavItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                fontWeight: 500,
                fontSize: '15.82px',
                lineHeight: '22.59px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
              }}
              className="text-slate-700 hover:text-[#4b9b44] transition-colors py-1 select-none align-middle"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* 3. Right Action Group (Cart Icon + Green CTA + User Profile Pill) */}
        <div className="hidden sm:flex items-center space-x-3.5">
          {/* Cart Icon Button */}
          <Link
            href="/cart"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#0F6396] hover:bg-[#0F6396]/10 transition-colors"
            title="Cart"
          >
            <HeaderCartIcon className="w-[19px] h-[19px] text-[#0F6396]" />
          </Link>

          {/* Green Pill CTA Button */}
          <Link href={ctaHref} className="shrink-0">
            <button
              type="button"
              style={{
                width: '162.33px',
                height: '41.08px',
                borderRadius: '11295.75px',
                paddingTop: '9.04px',
                paddingBottom: '9.04px',
                paddingLeft: '22.59px',
                paddingRight: '22.59px',
                gap: '6.78px',
                fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
                fontWeight: 600,
                fontSize: '15.82px',
                lineHeight: '22.59px',
                letterSpacing: '0px',
                verticalAlign: 'middle',
              }}
              className="inline-flex items-center justify-center text-white bg-[#4b9b44] hover:bg-[#3d8537] active:scale-[0.98] shadow-xs cursor-pointer transition-all duration-200 select-none group whitespace-nowrap"
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

          {/* User Profile Dropdown Pill */}
          <UserProfileMenu userName={userName} userEmail={userEmail} userAvatar={userAvatar} />
        </div>

        {/* 4. Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <UserProfileMenu userName={userName} userEmail={userEmail} userAvatar={userAvatar} className="sm:hidden" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#4b9b44]/20"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>
      </div>

      {/* 5. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#4b9b44] rounded-lg transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <Link href={ctaHref} onClick={() => setIsMobileMenuOpen(false)}>
              <button
                type="button"
                className="w-full py-2.5 text-sm font-semibold text-white rounded-full bg-[#4b9b44] hover:bg-[#3d8537] shadow-xs cursor-pointer select-none"
              >
                {ctaText}
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


