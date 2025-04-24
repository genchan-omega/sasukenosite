// /src/app/ArtWork/page.tsx

import Header from "@/components/FixedPart/Header";
import Footer from "@/components/FixedPart/Footer";
import Background from "@/components/FixedPart/Background";
import Works from "@/components/Artwork/Works";

export default function ArtWork() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/ArtWork/index/couple.jpg"
      />
      <Header />
      <Works />
      <Footer />
    </div>
  );
}
