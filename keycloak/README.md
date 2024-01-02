# Keycloak

This directory contains the keycloak configuration. The `Dockerfile` contains instructions to build an optimized image for keycloak, the following variables must be set:

| Variable | Type | Description |
| --- | --- | --- |
| `KC_DB` | string | identifier for the database used (e.g., `postgres`) |

Likewise, to run the built image, the following variables must be set:

| Variable | Type | Description |
| --- | --- | --- |
| `KC_DB_URL` | URL | connection URL for the database (e.g., `jdbc:postgresql://<db_host>/<db>`)
| `KC_DB_USERNAME` | string | database username
| `KC_DB_PASSWORD` | string | database password
| `KC_HOSTNAME` | string | keycloak hostname (e.g., `localhost`)
| `KEYCLOAK_ADMIN` | string | keycloak admin username |
| `KEYCLOAK_ADMIN_PASSWORD` | string | keycloak admin password |