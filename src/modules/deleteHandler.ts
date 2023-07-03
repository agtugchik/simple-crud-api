import { IncomingMessage, ServerResponse } from "http";
import {
  haveUserId,
  getUser,
  getUserId,
  isUserIdValid,
  deleteUser,
} from "../helpers/userHelpers";
import db from "../helpers/db";
import notFoundhandler from "./notFoundHandler";

const deleteHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  if (haveUserId(req)) {
    const userId = getUserId(req);
    const isValid = isUserIdValid(userId);
    const user = getUser(db, userId);
    if (isValid && !user) {
      notFoundhandler(res, "User doesnt exist");
    }
    if (!isValid) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "text/plain");
      res.end("Invalid User Id");
    } else if (isValid && user) {
      deleteUser(db, userId);
      res.statusCode = 204;
      res.setHeader("Content-Type", "text/plain");
      res.end("User deleted");
    }
  } else {
    notFoundhandler(res, "Non-existing DELETE endpoint");
  }
};

export default deleteHandler;
