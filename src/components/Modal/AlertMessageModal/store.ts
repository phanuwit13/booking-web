import { logger } from '@/store/log'
import { create } from 'zustand'

type MessageInfo = 'info' | 'success' | 'error' | 'warning'

type dataInfo = {
  title?: string
  message?: string
  type: MessageInfo
  isShow: boolean
  btnLabel?: string
  callback?: () => void
}

type AlertMessageModal = {
  message?: string
  title?: string
  type: 'info' | 'success' | 'error' | 'warning'
  isShow: boolean
  setInfo: (value: dataInfo) => void
  onClose: () => void
  btnLabel?: string
  callback?: () => void
}

const initialState: dataInfo = {
  title: '',
  message: '',
  type: 'info',
  isShow: false,
  btnLabel: 'Close',
}

export const useAlertMessageModal = create<AlertMessageModal>()(
  logger(
    (set) => ({
      ...initialState,
      setInfo: ({
        isShow,
        message,
        type,
        btnLabel = 'Close',
        callback,
        title,
      }) => {
        set({ isShow, message, type, btnLabel, title, callback: callback })
      },
      onClose: () => {
        set({ ...initialState })
      },
    }),
    'message-modal'
  )
)
