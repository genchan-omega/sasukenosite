// /src/components/Artwork/Work.tsx

import Image from "next/image";
import Link from "next/link";

interface Props{
  title: string
}

export default function Work(props: Props) {
  return (
    <Link
      href="/"
      className="relative border-2">
      <figure className="relative w-[80vh] h-60 opacity-50">
        <Image
          src="/ArtWork/Amazon/forest.jpg"
          alt="ok"
          fill
          className="object-cover"
          />
      </figure>
      <figcaption className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
        <h2 className="text-9xl text-center">
          {props.title}
        </h2>
      </figcaption>
    </Link>
  );
}
