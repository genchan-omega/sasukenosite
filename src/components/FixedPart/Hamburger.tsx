// /src/components/FixedPart/Hamburger.tsx

"use client";

import { useState } from 'react';

import Button from "@/components/FixedPart/Button";
import MobileMenuLink from './MobileMenuLink';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* ハンバーガーボタン */}
      <button
          className="mr-2 lg:hidden p-3 transition duration-300 rounded-xl hover:cursor-pointer hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
      >
        <div className="flex flex-col justify-between w-6 h-5 z-50 hover:cursor-pointer">
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
        </div>
      </button>
      {/* PCメニュー */}
      <nav className="hidden lg:flex lg:flex-row">
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
        <div className="flex items-center justify-end border-b-2 border-dashed pr-2"
        >
          <button
            className="text-5xl m-2 hover:bg-gray-700 transition duration-300 hover:cursor-pointer rounded-md"
            onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </div>
        <MobileMenuLink href="/" title="Home" onClick={closeMenu} />
        <MobileMenuLink href="/Profile" title="Profile" onClick={closeMenu} />
        <MobileMenuLink href="/Photo" title="Photo" onClick={closeMenu} />
        <MobileMenuLink href="/ArtWork" title="ArtWork" onClick={closeMenu} />
        <MobileMenuLink href="/Contact" title="Contact" onClick={closeMenu} />
      </nav>
      {/* オーバーレイ */}
      <div
        className={`fixed top-0 left-0 w-full h-full backdrop-blur-xs ${
          isOpen ? "z-10" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
    </div>
  );
}
