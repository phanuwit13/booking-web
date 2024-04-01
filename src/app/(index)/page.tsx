'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import OurFacilities from '@/components/Pages/Home/OurFacilities'
import LuxuriousRooms from '@/components/Pages/Home/LuxuriousRooms'
import Reviews from '@/components/Pages/Home/Reviews'
import RoomSearch from '@/components/Pages/Home/RoomSearch'

type Props = {}

const PageIndex = (props: Props) => {
  return (
    <div>
      <div className='relative'>
        <Swiper
          autoplay
          loop
          pagination={true}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <video
              autoPlay
              loop
              muted
              id='home-video'
              className='w-full max-w-[1440px] m-auto aspect-[1440/960] max-h-[700px] object-cover'
            >
              <source src='/videos/5828735.mp4' type='video/mp4' />
            </video>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='home'
              src='/images/home/1.webp'
              width={1440}
              height={960}
              quality={100}
              className='aspect-[1440/960] w-full max-w-[1440px] max-h-[700px] object-center m-auto'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='home'
              src='/images/home/2.webp'
              width={1440}
              height={960}
              quality={100}
              className='aspect-[1440/960] w-full max-w-[1440px] max-h-[700px] object-center m-auto'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='home'
              src='/images/home/3.webp'
              width={1440}
              height={960}
              quality={100}
              className='aspect-[1440/960] w-full max-w-[1440px] max-h-[700px] object-center m-auto'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt='home'
              src='/images/home/4.webp'
              width={1440}
              height={960}
              quality={100}
              className='aspect-[1440/960] w-full max-w-[1440px] max-h-[700px] object-center m-auto'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='min-h-[900px] relative'>
        <RoomSearch />
        <div>
          <OurFacilities />
          <LuxuriousRooms />
          <Reviews />
        </div>
      </div>
    </div>
  )
}

export default PageIndex
