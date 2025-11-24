export interface Config {
  port: number;
  corsOrigin: string;
}

export function getConfig(): Config {
  return {
    port: parseInt(process.env.PORT ?? "3001", 10),
    corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
  };
}
