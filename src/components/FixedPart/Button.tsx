// /src/components/FixedPart/Button.tsx

import Link from "next/link";

interface Props{
  title: string;
}

export default function Button(props: Props) {
  let link = "/";
  if(props.title==="Home")
    link = "/";
  else
    link = `/${props.title}`;
  return (
    <div className="relative w-30 h-20 group overflow-hidden">
      <Link 
        href={link}
        className="text-2xl flex items-center justify-center h-full z-10"
      >
        {props.title}
      </Link>
      <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:delay-[0ms]"></span>
      <span className="absolute top-0 right-0 w-0.5 h-0 bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:delay-[150ms]"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:delay-[300ms]"></span>
      <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:h-full group-hover:delay-[450ms]"></span>
    </div>
  );
}
