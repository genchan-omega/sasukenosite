// /src/components/ArtWork/Works.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import { Navigation } from "swiper/modules";

import Image from "next/image";

export default function SwiperViewer({ images, slug }: { images: string[], slug: string }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides
      navigation
      className="
      [&_.swiper-button-next]:scale-150
      [&_.swiper-button-prev]:scale-150
      [--swiper-navigation-color:black]
    "

    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[500px]">
            <Image
              src={src}
              alt={`${slug} Image ${index}`}
              fill
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
