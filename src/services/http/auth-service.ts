import { api } from '@services'
import type { LoginInput, LoginOutput, LoginResponse } from '@services'

export const authService = {
  login: async (input: LoginInput): Promise<LoginOutput> => {
    const body = input
    const response = await api.post<LoginResponse>('v1/auth/login', body)

    const loginData = response.data.content
    return {
      token: loginData.token,
    }
  },
}
