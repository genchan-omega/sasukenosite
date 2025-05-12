// /src/app/components/Home/Gallery.tsx

"use client";

import Image from "next/image";

import { useState, useEffect } from "react";
import { Field, Select } from "@headlessui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";

const tagImageCounts: Record<string, number> = {
  Landscape: 46,
  Overseas: 27,
  Snap: 30,
  Animals: 43,
  Birds: 46,
  Nature: 39,
};

const images = Object.entries(tagImageCounts).flatMap(([tag, count]) =>
  Array.from({ length: count }, (_, i) => ({
    src: `/Photo/${tag}/${i + 1}.jpg`,
    tag,
  }))
);

export default function Gallery() {
	// タグ
	const tags = ["All", "Landscape", "Overseas", "Snap", "Animals", "Birds", "Nature"];
	const [selectedImg, setSelectedImg] = useState<string | null>(null);
	const [filter, setFilter] = useState<string>("All");

	// モーダル表示時は背景固定
	useEffect(() => {
		if (selectedImg) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [selectedImg]);

	return (
		<section className="flex flex-col flex-1">
      {/* 絞り込み部分 */}
			<Field className="flex flex-col justify-center items-center gap-4 text-black">
				<Select
					name="tag-filter"
					aria-label="絞り込み"
					className="w-50 text-3xl text-center border-4"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				>
					{tags.map((tag) => (
						<option key={tag} value={tag}>
							{tag}
						</option>
					))}
				</Select>
			</Field>

			{/* 一覧表示 */}
			<div className="grid grid-cols-3 p-4 w-full md:w-[60vw] mx-auto">
				{images
					.filter((image) => filter === "All" || image.tag === filter)
					.map((image, index) => (
						<div
							key={index}
							className="relative aspect-[3/4] md:aspect-[4/3] cursor-pointer overflow-hidden border-2"
						>
							<Image
								src={image.src}
								alt={`Gallery Image ${index}`}
								fill
								className="object-cover w-full h-auto transition-transform duration-300 hover:scale-110"
								onClick={() => setSelectedImg(image.src)}
								priority
							/>
						</div>
					))}
			</div>

			{/* モーダル部分 */}
			{selectedImg && (
				<div
					className="fixed inset-0  bg-opacity-80 flex justify-center items-center z-[1000] backdrop-blur-sm"
					onClick={() => setSelectedImg(null)}
				>
					<div
						className="relative w-11/12 h-5/6"
            onClick={(e) => e.stopPropagation()}
					>
						<Swiper
							modules={[Navigation]}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
							initialSlide={images.findIndex((img) => img.src === selectedImg)}
							className="w-full h-full"
						>
							{images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full flex flex-col items-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={`$Image ${index}`}
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
                      <button className="block md:hidden prev absolute bottom-1/12 left-4 bg-gray-300 h-20 w-24 text-4xl text-gray-800 rounded-2xl hover:bg-gray-400 border-4 transition duration-300 z-10">
                        &lt;
                      </button>
                      <button className="block md:hidden next absolute bottom-1/12 right-4 bg-gray-300 h-20 w-24 text-4xl text-gray-800 rounded-2xl hover:bg-gray-400 border-4 transition duration-300 z-10">
                        &gt;
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			)}
		</section>
	);
}
