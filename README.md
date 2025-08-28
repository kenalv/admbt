# Astro Docker Multi-Backend Template

A production-ready Astro template with Docker support designed to connect to various backend containers (WordPress headless, Node.js APIs, Python APIs, .NET APIs, and more).

[![Deploy with Docker](https://img.shields.io/badge/deploy-docker-blue.svg)](https://docs.docker.com/compose/)
[![Astro](https://img.shields.io/badge/astro-4.15.0-orange.svg)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/typescript-5.5.0-blue.svg)](https://www.typescriptlang.org/)

## ✨ Features

- 🐳 **Docker-ready** - Production and development configurations
- 🔌 **Multi-backend support** - WordPress, Node.js, Python, .NET, and custom APIs
- ⚡ **Fast development** - Hot reload with Docker dev setup
- 🎯 **External container friendly** - Connects to your existing backend containers
- 🔧 **Easy configuration** - Environment-based API endpoint management
- 📱 **Responsive design** - Mobile-first approach
- 🚀 **Production optimized** - Optimized Docker builds and Astro SSG/SSR

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Your backend containers already running (WordPress, APIs, etc.)

### Setup

1. **Clone or copy this template**
   ```bash
   git clone https://github.com/yourusername/astro-docker-multi-backend-template.git my-astro-app
   cd my-astro-app
   ```

2. **Configure backend URLs**
   ```bash
   cp .env.example .env
   # Edit .env file to match your backend container ports/URLs
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   # Local development
   npm run dev

   # Or with Docker
   docker-compose -f docker-compose.dev.yml up
   ```

5. **Access your app**
   - Frontend: http://localhost:4321
   - Your existing backends remain on their configured ports

## 🔧 Configuration

### Connecting to Existing Backend Containers

This template is designed to connect to your existing backend containers. Configure the URLs in your `.env` file:

```env
# WordPress Headless API
WP_API_URL=http://localhost:8000/wp-json/wp/v2

# Node.js API Backend  
NODE_API_URL=http://localhost:3001/api

# Python FastAPI Backend
PYTHON_API_URL=http://localhost:8001

# .NET API Backend
DOTNET_API_URL=http://localhost:5000
```

### Docker Network Integration

If your backend containers use a custom Docker network, you can join it:

1. **Option 1: Use host.docker.internal (default)**
   - Works when backends run on host ports
   - No network configuration needed

2. **Option 2: Join existing Docker network**
   ```yaml
   # In docker-compose.yml, uncomment and modify:
   networks:
     default:
       external:
         name: your-existing-network-name
   ```

3. **Option 3: Connect to specific container network**
   ```bash
   docker run --network container:your-backend-container astro-app
   ```

## 📁 Project Structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Base layout component
│   ├── pages/
│   │   └── index.astro           # Homepage
│   ├── utils/
│   │   └── api.ts               # API utilities for backend connections
│   └── env.d.ts                 # Environment type definitions
├── backend/                     # Example backend structures (optional)
├── docker-compose.yml           # Production Docker setup
├── docker-compose.dev.yml       # Development Docker setup
├── Dockerfile                   # Production Dockerfile
├── Dockerfile.dev              # Development Dockerfile
└── .env.example                # Environment configuration template
```

## 🌐 API Integration

### WordPress Headless

```typescript
import { wordpressApi } from '@/utils/api';

// Get posts
const posts = await wordpressApi.getPosts();

// Get specific post
const post = await wordpressApi.getPost(123);
```

### Generic Backend APIs

```typescript
import { backendApi } from '@/utils/api';

// GET request
const data = await backendApi.get('users');

// POST request
const result = await backendApi.post('users', { name: 'John' });
```

### Custom API Endpoints

```typescript
import { apiFetch } from '@/utils/api';

// Custom API call
const response = await apiFetch('http://localhost:9000/custom-endpoint');
```

## 🐳 Docker Commands

### Development
```bash
# Start development server with hot reload
docker-compose -f docker-compose.dev.yml up

# Rebuild and start
docker-compose -f docker-compose.dev.yml up --build
```

### Production
```bash
# Build and start production server
docker-compose up -d

# View logs
docker-compose logs -f astro
```

### Standalone Container
```bash
# Build image
docker build -t astro-frontend .

# Run container (connecting to host backends)
docker run -p 4321:4321 \
  -e WP_API_URL=http://host.docker.internal:8000/wp-json/wp/v2 \
  -e NODE_API_URL=http://host.docker.internal:3001/api \
  astro-frontend
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `WP_API_URL` | WordPress REST API endpoint | `http://localhost:8000/wp-json/wp/v2` |
| `NODE_API_URL` | Node.js API endpoint | `http://localhost:3001/api` |
| `BACKEND_API_URL` | Generic backend API endpoint | `http://localhost:8080/api` |
| `PYTHON_API_URL` | Python API endpoint | `http://localhost:8001` |
| `DOTNET_API_URL` | .NET API endpoint | `http://localhost:5000` |

## 🎯 Use Cases

### WordPress Headless CMS
- Perfect for WordPress sites that need modern frontend
- Connects to WordPress REST API or GraphQL
- Maintains WordPress admin for content management

### Microservices Architecture  
- Connect to multiple API services
- Aggregate data from different backends
- Modern frontend for legacy APIs

### JAMstack with Custom APIs
- Static site generation with dynamic data
- Connect to any REST/GraphQL API
- Deploy anywhere (Vercel, Netlify, etc.)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Docker Production Build
```bash
docker build -t astro-frontend .
docker run -p 4321:4321 astro-frontend
```

### Environment-Specific Deployment
```bash
# Staging
docker-compose -f docker-compose.yml -f docker-compose.staging.yml up

# Production  
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
```

## 🛠️ Customization

### Adding New Backend APIs

1. **Update environment variables**
   ```env
   NEW_API_URL=http://localhost:9000/api
   ```

2. **Add API helper functions**
   ```typescript
   // In src/utils/api.ts
   export const newApi = {
     async getData() {
       return apiFetch(`${process.env.NEW_API_URL}/data`);
     }
   };
   ```

3. **Use in components**
   ```typescript
   import { newApi } from '@/utils/api';
   
   const data = await newApi.getData();
   ```

### Custom Docker Networks

If your backends use a specific Docker network:

```yaml
# docker-compose.yml
networks:
  default:
    external:
      name: my-backend-network
```

## 📖 Next Steps

1. **Configure your backend URLs** in `.env`
2. **Create your pages** in `src/pages/`
3. **Build components** in `src/components/`
4. **Add API integrations** using the utilities in `src/utils/api.ts`
5. **Style your app** with your preferred CSS framework

## 🤝 Contributing

This is a template repository. Feel free to:
- Fork and customize for your needs
- Submit improvements via pull requests
- Share your use cases and configurations

## 📄 License

MIT License - feel free to use this template for any project!
