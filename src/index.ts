import { createServer } from "http";
import Methods from "./types/methods";
import getHandler from "./modules/getHandler";
import postHandler from "./modules/postHandler";
import putHandler from "./modules/putHandler";
import deleteHandler from "./modules/deleteHandler";

const hostname = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT) || 3000;

const server = createServer((req, res) => {
  if (req.method === Methods.GET) {
    getHandler(req, res);
  } else if (req.method === Methods.POST) {
    postHandler(req, res);
  } else if (req.method === Methods.PUT) {
    putHandler(req, res);
  } else if (req.method === Methods.DELETE) {
    deleteHandler;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
