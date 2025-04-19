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
            ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span className={`block h-0.5 bg-white transition duration-300 z-50
            ${isOpen ? "opacity-0" : ""}`}
          ></span>
          <span className={`block h-0.5 bg-white transition duration-300 z-50
            ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
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
        <Link href="/" className="py-2 hover:bg-gray-700 rounded">Home</Link>
        <Link href="/Profile" className="py-2 hover:bg-gray-700 rounded">Profile</Link>
        <Link href="/Photo" className="py-2 hover:bg-gray-700 rounded">Photo</Link>
        <Link href="/ArtWork" className="py-2 hover:bg-gray-700 rounded">ArtWork</Link>
        <Link href="/Contact" className="py-2 hover:bg-gray-700 rounded">Contact</Link>
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
