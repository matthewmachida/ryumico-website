"use client"

import { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

type PhotoCarouselProps = {
  height: number // in vh units, not px!
  slides: ReactElement[]
  title?: string
  subtitle?: string
};

export default function PhotoCarousel(props: PhotoCarouselProps) {
  return(
    // Could work on making the features customizable based on props
    <div className="relative w-full" style={{ height: `${props.height}vh` }}>
      {/* Swiper Carousel */}
      <Swiper 
        className="w-full h-full"
        modules={[Autoplay]}
        autoplay={{delay: 3000}}
        loop={true}
        slidesPerView={1}
      >
        {props.slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="object-cover w-full h-full" style={{ height: `${props.height}vh` }}>
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none"></div>

      {/* Text overlay */}
      {props.title == null? <div/> :
        <div className="absolute bottom-0 left-0 p-20 z-20">
          <h1 className="text-white">{props.title}</h1>
          {props.subtitle == null? <div/> : 
            <h3 className="text-white">{props.subtitle}</h3>
          }
        </div>
      }
    </div>
    
  );
}