import React from 'react';
import Link from 'next/link';
import { FooterNavSection } from '@/types/footer';
import { BRAND_COLORS } from '@/constants/colors';

interface FooterNavColumnProps {
  section: FooterNavSection;
}

export function FooterNavColumn({ section }: FooterNavColumnProps) {
  return (
    <div className="space-y-3">
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
      <ul className="space-y-2 text-xs sm:text-sm font-medium">
        {section.links.map((link) => {
          const isInternal = link.href.startsWith('/') || link.href.startsWith('#');

          return (
            <li key={`${section.title}-${link.label}`}>
              {isInternal ? (
                <Link
                  href={link.href}
                  className="group inline-flex items-center text-slate-600 hover:text-emerald-600 transition-colors py-0.5"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-slate-600 hover:text-emerald-600 transition-colors py-0.5"
                >
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
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
