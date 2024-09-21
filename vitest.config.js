import { defineConfig, loadEnv, mergeConfig } from "vite";
import viteConfig from "./vite.config";
import { config } from "dotenv";

config();

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      env: loadEnv("", process.cwd(), ""),
    },
  })
);
