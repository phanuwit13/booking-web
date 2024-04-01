import Image from 'next/image'
import React from 'react'

interface Props {}

const ExplorePage = (props: Props) => {
  return (
    <div>
      <div className='relative'>
        <div>
          <video
            autoPlay
            loop
            muted
            id='home-video'
            className='w-full max-w-[1440px] m-auto aspect-[1440/960] max-h-[700px] object-cover'
          >
            <source src='/videos/explore2.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
      <h1 className='mt-[80px] font-semibold text-[40px] text-center'>
        Take a tour
      </h1>
      <div className='mt-[80px] max-w-[1440px] w-full m-auto'>
        <div className='relative'>
          <Image
            src='/images/explore/room.png'
            width={1272}
            height={570}
            alt='room'
            className='w-full max-w-[1200px] m-auto aspect-[1440/960] max-h-[570px] sm:rounded-[40px] object-cover'
          />
          <div className='absolute shadow-gray-200 shadow-lg bg-white w-[90%] md:w-[60%] max-w-[690px] left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 pt-2 pb-3 sm:pt-[20px] sm:pb-[40px] px-1 md:px-[60px] rounded-[16px] border-t-[20px]'>
            <h2 className='text-center font-[cursive] text-[24px] text-cerulean-blue-500'>
              Luxurious rooms
            </h2>
            <p className='text-center text-[10px] md:text-[14px] mt-3 sm:mt-[22px]'>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
        <div className='relative mt-[164px]'>
          <Image
            src='/images/explore/gym.png'
            width={1272}
            height={570}
            alt='room'
            className='w-full max-w-[1200px] m-auto aspect-[1440/960] max-h-[570px] sm:rounded-[40px] object-cover'
          />
          <div className='absolute shadow-gray-200 shadow-lg bg-white w-[90%] md:w-[60%] max-w-[690px] left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 pt-2 pb-3 sm:pt-[20px] sm:pb-[40px] px-1 md:px-[60px] rounded-[16px] border-t-[20px]'>
            <h2 className='text-center font-[cursive] text-[24px] text-cerulean-blue-500'>
              Gym center
            </h2>
            <p className='text-center text-[10px] md:text-[14px] mt-3 sm:mt-[22px]'>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
        <div className='relative mt-[164px] mb-[200px]'>
          <Image
            src='/images/explore/restaurant.png'
            width={1272}
            height={570}
            alt='room'
            className='w-full max-w-[1200px] m-auto aspect-[1440/960] max-h-[570px] sm:rounded-[40px] object-cover'
          />
          <div className='absolute shadow-gray-200 shadow-lg bg-white w-[90%] md:w-[60%] max-w-[690px] left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 pt-2 pb-3 sm:pt-[20px] sm:pb-[40px] px-1 md:px-[60px] rounded-[16px] border-t-[20px]'>
            <h2 className='text-center font-[cursive] text-[24px] text-cerulean-blue-500'>
              Restaurant
            </h2>
            <p className='text-center text-[10px] md:text-[14px] mt-3 sm:mt-[22px]'>
              The elegant luxury bedrooms in this gallery showcase custom
              interior designs & decorating ideas. View pictures and find your
              perfect luxury bedroom design.Luxurious bedrooms that will make
              you never want to leave your room again. See more ideas about
              luxurious bedrooms, bedroom design
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExplorePage
