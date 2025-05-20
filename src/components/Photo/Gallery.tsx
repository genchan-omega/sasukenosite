"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import { Field, Select } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SyncLoader } from "react-spinners";
import "swiper/css/bundle";

// --- 全画像データ ---
const tagImageCounts: Record<string, number> = {
  Landscape: 46,
  Overseas: 27,
  Snap: 30,
  Animals: 43,
  Birds: 46,
  Nature: 39,
};

const allImages = Object.entries(tagImageCounts).flatMap(([tag, count]) =>
  Array.from({ length: count }, (_, i) => ({
    src: `/Photo/${tag}/${i + 1}.jpg`,
    tag,
  }))
);

export default function Gallery() {
  const tags = ["All", "Landscape", "Overseas", "Snap", "Animals", "Birds", "Nature"];
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(false);

  // ページネーションと無限スクロール
  const [visibleImages, setVisibleImages] = useState<typeof allImages>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  // 🔧 useMemoでフィルター済み画像をキャッシュ
  const filteredImages = useMemo(() => {
    return allImages.filter((img) => filter === "All" || img.tag === filter);
  }, [filter]);

  // フィルター変更時、表示画像を初期化
  useEffect(() => {
    setPage(1);
    setVisibleImages(filteredImages.slice(0, itemsPerPage));
  }, [filteredImages]);

  // ページが増えるたびに画像を追加
  useEffect(() => {
    if (page === 1) return;
    setVisibleImages(filteredImages.slice(0, page * itemsPerPage));
  }, [page, filteredImages]);

  // モーダル開閉時にスクロール制御
  useEffect(() => {
    document.body.style.overflow = selectedImg ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImg]);

  return (
    <section className="flex flex-col flex-1">
      {/* 絞り込み */}
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

      {/* 無限スクロール付きの画像一覧 */}
      <div className="grid grid-cols-3 p-4 w-full md:w-[60vw] mx-auto">
        {visibleImages.map((image, index) => (
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
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* ローディングトリガー */}
      {visibleImages.length < filteredImages.length && (
        <div className="w-full md:w-[60vw] p-4 mx-auto flex flex-col items-center gap-4">
          {isLoading ? (
            <div className="w-full h-12 flex justify-center items-center border-2 border-rose-300 bg-purple-600 text-white text-xl rounded-md transition duration-300">
              <SyncLoader color="#fff" />
            </div>
          ) : (
            <button
              onClick={() => {
                setIsLoading(true);
                setTimeout(() => {
                  setPage((prev) => prev + 1);
                  setIsLoading(false);
                }, 500);
              }}
              className="w-full h-12 border-2 border-rose-300 bg-purple-300 hover:bg-purple-600 text-black hover:text-white text-3xl rounded-md transition duration-300"
            >
              See more
            </button>
          )}
        </div>
      )}




      {/* モーダル（元のコード維持でOK） */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-[1000]"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="absolute inset-0 bg-black opacity-90"
            onClick={() => setSelectedImg(null)}
          />
          <div className="relative w-11/12 h-5/6 z-10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 text-white bg-opacity-60 rounded-2xl p-1 text-4xl hover:bg-gray-700 transition duration-150"
            >
              &times;
            </button>
            <button className="prev absolute top-1/2 left-0 -translate-y-1/2 h-24 w-24 text-6xl text-white transition duration-300 z-10 hover:cursor-pointer">
              〈
            </button>
            <button className="next absolute top-1/2 right-0 -translate-y-1/2 h-24 w-24 text-6xl text-white transition duration-300 z-10 hover:cursor-pointer">
              〉
            </button>
            <Swiper
              modules={[Navigation]}
              navigation={{ prevEl: ".prev", nextEl: ".next" }}
              initialSlide={visibleImages.findIndex((img) => img.src === selectedImg)}
              loop
              className="w-full h-full"
            >
              {visibleImages.map((image, index) => ( // ✅ filteredImages → visibleImages に変更
                <SwiperSlide key={index}>
                  <div className="relative h-full w-full flex flex-col items-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={`Image ${index}`}
                        fill
                        className="object-contain z-0"
                      />
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
