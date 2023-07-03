import { createServer } from "http";
import Methods from "../helpers/methods";
import getHandler from "../modules/getHandler";
import postHandler from "../modules/postHandler";
import putHandler from "../modules/putHandler";
import deleteHandler from "../modules/deleteHandler";
import serverSideErrorHandler from "../modules/serverSideErrorHandler";

export const server = createServer((req, res) => {
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
