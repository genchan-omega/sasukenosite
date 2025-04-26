// /src/app/ArtWork/page.tsx

import Header from "@/components/FixedPart/Header";
import Footer from "@/components/FixedPart/Footer";
import Background from "@/components/FixedPart/Background";
import Subtitle from "@/components/FixedPart/Subtitle";
import Works from "@/components/ArtWork/[slug]/Works";

export default function ArtWork() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/ArtWork/bg.jpg"
      />
      <Header />
      <Subtitle
        name="ArtWork"
      />
      <Works />
      <Footer />
    </div>
  );
}
