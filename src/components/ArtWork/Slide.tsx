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
          <div className="relative h-full w-full flex flex-col items-center">
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`${slug} Image ${index}`}
                fill
                className="object-contain z-0"
              />

              {/* PC用 */}
              <button className="hidden md:block prev absolute top-1/2 left-4 -translate-y-1/2 bg-gray-300 h-24 w-24 text-4xl text-gray-800 rounded-full hover:bg-gray-400 border-4 transition duration-300 z-10 opacity-50">
                &lt;
              </button>
              <button className="hidden md:block next absolute top-1/2 right-4 -translate-y-1/2 bg-gray-300 h-24 w-24 text-4xl text-gray-800 rounded-full hover:bg-gray-400 border-4 transition duration-300 z-10 opacity-50">
                &gt;
              </button>

              {/* スマホ用 */}
              <button className="block md:hidden prev absolute bottom-1/12 left-4 bg-gray-300 h-24 w-24 text-4xl text-gray-800 rounded-full hover:bg-gray-400 border-4 transition duration-300 z-10">
                &lt;
              </button>
              <button className="block md:hidden next absolute bottom-1/12 right-4 bg-gray-300 h-24 w-24 text-4xl text-gray-800 rounded-full hover:bg-gray-400 border-4 transition duration-300 z-10">
                &gt;
              </button>
            </div>
          </div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
