export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Simple Authentication",
	description: "Simple OIDC authentication with Keycloak.",
	links: {
		jslib: "https://www.npmjs.com/package/next-auth",
		keycloak: "https://www.keycloak.org/",
	},
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "User",
			href: "/logged",
		},
        {
            label: "Public API",
            href: "/public"
        },
        {
            label: "Private API",
            href: "/private"
        }
	]
};

