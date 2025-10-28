#!/bin/bash

# Deploy Build Script for willcannon.com
# This script runs linting, updates stats, builds the project, and manages PM2

set -e  # Exit on any error

echo "Starting deploy build process..."
echo ""

echo "Step 1: Installing dependencies..."
pnpm install
echo "Installation complete"
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

echo "Step 5: Creating logs directory..."
mkdir -p logs
echo "Logs directory ready"
echo ""

echo "Step 6: Managing PM2 process..."
if pnpm pm2:status | grep -q "willcannon.com"; then
  echo "Reloading existing PM2 process..."
  pnpm pm2:reload
else
  echo "Starting new PM2 process..."
  pnpm pm2:start
fi
echo "PM2 process running"
echo ""

echo "Deploy build complete!"
echo ""
echo "Useful PM2 commands:"
echo "  - pnpm pm2:status   : View app status"
echo "  - pnpm pm2:logs     : View app logs"
echo "  - pnpm pm2:monit    : Monitor app performance"
echo "  - pnpm pm2:restart  : Restart app"
echo "  - pnpm pm2:stop     : Stop app"
echo ""

