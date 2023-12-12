
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles:"./src/main.ts",
      environment: "happy-dom",
      includeSource: ["src/**/*.{js,ts}"],
      include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
      coverage: {
        reporter: ["text", "html", "clover", "json"],
      },
    },
  })
);
