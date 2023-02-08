import type { LinksFunction } from "@remix-run/node"; // or cloudflare/deno

export const links: LinksFunction = () => {
	return [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap",
		},
	];
};

export default function QRCodeComponentRoute() {
	return (
		<div className="bg-[#d5e1ef] h-full flex justify-center items-center">
			<div className="bg-white p-4 rounded-[20px] shadow-lg">
				<figure className="font-outfit text-center max-w-[288px]">
					<img
						alt="Frontend Mentor QR code"
						src="/images/challenges/qr-code-component/image-qr-code.png"
						className="rounded-[10px] object-contain h-[288px] bg-gray-100"
					/>
					<p className="font-bold text-[22px] text-[#1f314f] leading-[27.72px] mt-6 px-4">
						Improve your front-end skills by building projects
					</p>
					<figcaption className="font-normal text-[15px] leading-[18.9px] tracking-[0.19px] text-[#7d889e] mt-4 mb-6 px-4">
						Scan the QR code to visit Frontend Mentor and take your coding
						skills to the next level
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
