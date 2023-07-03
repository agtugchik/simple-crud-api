import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  entry: join(__dirname, "./src/index.ts"),
  output: {
    path: join(__dirname, "dist"),
    filename: "[name].bundle.js",
    chunkFormat: "module",
    libraryTarget: "module",
  },
  experiments: { outputModule: true },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },
};

export default exports;
