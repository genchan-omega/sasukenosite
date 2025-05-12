// /src/components/FixedPart/MobileMenuLink.tsx

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props{
  href: string;
  title: string;
  onClick: () => void;
}

export default function MobileMenuLink(props: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={props.href}
      onClick={() => {
        if (pathname === props.href) {
          props.onClick();
        }
      }}
      className="flex-1 flex items-center justify-center text-2xl border-b-2 border-dashed hover:bg-gray-900 transition duration-300"
    >
      {props.title}
    </Link>
  );
}
