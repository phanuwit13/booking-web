import React from 'react'
import type { SVGProps } from 'react';

const SwimIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 9a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-9 2l4-2l3.5 3l-1.5 2m-9 2.75A2.4 2.4 0 0 0 4 17a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2-1a2.4 2.4 0 0 1 2-1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1-.25'
      ></path>
    </svg>
  )
}

export default SwimIcon
