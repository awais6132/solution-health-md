'use client';

import React from 'react';
import { PatientInfoFormData } from '@/types/intake';
import { US_STATES, MONTHS } from '@/constants/intake-page';

interface PatientInfoFormProps {
  formData: PatientInfoFormData;
  errors?: Partial<Record<keyof PatientInfoFormData, string>>;
  generalError?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onNext: () => void;
  genderOptions?: string[];
  under18Options?: { value: string; label: string }[];
}

export function PatientInfoForm({
  formData,
  errors = {},
  generalError = null,
  onChange,
  onNext,
  genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  under18Options = [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ],
}: PatientInfoFormProps) {
  // Generate days 1..31
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1));

  // Generate years (current year down to 1920)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 105 }, (_, i) => String(currentYear - i));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const getInputClass = (hasError: boolean) =>
    `w-full h-11 px-3.5 bg-white border rounded-[6px] text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
      hasError
        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200/50 bg-rose-50/20'
        : 'border-slate-200 focus:border-[#12587A] focus:ring-[#12587A]/20'
    }`;

  const getSelectClass = (hasError: boolean) =>
    `w-full h-11 pl-3 pr-8 bg-white border rounded-[6px] text-sm text-slate-700 focus:outline-none focus:ring-2 appearance-none cursor-pointer transition-all ${
      hasError
        ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-200/50 bg-rose-50/20'
        : 'border-slate-200 focus:border-[#12587A] focus:ring-[#12587A]/20'
    }`;

  return (
    <section
      id="patient-registration-section"
      className="w-full bg-[#F3F8FC] py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-100 scroll-mt-20"
    >
      <div className="max-w-[1140px] mx-auto">
        {/* General Error Banner */}
        {generalError && (
          <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm font-medium animate-in fade-in duration-200">
            <svg
              className="w-5 h-5 shrink-0 text-rose-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{generalError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full">
          {/* Row 1: First Name, Last Name, Email, Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <div>
              <label htmlFor="firstName" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                First Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                placeholder="First Name"
                className={getInputClass(!!errors.firstName)}
              />
              {errors.firstName && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Last Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                placeholder="Last Name"
                className={getInputClass(!!errors.lastName)}
              />
              {errors.lastName && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Email <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Email"
                className={getInputClass(!!errors.email)}
              />
              {errors.email && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Phone Number <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={onChange}
                placeholder="Phone Number"
                className={getInputClass(!!errors.phoneNumber)}
              />
              {errors.phoneNumber && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Row 2: Date Of Birth, Gender, Under 18 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 mt-4 md:mt-5">
            {/* Date Of Birth (3 selects side-by-side) */}
            <div className="md:col-span-5">
              <label className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Date Of Birth <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {/* Day */}
                <div className="relative">
                  <select
                    id="birthDay"
                    name="birthDay"
                    value={formData.birthDay}
                    onChange={onChange}
                    className={getSelectClass(!!errors.birthDay)}
                  >
                    <option value="">Day</option>
                    {days.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Month */}
                <div className="relative">
                  <select
                    id="birthMonth"
                    name="birthMonth"
                    value={formData.birthMonth}
                    onChange={onChange}
                    className={`${getSelectClass(!!errors.birthMonth)} truncate`}
                  >
                    <option value="">Month</option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Year */}
                <div className="relative">
                  <select
                    id="birthYear"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={onChange}
                    className={getSelectClass(!!errors.birthYear)}
                  >
                    <option value="">Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              {(errors.birthDay || errors.birthMonth || errors.birthYear) && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">
                  Please select complete Date of Birth
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="md:col-span-3 sm:col-span-1">
              <label htmlFor="gender" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Gender
              </label>
              <div className="relative">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={onChange}
                  className={getSelectClass(false)}
                >
                  {genderOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Are you under the age of 18 ? */}
            <div className="md:col-span-4 sm:col-span-1">
              <label htmlFor="isUnder18" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Are you under the age of 18 ?
              </label>
              <div className="relative">
                <select
                  id="isUnder18"
                  name="isUnder18"
                  value={formData.isUnder18}
                  onChange={onChange}
                  className={getSelectClass(false)}
                >
                  {under18Options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Street Address, City, State, ZIP Code */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-4 md:mt-5">
            <div>
              <label htmlFor="streetAddress" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                Street Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={onChange}
                placeholder="Street Address"
                className={getInputClass(!!errors.streetAddress)}
              />
              {errors.streetAddress && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.streetAddress}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                City <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={onChange}
                placeholder="City"
                className={getInputClass(!!errors.city)}
              />
              {errors.city && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.city}</p>
              )}
            </div>

            <div>
              <label htmlFor="state" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                State <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={onChange}
                placeholder="State"
                className={getInputClass(!!errors.state)}
              />
              {errors.state && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.state}</p>
              )}
            </div>

            <div>
              <label htmlFor="zipCode" className="block text-[13px] font-medium text-slate-700 mb-1.5">
                ZIP Code <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={onChange}
                placeholder="ZIP Code"
                className={getInputClass(!!errors.zipCode)}
              />
              {errors.zipCode && (
                <p className="text-[11.5px] text-rose-500 mt-1 font-medium">{errors.zipCode}</p>
              )}
            </div>
          </div>

          {/* Row 4: Right Aligned Next Button */}
          <div className="flex justify-end mt-6 sm:mt-8">
            <button
              type="submit"
              className="btn-animated-gradient-dark text-white px-9 sm:px-12 py-2.5 sm:py-3 rounded-[6px] text-sm font-semibold shadow-sm hover:shadow-md cursor-pointer select-none transition-all flex items-center justify-center min-w-[120px] active:scale-[0.98]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
