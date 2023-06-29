import { IncomingMessage, ServerResponse } from "http";

const putHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  res.end(`${req.url}`);
};

export default putHandler;
