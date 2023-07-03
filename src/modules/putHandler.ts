import {
  getUserId,
  isUserIdValid,
  getUser,
  haveUserId,
  isUserObjectValid,
  updateUser,
} from "../helpers/userHelpers";
import { IncomingMessage, ServerResponse } from "http";
import db from "../helpers/db";
import notFoundhandler from "./notFoundHandler";

const putHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  if (haveUserId(req)) {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const userId = getUserId(req);
      const isValid = isUserIdValid(userId);
      const user = getUser(db, userId);
      const userObject = JSON.parse(data);
      const validData = isUserObjectValid(userObject);
      if (isValid && !user) {
        notFoundhandler(res, "User doesnt exist");
      } else if (!isValid || !validData) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end("Invalid User Id or Requsted Data");
      } else if (isValid && user && validData) {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const updatedUser = updateUser(db, userId, userObject);
        res.end(JSON.stringify(updatedUser));
      }
    });
  } else {
    notFoundhandler(res, "Non-existing PUT endpoint");
  }
};

export default putHandler;
