// /src/app/Contact/page.tsx

import Image from "next/image";

import Header from "@/components/FixedPart/Header";

export default function Contact() {
  return (
    <div className="relative">
      <Header />

      <div className="fixed min-h-screen min-w-screen overflow-hidden z-10">
        <Image
          src="/dummy.png"
          fill
          alt="Picture of the article"
          className="object-cover"
        />
      </div>

      <h1 className="fixed top-1/2 left-1/2 -translate-1/2 text-5xl md:text-9xl z-100">
        Sasuke Takeshita
      </h1>



    </div>
  );
}
