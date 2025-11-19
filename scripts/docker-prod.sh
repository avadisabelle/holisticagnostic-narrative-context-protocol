#!/bin/bash

# NCP Story Studio - Production Docker Script
# Convenient commands for Docker production deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_info() {
    echo -e "${BLUE}ℹ ${1}${NC}"
}

print_success() {
    echo -e "${GREEN}✓ ${1}${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ ${1}${NC}"
}

print_error() {
    echo -e "${RED}✗ ${1}${NC}"
}

print_header() {
    echo -e "\n${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}  $1${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}\n"
}

# Help function
show_help() {
    cat << EOF
NCP Story Studio - Production Docker Commands

Usage: ./scripts/docker-prod.sh [command]

Commands:
    start       Start production server (detached)
    stop        Stop production server
    restart     Restart production server
    logs        View production logs
    build       Build production image
    rebuild     Rebuild production image (no cache)
    deploy      Deploy (pull latest, build, start)
    status      Check container status & health
    clean       Remove containers
    stats       Show resource usage
    test        Test production build locally
    help        Show this help message

Examples:
    ./scripts/docker-prod.sh deploy
    ./scripts/docker-prod.sh logs
    ./scripts/docker-prod.sh status

EOF
}

# Start production server
start_prod() {
    print_header "Starting Production Server"
    print_info "Building and starting containers..."
    docker-compose --profile prod up --build -d

    # Wait for health check
    print_info "Waiting for health check..."
    sleep 5

    if docker ps | grep -q "ncp-story-studio-prod"; then
        print_success "Production server started!"
        print_info "Access at: http://localhost:5177"
        echo ""
        check_status
    else
        print_error "Failed to start production server"
        print_info "Check logs with: ./scripts/docker-prod.sh logs"
        exit 1
    fi
}

# Stop production server
stop_prod() {
    print_header "Stopping Production Server"
    docker-compose --profile prod stop
    print_success "Production server stopped!"
}

# Restart production server
restart_prod() {
    print_header "Restarting Production Server"
    docker-compose --profile prod restart
    sleep 3
    print_success "Production server restarted!"
    check_status
}

# View logs
view_logs() {
    print_header "Production Logs"

    # Check if we should follow or show last N lines
    if [ "$1" = "follow" ] || [ "$1" = "-f" ]; then
        print_info "Following logs (Ctrl+C to exit)..."
        docker-compose --profile prod logs -f
    else
        LINES=${1:-100}
        print_info "Showing last $LINES lines..."
        docker-compose --profile prod logs --tail=$LINES
    fi
}

# Build image
build_prod() {
    print_header "Building Production Image"
    docker-compose --profile prod build
    print_success "Production image built!"
}

# Rebuild image (no cache)
rebuild_prod() {
    print_header "Rebuilding Production Image (No Cache)"
    print_warning "This will take longer but ensures a fresh build"
    docker-compose --profile prod build --no-cache
    print_success "Production image rebuilt!"
}

# Deploy (pull, build, start)
deploy_prod() {
    print_header "Deploying Production Server"

    print_info "Step 1/4: Pulling latest code..."
    git pull || print_warning "Git pull failed (continuing anyway)"

    print_info "Step 2/4: Building image..."
    docker-compose --profile prod build

    print_info "Step 3/4: Stopping old containers..."
    docker-compose --profile prod down

    print_info "Step 4/4: Starting new containers..."
    docker-compose --profile prod up -d

    sleep 5
    print_success "Deployment complete!"
    check_status
}

# Clean up
clean_prod() {
    print_header "Cleaning Up"
    print_warning "This will remove containers"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose --profile prod down
        print_success "Cleanup complete!"
    else
        print_info "Cleanup cancelled"
    fi
}

# Check status
check_status() {
    print_header "Production Server Status"

    # Container status
    docker-compose --profile prod ps
    echo ""

    # Check if container is running
    if docker ps | grep -q "ncp-story-studio-prod"; then
        print_success "Container is running"

        # Get health status
        HEALTH=$(docker inspect --format='{{.State.Health.Status}}' ncp-story-studio-prod 2>/dev/null || echo "unknown")

        if [ "$HEALTH" = "healthy" ]; then
            print_success "Health check: healthy"
        elif [ "$HEALTH" = "unhealthy" ]; then
            print_error "Health check: unhealthy"
            print_info "View logs: ./scripts/docker-prod.sh logs"
        elif [ "$HEALTH" = "starting" ]; then
            print_warning "Health check: starting..."
        else
            print_info "Health check: $HEALTH"
        fi

        # Test HTTP endpoint
        echo ""
        print_info "Testing HTTP endpoint..."
        if curl -sf http://localhost:5177/health > /dev/null 2>&1; then
            print_success "HTTP endpoint responding"
        else
            print_error "HTTP endpoint not responding"
        fi
    else
        print_warning "Container is not running"
    fi
}

# Show stats
show_stats() {
    print_header "Resource Usage"
    docker stats --no-stream ncp-story-studio-prod 2>/dev/null || print_warning "Container not running"
}

# Test production build
test_prod() {
    print_header "Testing Production Build"

    print_info "Building test image..."
    docker build -t ncp-story-studio:test --target production ./app

    print_info "Starting test container on port 5178..."
    docker run -d --name ncp-test -p 5178:5177 ncp-story-studio:test

    sleep 3

    print_info "Testing HTTP endpoint..."
    if curl -sf http://localhost:5178/health > /dev/null 2>&1; then
        print_success "Production build is working!"
        print_info "Access at: http://localhost:5178"
        echo ""
        print_warning "Remember to stop test container:"
        echo "  docker stop ncp-test && docker rm ncp-test"
    else
        print_error "Production build test failed"
        print_info "Check logs: docker logs ncp-test"
    fi
}

# Main script
case "${1:-help}" in
    start)
        start_prod
        ;;
    stop)
        stop_prod
        ;;
    restart)
        restart_prod
        ;;
    logs)
        view_logs "${2:-100}"
        ;;
    build)
        build_prod
        ;;
    rebuild)
        rebuild_prod
        ;;
    deploy)
        deploy_prod
        ;;
    status)
        check_status
        ;;
    clean)
        clean_prod
        ;;
    stats)
        show_stats
        ;;
    test)
        test_prod
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
