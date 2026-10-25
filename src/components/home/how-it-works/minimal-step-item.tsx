import React from 'react';
import Link from 'next/link';
import { FileText, User, ClipboardList, MessageSquare } from 'lucide-react';
import { HowItWorksStep } from '@/types/how-it-works';

interface MinimalStepItemProps {
  step: HowItWorksStep;
}

export const MinimalStepItem: React.FC<MinimalStepItemProps> = ({ step }) => {
  // Helper to render the step icon
  const renderIcon = () => {
    const iconProps = { className: 'w-4 h-4 text-[#2563EB]', strokeWidth: 2 };
    
    // Choose icon by iconName or fallback by stepNumber
    const iconKey =
      step.iconName ||
      (step.stepNumber === 1
        ? 'file-text'
        : step.stepNumber === 2
        ? 'user'
        : step.stepNumber === 3
        ? 'clipboard'
        : 'message');

    switch (iconKey) {
      case 'user':
        return <User {...iconProps} />;
      case 'clipboard':
        return <ClipboardList {...iconProps} />;
      case 'message':
        return <MessageSquare {...iconProps} />;
      case 'file-text':
      default:
        return <FileText {...iconProps} />;
    }
  };

  return (
    <div className="flex flex-col items-start text-left gap-2 w-full">
      {/* Top Badges Row: Green Number Circle + Soft Blue Square Icon Box */}
      <div className="flex items-center gap-3">
        {/* Solid Green Number Circle */}
        <div className="w-7 h-7 rounded-full bg-[#3B8A3E] text-white flex items-center justify-center text-xs font-bold shrink-0 select-none shadow-2xs">
          {step.stepNumber}
        </div>

        {/* Soft Blue Square Icon Box */}
        <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] border border-[#DBEAFE] flex items-center justify-center shrink-0">
          {renderIcon()}
        </div>
      </div>

      {/* Step Title */}
      <h3
        className="text-base sm:text-[17px] font-bold text-[#0E6C9B] leading-snug pt-1"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {step.title}
      </h3>

      {/* Step Description */}
      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
        {step.description}
      </p>

      {step.href && (
        <Link
          href={step.href}
          className="text-xs font-semibold text-[#0E6C9B] hover:underline pt-0.5 inline-flex items-center gap-1"
        >
          <span>Learn more</span>
          <span>&rarr;</span>
        </Link>
      )}
    </div>
  );
};

export default MinimalStepItem;
