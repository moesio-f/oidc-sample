# OpenID Connect Sample Project

This repository contains a simple project with OIDC authentication and authorization with Keycloak.

- Back-end: Python + Django
- Front-end: TypeScript + NextJs
- OpenID Provider: Keycloak  

## Quickstart

To run the project, you must have [Docker](https://docs.docker.com/get-docker/) installed in your machine. The `docker-compose.yaml` contains all the default values to run the project out of the box. Simply run `docker compose up --build -d` and you should be able to access the front-end (`http://localhost:3000`), back-end (`http://localhost:5000/admin`), and keycloak (`https://localhost:8443/`, accept the self-signed TLS certificate).

## Roadmap

- Improve documentation;
- Add production-ready Dockerfile's and docker-compose;

