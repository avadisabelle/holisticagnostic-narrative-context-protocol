# Makefile for NCP Story Studio
# Convenient shortcuts for Docker operations

.PHONY: help dev-start dev-stop dev-logs dev-shell prod-start prod-stop prod-deploy prod-logs prod-status clean

# Default target
.DEFAULT_GOAL := help

# Colors
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[1;33m
NC := \033[0m

##@ Development

dev-start: ## Start development server
	@echo "$(BLUE)Starting development server...$(NC)"
	@docker-compose --profile dev up --build -d
	@echo "$(GREEN)✓ Development server started at http://localhost:5177$(NC)"

dev-stop: ## Stop development server
	@echo "$(BLUE)Stopping development server...$(NC)"
	@docker-compose --profile dev stop
	@echo "$(GREEN)✓ Development server stopped$(NC)"

dev-restart: ## Restart development server
	@echo "$(BLUE)Restarting development server...$(NC)"
	@docker-compose --profile dev restart
	@echo "$(GREEN)✓ Development server restarted$(NC)"

dev-logs: ## View development logs (follow)
	@docker-compose --profile dev logs -f

dev-shell: ## Access development container shell
	@docker-compose --profile dev exec app-dev sh

dev-build: ## Build development image
	@docker-compose --profile dev build

dev-rebuild: ## Rebuild development image (no cache)
	@docker-compose --profile dev build --no-cache

##@ Production

prod-start: ## Start production server
	@echo "$(BLUE)Starting production server...$(NC)"
	@docker-compose --profile prod up --build -d
	@sleep 3
	@echo "$(GREEN)✓ Production server started at http://localhost:5177$(NC)"

prod-stop: ## Stop production server
	@echo "$(BLUE)Stopping production server...$(NC)"
	@docker-compose --profile prod stop
	@echo "$(GREEN)✓ Production server stopped$(NC)"

prod-restart: ## Restart production server
	@echo "$(BLUE)Restarting production server...$(NC)"
	@docker-compose --profile prod restart
	@echo "$(GREEN)✓ Production server restarted$(NC)"

prod-deploy: ## Deploy production (pull, build, start)
	@echo "$(BLUE)Deploying production server...$(NC)"
	@git pull || true
	@docker-compose --profile prod build
	@docker-compose --profile prod down
	@docker-compose --profile prod up -d
	@sleep 3
	@echo "$(GREEN)✓ Production deployment complete$(NC)"
	@make prod-status

prod-logs: ## View production logs
	@docker-compose --profile prod logs --tail=100

prod-logs-follow: ## Follow production logs
	@docker-compose --profile prod logs -f

prod-status: ## Check production status
	@echo "$(BLUE)Production Status:$(NC)"
	@docker-compose --profile prod ps
	@echo ""
	@docker inspect --format='Health: {{.State.Health.Status}}' ncp-story-studio-prod 2>/dev/null || echo "$(YELLOW)Container not running$(NC)"

prod-stats: ## Show resource usage
	@docker stats --no-stream ncp-story-studio-prod 2>/dev/null || echo "$(YELLOW)Container not running$(NC)"

prod-build: ## Build production image
	@docker-compose --profile prod build

prod-rebuild: ## Rebuild production image (no cache)
	@docker-compose --profile prod build --no-cache

##@ Maintenance

clean: ## Remove all containers and volumes
	@echo "$(YELLOW)⚠ This will remove all containers and volumes$(NC)"
	@read -p "Are you sure? [y/N]: " -n 1 -r; \
	echo; \
	if [ "$$REPLY" = "y" ] || [ "$$REPLY" = "Y" ]; then \
		docker-compose --profile dev down -v; \
		docker-compose --profile prod down; \
		echo "$(GREEN)✓ Cleanup complete$(NC)"; \
	else \
		echo "Cancelled"; \
	fi

clean-dev: ## Remove development containers and volumes
	@docker-compose --profile dev down -v
	@echo "$(GREEN)✓ Development cleanup complete$(NC)"

clean-prod: ## Remove production containers
	@docker-compose --profile prod down
	@echo "$(GREEN)✓ Production cleanup complete$(NC)"

prune: ## Remove unused Docker resources
	@echo "$(YELLOW)⚠ This will remove unused Docker resources$(NC)"
	@docker system prune -f
	@echo "$(GREEN)✓ Docker cleanup complete$(NC)"

##@ Testing

test-build: ## Test production build locally
	@echo "$(BLUE)Testing production build...$(NC)"
	@docker build -t ncp-story-studio:test --target production ./app
	@docker run -d --name ncp-test -p 5178:5177 ncp-story-studio:test
	@sleep 3
	@if curl -sf http://localhost:5178/health > /dev/null 2>&1; then \
		echo "$(GREEN)✓ Production build test passed!$(NC)"; \
		echo "Access at: http://localhost:5178"; \
		echo "Stop with: docker stop ncp-test && docker rm ncp-test"; \
	else \
		echo "$(YELLOW)⚠ Production build test failed$(NC)"; \
		docker logs ncp-test; \
	fi

test-clean: ## Stop and remove test container
	@docker stop ncp-test 2>/dev/null || true
	@docker rm ncp-test 2>/dev/null || true
	@echo "$(GREEN)✓ Test container removed$(NC)"

##@ Information

status: ## Show status of all containers
	@echo "$(BLUE)Development:$(NC)"
	@docker-compose --profile dev ps
	@echo ""
	@echo "$(BLUE)Production:$(NC)"
	@docker-compose --profile prod ps

ps: status ## Alias for status

info: ## Show system information
	@echo "$(BLUE)Docker Version:$(NC)"
	@docker --version
	@echo ""
	@echo "$(BLUE)Docker Compose Version:$(NC)"
	@docker-compose --version
	@echo ""
	@echo "$(BLUE)Disk Usage:$(NC)"
	@docker system df

help: ## Display this help message
	@echo "$(BLUE)NCP Story Studio - Docker Commands$(NC)"
	@echo ""
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make $(YELLOW)<target>$(NC)\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  $(GREEN)%-20s$(NC) %s\n", $$1, $$2 } /^##@/ { printf "\n$(BLUE)%s$(NC)\n", substr($$0, 5) } ' $(MAKEFILE_LIST)
	@echo ""
	@echo "Examples:"
	@echo "  make dev-start      # Start development server"
	@echo "  make prod-deploy    # Deploy to production"
	@echo "  make prod-status    # Check production status"
	@echo ""
