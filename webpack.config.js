import { merge } from "webpack-merge";
import baseConfig from "./webpack.config.base.js";
import devConfig from "./webpack.config.dev.js";
import prodConfig from "./webpack.config.prod.js";

const mode = process.argv
  .find((e) => e.startsWith("--mode="))
  .replace("--mode=", "");

const exports =
  mode === "development"
    ? merge(baseConfig, devConfig)
    : mode === "production"
    ? merge(baseConfig, prodConfig)
    : baseConfig;

export default exports;
