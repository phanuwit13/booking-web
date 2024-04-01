import { useAlertMessageModal } from '@/components/Modal/AlertMessageModal/store'
import { useBackdropLoading } from '@/components/Modal/BackdropLoading/store'
import { ROUTE } from '@/constants/routes'
import { useLogin } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { use, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useBookingModalStore } from './store'
import dayjs from 'dayjs'
import { usePostCreateReservation } from '@/services/rooms/rooms'
import { AxiosError } from 'axios'

const schemaFormBooking = z.object({
  name: z.string().trim().min(1, {
    message: 'please enter name',
  }),
  email: z.string().email().trim().min(1, {
    message: 'please enter email',
  }),
  phoneNumber: z.string().trim().min(10, {
    message: 'please enter phone number',
  }),
  myself: z.boolean(),
})

type SchemaFormBooking = z.infer<typeof schemaFormBooking>

const useBookingModal = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<SchemaFormBooking>({
    mode: 'onChange',
    resolver: zodResolver(schemaFormBooking),
    defaultValues: {
      myself: true,
    },
  })

  const { user } = useAuth()
  const {
    roomId: isOpenBooking,
    onClose: onCloseBooking,
    checkin,
    checkout,
  } = useBookingModalStore()
  const { onClose: closeLoading, onOpen: openLoading } = useBackdropLoading()
  const { setInfo: openAlert } = useAlertMessageModal()
  const mutateCreateReservation = usePostCreateReservation()

  const myself = watch('myself')
  const nightAmount = dayjs(checkout).diff(checkin, 'day')

  const form = {
    fieldName: register('name'),
    fieldPhoneNumber: register('phoneNumber'),
    fieldEmail: register('email'),
    fieldMyself: register('myself'),
    control,
    errors,
  }

  const onSubmit = (v: SchemaFormBooking) => {
    console.log('first', v)
    openLoading()
    setTimeout(() => {}, 4000)
    mutateCreateReservation.mutateAsync(
      {
        checkinDate: checkin!,
        checkoutDate: checkout!,
        otherEmail: v.email,
        otherName: v.name,
        otherPhone: v.phoneNumber,
        roomId: isOpenBooking!,
      },
      {
        onSuccess: ({ data }) => {
          openAlert({
            type: 'success',
            isShow: true,
            title: 'Success',
            message: 'Booking room successfully',
            callback: () => {
              onCloseBooking()
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

  useEffect(() => {
    if (myself && user) {
      clearErrors('email')
      clearErrors('name')
      clearErrors('phoneNumber')
      setValue('email', user.email)
      setValue('name', user.name)
      setValue('phoneNumber', user.phoneNumber)
    }
  }, [clearErrors, myself, setValue, user])

  return {
    form,
    handleSubmit: handleSubmit(onSubmit),
    myself,
    isOpenBooking,
    onCloseBooking,
    checkin,
    checkout,
    nightAmount,
  }
}

export { useBookingModal }
