// /src/app/Contact/page.tsx

// import Image from "next/image";

import Background from "@/components/FixedPart/Background";
import Header from "@/components/FixedPart/Header";
import Contactform from "@/components/Contact/Contactform";
import Footer from "@/components/FixedPart/Footer";

export default function Contact() {
  return (
    <div>
      <Background 
        href = "/Contact/buildings.jpg"
      />
      <Header />
      <Contactform />
      <Footer />
    </div>
  );
}
