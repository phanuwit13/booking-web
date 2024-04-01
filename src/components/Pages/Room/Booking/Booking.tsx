'use client'

import React from 'react'
import QuantityButton from '@/components/QuantityButton'
import { Controller } from 'react-hook-form'
import CalendarBooking from '@/components/CalendarBooking'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Icon from '@/components/Icons'
import BookingModal from '../BookingModal/BookingModal'
import { useBooking } from './Booking.hook'

interface Props {}

const Booking = (props: Props) => {
  const {
    resRoomAvailable,
    handleSubmit,
    onSubmit,
    handleBookNow,
    control,
    dateNotAvailable,
  } = useBooking()

  return (
    <div className='w-full max-w-[1440px] m-auto min-h-[600px] grid md:grid-cols-2 xl:grid-cols-6 gap-5 mt-10 pb-10 px-2 md:px-10'>
      {resRoomAvailable?.data.data.length === 0 && (
        <div className='xl:col-span-4 flex justify-center items-center text-[20px] text-gray-400'>
          The room is not available for this date
        </div>
      )}
      {resRoomAvailable ? (
        resRoomAvailable.data.data.length > 0 && (
          <div className='xl:col-span-4 grid grid-cols-1 xl:grid-cols-2 gap-4 px-5'>
            {resRoomAvailable.data.data.map((item) => {
              return (
                <div
                  key={item.roomId}
                  className='w-full shadow-gray-200 shadow-sm'
                >
                  <Image
                    src='/images/explore/room.png'
                    width={1272}
                    height={570}
                    alt='room'
                    className='aspect-[1272/570] w-auto min-h-[240px] object-cover object-center'
                  />
                  <div className='px-4 py-2 capitalize flex justify-between items-center'>
                    <div className='space-y-2'>
                      <h2>
                        {item.roomType} Room {item.roomNumber}
                      </h2>
                      <div className='flex gap-2'>
                        <div className='flex items-center gap-2 bg-cerulean-blue-50 px-2 py-0.5 rounded-[4px]'>
                          <Icon name='User' size={16} />{' '}
                          <span className='text-[14px] pt-0.5'>
                            {item.capacity}
                          </span>
                        </div>
                        <div className='flex items-center gap-2 bg-cerulean-blue-50 px-2 py-0.5 rounded-[4px]'>
                          <Icon name='Wifi' size={16} />
                        </div>
                        <div className='flex items-center gap-2 bg-cerulean-blue-50 px-2 py-0.5 rounded-[4px]'>
                          <Icon name='Tv2' size={16} />
                        </div>
                        <div className='flex items-center gap-2 bg-cerulean-blue-50 px-2 py-0.5 rounded-[4px]'>
                          <Icon name='Bath' size={16} />
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleBookNow(item.roomId)}>
                      Book Now
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )
      ) : (
        <div className='xl:col-span-4 flex justify-center items-center text-[20px] text-gray-400'>
          loading...
        </div>
      )}

      <div className='-order-1 md:order-1 xl:col-span-2 space-y-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 px-2'>
          <Controller
            control={control}
            name='date'
            render={({ field: { onChange, value } }) => {
              return (
                <CalendarBooking
                  event={dateNotAvailable || []}
                  onChange={onChange}
                  value={value}
                />
              )
            }}
          />
          <div className='flex justify-between'>
            <div>Number of nights</div>
            <div>
              <Controller
                control={control}
                name='night'
                render={({ field: { onChange, value } }) => {
                  return (
                    <QuantityButton
                      initialValue={value}
                      min={1}
                      max={10}
                      onChange={onChange}
                    />
                  )
                }}
              />
            </div>
          </div>
          <div className='!mt-6'>
            <Button
              type='submit'
              className='w-full text-cerulean-blue-500'
              variant='outline'
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <BookingModal />
    </div>
  )
}

export default Booking
