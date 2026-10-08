import React from 'react';

interface HowItWorksHeaderProps {
  headline: string;
  subheadline: string;
  className?: string;
}

export const HowItWorksHeader: React.FC<HowItWorksHeaderProps> = ({
  headline,
  subheadline,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-12 ${className}`}>
      <h2
        className="w-full"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 800,
          fontSize: '40.67px',
          lineHeight: '45.19px',
          letterSpacing: '0px',
          textAlign: 'center',
          verticalAlign: 'middle',
          color: '#000000',
        }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className="w-full max-w-[424px] mt-2.5"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '18.08px',
            lineHeight: '27.11px',
            letterSpacing: '0px',
            textAlign: 'center',
            verticalAlign: 'middle',
            color: '#43474E',
          }}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
};
