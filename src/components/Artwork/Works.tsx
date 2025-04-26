// /src/components/ArtWork/Works.tsx

import Work from "@/components/ArtWork/Work";

export default function Works() {
  return (
    <div className="flex flex-col flex-1 items-center pb-5 gap-5">
      <Work 
        title="清浄の祈り"
        href="/ArtWork/seijo"
      />
    </div>
  );
}
