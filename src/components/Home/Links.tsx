// /src/components/Home/Links.tsx

// import Footer from "../FixedPart/Footer";

import StickySection from "@/components/Home/StickySection";
export default function Links() {
	return (
		<>
			{/* <StickySection
				title="Home"
				description="Fly away to different worlds"
				href="/"
				buttonLabel="Enter"
				buttonBg="/Home/Slide/bird.jpg"
				gradient="bg-gradient-to-b from-black to-purple-900"
				imagePositions={[
					{
						src: "/Home/bg_image/1.jpg",
						className:
							"top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-80 rotate-12 border-2",
					},
					{
						src: "/Home/bg_image/2.jpg",
						className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
					},
				]}
			/> */}
			<StickySection
				title="Profile"
				description="Introduce myself"
				href="/Profile"
				buttonLabel="Enter"
				buttonBg="/Home/Button/Profile.jpg"
				gradient="bg-gradient-to-b from-black to-cyan-500"
				imagePositions={[
					{
						src: "/Home/bg_image/3.jpg",
						className:
							"top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-64 rotate-12 border-2",
					},
					{
						src: "/Home/bg_image/4.jpg",
						className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
					},
				]}
			/>

			<StickySection
				title="Photo"
				description="Single photos taken so far"
				href="/Photo"
				buttonLabel="Enter"
				buttonBg="/Photo/bg.jpg"
				gradient="bg-gradient-to-b from-black to-[#ff00ff]"
				imagePositions={[
					{
						src: "/Home/bg_image/5.jpg",
						className:
							"top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-64 rotate-12 border-2",
					},
					{
						src: "/Home/bg_image/6.jpg",
						className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
					},
				]}
			/>

			<StickySection
				title="Artwork"
				description="A group of works composed of photographs"
				href="/ArtWork"
				buttonLabel="Enter"
				buttonBg="/ArtWork/bg.jpg"
				gradient="bg-gradient-to-b from-black to-yellow-400"
				imagePositions={[
					{
						src: "/Home/bg_image/7.jpg",
						className:
							"top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-64 rotate-12 border-2",
					},
					{
						src: "/Home/bg_image/8.jpg",
						className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
					},
				]}
			/>

			<StickySection
				title="Contact"
				description="What connects you and me"
				href="/Contact"
				buttonLabel="Enter"
				buttonBg="/Home/Button/Contact.jpg"
				gradient="bg-gradient-to-b from-black to-white"
				imagePositions={[
					{
						src: "/Home/bird.jpg",
						className:
							"top-1/4 left-2/3 -translate-x-1/4 -translate-y-2/3 w-64 h-64 rotate-12 border-2",
					},
					{
						src: "/Home/bird.jpg",
						className: "top-3/5 left-1/6 w-64 h-64 -rotate-12 border-2",
					},
				]}
			>
				{/* <Footer /> */}
			</StickySection>
		</>
	);
}
