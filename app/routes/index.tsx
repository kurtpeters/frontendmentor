import { Link } from "~/components";

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1 className="text-xl">Frontend Mentor Code Challenges</h1>

			<section className="mt-8">
				<h2>Code challenges</h2>
				<nav className="flex flex-col gap-2">
					<Link to="challenges/qr-code-component">QR code component</Link>
				</nav>
			</section>
		</div>
	);
}
