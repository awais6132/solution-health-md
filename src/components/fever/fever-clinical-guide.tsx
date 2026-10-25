import React from 'react';
import {
  FeverClinicalGuideProps,
  FeverClinicalGuideConfig,
} from '@/types/fever-page';
import { defaultFeverClinicalGuideConfig } from '@/constants/fever-page';

export const FeverClinicalGuide: React.FC<FeverClinicalGuideProps> = ({
  config,
  className = '',
}) => {
  const activeConfig: FeverClinicalGuideConfig = {
    ...defaultFeverClinicalGuideConfig,
    ...config,
    whatIsFever: {
      ...defaultFeverClinicalGuideConfig.whatIsFever,
      ...config?.whatIsFever,
    },
    diagnosisAndTreatment: {
      ...defaultFeverClinicalGuideConfig.diagnosisAndTreatment,
      ...config?.diagnosisAndTreatment,
    },
    symptoms: {
      ...defaultFeverClinicalGuideConfig.symptoms,
      ...config?.symptoms,
    },
  };

  const { whatIsFever, diagnosisAndTreatment, symptoms } = activeConfig;

  return (
    <section
      id="fever-clinical-guide"
      aria-label="Clinical Fever Guidance & Treatment Protocols"
      className={`w-full bg-white site-section site-section-both ${className}`}
    >
      <div className="site-container w-full flex flex-col gap-10 sm:gap-12">
        {/* =========================================
            BLOCK 1: What Is Fever?
           ========================================= */}
        <div className="flex flex-col gap-4 text-left border-b border-slate-100 pb-8 sm:pb-10">
          {/* Main Block Title */}
          <h2
            className="text-2xl sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>🌡️</span>
            <span>{whatIsFever.title}</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-xs sm:text-[13.5px] font-bold text-slate-800 tracking-tight">
            {whatIsFever.subtitle}
          </h3>

          {/* Clinical Overview Paragraph */}
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
            {whatIsFever.description}
          </p>

          {/* Patient Deliverables Checklist */}
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs sm:text-[13.5px] font-bold text-slate-800">
              {whatIsFever.patientDeliverablesTitle}
            </span>
            <ul className="flex flex-col gap-1.5 pl-1">
              {whatIsFever.patientDeliverables.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-snug"
                >
                  <span className="text-slate-400 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Closing Note */}
          <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal pt-1">
            {whatIsFever.closingNote}
          </p>
        </div>

        {/* =========================================
            BLOCK 2: Fever Diagnosis & Treatment
           ========================================= */}
        <div className="flex flex-col gap-5 text-left border-b border-slate-100 pb-8 sm:pb-10">
          {/* Main Block Title */}
          <h2
            className="text-2xl sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>🩺</span>
            <span>{diagnosisAndTreatment.title}</span>
          </h2>

          {/* Subtitle */}
          <h3 className="text-xs sm:text-[13.5px] font-bold text-slate-800 tracking-tight">
            {diagnosisAndTreatment.subtitle}
          </h3>

          {/* Intro Description */}
          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
            {diagnosisAndTreatment.intro}
          </p>

          {/* 3 Clinical Sub-Categories */}
          <div className="flex flex-col gap-5 pt-1">
            {diagnosisAndTreatment.categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-xs sm:text-[14px] font-bold text-slate-900 flex items-center gap-1.5">
                  <span>{cat.icon}</span>
                  <span>{cat.title}</span>
                </span>
                <ul className="flex flex-col gap-1.5 pl-1">
                  {cat.items.map((subItem, sIdx) => (
                    <li
                      key={sIdx}
                      className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-snug"
                    >
                      <span className="text-slate-400 font-bold select-none">•</span>
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Referral Note */}
          {diagnosisAndTreatment.referralNote && (
            <p className="text-xs sm:text-[13px] text-slate-500 italic pt-1 font-normal">
              {diagnosisAndTreatment.referralNote}
            </p>
          )}
        </div>

        {/* =========================================
            BLOCK 3: Fever Symptoms
           ========================================= */}
        <div className="flex flex-col gap-4 text-left">
          {/* Main Block Title */}
          <h2
            className="text-2xl sm:text-[30px] font-extrabold text-slate-900 tracking-tight leading-tight flex items-center gap-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span>🤒</span>
            <span>{symptoms.title}</span>
          </h2>

          {/* Common Symptoms Intro */}
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-[13.5px] font-bold text-slate-800">
              {symptoms.intro}
            </span>
            <ul className="flex flex-col gap-1.5 pl-1">
              {symptoms.commonSymptoms.map((symp, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600 leading-snug"
                >
                  <span className="text-slate-400 font-bold select-none">•</span>
                  <span>{symp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Warning Box */}
          <div className="flex flex-col gap-2.5 bg-[#FEF2F2]/60 rounded-xl p-4 sm:p-5 border border-[#FECACA] mt-2">
            <span className="text-xs sm:text-[13.5px] font-bold text-[#DC2626] flex items-center gap-1.5">
              <span>⚠️</span>
              <span>{symptoms.urgentAttentionTitle}</span>
            </span>
            <ul className="flex flex-col gap-1.5 pl-1">
              {symptoms.urgentSymptoms.map((urg, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-800 leading-snug font-medium"
                >
                  <span className="text-[#DC2626] font-bold select-none">•</span>
                  <span>{urg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeverClinicalGuide;
