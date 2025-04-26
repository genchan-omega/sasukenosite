// /src/app/components/Home/Gallery.tsx

"use client";

import Image from "next/image";
// import Link from "next/link";

import { useState, useEffect } from "react";

const images = [
  "/Photo/1.jpg",
  "/Photo/2.jpg",
  "/Photo/4.jpg",
  "/Photo/3.jpg",
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  useEffect(() => {
    if (selectedImg) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImg]);

  return (
    <>
      {/* 一覧表示 */}
      <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="cursor-pointer overflow-hidden border-2">
            <Image
              src={src}
              alt={`Gallery Image ${index}`}
              width={400}
              height={300}
              className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
              onClick={() => setSelectedImg(src)}
              priority
            />
          </div>
        ))}
      </div>

      {/* モーダル部分 */}
      {selectedImg && (
        <div 
          className="fixed inset-0 backdrop-blur-xs bg-opacity-70 flex justify-center items-center z-1000"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative w-11/12 h-11/12">
            <Image
              src={selectedImg}
              alt="Selected"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
