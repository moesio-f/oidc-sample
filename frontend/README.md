# Simple OIDC Authentication and Authorization

The front-end is implemented with Next.js, Next Auth, and Next UI. It is organized as follows:

- `simple-auth`: source directory containing all files/resources;
  - `app`: app router (https://nextjs.org/docs/app);
  - `components`: React components;
  - `config`: general configuration files;
  - `public`: public assets;
  - `styles`: global CSS definitions (Tailwind);
  - `types`: TypeScript types definitions;
  - `utils`: auth utilities (e.g., `NextAuthOptions`);

In order to run the front-end, the following environment variables must be set:

| Variable | Type | Description |
| --- | --- | --- |
| `NEXTAUTH_SECRET` | string | random secret used to encrypt the NextAuth.js JWT |
| `NEXTAUTH_URL` | URL | the canonical URL of your site (e.g., `http[s]://<url>:<port>`)
| `KEYCLOAK_ID` | string | keycloak client ID set for this client
| `KEYCLOAK_SECRET` | string | keycloak client secret for the front-end
| `KEYCLOAK_ISSUER` | string | keycloak issuer url (e.g., `https://<url>:<port>/realms/<realm_name>`)
| `NODE_TLS_REJECT_UNAUTHORIZED` | bool | if using self-signed certificates, set to `0`.

## Roadmap

The current version doesn't have the full capabilities for a production-ready code. In order to be a fully functional project, the following features must be implemented:

- Add a middleware to ensure that tokens are still valid through the introspection URL of OIDC;
- Add a middleware to use the refresh token (if provided) when the current one expires;
- Add page to test an authenticated endpoint of the backend;
  - Create a generic utility to format the request with the necessary tokens;
- End keycloak session in sign-out by redirecting to the logout URL of OIDC;
- Change backend URL from hard-coded to environment variable;
