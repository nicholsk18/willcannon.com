#!/bin/bash

# Deploy Build Script for willcannon.com
# This script runs linting, updates stats, builds the project, and cleans up

set -e  # Exit on any error

echo "Starting deploy build process..."
echo ""

echo "Step 1: Running linter..."
pnpm run lint
echo "Linting complete"
echo ""

echo "Step 2: Updating statistics..."
node scripts/update-stats.mjs
echo "Stats updated"
echo ""

echo "Step 3: Building project..."
pnpm run build
echo "Build complete"
echo ""

echo "Step 4: Cleaning up node_modules..."
rm -rf node_modules
echo "node_modules removed"
echo ""

echo "Deploy build complete!"
echo ""
echo "Next steps:"
echo "  - Run 'pnpm install' to reinstall dependencies"
echo "  - Deploy the .next folder to your hosting provider"

