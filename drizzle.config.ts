import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/db/schema",
  out: "./drizzle",
  dialect: "sqlite",

  dbCredentials: {
    url: "./sqlite.db",
  },
});
