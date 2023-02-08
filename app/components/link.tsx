import { Link as RemixLink } from "@remix-run/react";
import type { RemixLinkProps } from "@remix-run/react/dist/components";

interface Props extends RemixLinkProps {}

export function Link({ className = "", ...props }: Props) {
	return (
		<RemixLink
			className={`text-base text-violet-600 underline ${className}`}
			{...props}
		/>
	);
}
