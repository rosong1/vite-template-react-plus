import { UserConfigFn } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";
import tsconfigPaths from "vite-tsconfig-paths";
import reactJsx from "vite-react-jsx";
import { visualizer } from "rollup-plugin-visualizer";
import checker from "vite-plugin-checker";
import { resolve } from "path";

// postcss
import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

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
      checker({ typescript: true }),
    ],
    resolve: {
      alias: {
        "@": resolve("./src"),
      }
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer,
          pxtorem({
            rootValue: 37.5,
            propList: ["*"],
          })
        ]
      }
    }
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
