// /src/app/Profile/page.tsx

import Header from "@/components/FixedPart/Header";
import Name from "@/components/Profile/Name";
import Contents from "@/components/Profile/Contents";

export default function Profile() {
  return (
    <div className="relative">
      <Header />
      <Name />
      <Contents />
    </div>
  );
}
