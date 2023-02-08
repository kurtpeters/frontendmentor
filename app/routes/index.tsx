import { Link } from "~/components";

export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<h1 className="text-xl mb-16">frontendmentor.io</h1>

			<section>
				<h2>Code challenges</h2>
				<nav>
					<Link to="challenges/qr-code-component">QR code component</Link>
				</nav>
			</section>
		</div>
	);
}
