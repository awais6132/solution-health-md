import React from 'react';
import Link from 'next/link';
import { FooterConfig } from '@/types/footer';

interface FooterBottomBarProps {
  bottomBar: FooterConfig['bottomBar'];
}

export function FooterBottomBar({ bottomBar }: FooterBottomBarProps) {
  const currentYear = new Date().getFullYear();
  const yearText = bottomBar.startYear
    ? bottomBar.startYear === currentYear
      ? `${currentYear}`
      : `${bottomBar.startYear} - ${currentYear}`
    : `${currentYear}`;

  return (
    <div className="border-t border-slate-200/80 pt-6 mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        {/* Left: Dynamic Copyright & Legal Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
          <span suppressHydrationWarning>
            © {yearText} {bottomBar.copyrightOwner}
          </span>
          <span className="hidden sm:inline text-slate-300">|</span>
          {bottomBar.legalLinks?.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-emerald-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Signature Brand Slogan */}
        {bottomBar.tagline && (
          <div
            className="font-serif italic font-semibold text-sm tracking-tight select-none"
            style={{ color: 'rgba(75, 155, 68, 1)' }}
          >
            {bottomBar.tagline}
          </div>
        )}
      </div>
    </div>
  );
}
