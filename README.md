# Express Vercel Starter

A simple Express.js application ready to deploy on Vercel.

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your app running locally.

### Deploy to Vercel

#### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI globally (if not already installed)
npm install -g vercel

# Deploy
vercel deploy

# Deploy to production
vercel --prod
```

#### Option 2: Using GitHub Integration

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically deploy on every push to main branch

## 📁 Project Structure

```
├── api/
│   └── index.ts          # Serverless function entry point
├── index.ts              # Local development server
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment configuration
└── .gitignore           # Git ignore rules
```

## 🛠 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript code
- `npm run start` - Start production server (for local testing)

## 📡 API Endpoints

- `GET /` - Welcome message
- `GET /api` - API endpoint
- `GET /health` - Health check endpoint

## 🔧 Configuration

### Vercel Configuration (`vercel.json`)

The app is configured to route all requests to the serverless function in `/api/index.ts`.

### TypeScript Configuration (`tsconfig.json`)

Configured with relaxed type checking for easier development and deployment.

## 📦 Dependencies

- **express** - Fast, unopinionated web framework for Node.js
- **typescript** - TypeScript compiler
- **tsx** - TypeScript execution and REPL for Node.js
- **@types/express** - TypeScript definitions for Express
- **@types/node** - TypeScript definitions for Node.js

## 🌟 Features

- ✅ TypeScript support
- ✅ Hot reload in development
- ✅ Ready for Vercel deployment
- ✅ Serverless function architecture
- ✅ Professional .gitignore
- ✅ Health check endpoint

## 📝 Notes

- The main application logic is in `/api/index.ts` for Vercel serverless deployment
- Local development uses `/index.ts` with a traditional Express server
- All routes are automatically proxied to the `/api` endpoint in production

## 🚀 Deployment Status

Your app is ready to deploy! Just run `vercel deploy` in your terminal.
