// /src/components/FixedPart/Header.tsx

import Link from "next/link";

import Hamburger from "@/components/FixedPart/Hamburger";

import { Kaisei_Decol } from "next/font/google";
const kaisei = Kaisei_Decol({weight: '400', subsets:['latin']});

export default function Header() {
  return (
    <header className="fixed w-full bg-black flex items-center justify-between z-1000">
      <Link
        href="/"
        className={`${kaisei.className} h-full flex items-center justify-center text-xl md:text-4xl`}>
          Sasukeのサイト
      </Link>
      <Hamburger />
    </header>
  );
}
