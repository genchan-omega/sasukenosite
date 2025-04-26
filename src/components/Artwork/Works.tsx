// /src/components/Artwork/Works.tsx

import Work from "./Work";

export default function Works() {
  return (
    <div className="flex flex-col flex-1 items-center pt-30 pb-5 gap-5">
      <Work 
        title="Amazon"
      />
      <Work 
        title="Street"
      />
      <Work 
        title="清浄の祈り"
      />
    </div>
  );
}
