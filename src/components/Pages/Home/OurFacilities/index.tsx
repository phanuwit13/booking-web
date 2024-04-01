import { FoodIcon } from '@/components/Icons/Food'
import { GameIcon } from '@/components/Icons/Game'
import { GymIcon } from '@/components/Icons/Gym'
import { LightIcon } from '@/components/Icons/Light'
import { ParkingIcon } from '@/components/Icons/Parking'
import SwimIcon from '@/components/Icons/Swim'
import { WashingMachineIcon } from '@/components/Icons/WashingMachine'
import { WifiIcon } from '@/components/Icons/Wifi'
import React from 'react'

interface Props {}

const OUR_FACILITIES = [
  {
    title: 'Swimming Pool',
    icon: <SwimIcon className='text-cerulean-blue-500 w-[80px] h-[80px]' />,
  },
  {
    title: 'Wifi',
    icon: (
      <WifiIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-2' />
    ),
  },
  {
    title: 'Breakfast',
    icon: (
      <FoodIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[10px]' />
    ),
  },
  {
    title: 'Gym',
    icon: (
      <GymIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[20px]' />
    ),
  },
  {
    title: 'Game center',
    icon: (
      <GameIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[12px]' />
    ),
  },
  {
    title: '24/7 Light',
    icon: (
      <LightIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[16px]' />
    ),
  },
  {
    title: 'Laundry',
    icon: (
      <WashingMachineIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[16px]' />
    ),
  },
  {
    title: 'Parking space',
    icon: (
      <ParkingIcon className='text-cerulean-blue-500 w-[80px] h-[80px] py-[16px]' />
    ),
  },
]

const OurFacilities = (props: Props) => {
  return (
    <div className='pt-[140px] w-full max-w-[1440px] m-auto pb-[74px] px-4'>
      <h1 className='text-center text-[40px]'>Our Facilities</h1>
      <h2 className='text-center mt-3'>
        We offer modern (5 star) hotel facilities for your comfort.
      </h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[50px] gap-y-[60px] mt-[50px]'>
        {OUR_FACILITIES.map((item) => {
          return (
            <li
              key={item.title}
              className='bg-cerulean-blue-50/50 rounded flex flex-col gap-0 py-[80px] items-center'
            >
              {item.icon}
              <p className='font-medium text-[20px] text-cerulean-blue-500'>
                {item.title}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default OurFacilities
