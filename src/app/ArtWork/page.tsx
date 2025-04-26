// /src/app/ArtWork/page.tsx

import Header from "@/components/FixedPart/Header";
import Footer from "@/components/FixedPart/Footer";
import Background from "@/components/FixedPart/Background";
import Subtitle from "@/components/FixedPart/Subtitle";
// import Works from "@/components/ArtWork/Works";
import Image from "next/image";
import Link from "next/link";

export default function ArtWork() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/ArtWork/bg.jpg"
      />
      <Header />
      <Subtitle
        name="ArtWork"
      />
      {/* <Works /> */}
      <div className="flex flex-col flex-1 items-center pb-5 gap-5">
      <Link
      href="seijo"
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
          seijo
        </h2>
      </figcaption>
    </Link>
      </div>
      <Footer />
    </div>
  );
}
