"use client"

import Image from "next/image";
import { ReactElement } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { icons } from "@/data/images";

type ItemCarousel = {
  items: ReactElement[]
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ItemCarousel(props: ItemCarousel) {
  return (
    <div className="relative w-full h-168 px-24">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 flex flex-row items-center justify-center gap-8">
        {/* Left arrow button absolutely positioned below the carousel */}
        <button className="prev-btn w-16 h-16 z-10 flex flex-col items-center justify-center rounded-full">
          <div className="relative w-10 h-10">
            <Image
              src={icons.arrow.src}
              alt="Left Arrow"
              fill
              className="object-cover [transform:scaleX(-1)]"
            />
          </div>
        </button>
        {/* Right arrow button */}
        <button className="next-btn w-16 h-16 z-10 flex flex-col items-center justify-center rounded-full">
          <div className="relative w-10 h-10">
            <Image
              src={icons.arrow.src}
              alt="Right Arrow"
              fill
              className="object-cover"
            />
          </div>
        </button>
      </div>
      {/* Item carousel itself */}
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
        className="w-full h-144"
      >
        {props.items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-136">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}