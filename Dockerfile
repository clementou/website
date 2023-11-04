# Stage 1: Build the React application with Vite
FROM node:20 AS build

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the code
COPY . .

# Build the application with Vite
RUN pnpm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html
# Note: The output directory may differ based on Vite's configuration.
# Adjust the above line if your output directory is not 'dist'.

# Expose port 80 to the Docker daemon
EXPOSE 80

# Start Nginx when the container has provisioned.
CMD ["nginx", "-g", "daemon off;"]
