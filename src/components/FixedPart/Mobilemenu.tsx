// /src/components/FixedPart/Mobilemenu.tsx

"use client";

import { useState } from 'react';
import Link from "next/link";

import Button from "@/components/FixedPart/Button";

export default function Mobilemenu() {
const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
}
