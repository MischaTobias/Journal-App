import { defineConfig, loadEnv, mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "happy-dom",
      env: loadEnv("", process.cwd(), ""),
    },
  })
);
