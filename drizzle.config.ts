import { env } from "@/config/env/server";
import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./src/drizzle/migrations",
  schema: "./src/drizzle/schema.ts",
  strict: true,
  verbose: true,
  dialect: "postgresql",
  dbCredentials: {
    host: env.DB_HOST!,
    database: env.DB_NAME!,
    user: env.DB_USER!,
    password: env.DB_PASSWORD!,
    ssl: false,
  },
});
