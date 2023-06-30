import { IncomingMessage, ServerResponse } from "http";
import { v4 } from "uuid";
import { isUserObjectValid } from "../helpers/userHelpers";
import db from "../helpers/db";
import { userDb } from "../types/dbTypes";

const postHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  if (req.url === "/users") {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const userObject = JSON.parse(data);
      const validData = isUserObjectValid(userObject);
      if (validData) {
        const newUser = new Object(userObject) as userDb;
        newUser.id = v4();
        db.push(newUser);
        res.statusCode = 201;
        res.setHeader("Content-Type", "text/plain");
        res.end(JSON.stringify(newUser));
      } else {
        res.statusCode = 400;
        res.setHeader("Content-Type", "text/plain");
        res.end(
          "User have to contain username[string], age[number] and hobbies[Array<string>] props"
        );
      }
    });
  }
};

export default postHandler;
