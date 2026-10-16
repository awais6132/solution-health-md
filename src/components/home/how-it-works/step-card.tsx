import React from 'react';
import { HowItWorksStep } from '@/types/how-it-works';
import { StepNumberBadge } from './step-number-badge';

interface StepCardProps {
  step: HowItWorksStep;
  className?: string;
}

export const StepCard: React.FC<StepCardProps> = ({ step, className = '' }) => {
  const { stepNumber, title, description } = step;

  return (
    <div
      className={`w-full sm:w-[calc(50%-10px)] lg:w-auto lg:flex-1 flex flex-col items-center text-center justify-start p-6 rounded-[16px] bg-[#F8F9FF] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] gap-3 ${className}`}
    >
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
    </div>
  );
};
