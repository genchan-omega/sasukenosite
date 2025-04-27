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
		<Swiper
			modules={[Navigation, Scrollbar]}
			spaceBetween={30}
			slidesPerView={1}
			// centeredSlides
			navigation={{ 
        prevEl: ".prev",
        nextEl: ".next"
      }}
			scrollbar={{ draggable: true }}
			className="w-full h-full"
		>
			{images.map((src, index) => (
				<SwiperSlide key={index}>
          <div className="flex flex-row h-full items-center justify-center">
            <button className="prev bg-gray-300 h-30 w-30 text-5xl text-gray-800 rounded-full hover:cursor-pointer hover:bg-gray-400 mr-2 border-4 transition duration-300">
              {/* {"<"}も可能 */}
              &lt;
            </button>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`${slug} Image ${index}`}
                fill
                className="object-contain"
              />
            </div>
            <button className="next bg-gray-300 h-30 w-30 text-5xl text-gray-800 rounded-full hover:cursor-pointer hover:bg-gray-400 ml-2 border-4 transition duration-300">
              &gt;
            </button>
          </div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
