import React from 'react'
import type { SVGProps } from 'react'

const LogoHotelIcon = (props: SVGProps<SVGSVGElement>) => {
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
        d='M16 2.281L8 6.844V16l8-4.563zm0 9.156L24 16V6.844zM24 16l-8 4.563v9.156l8-4.563zm-8 4.563L8 16v9.156z'
      ></path>
    </svg>
  )
}

export default LogoHotelIcon
