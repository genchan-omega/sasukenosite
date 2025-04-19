// /src/components/Profile/Name.tsx

import Image from "next/image";

export default function Name() {
  return (
    <main className="fixed top-0 left-0 w-full h-screen -z-1 flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="relative w-[300px] h-[300px] shrink-0">
        <Image
          src="/dummy.png"
          alt="Picture of Author"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <h2 className="text-4xl md:text-6xl text-white text-center">
        Sasuke Takeshita
      </h2>
    </main>
  );
}

