// /src/app/page.tsx

// import Image from "next/image";

import Footer from "@/components/FixedPart/Footer";
import Header from "@/components/FixedPart/Header";
import Links from "@/components/Home/Links";
import Slide from "@/components/Home/Slide";

export default function Home() {
  return (
    <div>
      <Header />
      <Slide />
      <Links />
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
