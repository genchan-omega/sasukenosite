// /src/app/ArtWork/page.tsx

import Image from "next/image";

import Header from "@/components/FixedPart/Header";

export default function ArtWork() {
  return (
    <div className="relative">
      <Header />

      <div className="fixed min-h-screen min-w-screen overflow-hidden z-10">
        <Image
          src="/Others/dummy.png"
          fill
          alt="Picture of the article"
          className="object-cover"
        />
      </div>

      <h1 className="fixed top-1/2 left-1/2 -translate-1/2 text-9xl z-100">
        ここはArtWork
      </h1>



    </div>
  );
}
