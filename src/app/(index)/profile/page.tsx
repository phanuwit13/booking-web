'use client'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useAuth } from '@/store/auth'
import { Button } from '@/components/ui/button'
import { useGetListReservation } from '@/services/rooms/rooms'
import dayjs from 'dayjs'

interface Props {}

const ProfilePage = (props: Props) => {
  const { user, logout } = useAuth()
  const { data: resListReservation } = useGetListReservation()
  return (
    <div className='min-h-[400px] pt-8 px-4'>
      <Tabs
        defaultValue='account'
        className='max-w-[1200px] m-auto w-full flex flex-col md:flex-row h-full gap-8 items-start'
      >
        <TabsList className='flex flex-row md:flex-col justify-start w-full md:w-[400px] bg-white gap-4'>
          <TabsTrigger value='account' className='w-full'>
            Account
          </TabsTrigger>
          <TabsTrigger value='password' className='w-full'>
            Ticket
          </TabsTrigger>
        </TabsList>
        <TabsContent value='account' className='w-full min-h-[400px]'>
          <div className='w-full space-y-4'>
            <div className='flex gap-4'>
              <div className='text-gray-500 w-[140px]  sm:w-[200px] '>Username</div>
              <div className='col-span-5 xl:col-span-5'>{user?.username}</div>
            </div>
            <div className='flex gap-4'>
              <div className='text-gray-500 w-[140px]  sm:w-[200px] '>Names</div>
              <div className='col-span-5 xl:col-span-5'>{user?.name}</div>
            </div>
            <div className='flex gap-4'>
              <div className='text-gray-500 w-[140px]  sm:w-[200px] '>Email</div>
              <div className='col-span-5 xl:col-span-5'>{user?.email}</div>
            </div>
            <div className='flex gap-4'>
              <div className='text-gray-500 w-[140px]  sm:w-[200px] '>Phone Number</div>
              <div className='col-span-5 xl:col-span-5'>{user?.phoneNumber}</div>
            </div>
            <div>
              <Button
                onClick={() => logout()}
                variant='outline'
                size='sm'
                className='w-[100px]'
              >
                Logout
              </Button>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='password' className='w-full min-h-[400px] pb-10'>
          {resListReservation?.data.reservation.length === 0 && (
            <div className='flex justify-center pt-4 text-gray-400'>Ticket is Empty</div>
          )}
          <div className='gap-4 grid grid-cols-1 lg:grid-cols-2'>
            {resListReservation?.data.reservation.map((item) => {
              return (
                <div
                  className='relative min-h-[100px] border p-4 rounded flex flex-col justify-between border-t-cerulean-blue-500 border-t-[8px]'
                  key={item.reservationId}
                >
                  <div className='flex justify-between items-center'>
                    <div className='capitalize'>
                      {item.room.roomType} Room {item.room.roomNumber}
                    </div>
                    <div className='text-[12px] text-gray-400'>
                      Ticket ID : {item.reservationId.slice(-8)}
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <div className='text-[14px]'>Guests : {item.otherName}</div>
                    <div className='text-[12px] text-gray-400'>
                      {dayjs(item.checkinDate).format('YYYY MMM DD')} -{' '}
                      {dayjs(item.checkoutDate).format('YYYY MMM DD')}
                    </div>
                  </div>
                  {dayjs(item.checkinDate).diff(new Date(), 'day') < 0 && (
                    <div className='absolute w-full h-full flex justify-center items-center top-0 left-0 bg-black/30 z-10 text-white text-[20px]'>
                      <span className='-rotate-12'>Expired</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ProfilePage
