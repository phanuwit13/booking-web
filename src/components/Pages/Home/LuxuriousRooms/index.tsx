import Image from 'next/image'
import React from 'react'

interface Props {}

const LuxuriousRooms = (props: Props) => {
  return (
    <div className='w-full max-w-[1440px] m-auto min-h-[600px] overflow-hidden relative'>
      <div className='h-full w-full absolute opacity-80 blur-sm'>
        <div className='h-full w-full absolute bg-[url("/images/luxurious-rooms-bg.webp")]' />
      </div>
      <div className='relative z-20 pt-[30px] py-[60px]'>
        <h1 className='text-center text-[40px] text-white '>Luxurious Rooms</h1>
        <div className='border-b-4 w-full max-w-[200px] m-auto mt-4 '></div>
        <h2 className='text-center mt-4 text-[12px] text-white'>
          All room are design for your comfort
        </h2>
        <ul className='grid grid-cols-3 gap-[58px] px-[120px] mt-[70px]'>
          {Array.from(Array(3)).map((_, index) => {
            return (
              <li className='bg-white p-7 rounded' key={index}>
                <Image
                  src='/images/home/4.webp'
                  width={1440}
                  height={680}
                  className='h-[238px] object-cover object-center rounded'
                  alt='room'
                />
                <p className='text-[14px] mt-4'>Television set, Extra sheets, Breakfast, and fireplace</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default LuxuriousRooms
