// /src/components/FixedPart/Hamburger.tsx

"use client";

import { useState } from 'react';
import Link from "next/link";

import Button from "@/components/FixedPart/Button";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* ハンバーガーボタン */}
      <div className="mr-5 md:hidden">
        <button
          className="flex flex-col justify-between w-6 h-5 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`block h-0.5 bg-white transition duration-300 z-50
            ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span className={`block h-0.5 bg-white transition duration-300 z-50
            ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span className={`block h-0.5 bg-white transition duration-300 z-50
            ${isOpen ? "opacity-0" : ""}`}
          ></span>
        </button>
      </div>
      {/* PCメニュー */}
      <nav className="hidden md:flex md:flex-row">
        <Button title="Home" />
        <Button title="Profile" />
        <Button title="Photo" />
        <Button title="ArtWork" />
        <Button title="Contact" />
      </nav>

      {/* モバイルメニュー */}
      <nav
        className={`fixed top-0 left-0 min-w-screen bg-black transition duration-300 flex flex-col justify-between min-h-[50vh] z-30 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`} 
      >
        <Link href="/" className="flex-1 flex items-center justify-center text-2xl border-y-2 border-dashed hover:bg-gray-900 transition duration-300">
          Home
        </Link>
        <Link href="/Profile" className="flex-1 flex items-center justify-center text-2xl border-b-2 border-dashed hover:bg-gray-900 transition duration-300">
          Profile
        </Link>
        <Link href="/Photo" className="flex-1 flex items-center justify-center text-2xl border-b-2 border-dashed hover:bg-gray-900 transition duration-300">
          Photo
        </Link>
        <Link href="/ArtWork" className="flex-1 flex items-center justify-center text-2xl border-b-2 border-dashed hover:bg-gray-900 transition duration-300">
          ArtWork
        </Link>
        <Link href="/Contact" className="flex-1 flex items-center justify-center text-2xl border-b-2 border-dashed hover:bg-gray-900 transition duration-300">
          Contact
        </Link>
      </nav>
      {/* オーバーレイ */}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-xs ${
          isOpen ? "z-10" : "hidden"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
    </div>
  );
}
