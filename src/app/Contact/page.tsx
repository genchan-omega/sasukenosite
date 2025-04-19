// /src/app/Contact/page.tsx

// import Image from "next/image";

import Contactform from "@/components/Contact/Contactform";
import Header from "@/components/FixedPart/Header";

export default function Contact() {
  return (
    <div className="relative">
      <Header />
      <Contactform />

    </div>
  );
}
