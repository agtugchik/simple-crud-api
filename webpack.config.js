import { join, dirname } from "path";
import { fileURLToPath } from "url";
import nodeExternals from "webpack-node-externals";
import NodemonPlugin from "nodemon-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = {
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: "node",
  externals: [nodeExternals()],
  entry: join(__dirname, "./src/index.js"),
  // output: {
  //   filename: "main.js",
  //   path: join(__dirname, "dist"),
  // },
  output: {
    path: join(__dirname, "dist"),
    filename: "[name].bundle.js",
    // chunkLoading: "import",
    chunkFormat: "module",
    libraryTarget: "module",
  },
  experiments: { outputModule: true },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    node: "current",
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [new NodemonPlugin()],
};

export default exports;
