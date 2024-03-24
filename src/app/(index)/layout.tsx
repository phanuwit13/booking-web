'use client'

import LogoHotelIcon from '@/components/Icons/Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ROUTE } from '@/constants/routes'
import { urlMatch } from '@/lib/route'
import { cn } from '@/lib/utils'
import { useAuth } from '@/store/auth'
import { useCount } from '@/store/count'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
  {
    title: 'About',
    link: ROUTE.ABOUT,
    activeRoute: [ROUTE.ABOUT],
  },
  {
    title: 'Contact',
    link: ROUTE.CONTACT,
    activeRoute: [ROUTE.CONTACT],
  },
]

const isActiveRoute = (currentRoute: string, activeRoute: string[]) => {
  return activeRoute.some((item) => urlMatch(item, currentRoute))
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { logout } = useAuth()
  const { count, user } = useCount()
  const pathName = usePathname()

  console.log('pathName', pathName)

  return (
    <>
      <nav className='w-full px-10 py-4 bg-white'>
        <div className='grid grid-cols-12 items-center max-w-[1200px] w-full m-auto'>
          <Link
            href={ROUTE.HOME}
            className='col-span-3 w-fit flex items-center'
          >
            <LogoHotelIcon className='text-cerulean-blue-500 w-[60px] h-[60px]' />
            <h1 className='font-[cursive] text-cerulean-blue-500 text-[24px]'>
              Paradise view
            </h1>
          </Link>
          <div className='col-span-6 flex justify-center'>
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
          <div className='col-span-3 flex justify-end'>
            <Link href={ROUTE.LOGIN}>
              <Button
                variant='outline'
                className='text-cerulean-blue-500'
                size='lg'
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      {children}

      <footer className='bg-cerulean-blue-950'>
        <div className='mx-auto w-full'>
          <div className='flex gap-6 md:gap-[40px] px-4 py-10 lg:py-[80px] flex-col md:flex-row max-w-[1440px] m-auto'>
            <div className='w-full md:w-[40%] text-center md:text-left'>
              <h2 className='mb-6 text-sm font-semibold text-white text-[30px] font-[cursive]'>
                Paradise view
              </h2>
              <p className='text-[12px] text-white'>
                The service at the Hotel Monteleone was exceptional. There was
                absolutely no issue that was not addressed timely and with
                satisfactory results. We were particulary impressed with how the
                hotel staff anticipated our needs (periodically coming by the
                Board Room to check with us)
              </p>
            </div>
            <div className='w-full md:w-[10%] text-center md:text-left'>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Quick links
              </h2>
              <ul className='text-white text-[12px] font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Room booking
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Rooms
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Contact
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Explore
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-[10%] text-center md:text-left'>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Company
              </h2>
              <ul className='text-white text-[12px] font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Privacy policy
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Refund policy
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    F.A.Q
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-[10%] text-center md:text-left'>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Social media
              </h2>
              <ul className='text-white text-[12px] font-medium'>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Facebook
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Twitter
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Instagram
                  </a>
                </li>
                <li className='mb-4'>
                  <a href='#' className='hover:underline'>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
            <div className='w-full md:w-[30%] text-center md:text-left'>
              <h2 className='mb-6 text-sm font-semibold text-white uppercase'>
                Newsletter
              </h2>
              <ul className='text-[12px] font-medium'>
                <li className='mb-4 text-white'>
                  <p>
                    Kindly subscribe to our newsletter to get latest deals on
                    our rooms and vacation discount.
                  </p>
                </li>
                <li className='mb-4'>
                  <div className='flex w-full max-w-sm items-center space-x-2 m-auto'>
                    <Input
                      type='email'
                      placeholder='Email'
                      className='bg-white'
                    />
                    <Button
                      type='submit'
                      variant='outline'
                      className='text-cerulean-blue-500'
                    >
                      Subscribe
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='px-4 py-6 border-t border-gray-500 md:flex md:items-center md:justify-center'>
            <span className='text-sm text-gray-500 sm:text-center'>
              © 2023 <a href='/'>Paradise view</a>. All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
