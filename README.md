# 🚀 Node.js Framework Templates

This repository contains complete Node.js application templates with different frameworks and architectures, including Docker containerization.

## 📁 Repository Structure

```
node_framework_templates/
├── node_express/         # Express.js MVC Application
│   └── myapp/
├── node_nest/           # NestJS Application
│   └── myapp/
└── readme               # This file
```

---

## 🚀 **Express.js Application (MVC Architecture)**

### **1. Setup Express Generator:**
```bash
# Install Express Generator globally
npm i -g express-generator

# Create Express app with EJS templating
express --view=ejs myapp

# Navigate to app directory
cd myapp

# Install dependencies
npm install

# Install additional dependencies for MVC setup
npm install mongoose dotenv
npm install --save-dev nodemon
```

### **2. Development Scripts:**
```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start
```

### **3. Docker Commands for Express:**
```bash

# Build and start production environment
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

### **Express Project Structure:**
```
node_express/myapp/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB configuration
│   ├── controllers/
│   │   └── userController.js    # HTTP request handlers
│   ├── services/
│   │   └── userService.js       # Business logic layer
│   ├── repositories/
│   │   └── userRepository.js    # Data access layer
│   ├── models/
│   │   └── User.js              # Mongoose schemas
│   ├── routes/
│   │   ├── index.js             # Home routes
│   │   └── users.js             # User API routes
│   └── middleware/
│       └── errorHandler.js      # Error handling middleware
├── docker-compose.yml           # Production Docker setup
├── docker-compose.dev.yml       # Development Docker setup
├── Dockerfile                   # Production container
├── Dockerfile.dev               # Development container
└── package.json
```

### **Express API Endpoints:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users (with pagination) |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |
| GET | `/api/users/search?q=term` | Search users by name or email |

---

## 🚀 **NestJS Application**

### **1. Setup NestJS:**
```bash
# Install NestJS CLI globally
npm i -g @nestjs/cli

# Create new NestJS project
nest new myapp

# Navigate to app directory
cd myapp

# Install MongoDB dependencies
npm install @nestjs/mongoose mongoose

# Install validation dependencies
npm install class-validator class-transformer
```

### **2. Generate NestJS Components:**
```bash
# Generate user module
nest generate module user

# Generate user controller
nest generate controller user

# Generate user service
nest generate service user

# Alternative short syntax:
nest g module user
nest g controller user
nest g service user
```

### **3. Development Scripts:**
```bash
# Start development server with watch mode
npm run start:dev

# Start production server
npm run start:prod

# Build the application
npm run build

# Run tests
npm run test

# Run e2e tests
npm run test:e2e
```

### **4. Docker Commands for NestJS:**
```bash


# Build and start production environment
docker-compose up --build

# Run in background
docker-compose up -d --build

# Stop services
docker-compose down

# View logs
docker-compose logs -f
```

### **NestJS Project Structure:**
```
node_nest/myapp/
├── src/
│   ├── user/
│   │   ├── dto/
│   │   │   └── create-user.dto.ts    # Data Transfer Objects
│   │   ├── schemas/
│   │   │   └── user.schema.ts        # MongoDB schema
│   │   ├── user.controller.ts        # HTTP request handlers
│   │   ├── user.service.ts           # Business logic
│   │   └── user.module.ts            # Module configuration
│   ├── app.module.ts                 # Main app module
│   └── main.ts                       # Bootstrap application
├── docker-compose.yml                # Production Docker setup
├── docker-compose.dev.yml            # Development Docker setup
├── Dockerfile                        # Production container
├── Dockerfile.dev                    # Development container
└── package.json
```

### **NestJS API Endpoints:**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Create a new user |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| PUT | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |


## 🌐 **Access URLs:**

### **Express App:**
- **App**: http://localhost:3000
- **API**: http://localhost:3000/api/users
- **Mongo Express**: http://localhost:8081

### **NestJS App:**
- **App**: http://localhost:3000
- **API**: http://localhost:3000/users
- **Mongo Express**: http://localhost:8081

### **Database Access:**
- **MongoDB**: mongodb://localhost:27017
- **Mongo Express Login**: admin / admin123

