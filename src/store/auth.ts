import { AUTH_KEY } from '@/constants/auth'
import { apiClient } from '@/lib/api'
import { deleteCookie, setCookie } from 'cookies-next'
import dayjs from 'dayjs'
import { create } from 'zustand'
import { logger } from './log'
import { ProfileItem } from '@/services/auth/auth.type'

type LoginData = {
  token: string
  remember?: boolean
  redirectUri?: string
}

type UseAuth = {
  user: null | ProfileItem
  loading: boolean
  token: string | null

  login: (data: LoginData) => void
  setUser: (user: ProfileItem, remember?: boolean) => void
  logout: (data?: { redirectUri?: string }) => void
  setLoading: (value: boolean) => void
}

const initialState = {
  user: null,
  loading: false,
  token: null,
}

const setAuthCookie = (key: string, value: string, expires?: number) => {
  setCookie(
    key,
    value,
    expires ? { expires: dayjs().add(expires, 'day').toDate() } : undefined
  )
}

export const useAuth = create<UseAuth>()(
  logger(
    (set) => ({
      ...initialState,
      login: ({ token, redirectUri, remember }) => {
        //set token to cookie
        setAuthCookie(
          AUTH_KEY.AUTH_CREDENTIAL,
          token,
          remember ? AUTH_KEY.AUTH_CREDENTIAL_EXPIRE : undefined
        )
        set({ loading: false, token: token, user: null })

        //redirect path
        if (redirectUri) {
          window.location.href = redirectUri
        }
      },
      setUser: (user, remember) => {
        //set user to cookie
        setAuthCookie(
          AUTH_KEY.USER_CREDENTIAL,
          JSON.stringify(user),
          remember ? AUTH_KEY.AUTH_CREDENTIAL_EXPIRE : undefined
        )

        // set token and user to store (zustand)
        set({ user: user, loading: false })
      },
      logout: ({ redirectUri } = {}) => {
        set({ user: null, token: null })
        //delete cookie
        deleteCookie(AUTH_KEY.AUTH_CREDENTIAL)
        deleteCookie(AUTH_KEY.USER_CREDENTIAL)
        //clear api config request
        apiClient.interceptors.request.clear()
        window.location.href = redirectUri || '/login'
      },
      setLoading: (value) => {
        set({ loading: value })
      },
    }),
    'auth-store'
  )
)
