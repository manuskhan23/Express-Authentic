# 🔐 Express Authentic

A robust, production-ready authentication library for Express.js applications, built with TypeScript. Express Authentic provides a complete authentication solution including JWT-based auth, session management, and secure password handling, packaged as a reusable npm module.

## ✨ Features

- JWT-based authentication
- Secure password hashing with bcrypt
- Session management
- TypeScript support with full type definitions
- Middleware-ready architecture
- Easy integration with any Express app
- Published as an npm package
- MIT Licensed

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Language | TypeScript |
| Auth | JWT, bcrypt |
| Build | tsc |
| Registry | npm |

## 📁 Project Structure

```
Express-Authentic/
├── src/               # TypeScript source code
├── dist/              # Compiled JavaScript output
├── package.json       # Package configuration
├── tsconfig.json      # TypeScript configuration
├── publish.yaml       # Publishing workflow
└── LICENSE            # MIT License
```

## 🚀 Getting Started

### Installation

```bash
npm install express-authentic
```

### Usage

```typescript
import { authenticate, authorize } from 'express-authentic';
import express from 'express';

const app = express();

// Protect routes with authentication middleware
app.use('/api/protected', authenticate());

// Role-based authorization
app.use('/api/admin', authorize('admin'));
```

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/manuskhan23/Express-Authentic.git
cd Express-Authentic
```

2. Install dependencies:
```bash
npm install
```

3. Build the project:
```bash
npm run build
```

4. Run in development mode:
```bash
npm run dev
```

## 📸 Preview

> Coming soon

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center"><sub>Built with ❤️ by <a href="https://github.com/manuskhan23">manuskhan23</a></sub></p>