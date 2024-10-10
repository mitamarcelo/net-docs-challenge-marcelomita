import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
    include: ["src/spec/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: [
        "src/main.tsx",
        "src/styles/*.ts",
        "**/*.styles.ts",
        "**/*.style.ts",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
        "node_modules/**",
        "dist/**",
      ],
    },
  },
});
