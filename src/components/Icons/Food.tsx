import React from 'react'
import type { SVGProps } from 'react'

export function FoodIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 32 32'
      {...props}
    >
      <path
        fill='currentColor'
        d='M11 5c-3.3 0-6 2.7-6 6v.25l-1.125 1.5A3.59 3.59 0 0 0 5 13.313v2.468c-.61.551-1 1.34-1 2.219c0 .879.39 1.668 1 2.219V23c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2v-2.781c.61-.551 1-1.34 1-2.219c0-.879-.39-1.668-1-2.219v-2.469c.398-.12.77-.296 1.125-.562L27 11.219V11c0-3.3-2.7-6-6-6zm0 2h1c0 .55.45 1 1 1s1-.45 1-1h7c2.219 0 4 1.781 4 4v.5a2.15 2.15 0 0 1-.719-.375l-.531-.375l-.594.344l-.75.437a2.175 2.175 0 0 1-2.25 0l-.75-.437l-.468-.281l-.5.218l-1.438.75a2.21 2.21 0 0 1-1.969 0l-1.469-.75l-.5-.219l-.468.282l-.75.437c-.7.418-1.551.418-2.25 0l-.75-.437l-.594-.344l-.531.375A2.187 2.187 0 0 1 7 11.5V11c0-2.219 1.781-4 4-4m0 1c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m4 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m-6.844 5l.406.25a4.189 4.189 0 0 0 4.313 0l.281-.188l.969.5c1.18.59 2.57.59 3.75 0l.969-.5l.281.188a4.189 4.189 0 0 0 4.313 0l.406-.25c.375.18.758.293 1.156.375V15H7v-1.625A4.938 4.938 0 0 0 8.156 13M7 17h18c.566 0 1 .434 1 1c0 .566-.434 1-1 1H7c-.566 0-1-.434-1-1c0-.566.434-1 1-1m0 4h18v2H7z'
      ></path>
    </svg>
  )
}
