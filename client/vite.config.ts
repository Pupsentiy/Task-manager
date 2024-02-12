import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), tsconfigPaths()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  css: {
    modules: {
      generateScopedName: "[name]_[local]_[hash:base64:4]",
    },
  },
});