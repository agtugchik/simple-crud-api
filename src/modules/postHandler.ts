import { IncomingMessage, ServerResponse } from "http";

const postHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  res.end(`${req.url}`);
};

export default postHandler;
