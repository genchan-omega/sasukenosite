// /src/components/FixedPart/Header.tsx

import Link from "next/link";
import Image from "next/image";

import Hamburger from "@/components/FixedPart/Hamburger";

export default function Header() {
	return (
		<header className="fixed w-full h-16 md:h-20 bg-black flex items-center justify-between z-1000">
			<Link
				href="/"
				className="relative h-16 md:h-20 w-16 md:w-20"
			>
        <Image
          src="/Others/logo.png"
          fill
          alt="Picture of the instagram"
          className="object-contain transition duration-500"
        />
			</Link>
			<Hamburger />
		</header>
	);
}
