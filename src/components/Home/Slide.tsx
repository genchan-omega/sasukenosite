// /src/components/Home/Slide.tsx

"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; 

const images = [
  "/Home/Slide/bird.jpg",
  "/Home/Slide/bird2.jpg",
  "/Home/Slide/buildings.jpg",
  "/Home/Slide/castle.jpg",
  "/Home/Slide/fish.jpg",
  "/Home/Slide/flower.jpg",
  "/Home/Slide/huji.jpg",
  "/Home/Slide/moon.jpg",
  "/Home/Slide/park.jpg",
  "/Home/Slide/traffic.jpg",
]

export default function Slide() {
  return (
    <div className="w-screen h-[100dvh] relative z-0">
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
