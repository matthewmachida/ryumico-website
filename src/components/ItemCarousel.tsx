"use client"

import { ReactElement } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ItemCarousel = {
  items: ReactElement[]
}

export default function ItemCarousel(props: ItemCarousel) {
  return (
    <div className="relative w-full h-[55vh] px-8">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[5vh] flex flex-row justify-center py-2 gap-10">
        <button className="prev-btn bg-purple-300 z-10">
          previous
        </button>
        <button className="next-btn bg-purple-300 z-10">
          next
        </button>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        }}
        loop={false}
        slidesPerView={3}
        spaceBetween={20}
      >
        <SwiperSlide>
          <div className="w-full h-[50vh] bg-red-600"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50vh] bg-orange-600"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50vh] bg-yellow-600"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50vh] bg-green-600"/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[50vh] bg-blue-600"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}