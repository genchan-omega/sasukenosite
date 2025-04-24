// /src/app/page.tsx

import Image from "next/image";

import Footer from "@/components/FixedPart/Footer";
import Header from "@/components/FixedPart/Header";
// import Slide from "@/components/Home/Slide";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Slide /> */}

      <section className="sticky top-0 w-full h-screen bg-amber-200 z-1">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/bird.jpg"
            alt="ok"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-red-400 z-2">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/bird.jpg"
            alt="ok"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="sticky top-0 w-full h-screen bg-gray-400 z-2">
        <div className="relative w-full min-h-screen">
          <Image
            src="/Home/bird.jpg"
            alt="ok"
            fill
            className="object-cover"
          />
        </div>
      </section>










      <Footer />
    </div>
  );
}

// export default function Home() {
//   return (
//     <div className="w-full">
//       {[1, 2, 3].map((i) => (
//         <section key={i} className="min-h-[200vh] bg-gray-100">
//           <div className="sticky top-0 h-screen flex items-center justify-center bg-black text-white text-4xl">
//             セクション {i}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// }
