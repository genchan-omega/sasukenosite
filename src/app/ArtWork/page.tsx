// /src/app/ArtWork/page.tsx

import Image from "next/image";

import Header from "@/components/FixedPart/Header";
import Footer from "@/components/FixedPart/Footer";

export default function ArtWork() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="fixed min-h-screen min-w-screen overflow-hidden -z-1">
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
      <div className="flex-1">

      </div>
      <Footer />
    </div>
  );
}
