'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PatientInfoForm } from './patient-info-form';
import { MedicalQuestions } from './medical-questions';
import { IntakeAssessmentConfig, PatientInfoFormData } from '@/types/intake';
import { ROUTES } from '@/constants/routes';

interface IntakeFlowProps {
  config: IntakeAssessmentConfig;
}

export function IntakeFlow({ config }: IntakeFlowProps) {
  // Initial form values matching the design screenshot
  const [formData, setFormData] = useState<PatientInfoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: 'Male',
    isUnder18: 'yes',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  // Validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof PatientInfoFormData, string>>>({});
  const [generalError, setGeneralError] = useState<string | null>(null);

  // Initial answers matching the design screenshot (all defaulted to 'no' with checkmark)
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    config.questions.forEach((q) => {
      initial[q.id] = q.defaultSelectedId || 'no';
    });
    return initial;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types or selects
    if (errors[name as keyof PatientInfoFormData]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name as keyof PatientInfoFormData];
        return updated;
      });
    }

    if (generalError) {
      setGeneralError(null);
    }
  };

  const handleAnswerChange = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof PatientInfoFormData, string>> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    if (!formData.birthDay) {
      newErrors.birthDay = 'Day is required';
    }
    if (!formData.birthMonth) {
      newErrors.birthMonth = 'Month is required';
    }
    if (!formData.birthYear) {
      newErrors.birthYear = 'Year is required';
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = 'Street address is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    if (!formData.state.trim()) {
      newErrors.state = 'State is required';
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = 'ZIP code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    const isValid = validateForm();
    if (!isValid) {
      setGeneralError('Please complete all required fields above before proceeding.');
      return;
    }

    setGeneralError(null);
    const questionsElem = document.getElementById('medical-assessment-section');
    if (questionsElem) {
      questionsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) {
      setGeneralError('Please fill out the registration form details above before submitting.');
      const formElem = document.getElementById('patient-registration-section');
      if (formElem) {
        formElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    setGeneralError(null);
    setIsSubmitting(true);
    // Brief processing simulation
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setShowSuccessModal(true);
  };

  return (
    <div className="w-full flex flex-col">
      {/* 1. Patient Registration Form (Light blue banner background) */}
      <PatientInfoForm
        formData={formData}
        errors={errors}
        generalError={generalError}
        onChange={handleInputChange}
        onNext={handleNext}
        genderOptions={config.genderOptions}
        under18Options={config.under18Options}
      />

      {/* 2. Medical Assessment Questions (Clean white background) */}
      <MedicalQuestions
        questions={config.questions}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
      />

      {/* Request Received Success Pop-Up Modal */}
      {showSuccessModal && (
        <div
          onClick={() => setShowSuccessModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl sm:rounded-[20px] max-w-[460px] w-full pt-10 pb-9 px-6 sm:px-10 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 1. Solutions Health MD Brand Logo */}
            <div className="mb-6">
              <Image
                src="/assets/images/logo.png"
                alt="Solutions Health MD"
                width={175}
                height={60}
                quality={100}
                className="w-[155px] sm:w-[170px] h-auto object-contain"
              />
            </div>

            {/* 2. Double-Ring Green Success Check Icon */}
            <div className="w-[74px] h-[74px] rounded-full border-[3px] border-[#43A047] p-[3px] flex items-center justify-center mb-5">
              <div className="w-full h-full rounded-full bg-[#43A047] flex items-center justify-center shadow-xs">
                <svg
                  className="w-8 h-8 text-white stroke-[3.5]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* 3. Heading */}
            <h3 className="text-2xl sm:text-[27px] font-bold text-slate-900 tracking-tight mb-2.5">
              Request Received
            </h3>

            {/* 4. Subtitle / Message */}
            <p className="text-sm sm:text-[14.5px] text-slate-600 leading-relaxed max-w-[320px] mx-auto mb-7">
              Your query has been received successfully. Our team will review it and get back to you shortly.
            </p>

            {/* 5. Pay Now Button */}
            <Link
              href={ROUTES.CHECKOUT}
              className="btn-animated-gradient-success text-white px-10 py-2.5 rounded-[6px] text-sm font-semibold shadow-sm hover:shadow-md active:scale-[0.98] inline-flex items-center justify-center min-w-[135px] cursor-pointer"
            >
              Pay Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
