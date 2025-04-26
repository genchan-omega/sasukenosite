// /src/app/components/Home/StickySection.tsx

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  buttonBg: string;
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
  buttonBg,
  gradient,
  imagePositions = [],
  children,
}: Props) {
  return (
    <section className={`sticky top-0 w-full h-screen ${gradient} z-2 overflow-hidden`}>
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

      <div className="absolute z-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-7xl md:text-9xl text-center">{title}</h2>
        <p className="text-center text-3xl pb-5 px-2">
          {description}
        </p>
        <Link href={href}>
          <div className="relative w-65 md:w-100 h-20 mx-auto text-center text-4xl border-2 border-cyan-200 bg-purple-700 hover:scale-110 transition duration-300 overflow-hidden p-4 group">
            <Image
              src={buttonBg}
              fill
              alt="Button Background"
              className="object-cover absolute top-0 left-0 z-0 group-hover:opacity-50 transition duration-300"
            />
            <span className="relative z-10 text-white drop-shadow-[2px_2px_0px_black]">
              {buttonLabel}
            </span>
          </div>
        </Link>
      </div>
      {children}
    </section>
  );
}
