FROM quay.io/keycloak/keycloak:latest as builder
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true
ENV KC_DB=postgres
WORKDIR /opt/keycloak

# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY realms/sample_app.json /opt/keycloak/data/import/keycloak-export.json
ENV KC_DB=postgres
ENV KC_DB_URL=
ENV KC_DB_USERNAME=
ENV KC_DB_PASSWORD=
ENV KC_HOSTNAME=
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]