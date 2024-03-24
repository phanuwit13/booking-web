import React from 'react'
import type { SVGProps } from 'react'

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      >
        <path d='M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0m-8.485-2.829a8 8 0 0 1 11.314 0'></path>
        <path d='M3.515 9.515c4.686-4.687 12.284-4.687 17 0'></path>
      </g>
    </svg>
  )
}
