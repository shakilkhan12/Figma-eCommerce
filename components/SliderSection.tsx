'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
const SliderSection = () => {
  return (
    <div className='ml-[24px]'>
      <Swiper
slidesPerView={'auto'}
centeredSlides={true}
spaceBetween={0}
pagination={{
  clickable: true,
}}

modules={[Pagination,Navigation]}
className="mySwiper"
      >
        <SwiperSlide>
            <div className='w-[372px] h-[486px] relative'>
                <Image src='/slider1.png' alt="slider 1" fill className="w-full h-full object-cover" />
            </div>
        </SwiperSlide>
        <SwiperSlide><div className='w-[372px] h-[486px] relative'>
                <Image src='/slider2.png' alt="slider 2" fill className="w-full h-full object-cover" />
            </div></SwiperSlide>

      </Swiper>
      <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
    </div>
  )
}

export default SliderSection