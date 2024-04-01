import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
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
                  Kindly subscribe to our newsletter to get latest deals on our
                  rooms and vacation discount.
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
  )
}

export default Footer
