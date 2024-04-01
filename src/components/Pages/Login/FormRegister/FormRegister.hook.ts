import { useAlertMessageModal } from '@/components/Modal/AlertMessageModal/store'
import { useBackdropLoading } from '@/components/Modal/BackdropLoading/store'
import { ROUTE } from '@/constants/routes'
import { useRegister } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const schemaFormRegister = z.object({
  username: z.string().trim().min(1, {
    message: 'please enter username',
  }),
  email: z
    .string()
    .trim()
    .min(1, {
      message: 'please enter email',
    })
    .email(),
  passwordHash: z.string().trim().min(5, {
    message: 'password must be at least 5 characters long',
  }),
  name: z.string().trim().min(1, {
    message: 'please enter name',
  }),
  phoneNumber: z.string().trim().min(10, {
    message: 'please enter phone number',
  }),
})

type SchemaFormInput = z.infer<typeof schemaFormRegister>

const useFormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaFormInput>({
    resolver: zodResolver(schemaFormRegister),
  })

  const {} = useAuth()
  const mutateRegister = useRegister()
  const router = useRouter()
  const { setInfo: openAlert } = useAlertMessageModal()
  const { onClose: closeLoading, onOpen: openLoading } = useBackdropLoading()

  const form = {
    fieldUsername: register('username'),
    fieldPassword: register('passwordHash'),
    fieldEmail: register('email'),
    fieldPhoneNumber: register('phoneNumber'),
    fieldName: register('name'),
    errors,
  }

  const onRegister = (v: SchemaFormInput) => {
    openLoading()
    mutateRegister.mutateAsync(
      { ...v },
      {
        onSuccess: ({ data }) => {
          openAlert({
            type: 'success',
            isShow: true,
            title: 'Success',
            message: 'Register is successfully',
            callback: () => {
              router.push(ROUTE.LOGIN)
            },
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
        onSettled: () => {
          closeLoading()
        },
      }
    )
  }

  return { form, handleSubmit: handleSubmit(onRegister) }
}

export { useFormRegister }
