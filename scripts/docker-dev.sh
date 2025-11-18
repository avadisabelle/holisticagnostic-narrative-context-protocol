#!/bin/bash

# NCP Story Studio - Development Docker Script
# Convenient commands for Docker development workflow

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
NCP Story Studio - Development Docker Commands

Usage: ./scripts/docker-dev.sh [command]

Commands:
    start       Start development server
    stop        Stop development server
    restart     Restart development server
    logs        View development logs (follow)
    build       Build development image
    rebuild     Rebuild development image (no cache)
    shell       Access container shell
    clean       Remove containers and volumes
    status      Check container status
    help        Show this help message

Examples:
    ./scripts/docker-dev.sh start
    ./scripts/docker-dev.sh logs
    ./scripts/docker-dev.sh shell

EOF
}

# Start development server
start_dev() {
    print_header "Starting Development Server"
    print_info "Building and starting containers..."
    docker-compose --profile dev up --build -d
    print_success "Development server started!"
    print_info "Access at: http://localhost:5177"
    echo ""
    print_info "View logs with: ./scripts/docker-dev.sh logs"
}

# Stop development server
stop_dev() {
    print_header "Stopping Development Server"
    docker-compose --profile dev stop
    print_success "Development server stopped!"
}

# Restart development server
restart_dev() {
    print_header "Restarting Development Server"
    docker-compose --profile dev restart
    print_success "Development server restarted!"
}

# View logs
view_logs() {
    print_header "Development Logs"
    print_info "Following logs (Ctrl+C to exit)..."
    docker-compose --profile dev logs -f
}

# Build image
build_dev() {
    print_header "Building Development Image"
    docker-compose --profile dev build
    print_success "Development image built!"
}

# Rebuild image (no cache)
rebuild_dev() {
    print_header "Rebuilding Development Image (No Cache)"
    print_warning "This will take longer but ensures a fresh build"
    docker-compose --profile dev build --no-cache
    print_success "Development image rebuilt!"
}

# Access shell
access_shell() {
    print_header "Accessing Container Shell"
    print_info "Type 'exit' to leave the shell"
    docker-compose --profile dev exec app-dev sh
}

# Clean up
clean_dev() {
    print_header "Cleaning Up"
    print_warning "This will remove containers and volumes"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        docker-compose --profile dev down -v
        print_success "Cleanup complete!"
    else
        print_info "Cleanup cancelled"
    fi
}

# Check status
check_status() {
    print_header "Container Status"
    docker-compose --profile dev ps
    echo ""

    # Check if container is running
    if docker ps | grep -q "ncp-story-studio-dev"; then
        print_success "Container is running"

        # Get health status
        HEALTH=$(docker inspect --format='{{.State.Health.Status}}' ncp-story-studio-dev 2>/dev/null || echo "unknown")
        if [ "$HEALTH" = "healthy" ]; then
            print_success "Health check: healthy"
        elif [ "$HEALTH" = "unhealthy" ]; then
            print_error "Health check: unhealthy"
        else
            print_info "Health check: $HEALTH"
        fi
    else
        print_warning "Container is not running"
    fi
}

# Main script
case "${1:-help}" in
    start)
        start_dev
        ;;
    stop)
        stop_dev
        ;;
    restart)
        restart_dev
        ;;
    logs)
        view_logs
        ;;
    build)
        build_dev
        ;;
    rebuild)
        rebuild_dev
        ;;
    shell)
        access_shell
        ;;
    clean)
        clean_dev
        ;;
    status)
        check_status
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
