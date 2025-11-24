# PDF Comparison Application

A full-stack TypeScript application for comparing PDF files with side-by-side previews.

## Architecture

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Development**: Single command to run both frontend and backend concurrently

## Project Structure

```
.
├── client/           # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/           # Node.js backend
│   ├── src/
│   │   ├── index.ts    # Entry point
│   │   ├── app.ts      # Express app setup
│   │   └── config.ts   # Configuration
│   ├── dist/           # Compiled output
│   └── package.json
└── package.json      # Root package.json with dev scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm run install:all
```

This installs dependencies for the root, server, and client.

### Development

Run both frontend and backend with a single command:

```bash
npm run dev
```

This starts:
- Backend server on `http://localhost:3001`
- Frontend dev server on `http://localhost:5173`

Or run them separately:

```bash
npm run dev:server  # Backend only
npm run dev:client  # Frontend only
```

### Building for Production

```bash
npm run build
```

This builds both server and client.

### Running Production Build

```bash
cd server && npm start
```

## Debugging

### VSCode Debugging

Three debug configurations are available:

1. **Debug Server**: Launches the backend in debug mode
2. **Debug Client**: Opens Chrome with the frontend
3. **Debug Full Stack**: Runs both server and client debuggers (recommended)

Use the "Debug Full Stack" compound configuration for the best experience.

### Manual Debugging

Backend:
```bash
cd server
npm run dev
```

Frontend:
```bash
cd client
npm run dev
```

## API Endpoints

### Health Check
```
GET /api/health
```

Returns server status and timestamp.

## Environment Variables

### Server
- `PORT`: Server port (default: 3001)
- `CORS_ORIGIN`: Allowed CORS origin (default: http://localhost:5173)

## Design Principles

This project follows:

- **Grokking Simplicity**: Pure functions, data immutability, clear separation of actions/calculations/data
- **A Philosophy of Software Design**: Deep modules, information hiding, complexity minimization

## Technology Choices

- **TypeScript**: Type safety across the stack
- **Vite**: Fast development with HMR
- **Express**: Minimal, flexible backend framework
- **tsx**: Fast TypeScript execution for development
- **concurrently**: Run multiple npm scripts simultaneously

## Next Steps

- Implement PDF upload functionality
- Add PDF parsing and comparison logic
- Create side-by-side preview UI components
- Add annotation system
