// /src/components/FixedPart/Header.tsx

import Image from "next/image";

interface Props{
  href: string;
}

export default function Background(props: Props) {
	return (
    <div className="fixed min-h-screen min-w-screen overflow-hidden -z-1">
      <Image
        src={props.href}
        fill
        alt="Picture of the article"
        className="object-cover opacity-30"
      />
    </div>
	);
}
