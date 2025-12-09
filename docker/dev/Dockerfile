FROM node:20-bullseye

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install deps into a separate directory so they are not shadowed
# when we mount the project into /app.
RUN mkdir -p /opt/tailcloakify_deps \
    && cp package.json yarn.lock* package-lock.json* pnpm-lock.yaml* /opt/tailcloakify_deps/ 2>/dev/null || true \
    && cd /opt/tailcloakify_deps \
    && yarn install --frozen-lockfile || yarn install

# Make globally-installed project binaries available
ENV NODE_PATH=/opt/tailcloakify_deps/node_modules
ENV PATH=/opt/tailcloakify_deps/node_modules/.bin:$PATH

CMD []
