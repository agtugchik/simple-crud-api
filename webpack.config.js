import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import nodeExternals from "webpack-node-externals";
import NodemonPlugin from "nodemon-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  externals: [nodeExternals()],
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
  plugins: [new NodemonPlugin(), new CleanWebpackPlugin()],
};

export default exports;
