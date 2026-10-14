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
          className={`inline-flex items-center justify-center text-white border-none shadow-sm transition-all duration-200 cursor-pointer select-none group whitespace-nowrap px-7 py-3 h-[50px] rounded-full gap-2 text-[15px] font-semibold hover:scale-[1.02] active:scale-[0.98] ${
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
