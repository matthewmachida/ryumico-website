"use client"

import Image from "next/image";
import { ReactElement } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

type ItemCarousel = {
  items: ReactElement[]
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ItemCarousel(props: ItemCarousel) {
  return (
    <div className="relative w-full h-[55vh] px-24">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[4vh] flex flex-row items-center justify-center gap-8">
        <button className="prev-btn w-[5vh] h-[5vh] z-10 flex flex-col items-center justify-center rounded-full">
          <div className="relative w-[3vh] h-[3vh]">
            <Image
              src={`${BASE_PATH}/icons/arrow.svg`}
              alt="Right Arrow"
              fill
              className="object-cover [transform:scaleX(-1)]"
            />
          </div>
        </button>
        <button className="next-btn w-[5vh] h-[5vh] z-10 flex flex-col items-center justify-center rounded-full">
          <div className="relative w-[3vh] h-[3vh]">
            <Image
              src={`${BASE_PATH}/icons/arrow.svg`}
              alt="Right Arrow"
              fill
              className="object-cover"
            />
          </div>
        </button>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn"
        }}
        pagination={{
          clickable: true
        }}
        loop={false}
        slidesPerView={3}
        spaceBetween={20}
        className="w-full h-[50vh]"
      >
        {props.items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[45vh]">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}