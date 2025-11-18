# Docker Quick Start - NCP Story Studio

## 🚀 Get Started in 30 Seconds

### Development Mode
```bash
# Option 1: Using Make (recommended)
make dev-start

# Option 2: Using helper script
./scripts/docker-dev.sh start

# Option 3: Using Docker Compose directly
docker-compose --profile dev up --build
```

**Access the app**: http://localhost:5177

### Production Mode
```bash
# Option 1: Using Make (recommended)
make prod-deploy

# Option 2: Using helper script
./scripts/docker-prod.sh deploy

# Option 3: Using Docker Compose directly
docker-compose --profile prod up --build -d
```

**Access the app**: http://localhost:5177

## 📋 Common Commands

### Development
| Task | Command |
|------|---------|
| Start | `make dev-start` |
| Stop | `make dev-stop` |
| Restart | `make dev-restart` |
| View logs | `make dev-logs` |
| Shell access | `make dev-shell` |
| Rebuild | `make dev-rebuild` |

### Production
| Task | Command |
|------|---------|
| Deploy | `make prod-deploy` |
| Start | `make prod-start` |
| Stop | `make prod-stop` |
| Check status | `make prod-status` |
| View logs | `make prod-logs` |
| Monitor logs | `make prod-logs-follow` |
| Resource usage | `make prod-stats` |

### Cleanup
| Task | Command |
|------|---------|
| Clean dev | `make clean-dev` |
| Clean prod | `make clean-prod` |
| Clean all | `make clean` |
| Prune Docker | `make prune` |

## 🎯 Quick Workflows

### Development Workflow
```bash
# 1. Start development server
make dev-start

# 2. Make changes to code (hot reload automatic)

# 3. View logs if needed
make dev-logs

# 4. Access container shell if needed
make dev-shell

# 5. Stop when done
make dev-stop
```

### Production Deployment
```bash
# Full deployment (pull + build + start)
make prod-deploy

# Check everything is working
make prod-status

# Monitor logs
make prod-logs-follow
```

### Testing Production Build Locally
```bash
# Test build on port 5178
make test-build

# Clean up test
make test-clean
```

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Find what's using port 5177
lsof -i :5177

# Stop the process or change port in .env
```

### Container Won't Start
```bash
# Check logs
make dev-logs  # or make prod-logs

# Rebuild from scratch
make dev-rebuild
```

### Changes Not Reflecting (Dev)
```bash
# Restart development server
make dev-restart

# Or rebuild completely
make clean-dev
make dev-start
```

### Health Check Failing (Prod)
```bash
# Check status
make prod-status

# View detailed logs
make prod-logs

# Restart
make prod-restart
```

## 📁 Project Structure

```
narrative-context-protocol/
├── app/                        # React application
│   ├── Dockerfile             # Multi-stage build
│   ├── nginx.conf             # Production web server config
│   ├── .dockerignore          # Build optimization
│   └── src/                   # Source code
├── docker-compose.yml         # Orchestration
├── Makefile                   # Quick commands
├── scripts/
│   ├── docker-dev.sh          # Development helper
│   └── docker-prod.sh         # Production helper
├── .env.example               # Config template
└── DOCKER.md                  # Full documentation
```

## 🎨 Features

✅ **Hot Reload** - Development changes reflect instantly
✅ **Optimized Build** - Production build with tree-shaking
✅ **Small Images** - Alpine-based (~50MB)
✅ **Health Checks** - Automatic monitoring
✅ **Security** - Headers, gzip, best practices
✅ **Easy Commands** - Simple Make shortcuts
✅ **Documentation** - Comprehensive guides

## 📚 Learn More

- **Full Guide**: See [DOCKER.md](./DOCKER.md)
- **Development Docs**: See [app/DEVELOPMENT.md](./app/DEVELOPMENT.md)
- **Project Overview**: See [CLAUDE.md](./CLAUDE.md)

## ❓ Need Help?

```bash
# Show all available commands
make help

# Development script help
./scripts/docker-dev.sh help

# Production script help
./scripts/docker-prod.sh help
```

---

**Remember**: Port 5177 is exposed for both development and production!
