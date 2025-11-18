# Docker Deployment Guide - NCP Story Studio

This guide covers how to build, run, and deploy the NCP Story Studio application using Docker.

## Quick Start

### Development Mode

```bash
# Build and start development server
docker-compose --profile dev up --build

# Or use the shorthand
docker-compose --profile dev up
```

The app will be available at: **http://localhost:5177**

### Production Mode

```bash
# Build and start production server
docker-compose --profile prod up --build -d

# Check status
docker-compose --profile prod ps

# View logs
docker-compose --profile prod logs -f
```

The app will be available at: **http://localhost:5177**

## Docker Compose Profiles

This setup uses Docker Compose profiles to separate development and production:

- **`dev`** - Development mode with hot reload
- **`prod`** - Production mode with nginx serving optimized build

## Commands Reference

### Building

```bash
# Build development image
docker-compose --profile dev build

# Build production image
docker-compose --profile prod build

# Build without cache (fresh build)
docker-compose --profile prod build --no-cache
```

### Running

```bash
# Start in foreground (see logs)
docker-compose --profile dev up

# Start in background (detached)
docker-compose --profile prod up -d

# Start and rebuild
docker-compose --profile dev up --build
```

### Stopping

```bash
# Stop services
docker-compose --profile dev stop

# Stop and remove containers
docker-compose --profile dev down

# Stop and remove containers + volumes
docker-compose --profile dev down -v
```

### Monitoring

```bash
# View logs
docker-compose --profile dev logs

# Follow logs (live tail)
docker-compose --profile prod logs -f

# View logs for specific service
docker-compose logs app-prod

# Check container status
docker-compose ps

# Inspect container health
docker inspect --format='{{.State.Health.Status}}' ncp-story-studio-prod
```

### Shell Access

```bash
# Access development container shell
docker-compose --profile dev exec app-dev sh

# Access production container shell
docker-compose --profile prod exec app-prod sh
```

## Architecture

### Multi-Stage Build

The Dockerfile uses a multi-stage build process:

1. **Base Stage** - Installs dependencies (cached layer)
2. **Development Stage** - Runs Vite dev server
3. **Build Stage** - Creates production build
4. **Production Stage** - Serves with nginx

### Development Features

- **Hot Module Replacement (HMR)** - Code changes reflect instantly
- **Volume Mounting** - Source code mounted for live updates
- **Port 5177** - Consistent with local development
- **Health Checks** - Automatic container health monitoring

### Production Features

- **Optimized Build** - Vite production build with tree-shaking
- **Nginx Serving** - High-performance static file serving
- **Gzip Compression** - Reduced bandwidth usage
- **Cache Headers** - Optimal caching strategy
- **Security Headers** - X-Frame-Options, CSP, etc.
- **Health Endpoint** - `/health` for load balancers
- **Small Image Size** - Alpine-based (~50MB)

## Volume Management

### Development Volumes

```bash
# List volumes
docker volume ls

# Inspect node_modules volume
docker volume inspect ncp-network_node_modules_dev

# Remove unused volumes
docker volume prune
```

### Rebuilding Dependencies

If you update `package.json`:

```bash
# Remove volume and rebuild
docker-compose --profile dev down -v
docker-compose --profile dev up --build
```

## Environment Variables

Create `.env` file in the root directory:

```env
# Application
NODE_ENV=production
VITE_APP_TITLE=NCP Story Studio

# Port (optional, default 5177)
APP_PORT=5177

# Build optimizations
VITE_BUILD_SOURCEMAP=false
```

## Production Deployment

### Using Docker Compose

```bash
# Deploy to production server
docker-compose --profile prod up -d

# Update to latest version
git pull
docker-compose --profile prod up --build -d

# Rollback (if needed)
docker-compose --profile prod down
docker-compose --profile prod up <previous-image-id>
```

### Using Plain Docker

```bash
# Build production image
docker build -t ncp-story-studio:latest --target production ./app

# Run container
docker run -d \
  --name ncp-story-studio \
  -p 5177:5177 \
  --restart unless-stopped \
  ncp-story-studio:latest

# Stop container
docker stop ncp-story-studio
docker rm ncp-story-studio
```

### Registry Deployment

```bash
# Tag image
docker tag ncp-story-studio:latest registry.example.com/ncp-story-studio:latest

# Push to registry
docker push registry.example.com/ncp-story-studio:latest

# Pull and run on server
docker pull registry.example.com/ncp-story-studio:latest
docker run -d -p 5177:5177 registry.example.com/ncp-story-studio:latest
```

## Reverse Proxy Setup

### Nginx Reverse Proxy

```nginx
server {
    listen 80;
    server_name ncp.example.com;

    location / {
        proxy_pass http://localhost:5177;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Traefik Labels (docker-compose)

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.ncp.rule=Host(`ncp.example.com`)"
  - "traefik.http.services.ncp.loadbalancer.server.port=5177"
  - "traefik.http.routers.ncp.entrypoints=websecure"
  - "traefik.http.routers.ncp.tls.certresolver=letsencrypt"
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose --profile prod logs

# Check if port is already in use
lsof -i :5177
# Or on Linux
netstat -tulpn | grep 5177

# Remove all containers and start fresh
docker-compose down -v
docker-compose --profile prod up --build
```

### Hot reload not working (dev)

```bash
# Ensure volumes are mounted correctly
docker-compose --profile dev config

# Restart with fresh volumes
docker-compose --profile dev down -v
docker-compose --profile dev up --build
```

### Build fails

```bash
# Clear Docker build cache
docker builder prune -a

# Build without cache
docker-compose --profile prod build --no-cache
```

### Health check failing

```bash
# Check health status
docker inspect --format='{{json .State.Health}}' ncp-story-studio-prod | jq

# Access container and test manually
docker-compose --profile prod exec app-prod wget -O- http://localhost:5177/health
```

### Permission issues

```bash
# Fix volume permissions (Linux)
sudo chown -R $USER:$USER ./app/node_modules
```

## Performance Optimization

### Build Cache

The Dockerfile is optimized for layer caching:
- Dependencies layer is cached separately
- Source code changes don't invalidate dependency cache
- Multi-stage build minimizes final image size

### Runtime Performance

- **Nginx** serves static files efficiently
- **Gzip compression** reduces transfer size by ~70%
- **Cache headers** reduce repeat requests
- **Health checks** enable quick failure detection

## Security

### Container Security

```bash
# Scan image for vulnerabilities
docker scan ncp-story-studio:latest

# Run with read-only filesystem (advanced)
docker run --read-only -d -p 5177:5177 ncp-story-studio:latest
```

### Security Headers

The nginx configuration includes:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Monitoring

### Container Stats

```bash
# Real-time resource usage
docker stats ncp-story-studio-prod

# All containers
docker-compose --profile prod stats
```

### Logs

```bash
# Export logs
docker-compose --profile prod logs > app-logs.txt

# Filter logs by time
docker-compose --profile prod logs --since 1h

# Follow logs from multiple services
docker-compose logs -f app-prod
```

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Build Docker image
        run: docker build -t ncp-story-studio:${{ github.sha }} --target production ./app

      - name: Run tests
        run: docker run ncp-story-studio:${{ github.sha }} npm test

      - name: Push to registry
        run: |
          docker tag ncp-story-studio:${{ github.sha }} registry.example.com/ncp:latest
          docker push registry.example.com/ncp:latest
```

## Resources

- **Docker Documentation**: https://docs.docker.com
- **Docker Compose**: https://docs.docker.com/compose
- **Vite**: https://vitejs.dev
- **Nginx**: https://nginx.org/en/docs

## Support

For issues related to Docker setup, please check:
1. Docker version: `docker --version` (requires 20.10+)
2. Docker Compose version: `docker-compose --version` (requires 2.0+)
3. Available disk space: `df -h`
4. Container logs: `docker-compose logs`

---

**Last Updated**: 2025-11-17
**Docker Version**: 20.10+
**Docker Compose Version**: 2.0+
