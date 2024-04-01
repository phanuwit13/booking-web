import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useBookingModalStore } from './store'
import { boolean } from 'zod'
import { useGetRoomDetail } from '@/services/rooms/rooms'
import Image from 'next/image'
import Icon from '@/components/Icons'
import { Input } from '@/components/ui/input'
import { useBookingModal } from './BookingModal.hook'
import { Controller } from 'react-hook-form'
import QuantityButton from '@/components/QuantityButton'
import { Checkbox } from '@/components/ui/checkbox'
import dayjs from 'dayjs'
interface Props {}

const BookingModal = (props: Props) => {
  const {
    form,
    handleSubmit,
    myself,
    isOpenBooking,
    onCloseBooking,
    checkin,
    checkout,
    nightAmount,
  } = useBookingModal()

  const { data: RoomDetailResponse } = useGetRoomDetail({
    id: isOpenBooking ?? undefined,
  })

  return (
    <AlertDialog open={Boolean(isOpenBooking)}>
      <AlertDialogContent className='w-full max-w-[600px]'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <span className='capitalize'>
              {RoomDetailResponse?.data.data.roomType} Room{' '}
              {RoomDetailResponse?.data.data.roomNumber}
            </span>
          </AlertDialogTitle>
          <div>
            <Image
              src='/images/explore/room.png'
              width={1272}
              height={570}
              alt='room'
              className='aspect-[1272/570] w-auto min-h-[240px] object-cover object-center'
            />
            <div className='flex items-center justify-between  mt-6'>
              <div className='flex gap-2'>
                <div className='flex items-center gap-2 bg-cerulean-blue-50 px-2 py-0.5 rounded-[4px]'>
                  <Icon name='User' size={16} />{' '}
                  <span className='text-[14px] pt-0.5'>
                    {RoomDetailResponse?.data.data.capacity}
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
              <div className='flex items-center'>
                <Icon name='DollarSign' size={16} />
                <span className='pt-0.5'>
                  {RoomDetailResponse?.data.data.pricePerNight}{' '}
                  <span className='text-[14px] text-gray-500'>/ Night</span>
                </span>
              </div>
            </div>
            <p className='mt-6 text-[14px]'>
              {RoomDetailResponse?.data.data.description}
            </p>
            <form
              onSubmit={handleSubmit}
              id='booking-form'
              className='space-y-4 my-6 px-8'
            >
              <fieldset>
                <Controller
                  control={form.control}
                  name='myself'
                  render={({ field: { onChange, value } }) => {
                    return (
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          checked={value}
                          onCheckedChange={onChange}
                          id={form.fieldMyself.name}
                          className='!rounded-[2px]'
                        />
                        <label
                          htmlFor={form.fieldMyself.name}
                          className='cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Reserve a room for myself.
                        </label>
                      </div>
                    )
                  }}
                />

                {form.errors.myself?.message}
              </fieldset>
              <fieldset>
                <Input
                  type='text'
                  placeholder='Name'
                  className='border px-2 py-1 w-full'
                  disabled={myself}
                  {...form.fieldName}
                />
                {form.errors.name && (
                  <p className='text-[12px] text-red-500'>
                    {form.errors.name.message}
                  </p>
                )}
              </fieldset>
              <fieldset>
                <Input
                  type='text'
                  placeholder='Email'
                  className='border px-2 py-1 w-full'
                  disabled={myself}
                  {...form.fieldEmail}
                />
                {form.errors.email && (
                  <p className='text-[12px] text-red-500'>
                    {form.errors.email.message}
                  </p>
                )}
              </fieldset>
              <fieldset>
                <Input
                  type='text'
                  placeholder='Phone Number'
                  className='border px-2 py-1 w-full'
                  disabled={myself}
                  {...form.fieldPhoneNumber}
                />
                {form.errors.phoneNumber && (
                  <p className='text-[12px] text-red-500'>
                    {form.errors.phoneNumber.message}
                  </p>
                )}
              </fieldset>
              <div className='flex justify-between text-[14px]'>
                <div>Check In</div>
                <div>
                  {dayjs(checkin).format('YYYY-MM-DD')}{' '}
                  <span className='pl-2'>14:00</span>
                </div>
              </div>
              <div className='flex justify-between text-[14px]'>
                <div>Checkout</div>
                <div>
                  {dayjs(checkout).format('YYYY-MM-DD')}{' '}
                  <span className='pl-2'>12:00</span>
                </div>
              </div>
              <div className='flex mt-8 justify-between items-center border-t pt-2'>
                <span className='text-[14px]'>Price</span>
                <div className='flex items-center font-bold'>
                  <Icon
                    name='DollarSign'
                    className='text-cerulean-blue-500'
                    size={16}
                  />{' '}
                  <span className='pt-0.5 font-bold text-cerulean-blue-500'>
                    {(
                      nightAmount *
                      (RoomDetailResponse?.data.data.pricePerNight || 0)
                    ).toLocaleString('th-TH', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCloseBooking}>Cancel</AlertDialogCancel>
          <AlertDialogAction type='submit' form='booking-form'>
            Submit
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default BookingModal
