"use client"

import Banner, { ImageProps } from "./Banner";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

type PhotoCarouselProps = {
  slides: ImageProps[]
  height: number // in vh units, not px!
  title?: string
  subtitle?: string
  titleSrc?: string
  titleAlt?: string
};

// There are two optional features - title text and title image
// Both the titleSrc and titleAlt must be given for the title image to display, and either the combo of titleSrc and titleAlt or the title must be given to display the subtitle
// If both are provided, the title image takes priority and title text is not displayed
export default function PhotoCarousel(props: PhotoCarouselProps) {
  if (props.titleSrc == undefined && props.titleAlt != undefined) {
    console.error("No src for photo carousel title image provided");
    return <div/>;
  }
  if (props.titleSrc != undefined && props.titleAlt == undefined) {
    console.error("No alt for photo carousel title image provided");
    return <div/>;
  }
  
  return(
    // Could work on making the features customizable based on props
    <div className="relative w-full" style={{ height: `${props.height}vh` }}>
      {/* Swiper Carousel */}
      <Swiper 
        className="w-full h-full"
        modules={[Autoplay]}
        autoplay={{delay: 4000}}
        loop={true}
        slidesPerView={1}
      >
        {props.slides.map((item, i) => (
          <SwiperSlide key={i}>
            <Banner
              height={props.height}
              img={item}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Text/Photo overlay */}
      {
        props.title == undefined && (props.titleSrc == undefined || props.titleAlt == undefined)? // If we do not have title or a valid image
          <div/> : // then display nothing
          <div className="absolute bottom-0 left-0 z-20 w-full h-[30vh]">
            {
              (props.titleSrc != undefined && props.titleAlt != undefined)? // If have and img titleSrc and image titleAlt}
                <Image
                  src={props.titleSrc}
                  alt={props.titleAlt}
                  width={4}
                  height={1}
                  sizes={"850px"}
                  className="absolute bottom-32 left-28 z-20 h-full w-auto object-cover"
                /> : // then use the image
                <h1 className="absolute bottom-32 left-40 z-20 text-white">{props.title}</h1> // else, use the text
            }
            { props.subtitle == null? <div/> : <h3 className="absolute bottom-20 left-40 z-20 text-white">{props.subtitle}</h3> }
          </div>
      }
    </div>
    
  );
}