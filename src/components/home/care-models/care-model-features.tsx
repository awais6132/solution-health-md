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
    <ul
      className="flex flex-col w-full max-w-[591.22px]"
      style={{
        paddingTop: '9.04px',
        gap: '18.08px',
      }}
    >
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2.5 sm:gap-3 group/item">
          <span className={`shrink-0 ${checkmarkColor}`}>
            <Check className="w-4 h-4 sm:w-[17px] sm:h-[17px]" strokeWidth={2.6} />
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '15.82px',
              lineHeight: '22.59px',
              letterSpacing: '0px',
              verticalAlign: 'middle',
              color: '#F8F9FF',
            }}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
};
