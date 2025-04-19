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
          className="flex flex-col justify-between w-6 h-5"
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
      <div
        className={`absolute right-2 top-full mt-2 w-40 bg-black rounded transition-all duration-300 overflow-hidden ${
          isOpen ? "opacity-100 max-h-[500px] translate-y-0" : "opacity-0 max-h-0 -translate-y-4"
        }`}
      >
        <nav className="flex flex-col space-y-2 mt-4 px-4">
          <Link href="/" className="py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link href="/Profile" className="py-2 hover:bg-gray-700 rounded">Profile</Link>
          <Link href="/Photo" className="py-2 hover:bg-gray-700 rounded">Photo</Link>
          <Link href="/ArtWork" className="py-2 hover:bg-gray-700 rounded">ArtWork</Link>
          <Link href="/Contact" className="py-2 hover:bg-gray-700 rounded">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
