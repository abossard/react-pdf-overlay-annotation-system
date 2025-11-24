# AI Coding Agent Instructions

## Project Overview
This is a full-stack TypeScript application for comparing PDF files. It consists of a React frontend (Vite) and a Node.js backend (Express).

## Architecture & Structure
- **Monorepo-style:**
  - `client/`: React 19 + Vite + TypeScript frontend.
  - `server/`: Node.js + Express + TypeScript backend.
- **Entry Points:**
  - Server: `server/src/index.ts` initializes the app. `server/src/app.ts` exports the `createApp` factory function.
  - Client: `client/src/main.tsx` mounts the React app. `client/src/App.tsx` is the main component.
- **Data Flow:**
  - Frontend makes direct HTTP requests to `http://localhost:3001` (CORS enabled).
  - Configuration is centralized in `server/src/config.ts`.

## Development Workflow
- **Install Dependencies:** Run `npm run install:all` from the root.
- **Start Dev Server:** Run `npm run dev` from the root to start both client and server concurrently.
  - Client: `http://localhost:5173`
  - Server: `http://localhost:3001`
- **Build:** Run `npm run build` from the root.

## Tech Stack & Conventions
- **Languages:** TypeScript (strict mode) everywhere.
- **Frontend:** React 19, Vite.
- **Backend:** Express, `tsx` for development.
- **Design Principles (MANDATORY):**
  - **Grokking Simplicity:** ALWAYS separate code into Actions (side effects), Calculations (pure logic), and Data. Keep business logic pure.
  - **A Philosophy of Software Design:** Build "Deep Modules" with simple interfaces. Hide implementation complexity and minimize information leakage.
- **Testing:** (Currently no tests, but structure supports it via `createApp` factory).

## Debugging
- **VS Code:** Use the "Debug Full Stack" launch configuration to debug both client and server simultaneously.
- **Logs:** Server logs to stdout.

## Key Files
- `server/src/app.ts`: Express app factory (dependency injection pattern).
- `server/src/config.ts`: Environment configuration.
- `client/src/App.tsx`: Main frontend logic.
- `.vscode/launch.json`: Debug configurations.
