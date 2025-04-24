// /src/components/Footer/Footer.tsx

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full py-4 border-t flex flex-col gap-5">
      <div className="flex flex-row w-full justify-center items-center">
        <a
          href="https://www.instagram.com/photo_t.s0404/"
          className="relative h-20 w-20 hover:bg-gray-300 rounded-2xl transition duration-500"
          >
          <Image
            src="/Others/instagram.svg"
            fill
            alt="Picture of the instagram"
            className="object-contain invert hover:invert-0 transition duration-500"
          />
        </a>
      </div>
      <p className="text-sm text-center">&copy; Sasuke Takeshita 2025 All rights reserved.</p>
    </footer>
  );
};
