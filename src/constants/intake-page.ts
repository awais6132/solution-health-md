import { IntakeAssessmentConfig } from '@/types/intake';

export const defaultIntakeConfig: IntakeAssessmentConfig = {
  badge: 'PATIENT INTAKE',
  title: 'Personal & Medical Assessment',
  subtitle: 'Please provide your basic information and answer a few quick questions to personalize your care.',
  genderOptions: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
  under18Options: [
    { value: 'yes', label: 'yes' },
    { value: 'no', label: 'no' },
  ],
  questions: [
    {
      id: 'medical-conditions',
      title: 'Do you have any medical conditions?',
      subtitle: 'Select any one',
      options: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ],
      defaultSelectedId: 'no',
    },
    {
      id: 'allergies',
      title: 'Do you have any allergies?',
      subtitle: 'Select any one',
      options: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ],
      defaultSelectedId: 'no',
    },
    {
      id: 'fever',
      title: 'Do you have a fever?',
      subtitle: 'Select any one',
      options: [
        { id: 'yes', label: 'Yes' },
        { id: 'no', label: 'No' },
      ],
      defaultSelectedId: 'no',
    },
  ],
};

export const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
