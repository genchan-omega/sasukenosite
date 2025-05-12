// /src/components/Home/Slide.tsx

"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; 

const images = [
  "/Home/Slide/2.jpg",
  "/Home/Slide/1.jpg",
  "/Home/Slide/3.jpg",
  "/Home/Slide/4.jpg",
  "/Home/Slide/5.jpg",
  "/Home/Slide/6.jpg",
  "/Home/Slide/7.jpg",
  "/Home/Slide/8.jpg",
]

export default function Slide() {
  return (
    <div className="w-screen h-[100dvh] z-0 sticky top-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-screen">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
