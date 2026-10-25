'use client';

import React, { useState } from 'react';
import { MedicalQuestion } from '@/types/intake';

interface MedicalQuestionsProps {
  questions: MedicalQuestion[];
  answers: Record<string, string>;
  onAnswerChange: (questionId: string, optionId: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

export function MedicalQuestions({
  questions,
  answers,
  onAnswerChange,
  onSubmit,
  isSubmitting = false,
}: MedicalQuestionsProps) {
  return (
    <section id="medical-assessment-section" className="w-full bg-white py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[620px] mx-auto">
        <div className="space-y-14 sm:space-y-16">
          {questions.map((q) => {
            const currentSelected = answers[q.id] || q.defaultSelectedId || '';

            return (
              <div key={q.id} className="w-full text-center">
                {/* Question Title */}
                <h2 className="text-2xl sm:text-[28px] md:text-[32px] font-bold text-slate-900 tracking-tight leading-snug">
                  {q.title}
                </h2>

                {/* Subtitle */}
                <p className="text-sm sm:text-base text-slate-500 mt-2 mb-6 sm:mb-8 font-normal">
                  {q.subtitle}
                </p>

                {/* Options List */}
                <div className="flex flex-col gap-3 sm:gap-3.5">
                  {q.options.map((opt) => {
                    const isSelected = currentSelected === opt.id;

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onAnswerChange(q.id, opt.id)}
                        className={`w-full h-14 sm:h-16 px-6 sm:px-8 bg-white rounded-lg sm:rounded-xl border transition-all duration-150 flex items-center justify-between text-left cursor-pointer active:scale-[0.99] ${
                          isSelected
                            ? 'border-slate-300 shadow-sm'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-base sm:text-lg font-medium text-slate-800">
                          {opt.label}
                        </span>

                        {isSelected && (
                          <div className="shrink-0 text-[#3E9447] animate-in fade-in zoom-in duration-200">
                            <svg
                              className="w-6 h-6 stroke-[2.5]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={onSubmit}
            disabled={isSubmitting}
            className="btn-animated-gradient-success disabled:opacity-50 disabled:pointer-events-none text-white px-12 sm:px-14 py-2.5 sm:py-3 rounded-[6px] sm:rounded-[8px] text-sm sm:text-base font-semibold shadow-sm hover:shadow-lg cursor-pointer select-none transition-all duration-300 min-w-[140px] flex items-center justify-center active:scale-[0.98]"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
