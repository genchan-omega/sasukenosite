// /src/components/Home/Links.tsx

import Image from "next/image";
import Link from "next/link";

export default function Links() {
  return (
    <>
      <section className="sticky top-0 w-full h-screen bg-black z-2">
        <div className="relative w-full min-h-screen opacity-50">
          <Image
            src="/Home/bird.jpg"
            alt="ok"
            fill
            className="object-cover"
            />
        </div>
        <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-9xl text-center">
            Home
          </h2>
          <p className="text-center text-3xl pb-5">
            Fly away to different worlds
          </p>
          <Link
            href="/"
            className="block text-center text-4xl border-2 border-red-600 p-4"
          >
            Go there!!!  →
          </Link>
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-black z-2">
        <div className="relative w-full min-h-screen opacity-50">
          <Image
            src="/Home/bird2.jpg"
            alt="ok"
            fill
            className="object-cover"
            />
        </div>
        <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-9xl text-center">
            Profile
          </h2>
          <p className="text-center text-3xl pb-5">
            Introduce myself
          </p>
          <Link
            href="/Profile"
            className="block text-center text-4xl border-2 border-red-600 p-4"
          >
            Go there!!!  →
          </Link>
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-black z-2">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/buildings.jpg"
            alt="ok"
            fill
            className="object-cover opacity-50"
            />
        </div>
        <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-9xl text-center">
            Photo
          </h2>
          <p className="text-center text-3xl pb-5">
            Single photos taken so far
          </p>
          <Link
            href="/Photo"
            className="block text-center text-4xl border-2 border-red-600 p-4"
          >
            Go there!!!  →
          </Link>
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-black z-2">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/castle.jpg"
            alt="ok"
            fill
            className="object-cover opacity-50"
            />
        </div>
        <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-9xl text-center">
            Artwork
          </h2>
          <p className="text-center text-3xl pb-5">
            A group of works composed of photographs
          </p>
          <Link
            href="/ArtWork"
            className="block text-center text-4xl border-2 border-red-600 p-4"
          >
            Go there!!!  →
          </Link>
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-black z-2">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/fish.jpg"
            alt="ok"
            fill
            className="object-cover opacity-50"
            />
        </div>
        <div className="absolute z-3 top-1/2 left-1/2 -translate-1/2">
          <h2 className="text-9xl text-center">
            Contact
          </h2>
          <p className="text-center text-3xl pb-5">
            What connects you and me
          </p>
          <Link
            href="/Contact"
            className="block text-center text-4xl border-2 border-red-600 p-4"
          >
            Go there!!!  →
          </Link>
        </div>
      </section>
    </>
  );
}
