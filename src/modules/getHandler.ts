import { IncomingMessage, ServerResponse } from "http";

const getHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  // if (req.url === "/") {
  //   res.end("Hello to Simple CRUD API");
  // } else if (req.url === "/users") {
  //   res.end("Users");
  // }
  res.end(`${req.url}`);
};

export default getHandler;
