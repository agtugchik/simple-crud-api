import { createServer } from "http";
import Methods from "./helpers/methods";
import getHandler from "./modules/getHandler";
import postHandler from "./modules/postHandler";
import putHandler from "./modules/putHandler";
import deleteHandler from "./modules/deleteHandler";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { configType } from "./types/configType";
import serverSideErrorHandler from "./modules/serverSideErrorHandler";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "../.env");
const config = dotenv.config({ path: envPath });

const hostname = (config.parsed as configType).HOST || "127.0.0.1";
const port = Number((config.parsed as configType).PORT) || 3000;

const server = createServer((req, res) => {
  if (req.method === Methods.GET) {
    serverSideErrorHandler(req, res, getHandler);
  } else if (req.method === Methods.POST) {
    serverSideErrorHandler(req, res, postHandler);
  } else if (req.method === Methods.PUT) {
    serverSideErrorHandler(req, res, putHandler);
  } else if (req.method === Methods.DELETE) {
    serverSideErrorHandler(req, res, deleteHandler);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
