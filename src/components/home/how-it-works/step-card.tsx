import React from 'react';
import Link from 'next/link';
import { HowItWorksStep } from '@/types/how-it-works';
import { StepNumberBadge } from './step-number-badge';

interface StepCardProps {
  step: HowItWorksStep;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ step, className = '' }) => {
  const { stepNumber, title, description, href } = step;

  const cardContent = (
    <>
      {/* 1. Exact Outlined Number Badge */}
      <div className="shrink-0">
        <StepNumberBadge stepNumber={stepNumber} />
      </div>

      {/* 2. Step Title */}
      <h3
        className="w-full tracking-normal"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '20.33px',
          lineHeight: '31.63px',
          letterSpacing: '0px',
          color: '#000000',
        }}
      >
        {title}
      </h3>

      {/* 3. Step Description */}
      <p
        className="w-full"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '15.82px',
          lineHeight: '25.7px',
          letterSpacing: '0px',
          color: '#43474E',
        }}
      >
        {description}
      </p>

      {href && (
        <span className="text-xs font-semibold text-[#0F6396] hover:text-[#0b4b73] transition-colors pt-1 inline-flex items-center gap-1">
          Explore Services &rarr;
        </span>
      )}
    </>
  );

  const containerClasses = `w-full sm:w-[calc(50%-10px)] lg:w-auto lg:flex-1 flex flex-col items-center text-center justify-start p-6 rounded-[16px] bg-[#F8F9FF] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] gap-3 transition-all duration-200 ${
    href ? 'hover:shadow-md hover:-translate-y-1 cursor-pointer' : ''
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      {cardContent}
    </div>
  );
};
