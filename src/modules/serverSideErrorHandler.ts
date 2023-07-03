import { IncomingMessage, ServerResponse } from "http";

const serverSideErrorHandler = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage> & {
    req: IncomingMessage;
  },
  func: (
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage> & {
      req: IncomingMessage;
    }
  ) => void
) => {
  try {
    func(req, res);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end(`Server Side Error: ${(e as Error).message}`);
  }
};

export default serverSideErrorHandler;
