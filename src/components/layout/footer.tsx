import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, mainNavItems } from '@/constants/site';
import { ROUTES } from '@/constants/routes';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="inline-block transition-transform hover:opacity-90">
            <Image
              src="/assets/images/logo.png"
              alt={siteConfig.name}
              width={150}
              height={45}
              quality={100}
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Quick Links from centralized config */}
          <div className="flex items-center space-x-6 text-xs text-slate-600">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-600 transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex items-center space-x-4 text-xs text-slate-500">
            <span suppressHydrationWarning>
              © {currentYear} {siteConfig.name}
            </span>
            <Link href={ROUTES.PRIVACY} className="hover:text-slate-900 transition-colors">
              Privacy
            </Link>
            <Link href={ROUTES.TERMS} className="hover:text-slate-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
