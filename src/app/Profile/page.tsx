// /src/app/Profile/page.tsx

import Background from "@/components/FixedPart/Background";
import Header from "@/components/FixedPart/Header";
import Name from "@/components/Profile/Name";
import Footer from "@/components/FixedPart/Footer";
import Subtitile from "@/components/FixedPart/Subtitle";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/Profile/bg.jpg"
      />
      <Header />
      <Subtitile
        name="Profile"
      />
      <Name />
      <Footer />
    </div>
  );
}
