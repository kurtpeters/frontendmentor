import styles from "./styles/app.css";
import type { MetaFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Kurt Peters | Frontend Mentor Challenges",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en" className="h-full flex flex-col">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="grow">
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
