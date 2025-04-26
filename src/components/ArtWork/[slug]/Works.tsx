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
		</div>
	);
}
