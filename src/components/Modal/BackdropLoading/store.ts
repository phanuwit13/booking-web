import { logger } from '@/store/log'
import { create } from 'zustand'

interface BackdropLoadingStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const initialState = {
  isOpen: false,
}

export const useBackdropLoading = create<BackdropLoadingStore>()(
  logger(
    (set) => ({
      ...initialState,
      onOpen: () => {
        set({ isOpen: true })
      },
      onClose: () => {
        set({ isOpen: false })
      },
    }),
    'backdrop-loading-store'
  )
)
