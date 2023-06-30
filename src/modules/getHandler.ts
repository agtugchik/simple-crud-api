import { IncomingMessage, ServerResponse } from "http";
import db from "../helpers/db";
import {
  haveUserId,
  getUserId,
  isUserIdValid,
  getUser,
} from "../helpers/userHelpers";
import notFoundhandler from "./notFoundHandler";

const getHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Welcome to Simple CRUD API");
  } else if (req.url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(db));
  } else if (haveUserId(req)) {
    const userId = getUserId(req);
    const isValid = isUserIdValid(userId);
    const user = getUser(db, userId);
    if (isValid && user) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(user));
    } else if (isValid && !user) {
      notFoundhandler(res, "User doesnt exist");
    } else if (!isValid && !user) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid User Id");
    }
  } else {
    notFoundhandler(res, "Non-existing GET endpoint");
  }
};

export default getHandler;
