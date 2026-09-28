import { z } from 'zod';

/**
 * Reusable Centralized Signup Validation Schema
 * Single Source of Truth for frontend form and backend/API validation
 */
export const signupSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, 'First name is required')
      .max(50, 'First name is too long'),
    lastName: z
      .string()
      .trim()
      .min(1, 'Last name is required')
      .max(50, 'Last name is too long'),
    email: z
      .string()
      .trim()
      .min(1, 'Email is required')
      .email('Please enter a valid email address'),
    phone: z
      .string()
      .trim()
      .optional()
      .default(''),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .min(1, 'Confirm Password is required'),
    agreeTerms: z
      .boolean()
      .refine((val) => val === true, {
        message: 'You must agree to the Terms and Privacy Policy',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignupInput = z.infer<typeof signupSchema>;

/**
 * Type-safe helper to validate form data and return clean error map
 */
export function validateSignup(data: unknown): {
  success: boolean;
  data?: SignupInput;
  errors?: Record<string, string>;
} {
  const result = signupSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const fieldName = issue.path[0];
    if (fieldName && !errors[String(fieldName)]) {
      errors[String(fieldName)] = issue.message;
    }
  }

  return { success: false, errors };
}

/**
 * Reusable Centralized Login Validation Schema
 */
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required'),
  rememberMe: z.boolean().optional().default(false),
});

export type LoginInput = z.infer<typeof loginSchema>;

export function validateLogin(data: unknown): {
  success: boolean;
  data?: LoginInput;
  errors?: Record<string, string>;
} {
  const result = loginSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const fieldName = issue.path[0];
    if (fieldName && !errors[String(fieldName)]) {
      errors[String(fieldName)] = issue.message;
    }
  }

  return { success: false, errors };
}
