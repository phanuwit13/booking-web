'use client'

import DatePicker from '@/components/DatePicker'
import { Button } from '@/components/ui/button'
import { ROUTE } from '@/constants/routes'
import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { DateValueType } from 'react-tailwindcss-datepicker'
import { z } from 'zod'

const schemaFormRoomSearch = z.object({
  date: z.custom<
    DateValueType & (string | number | readonly string[] | undefined)
  >(),
})
type SchemaFormRoomSearch = z.infer<typeof schemaFormRoomSearch>

type Props = {}

const RoomSearch = (props: Props) => {
  const router = useRouter()

  const { handleSubmit, control } = useForm<SchemaFormRoomSearch>({
    resolver: zodResolver(schemaFormRoomSearch),
  })

  const onSubmit = (v: SchemaFormRoomSearch) => {
    if (v.date) {
      const night = dayjs(v.date.endDate).diff(v.date.startDate,'day') || 1
      router.push(`${ROUTE.ROOMS}?night=${night}&date=${dayjs(v.date.startDate).toISOString()}`)
    }
  }

  return (
    <div className='absolute -top-[70px] min-h-[140px] w-[98%] sm:w-[80%] max-w-[900px] z-50 bg-white left-1/2 -translate-x-1/2 shadow-gray-100 shadow-lg rounded-3xl px-6 py-4'>
      <div className='text-center text-[18px] text-gray-400 font-semibold'>
        Date you plan to check in
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-1 sm:flex-row sm:gap-4 items-center mt-3'
      >
        <div className='flex-1 w-full'>
          <Controller
            control={control}
            name='date'
            render={({ field }) => (
              <DatePicker
                useRange={true}
                asSingle={false}
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
        </div>
        <Button size='lg' className='mt-1'>
          Search
        </Button>
      </form>
    </div>
  )
}

export default RoomSearch
