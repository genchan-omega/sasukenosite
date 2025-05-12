// /src/components/ArtWork/Works.tsx

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";

import Image from "next/image";

export default function SwiperViewer({
	images,
	slug,
}: {
	images: string[];
	slug: string;
}) {
	return (
    <>
      <button className="prev absolute top-1/2 left-0 -translate-y-1/2 h-24 w-24 text-6xl text-black transition duration-300 z-10 hover:cursor-pointer">
        〈
      </button>
      <button className="next absolute top-1/2 right-0 -translate-y-1/2 h-24 w-24 text-6xl text-black transition duration-300 z-10 hover:cursor-pointer">
        〉
      </button>
      <Swiper
        modules={[Navigation, Scrollbar]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        scrollbar={{ draggable: true }}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full flex flex-col items-center">
              <div className="relative w-full h-full">
                <Image
                  src={src}
                  alt={`${slug} Image ${index}`}
                  fill
                  className="object-contain z-0"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
	);
}
