// /src/components/ArtWork/Work.tsx

import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function Work({ title, href }: Props) {
  return (
    <Link
      href={href}
      className="relative w-200 h-40 border-2 overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-lg transition duration-200 group"
    >
      <figure className="relative w-full h-40 opacity-50">
        <Image
          src="/ArtWork/Amazon/forest.jpg"
          alt="ok"
          fill
          className="object-cover"
        />
      </figure>
      <figcaption className="absolute z-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <h2 className="text-6xl md:text-6xl text-center group-hover:text-blue-600 transition duration-300 drop-shadow-[2px_2px_0px_black]">
          {title}
        </h2>
      </figcaption>
    </Link>
  );
}
