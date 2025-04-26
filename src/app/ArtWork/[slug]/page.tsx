// /src/app/ArtWork/[slug]/page.tsx

import Footer from "@/components/FixedPart/Footer";
import Header from "@/components/FixedPart/Header";
import Image from "next/image";

export function generateStaticParams() {
  return [
    { slug: "amazon" },
    { slug: "street" },
    { slug: "seijo" },
  ];
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const slug = (await params).slug;

  // seijo用の画像リスト
  const seijoImages = Array.from({ length: 16 }, (_, i) => `/ArtWork/Seijo/${i + 1}.jpg`);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
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
      </div>
      <Footer />
    </div>
  );
}
