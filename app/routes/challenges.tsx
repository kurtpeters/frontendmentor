import { Outlet } from "@remix-run/react";

export default function ChallengesRoute() {
	return (
		<main className="h-screen w-screen">
			<Outlet />
		</main>
	);
}
