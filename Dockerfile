ARG NODE_VERSION=24.3.0

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

# Copy all workspace packages (needed for docs:build)
COPY ./docs ./docs
COPY ./layer ./layer

# Install dependencies for the entire workspace
RUN pnpm install

# Build the documentation using the docs:build command
RUN pnpm docs:build

# Production stage with nginx
FROM nginx:alpine

# Copy the built documentation to nginx html directory
COPY --from=build /app/docs/.output/public /usr/share/nginx/html

# Copy nginx configuration if you have one
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
