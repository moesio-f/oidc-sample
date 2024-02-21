# Protected REST API

The back-end is implemented with DRF (Django REST Framework) and mozilla-django-oidc.

In order to run the back-end, the following environment variables must be set:

| Variable | Type | Description |
| --- | --- | --- |
| `DJANGO_SECRET_KEY` | string | random secret used by Django |
| `OIDC_RP_CLIENT_ID` | string | keycloak client ID set for this client |
| `OIDC_RP_CLIENT_SECRET` | string | keycloak client secret for the back-end |
| `OIDC_OP_AUTHORIZATION_ENDPOINT` | string | OIDC authorization endpoint (e.g., `https://<url>:<port>/realms/<realm_name>/protocol/openid-connect/auth`) |
| `OIDC_OP_TOKEN_ENDPOINT` | string | OIDC token endpoint (e.g., `https://<url>:<port>/realms/<realm_name>/protocol/openid-connect/token`) |
| `OIDC_OP_USER_ENDPOINT` | string | OIDC user endpoint (e.g., `https://<url>:<port>/realms/<realm_name>/protocol/openid-connect/userinfo`) |

## Roadmap

The current version doesn't have the full capabilities for a production-ready code. In order to be a fully functional project, the following features must be implemented:

- Add fine-grained authorization with Keycloak's RPT tokens;
- Add a SQL database for application data;
