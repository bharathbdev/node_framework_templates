# 🐳 Docker Setup Guide for NestJS App

This guide explains how to run the NestJS application using Docker and Docker Compose.

## 📋 Prerequisites

Before running the application with Docker, make sure you have:

- **Docker** installed on your system
- **Docker Compose** installed on your system

### Install Docker:
- **Windows/Mac**: Download from [Docker Desktop](https://www.docker.com/products/docker-desktop)
- **Linux**: Follow the [official installation guide](https://docs.docker.com/engine/install/)

## 🏗️ Docker Files Overview

### Files Created:
- `Dockerfile` - Production container configuration
- `Dockerfile.dev` - Development container configuration
- `docker-compose.yml` - Production services orchestration
- `docker-compose.dev.yml` - Development services orchestration
- `.dockerignore` - Files to exclude from Docker context
- `.env.docker` - Environment variables for Docker
- `mongo-init.js` - MongoDB initialization script

## 🚀 How to Run

### 🔥 Development Mode (Recommended for development)

```bash
# Build and start all services in development mode
docker-compose -f docker-compose.dev.yml up --build

# Or run in background (detached mode)
docker-compose -f docker-compose.dev.yml up -d --build

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop services
docker-compose -f docker-compose.dev.yml down
```

### 🚀 Production Mode

```bash
# Build and start all services in production mode
docker-compose up --build

# Or run in background (detached mode)
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🔗 Service URLs

Once the containers are running, you can access:

| Service | URL | Description |
|---------|-----|-------------|
| **NestJS App** | http://localhost:3000 | Main application |
| **API Endpoints** | http://localhost:3000/users | REST API |
| **MongoDB** | mongodb://localhost:27017 | Database (direct access) |
| **Mongo Express** | http://localhost:8081 | MongoDB web interface |

### Mongo Express Login:
- **Username**: `admin`
- **Password**: `admin123`

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create a new user |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| PUT | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

### Example API Usage:

#### Create User:
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }'
```

#### Get All Users:
```bash
curl http://localhost:3000/users
```

## 🐳 Docker Commands Cheat Sheet

### Basic Operations:
```bash
# Build images
docker-compose build

# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View running containers
docker-compose ps

# View logs
docker-compose logs

# Follow logs
docker-compose logs -f

# Restart a specific service
docker-compose restart app
```

### Development Commands:
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Rebuild and start
docker-compose -f docker-compose.dev.yml up --build

# Run a command in the app container
docker-compose exec app-dev npm install

# Access container shell
docker-compose exec app-dev sh

# View app logs only
docker-compose logs app-dev
```

### Cleanup Commands:
```bash
# Remove containers and networks
docker-compose down

# Remove containers, networks, and volumes
docker-compose down -v

# Remove everything including images
docker-compose down --rmi all -v

# Clean up Docker system
docker system prune -a
```

## 📊 Container Details

### Services Included:

1. **app** / **app-dev** (NestJS Application)
   - Port: 3000
   - Environment: Production/Development
   - Auto-restarts on failure
   - Hot-reload in development mode

2. **mongo** (MongoDB Database)
   - Port: 27017
   - Persistent data storage
   - Initialized with sample data

3. **mongo-express** (MongoDB Web Interface)
   - Port: 8081
   - Web-based database management
   - Connected to MongoDB

## 🔧 Environment Variables

The application uses these environment variables in Docker:

```env
NODE_ENV=production|development
PORT=3000
MONGODB_URI=mongodb://mongo:27017/nestjs-app
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password123
```

## 🛠️ Troubleshooting

### Common Issues:

1. **Port already in use**:
   ```bash
   # Check what's using the port
   netstat -tulpn | grep :3000
   
   # Kill the process or change the port in docker-compose.yml
   ```

2. **MongoDB connection failed**:
   ```bash
   # Check if MongoDB container is running
   docker-compose ps
   
   # View MongoDB logs
   docker-compose logs mongo
   ```

3. **Application not updating** (Development):
   ```bash
   # Rebuild the containers
   docker-compose -f docker-compose.dev.yml up --build
   ```

4. **Permission issues**:
   ```bash
   # Fix ownership (Linux/Mac)
   sudo chown -R $USER:$USER .
   ```

### Useful Debugging Commands:
```bash
# Enter the app container
docker-compose exec app-dev sh

# Check container status
docker-compose ps

# View resource usage
docker stats

# Inspect a container
docker inspect <container_name>
```

## 📝 Development Workflow

1. **Start development environment**:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

2. **Make code changes** - The app will auto-reload thanks to NestJS watch mode

3. **View logs** to see changes:
   ```bash
   docker-compose -f docker-compose.dev.yml logs -f app-dev
   ```

4. **Test API endpoints** at http://localhost:3000/users

5. **Manage database** via Mongo Express at http://localhost:8081

## 🔄 Data Persistence

- MongoDB data is persisted using Docker volumes
- Data survives container restarts
- To reset database: `docker-compose down -v` (⚠️ This deletes all data)

## 🌐 Network Configuration

All services run on the same Docker network (`app-network`) allowing them to communicate using service names:
- App connects to MongoDB using `mongodb://mongo:27017`
- Mongo Express connects to MongoDB using `mongo:27017`

## 🎯 Quick Start Commands

```bash
# Development
docker-compose -f docker-compose.dev.yml up --build

# Production
docker-compose up --build

# Stop everything
docker-compose down
```
