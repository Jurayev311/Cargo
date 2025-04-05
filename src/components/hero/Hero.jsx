import React from 'react'
import hero from '../../assets/hero.png'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

const Hero = () => {
  const slides = [1, 2, 3]

  return (
    <>
      <Swiper
        id='main'
        pagination={{ dynamicBullets: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="text-center text-white relative">
              <div className="relative">
                <img src={hero} alt="hero image" className="swiper-slide-img" />
              </div>
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h2 className="text-[54px] font-bold mb-8 text-center">Unlimited Delivery</h2>
                <p className="text-[22px] font-light leading-8 max-w-[550px] mx-auto">
                  We help people save time, make their life better, exercising
                  communications, both in business and in private life.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Hero
