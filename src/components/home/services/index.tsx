import React from 'react';
import { defaultServicesSectionConfig } from '@/constants/services';
import { ServicesSectionConfig, ServiceItem } from '@/types/services';
import { ServicesHeader } from './services-header';
import { ServiceCard } from './service-card';

export interface CareServicesSectionProps {
  /** Optional custom configuration override */
  config?: Partial<ServicesSectionConfig>;
  /** Optional custom items list */
  services?: ServiceItem[];
  className?: string;
}

export const CareServicesSection: React.FC<CareServicesSectionProps> = ({
  config,
  services,
  className = '',
}) => {
  const activeConfig: ServicesSectionConfig = {
    ...defaultServicesSectionConfig,
    ...config,
    services: services || config?.services || defaultServicesSectionConfig.services,
  };

  if (!activeConfig.services || activeConfig.services.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Care and Treatment Options"
      className={`w-full bg-white py-12 sm:py-16 lg:py-20 ${className}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & Action link */}
        <ServicesHeader
          headline={activeConfig.headline}
          subheadline={activeConfig.subheadline}
          viewAllLink={activeConfig.viewAllLink}
        />

        {/* 5-Column Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.5 sm:gap-5 lg:gap-5.5">
          {activeConfig.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareServicesSection;
export * from './service-card';
export * from './services-header';
export * from './service-icon-badge';
