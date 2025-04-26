// /src/app/page.tsx

// import Image from "next/image";

import Header from "@/components/FixedPart/Header";
import Links from "@/components/Home/Links";
import Slide from "@/components/Home/Slide";

export default function Home() {
  return (
    <div>
      <Header />
      <Slide />
      <Links />
    </div>
  );
}
