export interface PatientInfoFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  isUnder18: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface MedicalQuestionOption {
  id: string;
  label: string;
}

export interface MedicalQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: MedicalQuestionOption[];
  defaultSelectedId?: string;
}

export interface IntakeAssessmentConfig {
  badge?: string;
  title?: string;
  subtitle?: string;
  questions: MedicalQuestion[];
  genderOptions: string[];
  under18Options: { value: string; label: string }[];
}
