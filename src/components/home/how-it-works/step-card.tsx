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
      className={`group relative flex flex-col items-center text-center transition-all duration-300 w-full mx-auto justify-start hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 ${className}`}
      style={{
        maxWidth: '310px',
        minHeight: '287px',
        borderRadius: '16px',
        padding: '24px',
        backgroundColor: '#F8F9FF',
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* 1. Exact Outlined Number Badge */}
      <div className="mb-4 shrink-0">
        <StepNumberBadge stepNumber={stepNumber} />
      </div>

      {/* 2. Step Title */}
      <h3
        className="w-full tracking-normal mb-1.5"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 700,
          fontSize: '20.33px',
          lineHeight: '31.63px',
          letterSpacing: '0px',
          textAlign: 'center',
          verticalAlign: 'middle',
          color: '#000000',
        }}
      >
        {title}
      </h3>

      {/* 3. Step Description */}
      <p
        className="w-full max-w-[271px]"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          fontSize: '15.82px',
          lineHeight: '25.7px',
          letterSpacing: '0px',
          textAlign: 'center',
          verticalAlign: 'middle',
          color: '#43474E',
        }}
      >
        {description}
      </p>
    </div>
  );
};
