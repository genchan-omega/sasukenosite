// /src/app/ArtWork/[slug]/page.tsx

import Footer from "@/components/FixedPart/Footer";
import Header from "@/components/FixedPart/Header";
import Image from "next/image";

export function generateStaticParams() {
  return [
    { slug: "amazon" },
    // { slug: "street" },
    { slug: "seijo" },
  ];
}

export default async function ArtWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const slug = (await params).slug;

  // amazon用の画像リスト
  const amazonImages = Array.from({ length: 20 }, (_, i) => `/ArtWork/Amazon/${i + 1}.jpg`);
  // street用の画像リスト
  const streetImages = Array.from({ length: 22 }, (_, i) => `/ArtWork/Street/${i + 1}.jpg`);
  // seijo用の画像リスト
  const seijoImages = Array.from({ length: 16 }, (_, i) => `/ArtWork/Seijo/${i + 1}.jpg`);
  // night用の画像リスト
  const nightImages = Array.from({ length: 16 }, (_, i) => `/ArtWork/Night/${i + 1}.jpg`);
  // capital用の画像リスト
  const capitalImages = Array.from({ length: 48 }, (_, i) => `/ArtWork/Capital/${i + 1}.jpg`);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">

        {/* amazon */}
        {slug === "amazon" && (
          <div className="flex flex-col gap-8 w-full">
            {amazonImages.map((src, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Amazon Image ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* street */}
        {slug === "street" && (
          <div className="flex flex-col gap-8 w-full">
            {streetImages.map((src, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Street Image ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* seijo */}
        {slug === "seijo" && (
          <div className="flex flex-col gap-8 w-full">
            {seijoImages.map((src, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Seijo Image ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* night */}
        {slug === "night" && (
          <div className="flex flex-col gap-8 w-full">
            {nightImages.map((src, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Night Image ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* capital */}
        {slug === "capital" && (
          <div className="flex flex-col gap-8 w-full">
            {capitalImages.map((src, index) => (
              <div key={index} className="relative w-full h-[500px]">
                <Image
                  src={src}
                  alt={`Capital Image ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
