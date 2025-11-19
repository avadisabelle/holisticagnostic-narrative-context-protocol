#!/bin/bash

# Health check script for NCP Story Studio
# Can be used in CI/CD or for monitoring

set -e

HOST="${1:-localhost}"
PORT="${2:-5177}"
URL="http://${HOST}:${PORT}"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🏥 NCP Story Studio Health Check"
echo "================================"
echo "Testing: ${URL}"
echo ""

# Test 1: Health endpoint
echo -n "1. Health endpoint... "
if curl -sf "${URL}/health" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${RED}✗ FAILED${NC}"
    exit 1
fi

# Test 2: Main page
echo -n "2. Main page... "
if curl -sf "${URL}/" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${RED}✗ FAILED${NC}"
    exit 1
fi

# Test 3: Stories endpoint
echo -n "3. Stories page... "
if curl -sf "${URL}/stories" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${YELLOW}⚠ Warning${NC} (SPA routing may not be working)"
fi

# Test 4: Docs endpoint
echo -n "4. Docs page... "
if curl -sf "${URL}/docs" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${YELLOW}⚠ Warning${NC} (SPA routing may not be working)"
fi

# Test 5: Example story file
echo -n "5. Example story JSON... "
if curl -sf "${URL}/examples/weaver_of_words__the_catalyst_of_change_251101.json" > /dev/null 2>&1; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${RED}✗ FAILED${NC}"
    exit 1
fi

# Test 6: Static assets
echo -n "6. Static assets... "
RESPONSE=$(curl -sI "${URL}/" | grep -i "content-type" || true)
if [[ $RESPONSE == *"text/html"* ]]; then
    echo -e "${GREEN}✓ OK${NC}"
else
    echo -e "${RED}✗ FAILED${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}================================${NC}"
echo -e "${GREEN}All health checks passed! ✓${NC}"
echo -e "${GREEN}================================${NC}"

exit 0
