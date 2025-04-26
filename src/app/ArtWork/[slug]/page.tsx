import Footer from "@/components/FixedPart/Footer";
import Header from "@/components/FixedPart/Header";
import Slide from "@/components/ArtWork/[slug]/Slide";

const imageLists: Record<string, string[]> = {
  amazon: Array.from({ length: 20 }, (_, i) => `/ArtWork/Amazon/${i + 1}.jpg`),
  street: Array.from({ length: 22 }, (_, i) => `/ArtWork/Street/${i + 1}.jpg`),
  seijo: Array.from({ length: 16 }, (_, i) => `/ArtWork/Seijo/${i + 1}.jpg`),
  night: Array.from({ length: 16 }, (_, i) => `/ArtWork/Night/${i + 1}.jpg`),
  capital: Array.from({ length: 48 }, (_, i) => `/ArtWork/Capital/${i + 1}.jpg`),
  synchronicity: Array.from({ length: 19 }, (_, i) => `/ArtWork/Synchronicity/${i + 1}.jpg`),
};

export function generateStaticParams() {
  return Object.keys(imageLists).map((slug) => ({ slug }));
}

export default async function ArtWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;
  const images = imageLists[slug];

  if (!images) {
    return <div>Not Found</div>;
  }

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
        <div className="w-full max-w-5xl">
          <Slide images={images} slug={slug} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
