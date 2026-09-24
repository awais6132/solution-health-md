import { fetchApi } from './client';
import { SignupInput } from '@/schemas/auth';
import { ApiResponse } from '@/types';

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

/**
 * Centralized Auth API Service
 */
export const authApi = {
  /**
   * Register a new user account
   */
  async register(data: SignupInput): Promise<ApiResponse<AuthUser>> {
    return fetchApi<AuthUser>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
