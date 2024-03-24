'use client'
import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation'
import Star from '@/components/Star'
import dayjs from 'dayjs'

interface Props {}

const REVIEW_LIST = [
  {
    reviewDate: '2024-03-10',
    reviewRating: 5,
    reviewComment:
      'บริการที่โรงแรมนี้ยอดเยี่ยมเกินคาด ห้องพักสะอาดเอี่ยม และการตกแต่งทันสมัย พนักงานทุกคนเป็นกันเองและช่วยเหลือดีมาก ทำเลที่ตั้งของโรงแรมทำให้เดินทางไปยังสถานที่ต่างๆ ในเมืองได้สะดวกสบาย',
  },
  {
    reviewDate: '2023-05-26',
    reviewRating: 4,
    reviewComment:
      'อาหารเช้าที่โรงแรมนี้มีให้เลือกหลากหลายและรสชาติอร่อย เตียงนอนสบายและห้องพักออกแบบมาอย่างดี มีสระว่ายน้ำและฟิตเนสที่ดูแลอย่างดี แต่สัญญาณ Wi-Fi บางจุดอาจไม่แรงเท่าที่ควร',
  },
  {
    reviewDate: '2023-05-28',
    reviewRating: 3,
    reviewComment:
      'โรงแรมมีสิ่งอำนวยความสะดวกครบครัน ห้องพักสะอาดแต่ขนาดค่อนข้างเล็ก พนักงานบริการดีแต่การเช็คอินใช้เวลานานไปหน่อย โดยรวมแล้วเป็นการพักที่คุ้มค่ากับราคา',
  },
  {
    reviewDate: '2023-09-16',
    reviewRating: 5,
    reviewComment:
      'โรงแรมตั้งอยู่ในทำเลที่สวยงาม มีบริการที่เอาใจใส่และพนักงานที่มีความเป็นมืออาชีพ ห้องพักมีขนาดกำลังดี มีหน้าต่างใหญ่ที่สามารถมองเห็นวิวเมืองได้ชัดเจน อาหารที่ร้านอาหารของโรงแรมมีคุณภาพสูงและหลากหลาย',
  },
  {
    reviewDate: '2024-03-10',
    reviewRating: 5,
    reviewComment:
      'บริการที่โรงแรมนี้ยอดเยี่ยมเกินคาด ห้องพักสะอาดเอี่ยม และการตกแต่งทันสมัย พนักงานทุกคนเป็นกันเองและช่วยเหลือดีมาก ทำเลที่ตั้งของโรงแรมทำให้เดินทางไปยังสถานที่ต่างๆ ในเมืองได้สะดวกสบาย',
  },
  {
    reviewDate: '2023-05-26',
    reviewRating: 4,
    reviewComment:
      'อาหารเช้าที่โรงแรมนี้มีให้เลือกหลากหลายและรสชาติอร่อย เตียงนอนสบายและห้องพักออกแบบมาอย่างดี มีสระว่ายน้ำและฟิตเนสที่ดูแลอย่างดี แต่สัญญาณ Wi-Fi บางจุดอาจไม่แรงเท่าที่ควร',
  },
  {
    reviewDate: '2023-05-28',
    reviewRating: 3,
    reviewComment:
      'โรงแรมมีสิ่งอำนวยความสะดวกครบครัน ห้องพักสะอาดแต่ขนาดค่อนข้างเล็ก พนักงานบริการดีแต่การเช็คอินใช้เวลานานไปหน่อย โดยรวมแล้วเป็นการพักที่คุ้มค่ากับราคา',
  },
  {
    reviewDate: '2023-09-16',
    reviewRating: 5,
    reviewComment:
      'โรงแรมตั้งอยู่ในทำเลที่สวยงาม มีบริการที่เอาใจใส่และพนักงานที่มีความเป็นมืออาชีพ ห้องพักมีขนาดกำลังดี มีหน้าต่างใหญ่ที่สามารถมองเห็นวิวเมืองได้ชัดเจน อาหารที่ร้านอาหารของโรงแรมมีคุณภาพสูงและหลากหลาย',
  },
  {
    reviewDate: '2024-03-10',
    reviewRating: 5,
    reviewComment:
      'บริการที่โรงแรมนี้ยอดเยี่ยมเกินคาด ห้องพักสะอาดเอี่ยม และการตกแต่งทันสมัย พนักงานทุกคนเป็นกันเองและช่วยเหลือดีมาก ทำเลที่ตั้งของโรงแรมทำให้เดินทางไปยังสถานที่ต่างๆ ในเมืองได้สะดวกสบาย',
  },
  {
    reviewDate: '2023-05-26',
    reviewRating: 4,
    reviewComment:
      'อาหารเช้าที่โรงแรมนี้มีให้เลือกหลากหลายและรสชาติอร่อย เตียงนอนสบายและห้องพักออกแบบมาอย่างดี มีสระว่ายน้ำและฟิตเนสที่ดูแลอย่างดี แต่สัญญาณ Wi-Fi บางจุดอาจไม่แรงเท่าที่ควร',
  },
]

const Reviews = (props: Props) => {
  return (
    <div className='pt-[63px] w-full max-w-[1440px] m-auto pb-[74px]'>
      <h1 className='text-center text-[40px]'>Client Reviews</h1>
      <h2 className='text-center mt-3 text-[14px] max-w-[445px] m-auto'>
        We are very proud of the services we offer to our customers. Read every
        word from our happy customers.
      </h2>
      <Swiper slidesPerView={3} spaceBetween={30} className='mySwiper mt-10'>
        {REVIEW_LIST.map((item, index) => {
          return (
            <SwiperSlide
              key={`review-${index}`}
              className='!h-[140px] bg-cerulean-blue-50/50 rounded p-4'
            >
              <div className='flex justify-between items-center'>
                <p className='text-[12px] text-gray-400'>{item.reviewDate}</p>
                <Star rating={item.reviewRating} />
              </div>
              <p className='mt-4 text-[14px] text-foreground'>{item.reviewComment}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Reviews
