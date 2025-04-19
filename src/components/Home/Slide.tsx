// /src/components/Home/Slide.tsx

"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; 

const images = [
  "/Home/bird.jpg",
  "/Home/bird2.jpg",
  "/Home/castle.jpg",
  "/Home/fish.jpg",
  "/Home/flower.jpg",
  "/Home/moon.jpg",
  "/Home/park.jpg",
  "/Home/river.jpg",
  "/Home/sun.jpg",
  "/Home/traffic.jpg",
]

export default function Slide() {
  return (
    <div className="w-screen h-screen relative">
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
