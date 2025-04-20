// /src/app/Profile/page.tsx

import Background from "@/components/FixedPart/Background";
import Header from "@/components/FixedPart/Header";
import Name from "@/components/Profile/Name";
import Contents from "@/components/Profile/Contents";
import Footer from "@/components/FixedPart/Footer";

export default function Profile() {
  return (
    <div className="flex flex-col min-h-screen">
      <Background 
        href = "/Profile/sun.jpg"
      />
      <Header />
      <Name />
      <Contents />
      <Footer />
    </div>
  );
}
