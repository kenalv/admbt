# GitHub Repository Setup Script

# Run this script to prepare your template for GitHub upload

Write-Host "🚀 Preparing Astro Docker Multi-Backend Template for GitHub..." -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
} else {
    Write-Host "✅ Git repository already initialized" -ForegroundColor Green
}

# Create .env from example if it doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "📝 Creating .env from example..." -ForegroundColor Yellow
    Copy-Item ".env.example" ".env"
} else {
    Write-Host "✅ .env file already exists" -ForegroundColor Green
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Run Astro check
Write-Host "🔍 Running Astro type check..." -ForegroundColor Yellow
npm run check

# Test Docker build
Write-Host "🐳 Testing Docker build..." -ForegroundColor Yellow
docker build -t astro-multi-backend-template-test .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Docker build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Docker build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Template is ready for GitHub!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a new repository on GitHub"
Write-Host "2. Add remote: git remote add origin https://github.com/yourusername/astro-docker-multi-backend-template.git"
Write-Host "3. Add files: git add ."
Write-Host "4. Commit: git commit -m 'Initial commit: Astro Docker Multi-Backend Template'"
Write-Host "5. Push: git push -u origin main"
Write-Host ""
Write-Host "Repository should be marked as a template in GitHub settings"
Write-Host "Add topics: astro, docker, template, frontend, multi-backend"
