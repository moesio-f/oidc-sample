"use client";
import Login from "@/components/login";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";


export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "blue" })}>OIDC&nbsp;</h1>
				<h1 className={title()}>Authentication&nbsp;</h1>
				<br />
				<h1 className={title()}>
					using Keycloak and NextJs
				</h1>
				<h2 className={subtitle()}>
					This project implements a simple OIDC
					PKCE authentication workflow with next-auth.
				</h2>
			</div>

			<div className="flex gap-3">
				<Login />
			</div>
			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ color: "primary", variant: "bordered", radius: "full" })}
					href={siteConfig.links.keycloak}
				>
					keycloak
				</Link>
				<Link
					isExternal
					className={buttonStyles({ color: "primary", variant: "bordered", radius: "full" })}
					href={siteConfig.links.jslib}
				>
					next-auth
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Read the <Code color="secondary">README</Code> for implementation details
					</span>
				</Snippet>
			</div>
		</section>
	);
}
