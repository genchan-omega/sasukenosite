// /src/components/Home/Links.tsx

// import Footer from "../FixedPart/Footer";

import StickySection from "@/components/Home/StickySection";
export default function Links() {
  return (
    <>
      <StickySection
        title="Home"
        description="Fly away to different worlds"
        href="/Profile"
        buttonLabel="Go there!!!"
        gradient="bg-gradient-to-b from-black to-purple-900"
        imagePositions={[
          {
            src: "/Home/bird.jpg",
            className: "top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-64 rotate-12 border-2",
          },
          {
            src: "/Home/bird.jpg",
            className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
          },
        ]}
      />

      <StickySection
        title="Profile"
        description="Introduce myself"
        href="/Profile"
        buttonLabel="Go there!!!"
        gradient="bg-gradient-to-b from-black to-white"
      />

      <StickySection
        title="Photo"
        description="Single photos taken so far"
        href="/Photo"
        buttonLabel="Go there!!!"
        gradient="bg-gradient-to-b from-black to-blue-900"
      />

      <StickySection
        title="Artwork"
        description="A group of works composed of photographs"
        href="/ArtWork"
        buttonLabel="Go there!!!"
        gradient="bg-gradient-to-b from-black to-rose-700"
      />

      <StickySection
        title="Contact"
        description="What connects you and me"
        href="/Contact"
        buttonLabel="Go there!!!"
        gradient="bg-gradient-to-b from-black to-green-700"
      >
        {/* <Footer /> */}
      </StickySection>
    </>
  );
}
