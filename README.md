# Task Manager REST API

A RESTful Task Manager API built with Node.js, Express.js, MongoDB, and Mongoose. The API includes JWT-based authentication, password hashing, protected task management, validation, and centralized error handling.

## Features

- User registration and login
- Password hashing with bcryptjs
- JWT-based authentication
- Protected task routes
- Create, read, update, and delete tasks
- User-specific task access
- Request validation
- Centralized error handling
- MongoDB database integration with Mongoose
- Environment-based configuration
- Modular project structure

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- Nodemon

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Get all user's tasks |
| GET | `/api/tasks/:id` | Get a specific task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

All task endpoints require JWT authentication.

## Project Structure

```text
TaskApi/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── taskController.js
│
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
├── utils/
│   └── AppError.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
