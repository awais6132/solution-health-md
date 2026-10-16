import React from 'react';
import Link from 'next/link';
import { FooterNavSection } from '@/types/footer';
import { BRAND_COLORS } from '@/constants/colors';

interface FooterNavColumnProps {
  section: FooterNavSection;
}

export function FooterNavColumn({ section }: FooterNavColumnProps) {
  return (
    <div suppressHydrationWarning className="flex flex-col gap-3 w-full">
      <h3
        className="font-bold"
        style={{
          color: BRAND_COLORS.blue,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '13.56px',
          lineHeight: '18.08px',
          letterSpacing: '0.68px',
          verticalAlign: 'middle',
        }}
      >
        {section.title}
      </h3>
      <ul className="flex flex-col gap-2 text-xs sm:text-sm font-medium w-full">
        {section.links.map((link) => {
          const isInternal = link.href.startsWith('/') || link.href.startsWith('#');

          return (
            <li key={`${section.title}-${link.label}`}>
              {isInternal ? (
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors py-0.5"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors py-0.5"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {link.badge}
                    </span>
                  )}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
