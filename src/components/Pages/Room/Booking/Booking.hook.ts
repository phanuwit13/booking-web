import { ROUTE } from '@/constants/routes'
import { useLogin } from '@/services/auth/auth'
import { useAuth } from '@/store/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useBookingModalStore } from '../BookingModal/store'
import { useGetDateList, useGetRoomAvailable } from '@/services/rooms/rooms'
import dayjs from 'dayjs'

const schemaFormSearchRoom = z.object({
  night: z.number(),
  date: z.date(),
})

type SchemaFormSearchRoom = z.infer<typeof schemaFormSearchRoom>

const useBooking = () => {
  const pathname = usePathname()
  const router = useRouter()
  const params = useSearchParams()

  const { token } = useAuth()
  const { onOpen: onOpenBookingModal, roomId: isOpenBookingModal } =
    useBookingModalStore()

  const { data: resDateNotAvailable, refetch: refetchDateNotAvailable } =
    useGetDateList({
      date: dayjs(params.get('date') || new Date()).toDate(),
    })
  const { data: resRoomAvailable, refetch: refetchRoomAvailable } =
    useGetRoomAvailable({
      date: dayjs(params.get('date') || new Date()).toDate(),
      night: Number(params.get('night')) || 1,
    })

  const { control, handleSubmit } = useForm<SchemaFormSearchRoom>({
    defaultValues: {
      night: Number(params.get('night')) || 1,
      date: dayjs(params.get('date') || new Date()).toDate(),
    },
  })

  const handleSetPath = ({ night, date }: { night?: number; date?: Date }) => {
    const query: { [key: string]: string } = {}
    params.forEach((item, key) => {
      query[key] = item
    })
    if (night) query['night'] = String(night)
    if (date) query['date'] = date.toISOString()

    const paramData = Object.keys(query)
      .map((item) => `${item}=${query[item]}`)
      .join('&')

    const path = pathname + `${paramData ? `?${paramData}` : ''}`
    router.push(path, {
      scroll: false,
    })
  }

  const onSubmit = (v: SchemaFormSearchRoom) => {
    handleSetPath({ date: v.date, night: v.night })
  }

  const handleBookNow = (id: string) => {
    if (!token) {
      router.push(ROUTE.LOGIN)
      return
    }

    const night = Number(params.get('night')) || 1

    onOpenBookingModal({
      checkin: dayjs(params.get('date') || new Date()).toDate(),
      checkout: dayjs(params.get('date') || new Date())
        .add(night, 'day')
        .toDate(),
      roomId: id,
    })
  }

  const dateNotAvailable = useMemo(() => {
    return resDateNotAvailable?.data.data.map((item) => {
      return {
        title: '',
        start: item.start,
        display: 'background',
        isFull: item.isFull,
      }
    })
  }, [resDateNotAvailable])

  useEffect(() => {
    if (!isOpenBookingModal) {
      refetchRoomAvailable()
      refetchDateNotAvailable()
    }
  }, [isOpenBookingModal, refetchDateNotAvailable, refetchRoomAvailable])

  return {
    dateNotAvailable,
    handleBookNow,
    onSubmit,
    resRoomAvailable,
    handleSubmit,
    control,
  }
}

export { useBooking }
