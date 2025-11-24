import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import type { Config } from "./config.js";

export function createApp(config: Config): Express {
  const app = express();

  app.use(cors({ origin: config.corsOrigin }));
  app.use(express.json());

  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return app;
}
