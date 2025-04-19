// /src/components/FixedPart/Hamburger.tsx

'use client';

import { useState } from 'react';
import Link from "next/link";

import Button from "@/components/FixedPart/Button";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーボタン */}
      <div className="md:hidden">
        <button
          className="flex flex-col justify-between w-6 h-5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
          <span className="block h-0.5 bg-white"></span>
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
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`
      }>
        <nav className="flex flex-col space-y-2 mt-4 px-4">
          <Link href="/" className="py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link href="#" className="py-2 hover:bg-gray-700 rounded">About</Link>
          <Link href="#" className="py-2 hover:bg-gray-700 rounded">Contact</Link>
        </nav>
      </div>
    </>
  );
}
