import { IncomingMessage, ServerResponse } from "http";

const notFoundhandler = (
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  },
  msg: string
) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end(msg);
};

export default notFoundhandler;
