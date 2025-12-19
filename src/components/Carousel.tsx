"use client"

import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

type CarouselProps = {
  height: number // in vh units, not px!
  slides: ReactElement[];
};

export default function Carousel(props: CarouselProps) {
  return(
    <Swiper 
      className="w-full"
      style={{ height: `${props.height}vh` }}
      modules={[Autoplay]}
      autoplay={{delay: 3000}}
      loop={true}
      slidesPerView={1}
    >
      {props.slides.map((item, i) => (
        <SwiperSlide key={i}>
          <div className={"relative w-full"} style={{ height: `${props.height}vh` }}>
            {item}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}