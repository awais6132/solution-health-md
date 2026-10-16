import React from 'react';
import { Check } from 'lucide-react';

interface CareModelFeaturesProps {
  features: string[];
  checkmarkColor?: string;
}

export const CareModelFeatures: React.FC<CareModelFeaturesProps> = ({
  features,
  checkmarkColor = 'text-[#4ADE80]',
}) => {
  return (
    <ul className="flex flex-col w-full gap-3.5">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2.5 sm:gap-3">
          <span className={`shrink-0 ${checkmarkColor}`}>
            <Check className="w-4 h-4 sm:w-[17px] sm:h-[17px]" strokeWidth={2.6} />
          </span>
          <span className="text-[15px] sm:text-[16px] text-[#F8F9FF] font-normal leading-normal">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
};
