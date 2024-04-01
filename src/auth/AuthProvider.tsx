'use client'

// ** React Imports
import { ReactNode, useEffect } from 'react'

import { AUTH_KEY } from '@/constants/auth'
import { getCookie } from 'cookies-next'
import { useAuth } from '../store/auth'
import { useGetUser } from '@/services/auth/auth'

type Props = {
  children: ReactNode
  checkAuth: boolean
}

const AuthProvider = ({ children, checkAuth }: Props) => {
  // ** States
  const { login, logout, setUser } = useAuth()
  const mutationProfile = useGetUser()

  const getInitialProfile = () => {
    mutationProfile.mutateAsync(undefined, {
      onSuccess: (res) => {
        setUser(res.data.data, true)
      },
    })
  }

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = getCookie(AUTH_KEY.AUTH_CREDENTIAL)
      const storedUser = getCookie(AUTH_KEY.USER_CREDENTIAL)
      if (storedToken) {
        login({
          token: storedToken,
          remember: true,
        })
        if (storedUser) {
          setUser(JSON.parse(storedUser), true)
          return
        }
        getInitialProfile()
      } else if (checkAuth) {
        logout()
      }
    }
    initAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default AuthProvider
