import React from 'react'
import type { SVGProps } from 'react'

export function WashingMachineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.03em'
      height='1em'
      viewBox='0 0 49 48'
      {...props}
    >
      <defs>
        <mask id='ipTWashingMachine0'>
          <g fill='none'>
            <rect
              width={32}
              height={40}
              x={8.778}
              y={4}
              stroke='#fff'
              strokeWidth={4}
              rx={2}
            ></rect>
            <path
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={4}
              d='M8.778 15.5h32'
            ></path>
            <circle cx={28.778} cy={10} r={2} fill='#fff'></circle>
            <circle cx={34.778} cy={10} r={2} fill='#fff'></circle>
            <circle
              cx={24.778}
              cy={30}
              r={7}
              fill='#555'
              stroke='#fff'
              strokeWidth={4}
            ></circle>
          </g>
        </mask>
      </defs>
      <path
        fill='currentColor'
        d='M0 0h49v48H0z'
        mask='url(#ipTWashingMachine0)'
      ></path>
    </svg>
  )
}
