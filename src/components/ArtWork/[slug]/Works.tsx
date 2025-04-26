// /src/components/ArtWork/Works.tsx

// import Work from "@/components/ArtWork/Work";
import Work from "./Work";

export default function Works() {
	return (
		<div className="flex flex-col flex-1 items-center pb-5 gap-5">
			<Work 
        title="Amazon"
        link_href="/ArtWork/amazon"
        bg_href="/ArtWork/Button/Amazon.jpg"
      />
      <Work 
        title="Street"
        link_href="/ArtWork/street"
        bg_href="/ArtWork/Button/Street.jpg"
      />
			<Work
        title="清浄の祈り"
        link_href="/ArtWork/seijo"
        bg_href="/ArtWork/Button/Seijo.jpg"
      />
      <Work
        title="独りよがりの夜"
        link_href="/ArtWork/night"
        bg_href="/ArtWork/Button/Night.jpg"
      />
      <Work
        title="古都"
        link_href="/ArtWork/capital"
        bg_href="/ArtWork/Button/Capital.jpg"
      />
      <Work
        title="Synchronicity"
        link_href="/ArtWork/synchronicity"
        bg_href="/ArtWork/Button/Synchronicity.jpg"
      />
		</div>
	);
}
