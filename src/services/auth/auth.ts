import { apiClient } from '@/lib/api'
import {
  FormRequestLogin,
  LoginResponse,
  ProfileResponse,
  RegisterParam,
  RegisterResponse,
} from '@/services/auth/auth.type'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  return useMutation({
    mutationKey: ['get-login'],
    mutationFn: ({ username, password }: FormRequestLogin) =>
      apiClient.post<LoginResponse>(`/api/auth/login`, {
        username: username,
        password: password,
      }),
  })
}

export const useRegister = () => {
  return useMutation({
    mutationKey: ['post-register'],
    mutationFn: (data: RegisterParam) =>
      apiClient.post<RegisterResponse>(`/api/auth/register`, {
        ...data,
      }),
  })
}

export const useGetUser = () => {
  return useMutation({
    mutationKey: ['get-user'],
    mutationFn: () => apiClient.get<ProfileResponse>(`/api/profile`),
  })
}
