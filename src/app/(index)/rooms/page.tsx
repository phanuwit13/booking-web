import Booking from '@/components/Pages/Room/Booking/Booking'
import { Suspense } from 'react'

interface Props {}

const RoomsPage = (props: Props) => {
  return (
    <div>
      <div className='w-full max-w-[1440px] m-auto min-h-[700px] overflow-hidden relative flex justify-center items-center'>
        <div className='h-full w-full absolute opacity-80 blur-sm'>
          <div className='h-full w-full bg-[url("/images/explore/room.png")] bg-cover bg-center' />
        </div>
        <div className='relative z-20 pt-[30px] py-[60px] flex justify-center flex-col items-center gap-[48px]'>
          <h1 className='text-center text-[60px] text-white '>
            Rooms and Suites
          </h1>
          <h2 className='text-center text-[20px] text-white max-w-[645px]'>
            The elegant luxury bedrooms in this gallery showcase custom interior
            designs & decorating ideas. View pictures and find your perfect
            luxury bedroom design.
          </h2>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Booking />
      </Suspense>
    </div>
  )
}

export default RoomsPage
