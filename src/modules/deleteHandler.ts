import { IncomingMessage, ServerResponse } from "http";

const deleteHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  }
) => {
  res.end(`${req.url}`);
};

export default deleteHandler;
