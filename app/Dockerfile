# Multi-stage Dockerfile for NCP Story Studio
# Supports both development and production builds

# ============================================
# Base Stage - Common dependencies
# ============================================
FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies for better caching
COPY package*.json ./
RUN npm ci --silent

# ============================================
# Development Stage
# ============================================
FROM base AS development

# Copy all source files
COPY . .

# Expose Vite dev server port
EXPOSE 5177

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5177"]

# ============================================
# Build Stage - Production build
# ============================================
FROM base AS build

# Copy source files
COPY . .

# Build the application
RUN npm run build

# ============================================
# Production Stage - Serve with nginx
# ============================================
FROM nginx:alpine AS production

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:5177/ || exit 1

# Expose port
EXPOSE 5177

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
