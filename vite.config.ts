import { defineConfig } from "vite";
import rakkas from "rakkasjs/vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    include: [
      "@preact/compat",
      "@preact/compat/client",
      "@preact/compat/jsx-dev-runtime",
    ],
  },
  plugins: [
    tsconfigPaths(),
    rakkas(),
    {
      name: "replace-react-with-preact",
      enforce: "pre",
      resolveId(id, importer, options) {
        if (options.ssr) return;

        if (id.match(/^react(?:-dom)?(?:\/|$)/)) {
          return this.resolve(
            id.replace(/^react(?:-dom)?/, "@preact/compat"),
            importer,
            options
          );
        }
      },
    },
  ],
});
