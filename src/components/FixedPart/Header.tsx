// /src/components/FixedPart/Header.tsx

import Link from "next/link";

import Hamburger from "@/components/FixedPart/Hamburger";

import { Kaisei_Decol } from "next/font/google";
const kaisei = Kaisei_Decol({weight: '400', subsets:['latin']});

export default function Header() {
  return (
    <header className="fixed max-w-6xl mx-auto flex items-center justify-between z-1000">
      <Link
        href="/"
        className={`${kaisei.className} text-xl md:text-4xl bg-black`}>
        Sasukeのサイト
      </Link>
      <Hamburger />
    </header>
  );
}
