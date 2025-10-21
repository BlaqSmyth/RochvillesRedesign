#!/bin/bash
# Deploy script - pushes changes to GitHub
# This will trigger automatic deployment on Render

echo "🚀 Deploying changes to production..."
echo ""

# Remove any lock files
rm -f .git/index.lock

# Add all changes
git add .

# Commit with message
git commit -m "Fix: Add /admin route to show login page"

# Push to GitHub
git push origin main

echo ""
echo "✅ Pushed to GitHub!"
echo "🔄 Render will auto-deploy in ~2-3 minutes"
echo "📍 Check deployment status: https://dashboard.render.com"
