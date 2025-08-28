# Contributing to Astro Docker Multi-Backend Template

Thank you for your interest in contributing! This document provides guidelines for contributing to this template.

## 🚀 Quick Start for Contributors

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/astro-docker-multi-backend-template.git
   cd astro-docker-multi-backend-template
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠️ Development Setup

### Local Development
```bash
npm run dev
```

### Docker Development
```bash
docker-compose -f docker-compose.dev.yml up
```

### Testing Changes
```bash
# Test API connections
npm run dev
# Visit http://localhost:4321/api-test
```

## 📝 Guidelines

### Code Style
- Use TypeScript where possible
- Follow Astro conventions
- Use meaningful component and variable names
- Add comments for complex logic

### Documentation
- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update .env.example for new environment variables

### Docker
- Test both development and production Docker setups
- Ensure compatibility with external containers
- Keep images lightweight

## 🔧 Types of Contributions

### 🐛 Bug Fixes
- Fix issues with API connections
- Resolve Docker configuration problems
- Address TypeScript errors

### ✨ Features
- Add support for new backend types
- Improve Docker configurations
- Add new API utilities
- Enhance documentation

### 📚 Documentation
- Improve README
- Add usage examples
- Create tutorials
- Fix typos

### 🧪 Testing
- Add API connection tests
- Improve Docker testing
- Add integration tests

## 🚀 Submitting Changes

### Pull Request Process
1. **Update documentation** - README, comments, etc.
2. **Test thoroughly** - Both local and Docker setups
3. **Follow naming conventions** - Clear, descriptive names
4. **Write good commit messages**
   ```
   type(scope): description
   
   Examples:
   feat(api): add GraphQL support
   fix(docker): resolve container networking issue
   docs(readme): update installation instructions
   ```

### Pull Request Template
- [ ] I have tested these changes locally
- [ ] I have tested with Docker
- [ ] I have updated documentation
- [ ] I have added/updated tests (if applicable)
- [ ] My changes don't break existing functionality

## 🌍 Backend Support Priorities

We welcome contributions for:
1. **WordPress** - REST API, GraphQL
2. **Node.js** - Express, Fastify, NestJS
3. **Python** - Django, FastAPI, Flask
4. **PHP** - Laravel, Symfony
5. **.NET** - ASP.NET Core
6. **Go** - Gin, Echo
7. **Java** - Spring Boot
8. **Ruby** - Rails

## 📞 Getting Help

- **Issues** - Use GitHub issues for bugs and features
- **Discussions** - Use GitHub discussions for questions
- **Security** - Email security issues privately

## 🎯 Roadmap Ideas

- [ ] Multi-environment configuration
- [ ] Docker Swarm support
- [ ] Kubernetes manifests
- [ ] GitHub Actions workflows
- [ ] More backend API examples
- [ ] Authentication helpers
- [ ] GraphQL support
- [ ] WebSocket support

## 👥 Recognition

Contributors will be:
- Added to the contributors list
- Mentioned in release notes
- Credited in documentation

Thank you for making this template better! 🙏
