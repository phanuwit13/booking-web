import { useAlertMessageModal } from '@/components/Modal/AlertMessageModal/store'
import { ROUTE } from '@/constants/routes'
import { useLogin } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError, AxiosResponse } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaFormLogin = z.object({
  username: z.string().trim().min(1, {
    message: 'please enter Username',
  }),
  password: z.string().trim().min(5, {
    message: 'password must be at least 5 characters long',
  }),
})

type SchemaFormInput = z.infer<typeof schemaFormLogin>

const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormInput>({
    resolver: zodResolver(schemaFormLogin),
  })

  const { login } = useAuth()
  const mutateLogin = useLogin()
  const { setInfo: openAlert } = useAlertMessageModal()

  const form = {
    fieldUsername: register('username'),
    fieldPassword: register('password'),
    errors,
  }

  const onLogin = (v: SchemaFormInput) => {
    mutateLogin.mutateAsync(
      { username: v.username, password: v.password },
      {
        onSuccess: ({ data }) => {
          login({
            token: data.data.accesToken,
            redirectUri: ROUTE.HOME,
          })
        },
        onError: (error) => {
          const err = error as unknown as AxiosError<ApiResponse>
          openAlert({
            type: 'error',
            isShow: true,
            title: 'Failed',
            message: err.response?.data.message,
          })
        },
      }
    )
  }

  return { form, handleSubmit: handleSubmit(onLogin) }
}

export { useFormLogin }
