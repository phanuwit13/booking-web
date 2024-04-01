import cn from 'classnames';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import Datepicker, { DatepickerType } from 'react-tailwindcss-datepicker';

const DatePicker = forwardRef(
  (
    {
      label,
      id,
      value,
      error,
      ...props
    }: DatepickerType &
      ComponentPropsWithoutRef<'input'> & { label?: string; error?: boolean },
    ref
  ) => {

    return (
      <fieldset className='custom-date-input space-y-[4px]'>
        <label htmlFor={id} className='font-[500] text-[16px] text-gray-700'>
          {label}
        </label>
        <Datepicker
          value={value ? value : { startDate: null, endDate: null }}
          inputId={id}
          inputClassName={cn(
            'border border-input bg-transparent shadow-sm p-[9px] px-5 border-[#CBCBCB] hover:border-cerulean-blue-500 rounded-full w-full focus-visible:outline-cerulean-blue-500',
            {
              '!border-red-500': error,
            }
          )}
          primaryColor='blue'
          {...props}
        />
      </fieldset>
    )
  }
)

DatePicker.displayName = 'DatePicker'

export default DatePicker
