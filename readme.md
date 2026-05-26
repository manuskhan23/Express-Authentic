# express-authentic

Production-ready authentication & OAuth utility package for Express.js using TypeScript, ES Modules, JWT, bcrypt, and OAuth providers.

---

#Docs

https://express-authentic.vercel.app/

# Features

- JWT Authentication
- Password Hashing with bcrypt
- OAuth Provider Classes
- Google OAuth Provider
- Github OAuth Provider
- Facebook OAuth Provider
- Apple OAuth Provider
- Gmail OTP Provider
- Express Middleware Protection
- ES Modules Support
- TypeScript Support
- MVC Architecture
- Dist-only npm publishing

---

# Installation

## Install Package

```bash
npm install express-authentic
```

---

# Install Peer Dependencies

```bash
npm install express bcrypt jsonwebtoken nodemailer dotenv
```

---

# Quick Start

## Import Package

```ts
import {
  AuthService,
  TokenService,
  GoogleProvider,
  GithubProvider,
  FacebookProvider,
  AppleProvider,
  GmailProvider
} from "express-authentic";
```

---

# Project Structure

```txt
src/
├── config/
├── controllers/
├── middlewares/
├── providers/
│   ├── oauth/
│   └── mail/
├── routes/
├── services/
├── types/
├── utils/
├── app.ts
├── server.ts
└── index.ts
```

---

# AuthService

## Register User

```ts
import { AuthService } from "express-authentic";

const authService = new AuthService();

const user = await authService.register({
  email: "test@gmail.com",
  password: "123456"
});

console.log(user);
```

---

## Login User

```ts
const login = await authService.login({
  email: "test@gmail.com"
});

console.log(login);
```

---

# TokenService

## Generate JWT Token

```ts
import { TokenService } from "express-authentic";

const token = TokenService.generateToken({
  email: "user@gmail.com"
});

console.log(token);
```

---

## Verify JWT Token

```ts
const decoded = TokenService.verifyToken(token);

console.log(decoded);
```

---

# GoogleProvider

```ts
import { GoogleProvider } from "express-authentic";

const google = new GoogleProvider({
  clientId: "GOOGLE_CLIENT_ID",
  clientSecret: "GOOGLE_CLIENT_SECRET"
});
```

---

# GithubProvider

```ts
import { GithubProvider } from "express-authentic";

const github = new GithubProvider({
  clientId: "GITHUB_CLIENT_ID",
  clientSecret: "GITHUB_CLIENT_SECRET"
});
```

---

# FacebookProvider

```ts
import { FacebookProvider } from "express-authentic";

const facebook = new FacebookProvider({
  appId: "FACEBOOK_APP_ID",
  clientSecret: "FACEBOOK_CLIENT_SECRET"
});
```

---

# AppleProvider

```ts
import { AppleProvider } from "express-authentic";

const apple = new AppleProvider({
  clientId: "APPLE_CLIENT_ID",
  clientSecret: "APPLE_CLIENT_SECRET"
});
```

---

# GmailProvider

## Send OTP

```ts
import { GmailProvider } from "express-authentic";

const gmail = new GmailProvider({
  user: "your@gmail.com",
  pass: "your-app-password"
});

await gmail.sendOTP(
  "user@gmail.com",
  "123456"
);
```

---

# Express Middleware Example

```ts
import express from "express";
import { authMiddleware } from "express-authentic";

const app = express();

app.get(
  "/profile",
  authMiddleware,
  (req, res) => {
    res.json({
      success: true
    });
  }
);
```

---

# Scripts

## Development

```bash
npm run dev
```

---

## Build

```bash
npm run build
```

---

## Production

```bash
npm start
```

---

# TypeScript Build

```bash
npm run build
```

Compiled output will be generated inside:

```txt
dist/
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000
JWT_SECRET=supersecretkey
```

---

# OAuth Providers

## Supported Providers

| Provider  | Required Credentials |
| ---------- | ------------------- |
| Google     | clientId + clientSecret |
| Github     | clientId + clientSecret |
| Facebook   | appId + clientSecret |
| Apple      | clientId + clientSecret |

---

# Architecture

This package follows strict MVC architecture.

```txt
src/
├── controllers/
├── services/
├── providers/
├── middlewares/
├── routes/
├── utils/
├── config/
├── types/
├── app.ts
├── server.ts
└── index.ts
```

---

# TypeScript Rules

- Runtime code only inside `/src`
- Compiled JavaScript only inside `/dist`
- No mixed JS + TS runtime
- Types only inside `/types`
- No logic inside `.d.ts` files

---

# Build System

```json
{
  "rootDir": "./src",
  "outDir": "./dist"
}
```

---

# Example API Routes

## Register

```http
POST /api/auth/register
```

### Body

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

---

## Login

```http
POST /api/auth/login
```

### Body

```json
{
  "email": "test@gmail.com"
}
```

---

# Protected Route Example

```http
GET /api/auth/profile
```

### Headers

```txt
Authorization: Bearer YOUR_TOKEN
```

---

# NPM Publishing

Only the `dist/` folder is published.

```json
"files": [
  "dist"
]
```

---

---

# NPM Publishing

Only the `.env` file is published.

```
# =========================================
# SERVER CONFIG
# =========================================

PORT=3000

# =========================================
# JWT CONFIG
# =========================================

JWT_SECRET=your_super_secret_jwt_key

# =========================================
# GOOGLE OAUTH
# =========================================

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# =========================================
# GITHUB OAUTH
# =========================================

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# =========================================
# FACEBOOK OAUTH
# =========================================

FACEBOOK_APP_ID=your_facebook_app_id
FACEBOOK_CLIENT_SECRET=your_facebook_client_secret

# =========================================
# APPLE OAUTH
# =========================================

APPLE_CLIENT_ID=your_apple_client_id
APPLE_CLIENT_SECRET=your_apple_client_secret

# =========================================
# GMAIL PROVIDER
# =========================================

GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_gmail_app_password
```

---

# Roadmap

- Refresh Tokens
- OAuth Redirect Flow
- Session Management
- Redis Support
- Rate Limiting
- Email Verification
- Password Reset
- Multi-provider Login Linking
- OAuth Callback Handlers
- Better Error System

---

# Docs

Official documentation website is currently under development.

Until then:

- Read README examples
- Explore source code
- Use TypeScript IntelliSense

Because developers collectively decided documentation is something you write after surviving production incidents.

---

# License

MIT License

---

# Author

M Anus Khan

---

# Repository

https://github.com/manuskhan23/Express-Authentic

---

# Issues

https://github.com/manuskhan23/Express-Authentic/issues
