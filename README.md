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

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
