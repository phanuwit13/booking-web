import { AUTH_KEY } from '@/constants/auth'
import { create } from 'zustand'
import { logger } from '@/store/log'

type BookingModalParams = {
  roomId: string | null
  checkin: Date | null
  checkout: Date | null
}
type BookingModalStore = BookingModalParams & {
  onOpen: (data: BookingModalParams) => void
  onClose: () => void
}

const initialState = {
  roomId: null,
  checkin: null,
  checkout: null,
}

export const useBookingModalStore = create<BookingModalStore>()(
  logger(
    (set) => ({
      ...initialState,
      onOpen: (data) => {
        set({ ...data })
      },
      onClose: () => {
        set({ roomId: null, checkin: null, checkout: null })
      },
    }),
    'booking-modal-store'
  )
)
