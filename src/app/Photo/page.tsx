// /src/app/Photo/page.tsx

import Header from "@/components/FixedPart/Header";
import Footer from "@/components/FixedPart/Footer";
import Background from "@/components/FixedPart/Background";
import Subtitile from "@/components/FixedPart/Subtitle";
import Gallery from "@/components/Photo/Gallery";


export default function Photo() {
return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/Photo/bg.jpg"
      />
      <Header />
      <Subtitile
        name="Photo"
      />
      <Gallery />
      <Footer />
    </div>
  );
}
