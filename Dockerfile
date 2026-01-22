ARG NODE_VERSION=24.13.0

# Create build stage
FROM node:${NODE_VERSION}-slim AS build

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set the working directory inside the container
WORKDIR /app

# Copy workspace configuration files
COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./

# Copy all workspace packages
COPY ./docs ./docs
COPY ./layer ./layer

# Install dependencies
RUN pnpm install --frozen-lockfile

RUN pnpm dev:prepare

# Build the documentation
RUN pnpm docs:build

# Production stage
FROM node:${NODE_VERSION}-slim

# Set the working directory
WORKDIR /app

# Copy the built output
COPY --from=build /app/docs/.output ./

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000


# Start the application
CMD ["node", "server/index.mjs"]
