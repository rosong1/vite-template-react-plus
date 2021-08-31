import { UserConfigFn } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import reactJsx from "vite-react-jsx";
import { visualizer } from "rollup-plugin-visualizer";
const defineConfig: UserConfigFn = ({ command, mode }) => {
  const config = {
    plugins: [
      reactRefresh(),
      tsconfigPaths(),
      legacy({
        targets: ["ie >= 11"],
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      }),
      reactJsx(),
    ],
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, "index.html"),
    //   },
    // },
  };
  if (mode === "analyze") {
    config.plugins.push(
      visualizer({
        filename: "./node_modules/.cache/visualizer/stats.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }
  return config;
};

export default defineConfig;
