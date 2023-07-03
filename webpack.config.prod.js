import { join, dirname } from "path";
import { fileURLToPath } from "url";
import WebpackShellPluginNext from "webpack-shell-plugin-next";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = {
  plugins: [
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: [`node ${join(__dirname, "./dist/main.bundle.js")}`],
      },
    }),
  ],
};

export default exports;
