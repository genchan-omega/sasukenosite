import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  gradient: string;
  imagePositions?: {
    src: string;
    className: string;
  }[];
  children?: ReactNode;
};

export default function StickySection({
  title,
  description,
  href,
  buttonLabel,
  gradient,
  imagePositions = [],
  children,
}: Props) {
  return (
    <section className={`sticky top-0 w-full h-screen ${gradient} z-2 overflow-hidden`}>
      {/* 背景画像など */}
      {imagePositions.map((img, index) => (
        <div key={index} className={`absolute ${img.className}`}>
          <Image
            src={img.src}
            fill
            alt={`Image ${index}`}
            className="object-cover"
          />
        </div>
      ))}

      {/* 中央テキスト */}
      <div className="absolute z-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-9xl text-center">{title}</h2>
        <p className="text-center text-3xl pb-5">{description}</p>
        <Link
          href={href}
          className="block text-center text-4xl border-2 p-4 border-red-600 bg-rose-900 hover:bg-rose-200 hover:text-rose-900 transition duration-300"
        >
          {buttonLabel} →
        </Link>
      </div>

      {/* その他の要素 (例えばFooterなど) */}
      {children}
    </section>
  );
}
