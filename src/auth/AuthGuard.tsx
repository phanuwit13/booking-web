'use client'

import { AUTH_KEY } from '@/constants/auth'
import { getCookie } from 'cookies-next'
import { usePathname, useRouter } from 'next/navigation'
import { ReactElement, ReactNode, useEffect } from 'react'
import { useAuth } from '../store/auth'
import { ROUTE } from '@/constants/routes'

interface AuthGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const AuthGuard = (props: AuthGuardProps) => {
  const { children, fallback } = props
  const { loading, token } = useAuth()
  const router = useRouter()
  const pathName = usePathname()

  useEffect(
    () => {
      if (!pathName) {
        return
      }

      if (!getCookie(AUTH_KEY.AUTH_CREDENTIAL) || !getCookie(AUTH_KEY.USER_CREDENTIAL)) {
        if (pathName !== ROUTE.HOME) {
          router.replace(ROUTE.LOGIN)
        } else {
          router.replace(ROUTE.LOGIN)
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, pathName]
  )

  if (loading || token === null) {
    return fallback
  }

  return <>{children}</>
}

export default AuthGuard