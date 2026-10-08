import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CareModelItem } from '@/types/care-models';

interface CareModelCtaProps {
  cta: CareModelItem['cta'];
}

export const CareModelCta: React.FC<CareModelCtaProps> = ({ cta }) => {
  const isDark = cta.variant === 'dark';

  return (
    <div className="pt-2 sm:pt-4">
      <Link href={cta.href} className="inline-block shrink-0">
        <Button
          variant={cta.variant}
          style={{
            width: isDark ? '178.62px' : 'auto',
            minWidth: isDark ? '178.62px' : '205px',
            height: '50.11px',
            paddingTop: '13.56px',
            paddingBottom: '13.56px',
            paddingLeft: '27.11px',
            paddingRight: '27.11px',
            gap: '9.04px',
            borderRadius: '11295.75px',
            fontFamily: 'var(--font-plus-jakarta-sans), Inter, sans-serif',
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '22.59px',
          }}
          className={`inline-flex items-center justify-center text-white border-none shadow-sm transition-all duration-200 cursor-pointer select-none group whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] ${
            isDark
              ? 'btn-animated-gradient-dark'
              : 'btn-animated-gradient-success'
          }`}
        >
          <span>{cta.label}</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2.2}
          />
        </Button>
      </Link>
    </div>
  );
};
