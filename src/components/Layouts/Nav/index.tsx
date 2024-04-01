import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import LogoHotelIcon from '@/components/Icons/Logo'
import { ROUTE } from '@/constants/routes'
import { urlMatch } from '@/lib/route'
import { cn } from '@/lib/utils'
import { useAuth } from '@/store/auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from '@/components/Icons'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'

const MENU_LIST = [
  {
    title: 'Home',
    link: ROUTE.HOME,
    activeRoute: [ROUTE.HOME],
  },
  {
    title: 'Explore',
    link: ROUTE.EXPLORE,
    activeRoute: [ROUTE.EXPLORE],
  },
  {
    title: 'Rooms',
    link: ROUTE.ROOMS,
    activeRoute: [ROUTE.ROOMS],
  },
]

const isActiveRoute = (currentRoute: string, activeRoute: string[]) => {
  return activeRoute.some((item) => urlMatch(item, currentRoute))
}

type Props = {}

const Nav = (props: Props) => {
  const { token } = useAuth()
  const [isShowSidebar, serIsShowSidebar] = useState(false)
  const pathName = usePathname()

  return (
    <nav className='w-full px-2 sm:px-10 py-4 bg-white'>
      <div className='grid grid-cols-12 items-center max-w-[1200px] w-full m-auto'>
        <Drawer
          direction='left'
          open={isShowSidebar}
          onClose={() => serIsShowSidebar(false)}
        >
          <Button
            onClick={() => serIsShowSidebar(true)}
            variant='outline'
            className='!rounded w-[40px] flex justify-center p-0 col-span-2 min-[425px]:col-span-1 md:hidden'
          >
            <Icon name='Menu' size={20} />
          </Button>
          <DrawerContent className='h-[100dvh] rounded-none'>
            <button
              onClick={() => serIsShowSidebar(false)}
              className='absolute right-4 top-4'
            >
              <Icon name='X' size={20} />
            </button>
            <ul className='p-8 space-y-4'>
              {MENU_LIST.map((route) => {
                return (
                  <li key={route.link} className='text-center'>
                    <Link
                      onClick={() => serIsShowSidebar(false)}
                      href={route.link}
                      className={cn('text-text-primary', {
                        'text-cerulean-blue-500': isActiveRoute(
                          pathName,
                          route.activeRoute
                        ),
                      })}
                    >
                      {route.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </DrawerContent>
        </Drawer>
        <Link
          href={ROUTE.HOME}
          className='col-span-9 min-[425px]:col-span-10 md:col-span-4 w-fit flex items-center'
        >
          <LogoHotelIcon className='text-cerulean-blue-500 w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]' />
          <h1 className='font-[cursive] text-cerulean-blue-500 text-[16px] sm:text-[24px]'>
            Paradise view
          </h1>
        </Link>
        <div className='col-span-4 md:col-span-5 hidden md:flex justify-center'>
          <ul className='flex items-center gap-8 '>
            {MENU_LIST.map((route) => {
              return (
                <li key={route.link}>
                  <Link
                    href={route.link}
                    className={cn('text-text-primary', {
                      'text-cerulean-blue-500': isActiveRoute(
                        pathName,
                        route.activeRoute
                      ),
                    })}
                  >
                    {route.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='col-span-1 md:col-span-3 flex justify-end'>
          {token ? (
            <Link href={ROUTE.PROFILE}>
              <Button
                variant='outline'
                className='text-cerulean-blue-500'
                size='lg'
              >
                <Icon name='User' />
              </Button>
            </Link>
          ) : (
            <Link href={ROUTE.LOGIN}>
              <Button
                variant='outline'
                className='text-cerulean-blue-500'
                size='lg'
              >
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
