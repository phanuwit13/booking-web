import React, { useCallback, useEffect, useMemo, useState } from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/react'
import {
  Calendar,
  DayCellContentArg,
  EventContentArg,
} from '@fullcalendar/core/index.js'
import dayjs from 'dayjs'
import interactionPlugin from '@fullcalendar/interaction'
import { cn } from '@/lib/utils'
import { CalendarRoot } from '@fullcalendar/core/internal'

type EventItem = {
  title: string
  start: Date
  display: string
  isFull: boolean
}

type Props = {
  onChange: (date: Date) => void
  value: Date
  event: EventItem[]
}

const CalendarBooking = ({ onChange, value, event }: Props) => {
  const [selectDate, setSelectDate] = useState(value || new Date())

  const eventList = useMemo(() => {
    return event.map((item) => ({
      ...item,
      start:dayjs(item.start).format('YYYY-MM-DD'),
      backgroundColor: item.isFull ? '#cc3942' : '#ffb74d',
      className: '!opacity-100',
    }))
  }, [event])

  const customEventContent = useCallback(
    ({ dayNumberText, date }: DayCellContentArg) => {
      return (
        <div
          className={cn(
            'w-full h-full flex items-center justify-center pt-0.5',
            {
              '!text-white relative !z-[-2]': eventList.some((item) =>
                dayjs(item.start).isSame(date)
              ),
            }
          )}
        >
          {dayNumberText}
        </div>
      )
    },
    [eventList]
  )

  useEffect(() => {
    if (!dayjs(value).isSame(selectDate, 'date')) {
      setSelectDate(value)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          center: '',
          right: 'prev,next',
        }}
        initialView='dayGridMonth'
        editable={false}
        selectable={false}
        dayMaxEvents={true}
        height={308}
        events={[...eventList]}
        eventOverlap={false}
        initialDate={selectDate}
        dateClick={({ date, view }) => {
          if (dayjs().diff(date, 'days') <= 0) {
            setSelectDate(date)
            onChange(date)
          }
          if (dayjs(date).isAfter(view.calendar.getDate(), 'month')) {
            view.calendar.next()
          }
          if (dayjs(date).isBefore(view.calendar.getDate(), 'month')) {
            console.log('isBefore')
            view.calendar.prev()
          }
        }}
        navLinks={false}
        dayCellContent={customEventContent}
        dayCellClassNames={({ isPast, date }) => {
          if (dayjs(date).isSame(selectDate, 'days')) {
            return 'cursor-default outline outline-2 -outline-offset-2 outline-cerulean-blue-400'
          }
          if (isPast) return 'bg-gray-50 border cursor-default'
          return `cursor-pointer ${
            !eventList.some((item) => dayjs(item.start).isSame(date)) &&
            'hover:bg-cerulean-blue-50'
          }`
        }}
      />
    </>
  )
}

export default CalendarBooking
