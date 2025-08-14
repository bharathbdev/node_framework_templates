# Express MVC Application

This Express.js application follows the **MVC (Model-View-Controller)** architecture pattern with a clean separation of concerns.

## 📁 Project Structure

```
src/
├── config/
│   └── database.js          # Database configuration
├── controllers/
│   └── userController.js    # HTTP request handlers
├── services/
│   └── userService.js       # Business logic layer
├── repositories/
│   └── userRepository.js    # Data access layer
├── models/
│   └── User.js              # Mongoose schemas
├── routes/
│   ├── index.js             # Home routes
│   └── users.js             # User API routes
└── middleware/
    └── errorHandler.js      # Error handling middleware
```

## 🔄 Request Flow

```
Request → Route → Controller → Service → Repository → Database
Response ← Route ← Controller ← Service ← Repository ← Database
```

### Flow Explanation:

1. **Route** receives the HTTP request
2. **Controller** handles the request and response
3. **Service** contains business logic and validation
4. **Repository** handles database operations
5. **Model** defines data structure and validation

## 🚀 API Endpoints

### User Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Get all users (with pagination) |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |
| GET | `/api/users/search?q=term` | Search users by name or email |

### Query Parameters for GET /api/users

- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `sort`: Sort field (default: createdAt)
- `order`: Sort order (asc/desc, default: desc)

## 📝 Example Usage

### Create User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25
}
```

### Get Users with Pagination
```bash
GET /api/users?page=1&limit=5&sort=name&order=asc
```

### Search Users
```bash
GET /api/users/search?q=john&page=1&limit=10
```

## 🛠️ Development Commands

```bash
# Start development server with auto-reload
npm run dev

# Start production server
npm start

# Install dependencies
npm install
```

## 🏗️ Architecture Benefits

### **Separation of Concerns**
- **Controllers**: Handle HTTP requests/responses only
- **Services**: Contain business logic and validation
- **Repositories**: Handle database operations
- **Models**: Define data structure

### **Maintainability**
- Easy to test individual layers
- Changes in one layer don't affect others
- Clear code organization

### **Scalability**
- Easy to add new features
- Simple to modify existing functionality
- Clean dependency injection

## 🔧 Configuration

### Environment Variables (.env)
```env
MONGODB_URI=mongodb://localhost:27017/myapp
PORT=3000
NODE_ENV=development
```

## 🧪 Testing

Each layer can be tested independently:
- **Unit tests** for services and repositories
- **Integration tests** for controllers
- **End-to-end tests** for complete API flows
