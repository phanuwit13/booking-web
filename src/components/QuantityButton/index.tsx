import React, { useState } from 'react'
import { Button } from '../ui/button'
import Icon from '../Icons'

interface QuantityButtonProps {
  initialValue: number
  min: number
  max: number
  onChange: (quantity: number) => void
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  initialValue,
  min,
  max,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue)

  const increment = () => {
    if (quantity < max) {
      setQuantity(quantity + 1)
      onChange(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > min) {
      setQuantity(quantity - 1)
      onChange(quantity - 1)
    }
  }

  return (
    <div className='flex gap-3 items-center'>
      <button
        type='button'
        className='w-[28px] h-[28px] flex justify-center items-center border rounded-full border-cerulean-blue-500  disabled:opacity-40'
        onClick={decrement}
        disabled={quantity === min}
      >
        <Icon name='Minus' className='text-cerulean-blue-500' size={16} />
      </button>
      <span className='min-w-[40px] text-center'>{quantity}</span>
      <button
        type='button'
        className='w-[28px] h-[28px] flex justify-center items-center border rounded-full border-cerulean-blue-500  disabled:opacity-40'
        onClick={increment}
        disabled={quantity === max}
      >
        <Icon name='Plus' className='text-cerulean-blue-500' size={16} />
      </button>
    </div>
  )
}

export default QuantityButton
