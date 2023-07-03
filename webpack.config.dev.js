import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import NodemonPlugin from "nodemon-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const exports = {
  plugins: [new NodemonPlugin(), new CleanWebpackPlugin()],
};

export default exports;
