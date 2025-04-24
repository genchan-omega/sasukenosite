// /src/app/Contact/page.tsx

// import Image from "next/image";

import Background from "@/components/FixedPart/Background";
import Header from "@/components/FixedPart/Header";
import Subtitle from "@/components/Contact/Subtitle";
import Contactform from "@/components/Contact/Contactform";
import Footer from "@/components/FixedPart/Footer";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/Contact/boat.jpg"
      />
      <Header />
      <Subtitle 
        title="お問い合わせフォーム"
      />
      <Contactform />
      <Footer />
    </div>
  );
}
